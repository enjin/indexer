import { Job } from 'bullmq'
import { ProcessorDef } from '~/worker/processors/processor.def'
import { JobsEnum } from '~/queue/constants'
import { computeRarity } from '~/worker/jobs/compute-rarity'
import { logDebug, logError } from '~/worker/utils'
import { syncTokens } from '~/worker/jobs/sync-tokens'
import { computeTokenSupply } from '~/worker/jobs/compute-token-supply'
import { refreshPool } from '~/worker/jobs/refresh-pool'
import { computeTokenBestListing } from '~/worker/jobs/compute-token-bestlisting'

export class TokensProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        switch (job.name as JobsEnum) {
            case JobsEnum.COMPUTE_RARITY:
                await computeRarity(job, job.data.id)
                break
            case JobsEnum.SYNC_TOKENS:
                await syncTokens(job)
                break
            case JobsEnum.COMPUTE_TOKEN_SUPPLY:
                await computeTokenSupply(job, job.data.id)
                break
            case JobsEnum.REFRESH_POOL:
                await refreshPool(job, job.data.id)
                break
            case JobsEnum.COMPUTE_TOKEN_BEST_LISTING:
                await computeTokenBestListing(job, job.data.id)
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
