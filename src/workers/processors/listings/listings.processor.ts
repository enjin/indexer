import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'
import { JobsEnum } from '../../constants'
import { computeListings } from '../../jobs/compute-listings'

export class ListingsProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        switch (job.name as JobsEnum) {
            case JobsEnum.INVALIDATE_LISTINGS:
                await computeListings(job)
                break
            default:
                throw new Error(`${job.name} is not a valid job for this processor`)
        }
    }

    async failed(job: Job | undefined, error: Error | undefined): Promise<void> {
        if (job === undefined || error === undefined) {
            return
        }

        await job.log(`Failed: ${error.message}`)
    }

    async completed(job: Job) {
        await job.log('Finished computing collections')
    }
}

export default new ListingsProcessor()
