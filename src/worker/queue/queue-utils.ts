import { FetchBalanceWorker } from './jobs'
import { BalancesQueue, JobsEnum } from './index'

const WorkerMap = new Map([['FetchBalance', FetchBalanceWorker]])

/**
 * Initialize workers by binding an event listener to it
 */

export function initializeJobs() {
    WorkerMap.forEach((worker) => {
        worker.on('error', (err) => {
            console.error(err)
        })
    })
}

export function dispatchFetchBalances(ids: string[]) {
    BalancesQueue.add(JobsEnum.FETCH_BALANCE, { ids }).catch(() => {
        console.log('Failed to dispatch a job on balances queue')
    })
}
