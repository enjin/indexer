import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'
import { JobsEnum } from '../../constants'
import { computeTraits } from '../../jobs/compute-traits'
import { deleteTraits } from '../../jobs/delete-traits'

export class TraitsProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        switch (job.name as JobsEnum) {
            case JobsEnum.COMPUTE_TRAITS:
                await computeTraits(job.data.id)
                break
            case JobsEnum.DELETE_TRAITS:
                await deleteTraits(job.data.id)
                break
            default:
                throw new Error(`${job.name} is not a valid job for this processor`)
        }
    }

    async failed(job?: Job) {
        if (!job) {
            return
        }

        await job.log('Failed to compute collections')
    }

    async completed(job: Job) {
        await job.log('Finished computing collections')
    }
}

export default new TraitsProcessor()
