import Queue from 'bull'
import { redisConfig } from './common'

type JobData = { resourceId: string; type: 'token' | 'collection' }

export const metadataQueue = new Queue<JobData>('traitsQueue', {
    defaultJobOptions: { attempts: 1, removeOnComplete: true },
    redis: redisConfig,
})

export const processMetadata = async (resourceId: string, type: JobData['type']) => {
    metadataQueue.add({ resourceId, type }, { jobId: `${type}-${resourceId}` }).catch(() => {
        console.log('Closing connection as Redis is not available')
        metadataQueue.close(true)
    })
}
