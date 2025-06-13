import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'
import { JobsEnum } from '../../constants'
import { computeValidators } from '../../jobs/compute-validators'
import { logDebug, logError } from '../../utils'
import { syncValidators } from '../../jobs/sync-validators'
import { syncChain } from '../../jobs/sync-chain'
import { syncPools } from '../../jobs/sync-pools'

export class ValidatorsProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        switch (job.name as JobsEnum) {
            case JobsEnum.COMPUTE_VALIDATORS:
                await computeValidators(job)
                break
            case JobsEnum.SYNC_VALIDATORS:
                await syncValidators(job)
                break
            case JobsEnum.SYNC_CHAIN:
                await syncChain(job, job.data.fromBlock, job.data.toBlock)
                break
            case JobsEnum.SYNC_POOLS:
                await syncPools(job)
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
        logDebug('Finished computing validators', job)
    }
}

export default new ValidatorsProcessor()
