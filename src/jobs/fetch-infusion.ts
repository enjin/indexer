import Queue from 'bull'
import { redisConfig } from './common'

export type JobData = { token: string }

export const fetchInfusionQueue = new Queue<JobData>('fetchInfusionQueue', {
    defaultJobOptions: {
        attempts: 3,
        removeOnComplete: 300,
        removeOnFail: false,
    },
    redis: redisConfig,
    settings: {
        maxStalledCount: 2,
    },
})

export const fetchInfusion = async (token: string) => {
    fetchInfusionQueue.add({ token }).catch(() => {
        // eslint-disable-next-line no-console
        console.log('Closing connection as Redis is not available')
        fetchInfusionQueue.close(true)
    })
}
