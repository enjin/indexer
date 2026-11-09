import { JobsEnum } from '~/queue/constants'
import { syncCollections } from '~/worker/jobs/collections/sync-collections'
import { computeExtras } from '~/worker/jobs/collections/compute-extras'
import { computeStats, syncCollectionTransfer } from '~/worker/jobs'
import { JobHandler, JobRouterProcessor } from '~/worker/processors/job-router.processor'

export class CollectionsProcessor extends JobRouterProcessor {
    protected readonly completedMessage = 'Finished computing collections'
    protected readonly routes = new Map<JobsEnum, JobHandler>([
        [JobsEnum.COMPUTE_COLLECTIONS, (job) => syncCollections(job)],
        [JobsEnum.FETCH_EXTRA, (job) => computeExtras(job, job.data.ids)],
        [JobsEnum.COMPUTE_STATS, (job) => computeStats(job, job.data.id)],
        [JobsEnum.SYNC_COLLECTION_TRANSFER, (job) => syncCollectionTransfer(job, job.data.id)],
    ])
}

export default new CollectionsProcessor()
