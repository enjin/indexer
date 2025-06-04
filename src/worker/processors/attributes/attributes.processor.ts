import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'
import { JobsEnum } from '../../constants'
import { syncAttributes } from '../../jobs/sync-attributes'
import { logDebug, logError } from '../../utils'

export class MetadataProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        switch (job.name as JobsEnum) {
            case JobsEnum.SYNC_ATTRIBUTES:
                await syncAttributes(job, job.data.tokenId, job.data.collectionId)
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
        logDebug('Finished syncing attributes', job)
    }
}

export default new MetadataProcessor()
