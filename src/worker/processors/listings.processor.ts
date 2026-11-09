import { Job } from 'bullmq'
import { JobsEnum } from '~/queue/constants'
import {
    backfillCancellationListingIds,
    computeListings,
    refreshListings,
    syncCounterOffers,
    syncListings,
    syncOfferEvents,
    syncOffers,
} from '~/worker/jobs'
import { JobHandler, JobRouterProcessor } from '~/worker/processors/job-router.processor'
import { logInfo } from '~/worker/utils'

export class ListingsProcessor extends JobRouterProcessor {
    protected readonly completedMessage = 'Finished computing listings'
    protected readonly routes = new Map<JobsEnum, JobHandler>([
        [JobsEnum.INVALIDATE_LISTINGS, (job) => computeListings(job)],
        [JobsEnum.FETCH_OFFERS, (job) => syncOffers(job)],
        [JobsEnum.SYNC_COUNTER_OFFERS, (job) => syncCounterOffers(job)],
        [JobsEnum.REFRESH_LISTINGS, (job) => refreshListings(job, job.data.ids)],
        [JobsEnum.SYNC_LISTINGS, (job) => syncListings(job)],
        [JobsEnum.SYNC_OFFER_EVENTS, (job) => syncOfferEvents(job)],
        [JobsEnum.BACKFILL_CANCELLATION_LISTING_IDS, (job) => backfillCancellationListingIds(job)],
    ])

    override completed(job: Job): void {
        logInfo(this.completedMessage, job)
    }
}

export default new ListingsProcessor()
