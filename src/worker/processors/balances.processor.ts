import { JobsEnum } from '~/queue/constants'
import { fetchBalance, syncBalances } from '~/worker/jobs'
import { JobHandler, JobRouterProcessor } from '~/worker/processors/job-router.processor'

export class BalancesProcessor extends JobRouterProcessor {
    protected readonly completedMessage = 'Finished fetching balances'
    protected readonly routes = new Map<JobsEnum, JobHandler>([
        [JobsEnum.FETCH_BALANCES, (job) => syncBalances(job, job.data.ids)],
        [JobsEnum.FETCH_BALANCE, (job) => fetchBalance(job, job.data.id)],
    ])
}

export default new BalancesProcessor()
