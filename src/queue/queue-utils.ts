import { BalancesQueue, AccountsQueue, CollectionsQueue, MetadataQueue, TraitsQueue } from './index'
import { JobsEnum } from './constants'

export function dispatchFetchAllBalances() {
    console.log('Dispatching fetch all balances job')
    BalancesQueue.add(JobsEnum.FETCH_BALANCES, { ids: null }).catch(() => {
        console.log('Failed to dispatch a job on balances queue')
    })
}

export function dispatchFetchBalances(ids: string[]) {
    console.log('Dispatching fetch balances job')
    BalancesQueue.add(JobsEnum.FETCH_BALANCES, { ids }).catch(() => {
        console.log('Failed to dispatch a job on balances queue')
    })
}

export function dispatchFetchAccounts(ids: string[]) {
    console.log('Dispatching fetch accounts job')
    AccountsQueue.add(JobsEnum.FETCH_ACCOUNTS, { ids }).catch(() => {
        console.log('Failed to dispatch a job on accounts queue')
    })
}

export function dispatchFetchCollectionExtra(ids: string[]) {
    console.log('Dispatching fetch collection extra job')
    CollectionsQueue.add(JobsEnum.FETCH_COLLECTIONS, { ids }).catch(() => {
        console.log('Failed to dispatch a job on collections queue')
    })
}

export function dispatchComputeCollections() {
    console.log('Dispatched compute collections job')

    // This job syncs every single collection in our database
    // There is no point in running it more than once a block
    CollectionsQueue.add(
        JobsEnum.COMPUTE_COLLECTIONS,
        {},
        {
            delay: 12000,
            jobId: 'collections',
        }
    ).catch(() => {
        console.log('Failed to dispatch a job on collections queue')
    })
}

export function dispatchComputeStats(id: string) {
    CollectionsQueue.add(
        JobsEnum.COMPUTE_STATS,
        { id },
        {
            delay: 6000,
            jobId: `collection-${id}`,
        }
    ).catch(() => {
        console.log('Failed to dispatch a job on collections queue')
    })
}

export function dispatchComputeTraits(id: string) {
    TraitsQueue.add(
        JobsEnum.COMPUTE_TRAITS,
        { id },
        {
            delay: 6000,
            jobId: `traits-${id}`,
        }
    ).catch(() => {
        console.log('Failed to dispatch a job on collections queue')
    })
}

export function dispatchComputeMetadata(
    resourceId: string,
    type: 'token' | 'collection',
    force = false,
    allTokens = false
) {
    MetadataQueue.add(
        JobsEnum.COMPUTE_METADATA,
        { resourceId, type, force, allTokens },
        {
            delay: 6000,
            jobId: `metadata-${resourceId}`,
        }
    ).catch(() => {
        console.log('Failed to dispatch a job on metadata queue')
    })
}
