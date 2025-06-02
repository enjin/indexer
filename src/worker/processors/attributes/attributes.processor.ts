import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'
import { JobsEnum } from '../../constants'
import { syncAttributes } from '../../jobs/sync-attributes'

export class MetadataProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        switch (job.name as JobsEnum) {
            case JobsEnum.SYNC_ATTRIBUTES:
                await syncAttributes(job, job.data.id)
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
        await job.log('Finished syncing attributes')
    }
}

export default new MetadataProcessor()
