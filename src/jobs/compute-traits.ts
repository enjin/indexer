import Queue from 'bull'
import { redisConfig } from './common'

export type JobData = { collectionId: string }

export const traitsQueue = new Queue<JobData>('traitsQueue', {
    defaultJobOptions: { delay: 5000, attempts: 3, removeOnComplete: 500 },
    redis: redisConfig,
    settings: {
        maxStalledCount: 3,
    },
})

export const computeTraits = async (collectionId: string) => {
    if (!collectionId) {
        throw new Error('Collection ID not provided.')
    }

    if (collectionId === '0') {
        return
    }

    traitsQueue.add({ collectionId }).catch(() => {
        // eslint-disable-next-line no-console
        console.log('Closing connection as Redis is not available')
        traitsQueue.close(true)
    })
}
