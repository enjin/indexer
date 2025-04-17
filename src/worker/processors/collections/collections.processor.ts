import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'
import { JobsEnum } from '../../constants'
import { computeCollections } from '../../jobs/compute-collections'
import { fetchCollections } from '../../jobs/fetch-collections'
import { computeStats } from '../../jobs/compute-stats'

export class CollectionsProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        switch (job.name as JobsEnum) {
            case JobsEnum.COMPUTE_COLLECTIONS:
                await computeCollections()
                break
            case JobsEnum.FETCH_COLLECTIONS:
                await fetchCollections(job.data.ids)
                break
            case JobsEnum.COMPUTE_STATS:
                await computeStats(job.data.id)
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

export default new CollectionsProcessor()
