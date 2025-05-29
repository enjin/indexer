import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'
import { JobsEnum } from '../../constants'
import { computeMetadata } from '../../jobs/compute-metadata'
import { fetchCollections } from '../../jobs/fetch-collections'

export class MetadataProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        switch (job.name as JobsEnum) {
            case JobsEnum.COMPUTE_METADATA:
                await computeMetadata(job)
                break
            case JobsEnum.FETCH_COLLECTIONS:
                await fetchCollections(job)
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
        await job.log('Finished computing metadata')
    }
}

export default new MetadataProcessor()
