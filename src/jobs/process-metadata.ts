import Queue from 'bull'
import { redisConfig } from './common'

type JobData = { resourceId: string; type: 'token' | 'collection'; force: boolean }

export const metadataQueue = new Queue<JobData>('metadataQueue', {
    defaultJobOptions: { delay: 1000, attempts: 2, removeOnComplete: true },
    redis: redisConfig,
    settings: {
        maxStalledCount: 3,
    },
})

export const processMetadata = async (resourceId: string, type: JobData['type'], force = false) => {
    metadataQueue.add({ resourceId, type, force }, { jobId: `${type}-${resourceId}` }).catch(() => {
        console.log('Closing connection as Redis is not available')
        metadataQueue.close(true)
    })
}
