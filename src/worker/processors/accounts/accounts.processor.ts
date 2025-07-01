import { Job } from 'bullmq'
import { ProcessorDef } from '~/worker/processors/processor.def'
import { syncAccounts } from '~/worker/jobs/sync-accounts'
import { JobsEnum } from '~/queue/constants'
import { logDebug, logError } from '~/worker/utils'
import { syncAllAccounts } from '~/worker/jobs/sync-all-accounts'

export class AccountsProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        switch (job.name as JobsEnum) {
            case JobsEnum.FETCH_ACCOUNTS:
                await syncAccounts(job, job.data.ids)
                break
            case JobsEnum.SYNC_ALL_ACCOUNTS:
                await syncAllAccounts(job)
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
        logDebug('Finished fetching accounts', job)
    }
}

export default new AccountsProcessor()
