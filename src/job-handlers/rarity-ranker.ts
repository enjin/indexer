import Queue from 'bull'
import math from 'mathjs'
import connection from '../connection'
import { Collection, Token } from '../model'
import { JobData } from '../jobs/rarity-ranker'

export default async (job: Queue.Job<JobData>, done: Queue.DoneCallback) => {
    if (!job.data.collectionId) {
        throw new Error('Collection ID not provided.')
    }

    if (!connection.isInitialized) {
        await connection.initialize().catch(() => {
            done(new Error('Failed to initialize connection'))
        })
    }

    const em = connection.manager

    const [collection, tokens] = await Promise.all([
        em.findOneOrFail(Collection, {
            relations: {
                traits: true,
            },
            where: { id: job.data.collectionId },
        }),
        em.find(Token, {
            relations: {
                traits: {
                    trait: true,
                },
            },
            where: { collection: { id: job.data.collectionId } },
        }),
    ])

    const totalSupply = collection.stats.supply

    

    // check if total supply is greater than 0
    if (!totalSupply || totalSupply <= 0) {
        return done(new Error('Total supply is 0'))
    }
}
