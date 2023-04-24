/* eslint-disable max-len */
import Queue from 'bull'
import config from '../config'

export type JobData = { collectionId: string }

export const traitsQueue = new Queue<JobData>('traitsQueue', {
    defaultJobOptions: { delay: 5000, attempts: 2, removeOnComplete: true },
    redis: {
        port: 6379,
        host: config.redisHost,
    },
})

export const computeTraits = async (collectionId: string) => {
    if (!collectionId) {
        throw new Error('Collection ID not provided.')
    }

    traitsQueue.add({ collectionId }, { jobId: collectionId }).catch(() => {
        console.log('Closing connection as Redis is not available')
        traitsQueue.close(true)
    })
}
