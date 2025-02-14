import isPlainObject from 'lodash/isPlainObject'
import { createHash } from 'crypto'
import Queue from 'bull'
import connection from '../connection'
import { Collection, Token, Trait, TraitToken } from '../model'
import { JobData } from '../jobs/compute-traits'
import { computeRarityRank } from '../jobs/rarity-ranker'

type TraitValueMap = Map<string, bigint>

const hash = (str: string) => {
    return createHash('sha1').update(str).digest('hex')
}

export default async (job: Queue.Job<JobData>, done: Queue.DoneCallback) => {
    if (!job.data.collectionId) {
        done(new Error('Collection ID not provided.'))
    }

    if (!connection.isInitialized) {
        await connection.initialize().catch(() => {
            done(new Error('Failed to initialize connection'))
        })
    }

    connection.manager.transaction('READ UNCOMMITTED', async (em) => {
        const traitTypeMap = new Map<string, TraitValueMap>()
        const tokenTraitMap = new Map<string, string[]>()

        const start = new Date()

        const { collectionId } = job.data satisfies JobData

        const tokens = await em
            .getRepository(Token)
            .createQueryBuilder('token')
            .select('token.id')
            .addSelect('token.metadata')
            .addSelect('token.supply')
            .where('token.collection = :collectionId', { collectionId })
            .andWhere('token.supply > 0')
            .getMany()

        await em.query(`DELETE FROM trait_token USING trait WHERE trait.id = trait_token.trait_id AND trait.collection_id = $1`, [
            collectionId,
        ])

        await em.query(`DELETE FROM trait WHERE collection_id = $1`, [collectionId])

        tokens.forEach((token) => {
            if (!token.metadata || !token.metadata.attributes || !isPlainObject(token.metadata.attributes)) return
            const attributes = token.metadata.attributes as Record<string, { value: string; display_name?: string } | string>
            Object.entries(attributes).forEach(([traitType, data]) => {
                let value = data as string
                if (typeof data === 'object') {
                    value = data.value
                    if (data.display_name) {
                        traitType = data.display_name
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

                tokenTraitMap.set(token.id, [
                    ...(tokenTraitMap.get(token.id) || []),
                    hash(`${collectionId}-${traitType}-${value}`),
                ])
            })
        })

        if (!traitTypeMap.size) {
            await job.log(`No traits found for collection ${collectionId}`)
            done()

            return
        }

        await job.log(`Found ${traitTypeMap.size} trait types`)
        const traitsToSave: Trait[] = []

        traitTypeMap.forEach((traitValueMap, traitType) => {
            traitValueMap.forEach((count, value) => {
                traitsToSave.push(
                    new Trait({
                        id: hash(`${collectionId}-${traitType}-${value}`),
                        collection: new Collection({ id: collectionId }),
                        traitType,
                        value,
                        count,
                    })
                )
            })
        })

        await job.log(`Saving ${traitsToSave.length} traits`)
        await em.save(Trait, traitsToSave as any, { chunk: 1000 })
        const traitTokensToSave: TraitToken[] = []

        tokenTraitMap.forEach((traits, tokenId) => {
            if (!traits.length) return
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

        if (traitTokensToSave.length) {
            await job.log(`Saving ${traitsToSave.length} token traits`)
            await em.save(TraitToken, traitTokensToSave as any, { chunk: 1000 })
        }

        await computeRarityRank(collectionId)

        done(null, { timeElapsed: new Date().getTime() - start.getTime() })
    })
}
