/* eslint-disable max-len */
import Queue from 'bull'
import isPlainObject from 'lodash/isPlainObject'
import connection from '../connection'
import { Collection, Token, Trait, TraitToken } from '../model'

type JobData = { collectionId: string }
type TraitValueMap = Map<string, { count: number }>

const traitsQueue = new Queue<JobData>('traitsQueue', {
    defaultJobOptions: { delay: 12000, attempts: 2, removeOnComplete: { age: 600, count: 2000 } },
})

const computeTraits = async (collectionId: string) => {
    traitsQueue.add({ collectionId })
}

// eslint-disable-next-line sonarjs/cognitive-complexity
traitsQueue.process(async (job, done) => {
    if (!job.data.collectionId) {
        throw new Error('Collection ID not provided.')
    }
    console.log(`Processing job ${job.id} for collection ${job.data.collectionId}`)
    if (!connection.isInitialized) {
        await connection.initialize()
    }

    const em = connection.manager

    const traitTypeMap = new Map<string, TraitValueMap>()
    const tokenTraitMap = new Map<string, string[]>()

    const traitsTokenToDelete: TraitToken[] = []

    const start = new Date()

    const { collectionId } = job.data satisfies JobData

    console.log(`Starting trait computation for collection ${collectionId} at ${start}`)

    const tokens = await em
        .getRepository(Token)
        .createQueryBuilder('token')
        .select('token.id')
        .addSelect('token.metadata')
        .leftJoinAndMapMany('token.traits', TraitToken, 'traitToken', 'traitToken.token = token.id')
        .where('token.collection = :collectionId', { collectionId })
        .getMany()

    const traits = await em
        .getRepository(Trait)
        .createQueryBuilder('trait')
        .select('trait.*')
        .where('trait.collection = :collectionId', { collectionId })
        .getMany()

    // fetch all traits for this collection
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
                tType.set(value, { count: 0 })
            }
            const traitValue = tType.get(value) as TraitValueMap extends Map<string, infer V> ? V : never
            traitValue.count += 1

            tokenTraitMap.set(token.id, [...(tokenTraitMap.get(token.id) || []), `${traitType}:${value}`])
        })

        // check if token has same traits
        token.traits
    })

    console.log(`Found ${traitTypeMap.size} trait types in collection ${collectionId}`, traitTypeMap)

    const traitsToSave: Trait[] = []
    const traitsToDelete: Trait[] = []
    const traitsToUpdate: Trait[] = []

    traitTypeMap.forEach((traitValueMap, traitType) => {
        traitValueMap.forEach((traitValue, value) => {
            const trait = traits.find((t) => t.traitType === traitType && t.value === value)
            if (!trait) {
                traitsToSave.push(
                    new Trait({
                        id: `${collectionId}-${traitType.toLowerCase()}-${value.toLowerCase()}`,
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

    console.log(`Found ${[...traitsToSave, ...traitsToUpdate].length} traits to save in collection ${collectionId}`)

    await em.upsert(Trait, [...traitsToSave, ...traitsToUpdate] as any, ['id'])

    tokenTraitMap.forEach((_traits, _tokenId) => {
        if (!_traits.length) return

        const token = tokens.find((t) => t.id === _tokenId)
        if (token?.traits.length) {
            const tokenTraitsToDelete = token.traits.filter((t) => !_traits.includes(`${t.trait.traitType}:${t.trait.value}`))
            if (tokenTraitsToDelete.length) {
                token.traits = token.traits.filter((t) => !tokenTraitsToDelete.includes(t))
            }
        }
    })

    done(null, { timeElapsed: new Date().getTime() - start.getTime(), collectionId })
})

export { traitsQueue, computeTraits }
