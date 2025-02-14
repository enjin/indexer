import Queue from 'bull'
import { redisConfig } from './common'

export type JobData = { collectionId: string }

export const rarityQueue = new Queue<JobData>('rarityQueue', {
    defaultJobOptions: { delay: 1000, attempts: 2, removeOnComplete: 100 },
    redis: redisConfig,
    settings: {
        maxStalledCount: 3,
    },
})

export const computeRarityRank = async (collectionId: string) => {
    if (!collectionId) {
        throw new Error('Collection ID not provided.')
    }

    if (collectionId === '0') {
        return
    }

    rarityQueue.add({ collectionId }, { jobId: collectionId }).catch(() => {
        // eslint-disable-next-line no-console
        console.log('Closing connection as Redis is not available')
        rarityQueue.close(true)
    })
}
