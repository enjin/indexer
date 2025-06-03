import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'
import { JobsEnum } from '../../constants'
import { computeTraits } from '../../jobs/compute-traits'
import { deleteTraits } from '../../jobs/delete-traits'
import { logDebug, logError } from '../../utils'

export class TraitsProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        switch (job.name as JobsEnum) {
            case JobsEnum.COMPUTE_TRAITS:
                await computeTraits(job, job.data.id)
                break
            case JobsEnum.DELETE_TRAITS:
                await deleteTraits(job, job.data.id)
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
