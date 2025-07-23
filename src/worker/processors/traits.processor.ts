import { Job } from 'bullmq'
import { ProcessorDef } from '~/worker/processors/processor.def'
import { JobsEnum } from '~/queue/constants'
import { computeTraits } from '~/worker/jobs'
import { logDebug, logError } from '~/worker/utils'

export class TraitsProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        switch (job.name as JobsEnum) {
            case JobsEnum.COMPUTE_TRAITS:
                await computeTraits(job, job.data.id)
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
        logDebug('Finished computing traits', job)
    }
}

export default new TraitsProcessor()