import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'
import { JobsEnum } from '../../constants'
import { computeRarity } from '../../jobs/compute-rarity'
import { logDebug, logError } from '../../utils'

export class TokensProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        switch (job.name as JobsEnum) {
            case JobsEnum.COMPUTE_RARITY:
                await computeRarity(job, job.data.collectionId)
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

    completed(job: Job) {
        logDebug('Finished computing tokens', job)
    }
}

export default new TokensProcessor()
