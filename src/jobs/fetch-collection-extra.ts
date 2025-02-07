import Queue from 'bull'
import { redisConfig } from './common'

export type JobData = { ids: string[] }

export const fetchCollectionExtraQueue = new Queue<JobData>('fetchCollectionExtraQueue', {
    defaultJobOptions: { attempts: 3, removeOnComplete: 50 },
    redis: redisConfig,
    settings: {
        maxStalledCount: 3,
    },
})

export const fetchCollectionExtra = (ids: string[]) => {
    fetchCollectionExtraQueue.add({ ids }).catch(async () => {
        console.log('Closing connection as Redis is not available')
        await fetchCollectionExtraQueue.close(true)
    })
}
