import Queue from 'bull'
import { redisConfig } from './common'

export type JobData = { resourceId: string; type: 'token' | 'collection'; force: boolean; allTokens: boolean }

export const metadataQueue = new Queue<JobData>('metadataQueue', {
    defaultJobOptions: {
        delay: 1000,
        attempts: 3,
        backoff: {
            type: 'exponential',
            delay: 5000,
        },
        removeOnComplete: false,
        removeOnFail: false,
    },
    redis: redisConfig,
    settings: {
        maxStalledCount: 2,
    },
})

export const processMetadata = async (resourceId: string, type: JobData['type'], force = false, allTokens = false) => {
    console.log(
        `[processMetadata] Processing ${type}-${resourceId} with force=${force} and allTokens=${allTokens}, ${new Date().getTime()}`
    )

    if (force) {
        // on force, remove existing job and add a new one
        const existingJob = await metadataQueue.getJob(`${type}-${resourceId}`)
        if (existingJob) {
            await existingJob.remove()
        }
    }

    metadataQueue.add({ resourceId, type, force, allTokens }, { jobId: `${type}-${resourceId}` })
}
