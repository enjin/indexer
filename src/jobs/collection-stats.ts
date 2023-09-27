import Queue from 'bull'
import { redisConfig } from './common'
import connection from '../connection'
import { Collection } from '../model'

export type JobData = { collectionId: string }

export const collectionStats = new Queue<JobData>('collectionStats', {
    defaultJobOptions: { delay: 1000, attempts: 1, removeOnComplete: true },
    redis: redisConfig,
})

export const syncCollectionStats = async (collectionId: string) => {
    if (!collectionId) {
        throw new Error('Collection ID not provided.')
    }

    collectionStats.add({ collectionId }, { jobId: collectionId }).catch(() => {
        console.log('Closing connection as Redis is not available')
        collectionStats.close(true)
    })
}

export async function syncAllCollections() {
    if (!connection.isInitialized) {
        await connection.initialize().catch((err) => {
            throw err
        })
    }

    const em = connection.manager

    const collections = await em.find(Collection, {
        select: ['id'],
    })

    collections.forEach((collection) => {
        syncCollectionStats(collection.id)
    })
}
