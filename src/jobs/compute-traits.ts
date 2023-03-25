import Queue from 'bull'
import { EntityManager } from 'typeorm'
import isPlainObject from 'lodash/isPlainObject'
import { Token, Trait } from '../model'

type JobData = { em: EntityManager; collectionId: string }
type TraitValueMap = Map<string, { count: number }>

const traitsQueue = new Queue<JobData>('traitsQueue', {
    defaultJobOptions: { delay: 12000, attempts: 2, removeOnComplete: { age: 600, count: 2000 } },
})

const computeTraits = async (em: EntityManager, collectionId: string) => {
    traitsQueue.add({ em, collectionId }, { jobId: collectionId })
}

traitsQueue.process(async (job, done) => {
    if (!job.data.em || !(job.data.em instanceof EntityManager)) {
        throw new Error('EntityManager not provided.')
    }

    if (!job.data.collectionId) {
        throw new Error('Collection ID not provided.')
    }

    const traitTypeMap = new Map<string, TraitValueMap>()

    const start = new Date()

    const { em, collectionId } = job.data satisfies JobData

    const tokens = await em
        .getRepository(Token)
        .createQueryBuilder('token')
        .select('token.id')
        .addSelect('token.metadata')
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
        })
    })

    console.log(`Found ${traitTypeMap.size} trait types.`, traitTypeMap)

    done(null, { timeElapsed: new Date().getTime() - start.getTime(), collectionId })
})

export { traitsQueue, computeTraits }
