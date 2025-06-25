import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'
import { JobsEnum } from '../../constants'
import { computeMetadata } from '../../jobs/compute-metadata'
import { syncMetadata } from '../../jobs/sync-metadata'
import { logDebug, logError } from '../../utils'
import { syncFuelTanks } from '../../jobs/sync-fuel-tanks'

export class MetadataProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        switch (job.name as JobsEnum) {
            case JobsEnum.COMPUTE_METADATA:
                await computeMetadata(job)
                break
            case JobsEnum.FETCH_COLLECTIONS:
                await syncMetadata(job)
                break
            case JobsEnum.SYNC_FUEL_TANKS:
                await syncFuelTanks(job)
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
        logDebug('Finished computing metadata', job)
    }
}

export default new MetadataProcessor()
