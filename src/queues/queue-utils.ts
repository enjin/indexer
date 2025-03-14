import { BalancesQueue, AccountsQueue, CollectionsQueue, MetadataQueue, TraitsQueue } from './index'
import { JobsEnum } from './constants'

export function dispatchFetchBalances(ids: string[]) {
    console.log('Dispatched fetch balances job')
    BalancesQueue.add(JobsEnum.FETCH_BALANCES, { ids }).catch(() => {
        console.log('Failed to dispatch a job on balances queue')
    })
}

export function dispatchFetchAccounts(ids: string[]) {
    console.log('Dispatched fetch accounts job')
    AccountsQueue.add(JobsEnum.FETCH_ACCOUNTS, { ids }).catch(() => {
        console.log('Failed to dispatch a job on accounts queue')
    })
}

export function dispatchFetchCollectionExtra(ids: string[]) {
    console.log('Dispatched fetch collection extra job')
    CollectionsQueue.add(JobsEnum.FETCH_COLLECTIONS, { ids }).catch(() => {
        console.log('Failed to dispatch a job on collections queue')
    })
}

export function dispatchComputeCollections() {
    console.log('Dispatched compute collections job')
    CollectionsQueue.add(JobsEnum.COMPUTE_COLLECTIONS, {}).catch(() => {
        console.log('Failed to dispatch a job on collections queue')
    })
}

export function dispatchComputeStats(id: string) {
    console.log('Dispatched compute stats for id ', id)
    CollectionsQueue.add(JobsEnum.COMPUTE_STATS, { id }).catch(() => {
        console.log('Failed to dispatch a job on collections queue')
    })
}

export function dispatchComputeTraits(id: string) {
    console.log('Dispatched compute traits job')
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
    console.log('Dispatched compute metadata job')
    MetadataQueue.add(JobsEnum.COMPUTE_METADATA, { resourceId, type, force, allTokens }).catch(() => {
        console.log('Failed to dispatch a job on metadata queue')
    })
}
