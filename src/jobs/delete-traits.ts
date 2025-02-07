import Queue from 'bull'
import { redisConfig } from './common'

export type JobData = { id: string }

export const deleteTraitsQueue = new Queue<JobData>('deleteTraits', {
    defaultJobOptions: { removeOnComplete: true },
    redis: redisConfig,
    settings: {
        maxStalledCount: 1,
    },
})

export const deleteTokenTraits = async (id: string) => {
    deleteTraitsQueue.add({ id }).catch(() => {
         
        console.log('Closing connection as Redis is not available')
        deleteTraitsQueue.close(true)
    })
}
