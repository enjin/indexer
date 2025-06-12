import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'
import { syncAccounts } from '../../jobs/sync-accounts'
import { JobsEnum } from '../../constants'
import { logDebug, logError } from '../../utils'
import { syncAllAccounts } from '../../jobs/sync-all-accounts'

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
