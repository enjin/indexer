import Queue from 'bull'
import { redisConfig } from './common'

export type JobData = { ids: string[] }

export const fetchAccountQueue = new Queue<JobData>('fetchAccountQueue', {
    defaultJobOptions: { attempts: 3, removeOnComplete: 5 },
    redis: redisConfig,
    settings: {
        maxStalledCount: 2,
    },
})

export const fetchAccountsDetail = async (ids: string[]) => {
    fetchAccountQueue.add({ ids }).catch(() => {
        // eslint-disable-next-line no-console
        console.log('Closing connection as Redis is not available')
        fetchAccountQueue.close(true)
    })
}
