import { Job } from 'bullmq'
import { ProcessorDef } from '../processor.def'
import { fetchAccounts } from '../../jobs/fetch-accounts'
import { JobsEnum } from '../../constants'

export class AccountsProcessor implements ProcessorDef {
    async handle(job: Job): Promise<void> {
        switch (job.name as JobsEnum) {
            case JobsEnum.FETCH_ACCOUNTS:
                await fetchAccounts(job, job.data.ids)
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
        await job.log('Finished fetching accounts')
    }
}

export default new AccountsProcessor()
