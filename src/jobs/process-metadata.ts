import Queue from 'bull'
import { redisConfig } from './common'

export type JobData = { resourceId: string; type: 'token' | 'collection'; force: boolean }

export const metadataQueue = new Queue<JobData>('metadataQueue', {
    defaultJobOptions: { delay: 1000, attempts: 5, removeOnComplete: true },
    redis: redisConfig,
    settings: {
        maxStalledCount: 3,
    },
})

export const processMetadata = async (resourceId: string, type: JobData['type'], force = false) => {
    metadataQueue.add({ resourceId, type, force }, { jobId: `${type}-${resourceId}` }).catch(() => {
        // eslint-disable-next-line no-console
        console.log('Closing connection as Redis is not available')
        metadataQueue.close(true)
    })
}
