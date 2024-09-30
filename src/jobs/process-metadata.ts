import Queue from 'bull'
import { redisConfig } from './common'

export type JobData = { resourceId: string; type: 'token' | 'collection'; force: boolean; allTokens: boolean }

export const metadataQueue = new Queue<JobData>('metadataQueue', {
    defaultJobOptions: {
        delay: 1000,
        attempts: 4,
        backoff: {
            type: 'exponential',
            delay: 5000,
        },
        removeOnComplete: true,
        removeOnFail: false,
    },
    redis: redisConfig,
    settings: {
        maxStalledCount: 2,
    },
})

export const processMetadata = async (resourceId: string, type: JobData['type'], force = false, allTokens = false) => {
    if (force) {
        // on force, remove existing job and add a new one
        const existingJob = await metadataQueue.getJob(`${type}-${resourceId}`)
        if (existingJob) {
            await existingJob.remove()
        }
    }

    metadataQueue.add({ resourceId, type, force, allTokens }, { jobId: `${type}-${resourceId}` }).catch(() => {
        // eslint-disable-next-line no-console
        console.log('Closing connection as Redis is not available')
        metadataQueue.close(true)
    })
}
