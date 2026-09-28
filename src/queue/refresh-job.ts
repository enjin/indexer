import { randomUUID } from 'node:crypto'
import type { Job, JobsOptions, Queue } from 'bullmq'

/**
 * Coalesce pending refreshes and retain one follow-up for updates during a run.
 * Terminal jobs retain their history without blocking the next refresh. BullMQ
 * releases the deduplication key atomically on completion or final failure.
 */
export async function addRefreshJob(
    queue: Queue,
    name: string,
    data: unknown,
    options: JobsOptions & { jobId: string }
): Promise<Job> {
    const { jobId, ...rest } = options

    // Older producers used the logical ID as the physical job ID. Let any
    // outstanding legacy job finish, without removing another worker's job.
    const legacyJob = await queue.getJob(jobId)
    if (legacyJob) {
        const state = await legacyJob.getState()
        if (state !== 'completed' && state !== 'failed' && state !== 'unknown') return legacyJob
    }

    return queue.add(name, data, {
        ...rest,
        jobId: `${jobId}.${randomUUID()}`,
        deduplication: { id: jobId, keepLastIfActive: true },
    })
}
