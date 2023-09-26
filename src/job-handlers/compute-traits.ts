/* eslint-disable no-console */
import isPlainObject from 'lodash/isPlainObject'
import { createHash } from 'crypto'
import connection from '../connection'
import { Collection, Token, Trait, TraitToken } from '../model'
import { traitsQueue, JobData } from '../jobs/compute-traits'

type TraitValueMap = Map<string, { count: bigint }>

const hash = (str: string) => {
    return createHash('sha1').update(str).digest('hex')
}

// eslint-disable-next-line sonarjs/cognitive-complexity
traitsQueue.process(async (job, done) => {
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
        .leftJoinAndMapMany('token.traits', TraitToken, 'traitToken', 'traitToken.token = token.id')
        .where('token.collection = :collectionId', { collectionId })
        .getMany()

    const traits = await em
        .getRepository(Trait)
        .createQueryBuilder('trait')
        .where('trait.collection = :collectionId', { collectionId })
        .getMany()

    tokens.forEach((token) => {
        if (!token.metadata || !token.metadata.attributes || !isPlainObject(token.metadata.attributes)) return
        const attributes = token.metadata.attributes as Record<string, { value: string }>
        Object.entries(attributes).forEach(([traitType, { value }]) => {
            if (!value) return

            if (!traitTypeMap.has(traitType)) {
                traitTypeMap.set(traitType, new Map())
            }
            const tType = traitTypeMap.get(traitType) as TraitValueMap
            if (!tType.has(value)) {
                tType.set(value, { count: 0n })
            }
            const traitValue = tType.get(value) as TraitValueMap extends Map<string, infer V> ? V : never
            traitValue.count += token.supply

            tokenTraitMap.set(token.id, [...(tokenTraitMap.get(token.id) || []), `${traitType}:${value}`])
        })
    })

    if (!traitTypeMap.size) {
        console.log(`No traits found for collection ${collectionId}`)
        done()

        return
    }

    const traitsToSave: Trait[] = []
    const traitsToDelete: Trait[] = []
    const traitsToUpdate: Trait[] = []

    traitTypeMap.forEach((traitValueMap, traitType) => {
        traitValueMap.forEach((traitValue, value) => {
            const trait = traits.find((t) => t.id === hash(`${collectionId}-${traitType}-${value}`))
            if (!trait) {
                traitsToSave.push(
                    new Trait({
                        id: hash(`${collectionId}-${traitType}-${value}`),
                        collection: new Collection({ id: collectionId }),
                        traitType,
                        value,
                        count: traitValue.count,
                    })
                )
            } else if (trait.count !== traitValue.count) {
                trait.count = traitValue.count
                traitsToUpdate.push(trait)
            }
        })
    })

    traits.forEach((trait) => {
        if (
            !traitTypeMap.has(trait.traitType) ||
            !traitTypeMap.get(trait.traitType)?.has(trait.value) ||
            trait.id !== hash(`${collectionId}-${trait.traitType}-${trait.value}`)
        ) {
            traitsToDelete.push(trait)
        }
    })

    await em.upsert(Trait, [...traitsToSave, ...traitsToUpdate] as any, ['id'])

    const traitTokensToSave: TraitToken[] = []
    const traitTokensToDelete: TraitToken[] = []

    tokenTraitMap.forEach((_traits, _tokenId) => {
        if (!_traits.length) return

        const token = tokens.find((t) => t.id === _tokenId)

        _traits.forEach((t) => {
            const [traitType, value] = t.split(':')

            if (token?.traits.length) {
                for (let i = 0; i < token.traits.length; i += 1) {
                    const traitToken = token.traits[i]
                    if (traitToken.id === hash(`${collectionId}-${traitType}-${value}-${_tokenId}`)) {
                        return
                    }

                    if (
                        !_traits.some((tt) => {
                            const splitted = tt.split(':')
                            return traitToken.id === hash(`${collectionId}-${splitted[0]}-${splitted[1]}-${_tokenId}`)
                        })
                    ) {
                        traitTokensToDelete.push(new TraitToken({ id: traitToken.id }))
                        return
                    }
                }
            }

            traitTokensToSave.push(
                new TraitToken({
                    id: hash(`${collectionId}-${traitType}-${value}-${_tokenId}`),
                    trait: new Trait({ id: hash(`${collectionId}-${traitType}-${value}`) }),
                    token: new Token({ id: _tokenId }),
                })
            )
        })
    })

    console.log(
        `Saving TraitToken ${traitTokensToSave.length} and deleting ${traitTokensToDelete.length} in collection ${collectionId}`
    )
    if (traitTokensToSave.length) {
        await em
            .createQueryBuilder()
            .insert()
            .into(TraitToken)
            .values(traitTokensToSave as any)
            .orIgnore()
            .execute()
    }
    if (traitTokensToDelete.length) {
        await em.remove(traitTokensToDelete)
    }

    if (traitsToDelete.length) {
        await em
            .createQueryBuilder()
            .delete()
            .from(TraitToken)
            .where('trait_id IN (:...traitsToDelete)', { traitsToDelete: traitsToDelete.map((t) => t.id) })
            .execute()

        await em.remove(traitsToDelete)
    }

    done(null, { timeElapsed: new Date().getTime() - start.getTime(), collectionId })
})
