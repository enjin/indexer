import { BalancesQueue, AccountsQueue, CollectionsQueue, MetadataQueue, TraitsQueue } from './index'
import { JobsEnum } from './constants'

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

export function dispatchComputeStats(id: string, traceId?: string) {
    console.log(`Dispatching compute stats job for collection ${id} - called by ${traceId}`)

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
    console.log(`Dispatching compute traits job for id ${id}`)
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
    console.log(`Dispatching compute metadata job for resource ${resourceId}`)
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
