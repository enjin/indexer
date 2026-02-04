import { connectionManager } from '~/contexts'
import { Collection, Token, Trait, TraitToken } from '~/model'
import { isPlainObject } from 'lodash'
import { Job } from 'bullmq'
import { hash } from '~/worker/utils'
import { QueueUtils } from '~/queue'

type TraitValueMap = Map<string, bigint>

export async function computeTraits(job: Job, id: string) {
    const em = await connectionManager()

    await job.updateProgress(5)

    const traitTypeMap = new Map<string, TraitValueMap>()
    const tokenTraitMap = new Map<string, string[]>()
    const displayValueMap = new Map<string, string>()

    const tokens = await em
        .getRepository(Token)
        .createQueryBuilder('token')
        .select('token.id')
        .addSelect('token.metadata')
        .addSelect('token.supply')
        .where('token.collection = :id', { id })
        .andWhere('token.supply > 0')
        .getMany()

    await job.updateProgress(20)

    await em.query(
        `DELETE FROM trait_token USING trait WHERE trait.id = trait_token.trait_id AND trait.collection_id = $1`,
        [id]
    )

    await em.query(`DELETE FROM trait WHERE collection_id = $1`, [id])

    await job.updateProgress(30)

    tokens.forEach((token) => {
        if (!token.metadata || !token.metadata.attributes || !isPlainObject(token.metadata.attributes)) return
        const attributes = token.metadata.attributes as Record<
            string,
            { value: string; display_name?: string; display_value?: string } | string
        >
        Object.entries(attributes).forEach(([traitType, data]) => {
            let value = data as string
            if (typeof data === 'object') {
                value = data.value
                if (data.display_name) {
                    traitType = data.display_name
                }
                if (data.display_value) {
                    displayValueMap.set(value, data.display_value)
                }
            }

            if (!value) return

            value = value.toString()

            if (!traitTypeMap.has(traitType)) {
                traitTypeMap.set(traitType, new Map())
            }

            const tType = traitTypeMap.get(traitType) as TraitValueMap
            if (tType.has(value)) {
                tType.set(value, (tType.get(value) as bigint) + token.supply)
            } else {
                tType.set(value, token.supply)
            }

            tokenTraitMap.set(token.id, [...(tokenTraitMap.get(token.id) || []), hash(`${id}-${traitType}-${value}`)])
        })
    })

    await job.updateProgress(50)

    if (!traitTypeMap.size) {
        await job.log(`No traits found for collection ${id}`)
        await job.updateProgress(100)
        return
    }

    await job.log(`Found ${traitTypeMap.size} trait types`)
    const traitsToSave: Trait[] = []

    traitTypeMap.forEach((traitValueMap, traitType) => {
        traitValueMap.forEach((count, value) => {
            traitsToSave.push(
                new Trait({
                    id: hash(`${id}-${traitType}-${value}`),
                    collection: new Collection({ id: id }),
                    traitType,
                    value,
                    displayValue: displayValueMap.get(value) ?? undefined,
                    count,
                })
            )
        })
    })

    await job.updateProgress(60)

    await job.log(`Saving ${traitsToSave.length} traits`)
    await em.save(Trait, traitsToSave, { chunk: 1000 })

    await job.updateProgress(75)

    const traitTokensToSave: TraitToken[] = []
    const validTokenIds = new Set(tokens.map((t) => t.id))

    tokenTraitMap.forEach((traits, tokenId) => {
        if (!traits.length) return
        // Only create trait_token records for tokens that were processed (have supply > 0)
        if (!validTokenIds.has(tokenId)) return

        traits.forEach((trait) => {
            traitTokensToSave.push(
                new TraitToken({
                    id: hash(`${trait}-${tokenId}`),
                    trait: new Trait({ id: trait }),
                    token: new Token({ id: tokenId }),
                })
            )
        })
    })

    await job.updateProgress(85)

    if (traitTokensToSave.length) {
        await job.log(`Saving ${traitsToSave.length} token traits`)
        await em.save(TraitToken, traitTokensToSave, { chunk: 1000 })
    }

    await job.updateProgress(95)

    // delay to avoid rollback issue on fork
    QueueUtils.dispatchComputeRarity({ id })

    await job.updateProgress(100)
}
