import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'
import { JobsEnum } from '../../constants'
import { computeListings } from '../../jobs/compute-listings'
import { logError, logInfo } from '../../utils'
import { syncOffers } from '../../jobs/sync-offers'

export class ListingsProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        switch (job.name as JobsEnum) {
            case JobsEnum.INVALIDATE_LISTINGS:
                await computeListings(job)
                break
            case JobsEnum.FETCH_OFFERS:
                await syncOffers(job)
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
        logInfo('Finished computing collections', job)
    }
}

export default new ListingsProcessor()
