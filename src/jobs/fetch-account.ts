import Queue from 'bull'
import { redisConfig } from './common'

export type JobData = { ids: `0x${string}`[] }

export const fetchAccountQueue = new Queue<JobData>('fetchAccountQueue', {
    defaultJobOptions: { attempts: 3, removeOnComplete: 50 },
    redis: redisConfig,
    settings: {
        maxStalledCount: 2,
    },
})

export const fetchAccountsDetail = (ids: `0x${string}`[]) => {
    fetchAccountQueue.add({ ids }).catch(async () => {
        console.log('Closing connection as Redis is not available')
        await fetchAccountQueue.close(true)
    })
}
