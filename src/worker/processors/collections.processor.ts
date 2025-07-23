import { Job } from 'bullmq'
import { ProcessorDef } from '~/worker/processors/processor.def'
import { JobsEnum } from '~/queue/constants'
import { syncCollections } from '~/worker/jobs/collections/sync-collections'
import { computeExtras } from '~/worker/jobs/collections/compute-extras'
import { computeStats, syncCollectionTransfer } from '~/worker/jobs'
import { logDebug, logError } from '~/worker/utils'

export class CollectionsProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        switch (job.name as JobsEnum) {
            case JobsEnum.COMPUTE_COLLECTIONS:
                await syncCollections(job)
                break
            case JobsEnum.FETCH_EXTRA:
                await computeExtras(job, job.data.ids)
                break
            case JobsEnum.COMPUTE_STATS:
                await computeStats(job, job.data.id)
                break
            case JobsEnum.SYNC_COLLECTION_TRANSFER:
                await syncCollectionTransfer(job, job.data.id)
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
        logDebug('Finished computing collections', job)
    }
}

export default new CollectionsProcessor()