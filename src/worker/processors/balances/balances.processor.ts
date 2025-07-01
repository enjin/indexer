import { Job } from 'bullmq'
import { ProcessorDef } from '~/worker/processors/processor.def'
import { syncBalances } from '~/worker/jobs/sync-balances'
import { JobsEnum } from '~/queue/constants'
import { logDebug, logError } from '~/worker/utils'

export class BalancesProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        switch (job.name as JobsEnum) {
            case JobsEnum.FETCH_BALANCES:
                await syncBalances(job, job.data.ids)
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
        logDebug('Finished fetching balances', job)
    }
}

export default new BalancesProcessor()
