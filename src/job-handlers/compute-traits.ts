/* eslint-disable no-console */
import isPlainObject from 'lodash/isPlainObject'
import { createHash } from 'crypto'
import Queue from 'bull'
import connection from '../connection'
import { Collection, Token, Trait, TraitToken } from '../model'
import { JobData } from '../jobs/compute-traits'

type TraitValueMap = Map<string, bigint>

const hash = (str: string) => {
    return createHash('sha1').update(str).digest('hex')
}

// eslint-disable-next-line sonarjs/cognitive-complexity
export default async (job: Queue.Job<JobData>, done: Queue.DoneCallback) => {
    if (!job.data.collectionId) {
        throw new Error('Collection ID not provided.')
    }

    console.log(`Processing traits job ${job.id} for collection ${job.data.collectionId}`)

    if (!connection.isInitialized) {
        await connection.initialize().catch((err) => {
            throw err
        })
    }

    const em = connection.manager

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
        .getMany()

    await em.query(`DELETE FROM trait_token USING trait WHERE trait.id = trait_token.trait_id AND trait.collection_id = $1`, [
        collectionId,
    ])

    await em.query(`DELETE FROM trait WHERE collection_id = $1`, [collectionId])

    tokens.forEach((token) => {
        if (!token.metadata || !token.metadata.attributes || !isPlainObject(token.metadata.attributes)) return
        const attributes = token.metadata.attributes as Record<string, { value: string }>
        Object.entries(attributes).forEach(([traitType, { value }]) => {
            if (!value) return

            if (!traitTypeMap.has(traitType)) {
                traitTypeMap.set(traitType, new Map())
            }
            const tType = traitTypeMap.get(traitType) as TraitValueMap
            if (tType.has(value)) {
                tType.set(value, (tType.get(value) as bigint) + token.supply)
            } else {
                tType.set(value, token.supply)
            }

            tokenTraitMap.set(token.id, [...(tokenTraitMap.get(token.id) || []), `${collectionId}-${traitType}-${value}`])
        })
    })

    if (!traitTypeMap.size) {
        console.log(`No traits found for collection ${collectionId}`)
        done()

        return
    }

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

    await em.insert(Trait, traitsToSave as any)

    const traitTokensToSave: TraitToken[] = []

    tokenTraitMap.forEach((traits, tokenId) => {
        if (!traits.length) return
        traits.forEach((trait) => {
            traitTokensToSave.push(
                new TraitToken({
                    id: hash(`${trait}-${tokenId}`),
                    trait: new Trait({ id: hash(trait) }),
                    token: new Token({ id: tokenId }),
                })
            )
        })
    })

    if (traitTokensToSave.length) {
        await em.insert(TraitToken, traitTokensToSave as any)
    }

    done(null, { timeElapsed: new Date().getTime() - start.getTime(), traits: traitsToSave.length })
}
