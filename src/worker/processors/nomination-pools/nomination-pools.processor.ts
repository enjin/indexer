import { Job } from 'bullmq'
import { ProcessorDef } from '~/worker/processors/processor.def'
import { JobsEnum } from '~/queue/constants'
import { logDebug, logError } from '~/worker/utils'
import { syncPools, computePoolRewards, syncPoolMembers, computePoolMemberRewards, refreshPool } from '~/worker/jobs'

export class NominationPoolsProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        switch (job.name as JobsEnum) {
            case JobsEnum.SYNC_POOLS:
                await syncPools(job)
                break
            case JobsEnum.COMPUTE_POOL_REWARDS:
                await computePoolRewards(job, job.data.id)
                break
            case JobsEnum.COMPUTE_POOL_MEMBER_REWARDS:
                await computePoolMemberRewards(job, job.data.id)
                break
            case JobsEnum.SYNC_POOL_MEMBERS:
                await syncPoolMembers(job)
                break
            case JobsEnum.REFRESH_POOL:
                await refreshPool(job, job.data.id)
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
