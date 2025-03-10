import { EventEmitter } from 'events'
import {
    ComputeCollectionsWorker,
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
import { BalancesQueue, AccountsQueue, CollectionsQueue, MetadataQueue, JobsEnum, TraitsQueue } from './index'

// Increase max listeners to avoid warnings
// We have 11 workers, so setting to 15 gives us some headroom
EventEmitter.defaultMaxListeners = 60

const WorkerMap = new Map([
    ['ComputeCollections', ComputeCollectionsWorker],
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

export function dispatchFetchAccounts(ids: string[]) {
    AccountsQueue.add(JobsEnum.FETCH_ACCOUNTS, { ids }).catch(() => {
        console.log('Failed to dispatch a job on accounts queue')
    })
}

export function dispatchFetchCollectionExtra(ids: string[]) {
    CollectionsQueue.add(JobsEnum.FETCH_COLLECTIONS, { ids }).catch(() => {
        console.log('Failed to dispatch a job on collections queue')
    })
}

export function dispatchComputeCollections() {
    CollectionsQueue.add(JobsEnum.COMPUTE_COLLECTIONS, {}).catch(() => {
        console.log('Failed to dispatch a job on collections queue')
    })
}

export function dispatchComputeStats(id: string) {
    CollectionsQueue.add(JobsEnum.COMPUTE_STATS, { id }).catch(() => {
        console.log('Failed to dispatch a job on collections queue')
    })
}

export function dispatchComputeTraits(id: string) {
    TraitsQueue.add(JobsEnum.COMPUTE_TRAITS, { id }).catch(() => {
        console.log('Failed to dispatch a job on collections queue')
    })
}

export function dispatchComputeMetadata(
    resourceId: string,
    type: 'token' | 'collection',
    force = false,
    allTokens = false
) {
    MetadataQueue.add(JobsEnum.COMPUTE_METADATA, { resourceId, type, force, allTokens }).catch(() => {
        console.log('Failed to dispatch a job on metadata queue')
    })
}
