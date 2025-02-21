import {
    ComputeMetadataWorker,
    ComputeRarityWorker,
    ComputeStatsWorker,
    ComputeValidatorsWorker,
    ComputeTraitsWorker,
    DeleteTraitsWorker,
    FetchAccountsWorker,
    FetchBalancesWorker,
    FetchCollectionsWorker,
    InvalidateListingsWorker,
} from './jobs'
import { BalancesQueue, JobsEnum } from './index'

const WorkerMap = new Map([
    ['ComputeMetadata', ComputeMetadataWorker],
    ['ComputeRarity', ComputeRarityWorker],
    ['ComputeStats', ComputeStatsWorker],
    ['ComputeTraits', ComputeTraitsWorker],
    ['ComputeValidators', ComputeValidatorsWorker],
    ['DeleteTraits', DeleteTraitsWorker],
    ['FetchAccounts', FetchAccountsWorker],
    ['FetchBalances', FetchBalancesWorker],
    ['FetchCollections', FetchCollectionsWorker],
    ['InvalidateListings', InvalidateListingsWorker],
])

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
    BalancesQueue.add(JobsEnum.FETCH_BALANCES, { ids }).catch(() => {
        console.log('Failed to dispatch a job on balances queue')
    })
}
