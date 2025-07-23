import { Job } from 'bullmq'
import { ProcessorDef } from '~/worker/processors/processor.def'
import { JobsEnum } from '~/queue/constants'
import { computeListings, syncOffers, refreshListings, syncStakeOffers } from '~/worker/jobs'
import { logError, logInfo } from '~/worker/utils'

export class ListingsProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        switch (job.name as JobsEnum) {
            case JobsEnum.INVALIDATE_LISTINGS:
                await computeListings(job)
                break
            case JobsEnum.FETCH_OFFERS:
                await syncOffers(job)
                break
            case JobsEnum.REFRESH_LISTINGS:
                await refreshListings(job, job.data.ids)
                break
            case JobsEnum.SYNC_STAKE_OFFERS:
                await syncStakeOffers(job)
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
