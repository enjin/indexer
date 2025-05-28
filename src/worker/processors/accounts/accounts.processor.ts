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

export default new AccountsProcessor()
