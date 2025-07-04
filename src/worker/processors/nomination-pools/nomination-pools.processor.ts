import { Job } from 'bullmq'
import { ProcessorDef } from '~/worker/processors/processor.def'
import { JobsEnum } from '~/queue/constants'
import { logDebug, logError } from '~/worker/utils'
import { computeDestroyedPoolsEvents } from '~/worker/jobs/compute-destroyed-pool-events'
import { syncPoolRewards } from '~/worker/jobs/sync-pool-rewards'
import { computePoolRewards } from '~/worker/jobs/compute-pool-rewards'

export class NominationPoolsProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        switch (job.name as JobsEnum) {
            case JobsEnum.DESTROYED_POOLS_EVENTS:
                await computeDestroyedPoolsEvents(job, job.data.extrinsicId)
                break
            case JobsEnum.SYNC_POOL_REWARDS:
                await syncPoolRewards(job)
                break
            case JobsEnum.COMPUTE_POOL_REWARDS:
                await computePoolRewards(job, job.data.id)
                break
            default:
                throw new Error(`${job.name} is not a valid job for this processor`)
        }
    }

    failed(job: Job | undefined, error: Error | undefined): void {
        if (error === undefined) {
            return
        }
        logError(error, job)
    }

    completed(job: Job): void {
        logDebug('Finished computing nomination pools events', job)
    }
}

export default new NominationPoolsProcessor()
