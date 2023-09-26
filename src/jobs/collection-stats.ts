import Queue from 'bull'
import { redisConfig } from './common'

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
