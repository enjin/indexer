import { Job } from 'bullmq'
import { ProcessorDef } from '~/worker/processors/processor.def'
import { JobsEnum } from '~/queue/constants'
import { logDebug, logError } from '~/worker/utils'
import { syncPoolRewards } from '~/worker/jobs/sync-pool-rewards'
import { computePoolRewards } from '~/worker/jobs/compute-pool-rewards'
import { syncPoolMembers } from '~/worker/jobs/sync-pool-members'

export class NominationPoolsProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        switch (job.name as JobsEnum) {
            case JobsEnum.SYNC_POOL_REWARDS:
                await syncPoolRewards(job)
                break
            case JobsEnum.COMPUTE_POOL_REWARDS:
                await computePoolRewards(job, job.data.id)
                break
            case JobsEnum.SYNC_POOL_MEMBERS:
                await syncPoolMembers(job)
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
