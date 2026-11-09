import { JobsEnum } from '~/queue/constants'
import { computeAccountStats, syncAccounts, syncAccountsStats, syncAllAccounts, syncUserInfusions } from '~/worker/jobs'
import { JobHandler, JobRouterProcessor } from '~/worker/processors/job-router.processor'

export class AccountsProcessor extends JobRouterProcessor {
    protected readonly completedMessage = 'Finished fetching accounts'
    protected readonly routes = new Map<JobsEnum, JobHandler>([
        [JobsEnum.FETCH_ACCOUNTS, (job) => syncAccounts(job, job.data.ids)],
        [JobsEnum.SYNC_ALL_ACCOUNTS, (job) => syncAllAccounts(job)],
        [JobsEnum.COMPUTE_ACCOUNT_STATS, (job) => computeAccountStats(job)],
        [JobsEnum.SYNC_ACCOUNTS_STATS, (job) => syncAccountsStats(job)],
        [JobsEnum.SYNC_USER_INFUSIONS, (job) => syncUserInfusions(job)],
    ])
}

export default new AccountsProcessor()
