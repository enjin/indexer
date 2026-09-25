import { connectionManager } from '~/contexts'
import { Collection, Token, Trait, TraitToken } from '~/model'
import { Job } from 'bullmq'
import { hash } from '~/worker/utils'
import { QueueUtils } from '~/queue'
import { extractTokenTraits, tokenBatches } from './trait-utils'

type TraitValueMap = Map<string, bigint>

const WRITE_BATCH_SIZE = 1000

export async function computeTraits(job: Job, id: string) {
    const em = await connectionManager()

    await job.updateProgress(5)

    const { traitTypeCount, savedTokenTraits } = await em.transaction('REPEATABLE READ', async (txEm) => {
        const traitTypeMap = new Map<string, TraitValueMap>()
        const displayValueMap = new Map<string, string>()
        const displayTypeMap = new Map<string, string>()
        let tokenCount = 0

        for await (const tokens of tokenBatches(txEm, id)) {
            tokenCount += tokens.length

            tokens.forEach((token) => {
                extractTokenTraits(token, id).forEach(
                    ({ id: traitId, traitType, value, displayType, displayValue }) => {
                        if (displayType) displayTypeMap.set(traitType, displayType)
                        if (displayValue) displayValueMap.set(traitId, displayValue)

                        if (!traitTypeMap.has(traitType)) {
                            traitTypeMap.set(traitType, new Map())
                        }

                        const traitValues = traitTypeMap.get(traitType) as TraitValueMap
                        traitValues.set(value, (traitValues.get(value) ?? 0n) + token.supply)
                    }
                )
            })
        }

        await job.log(`Scanned ${tokenCount} tokens for collection ${id}`)
        await job.updateProgress(20)

        await txEm.query(
            `DELETE FROM trait_token USING trait WHERE trait.id = trait_token.trait_id AND trait.collection_id = $1`,
            [id]
        )
        await txEm.query(`DELETE FROM trait WHERE collection_id = $1`, [id])
        await job.updateProgress(30)

        if (traitTypeMap.size) await job.log(`Found ${traitTypeMap.size} trait types`)
        const traitsToSave: Trait[] = []

        traitTypeMap.forEach((traitValueMap, traitType) => {
            traitValueMap.forEach((count, value) => {
                const traitId = hash(`${id}-${traitType}-${value}`)
                traitsToSave.push(
                    new Trait({
                        id: traitId,
                        collection: new Collection({ id: id }),
                        traitType,
                        value,
                        displayType: displayTypeMap.get(traitType) ?? undefined,
                        displayValue: displayValueMap.get(traitId) ?? undefined,
                        count,
                    })
                )
            })
        })
        await job.updateProgress(60)

        if (traitsToSave.length) {
            await job.log(`Saving ${traitsToSave.length} traits`)
            await txEm.save(Trait, traitsToSave, { chunk: 1000 })
        }

        await job.updateProgress(75)

        const remainingTraitCounts = new Map(traitsToSave.map((trait) => [trait.id, trait.count]))
        let processedTokens = 0
        let savedTokenTraits = 0
        let collectionChanged = false

        for await (const tokens of tokenBatches(txEm, id)) {
            const traitTokensToSave: TraitToken[] = []

            tokens.forEach((token) => {
                const traitIds = new Set<string>()

                extractTokenTraits(token, id).forEach((trait) => {
                    const remainingCount = remainingTraitCounts.get(trait.id)
                    if (remainingCount === undefined) {
                        collectionChanged = true
                        return
                    }

                    remainingTraitCounts.set(trait.id, remainingCount - token.supply)
                    traitIds.add(trait.id)
                })

                traitIds.forEach((traitId) => {
                    traitTokensToSave.push(
                        new TraitToken({
                            id: hash(`${traitId}-${token.id}`),
                            trait: new Trait({ id: traitId }),
                            token: new Token({ id: token.id }),
                        })
                    )
                })
            })

            for (let offset = 0; offset < traitTokensToSave.length; offset += WRITE_BATCH_SIZE) {
                const insertBatch = traitTokensToSave.slice(offset, offset + WRITE_BATCH_SIZE).map((traitToken) => ({
                    id: traitToken.id,
                    trait: { id: traitToken.trait.id },
                    token: { id: traitToken.token.id },
                }))
                await txEm.insert(TraitToken, insertBatch)
            }

            processedTokens += tokens.length
            savedTokenTraits += traitTokensToSave.length
            const relationProgress = tokenCount ? Math.floor((processedTokens / tokenCount) * 20) : 20
            await job.updateProgress(Math.min(95, 75 + relationProgress))
        }

        for (const count of remainingTraitCounts.values()) {
            if (count !== 0n) {
                collectionChanged = true
                break
            }
        }

        if (collectionChanged) {
            throw new Error(`Collection ${id} changed while computing traits; retrying from a fresh snapshot`)
        }

        return { traitTypeCount: traitTypeMap.size, savedTokenTraits }
    })

    if (!traitTypeCount) {
        await job.log(`No traits found for collection ${id}`)
        await job.updateProgress(100)
        return
    }

    await job.log(`Saved ${savedTokenTraits} token traits`)
    await job.updateProgress(95)

    // delay to avoid rollback issue on fork
    QueueUtils.dispatchComputeRarity({ id })

    await job.updateProgress(100)
}
