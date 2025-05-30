import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'
import { JobsEnum } from '../../constants'
import { computeCollections } from '../../jobs/compute-collections'
import { fetchExtra } from '../../jobs/fetch-extra'
import { computeStats } from '../../jobs/compute-stats'

export class CollectionsProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        switch (job.name as JobsEnum) {
            case JobsEnum.COMPUTE_COLLECTIONS:
                await computeCollections(job)
                break
            case JobsEnum.FETCH_EXTRA:
                await fetchExtra(job, job.data.ids)
                break
            case JobsEnum.COMPUTE_STATS:
                await computeStats(job, job.data.id)
                break
            default:
                throw new Error(`${job.name} is not a valid job for this processor`)
        }
    }

    async failed(job: Job | undefined, error: Error | undefined): Promise<void> {
        if (job === undefined || error === undefined) {
            return
        }

        await job.log(`Failed: ${error}`)
    }

    async completed(job: Job) {
        await job.log('Finished computing collections')
    }
}

export default new CollectionsProcessor()
