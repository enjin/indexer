import { BalancesQueue, AccountsQueue, CollectionsQueue, MetadataQueue, TraitsQueue } from './index'
import { JobsEnum } from './constants'

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
