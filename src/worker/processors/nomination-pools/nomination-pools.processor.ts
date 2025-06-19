import { Job } from 'bullmq'
import { ProcessorDef } from '~/worker/processors/processor.def' 
import { JobsEnum } from '~/queue/constants'
import { logDebug, logError } from '~/worker/utils'
import { computeDestroyedPoolsEvents } from '~/worker/jobs/compute-destroyed-pool-events'

export class NominationPoolsProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        switch (job.name as JobsEnum) {
            case JobsEnum.DESTROYED_POOLS_EVENTS:
                await computeDestroyedPoolsEvents(job, job.data.extrinsicId)
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
