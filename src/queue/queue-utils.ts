import {
    BalancesQueue,
    AccountsQueue,
    CollectionsQueue,
    MetadataQueue,
    TraitsQueue,
    TokensQueue,
    ListingsQueue,
    ValidatorsQueue,
    NominationPoolsQueue,
} from '~/queue'
import { JobsEnum } from '~/queue/constants'
import { xxhasher } from '~/util/hasher'
import { match } from 'ts-pattern'
import { type Queue } from 'bullmq'
import { QueueType } from '~/queue/types'
import { Logger } from '~/util/logger'

const LOGGER_NAMESPACE = 'sqd:queue'

export async function pauseQueue(type: QueueType): Promise<void> {
    const queue = getQueueByType(type)
    await queue.pause()
}

export async function resumeQueue(type: QueueType): Promise<void> {
    const queue = getQueueByType(type)
    await queue.resume()
}

function getQueueByType(queue: QueueType): Queue {
    return match(queue)
        .returnType<Queue>()
        .with('ACCOUNTS', () => AccountsQueue)
        .with('BALANCES', () => BalancesQueue)
        .with('COLLECTIONS', () => CollectionsQueue)
        .with('METADATA', () => MetadataQueue)
        .with('TRAITS', () => TraitsQueue)
        .with('TOKENS', () => TokensQueue)
        .with('LISTINGS', () => ListingsQueue)
        .with('VALIDATORS', () => ValidatorsQueue)
        .with('NOMINATION_POOLS', () => NominationPoolsQueue)
        .exhaustive()
}

export function dispatchFetchAllBalances(): void {
    BalancesQueue.add(
        JobsEnum.FETCH_BALANCES,
        { ids: null },
        {
            delay: 6000,
            jobId: 'balances.all',
        }
    ).catch(() => {
        Logger.error('Failed to dispatch a job on balances queue', LOGGER_NAMESPACE)
    })
}

export function dispatchFetchBalances(ids: string[]): void {
    xxhasher
        .createId(ids)
        .then((hashedIds) => {
            BalancesQueue.add(
                JobsEnum.FETCH_BALANCES,
                { ids },
                {
                    delay: 6000,
                    jobId: `balances.${hashedIds}`,
                }
            ).catch(() => {
                Logger.error('Failed to dispatch a job on balances queue', LOGGER_NAMESPACE)
            })
        })
        .catch(() => {
            Logger.error('Failed to hash ids', LOGGER_NAMESPACE)
        })
}

export function dispatchFetchAccounts(ids: string[]): void {
    xxhasher
        .createId(ids)
        .then((hashedIds) => {
            AccountsQueue.add(
                JobsEnum.FETCH_ACCOUNTS,
                { ids },
                {
                    delay: 6000,
                    jobId: `accounts.${hashedIds}`,
                }
            ).catch(() => {
                Logger.error('Failed to dispatch a job on accounts queue', LOGGER_NAMESPACE)
            })
        })
        .catch(() => {
            Logger.error('Failed to hash ids', LOGGER_NAMESPACE)
        })
}

export function dispatchFetchExtra(ids: string[]): void {
    xxhasher
        .createId(ids)
        .then((hashedIds) => {
            CollectionsQueue.add(
                JobsEnum.FETCH_EXTRA,
                { ids },
                {
                    delay: 6000,
                    jobId: `collections.extra.${hashedIds}`,
                }
            ).catch(() => {
                Logger.error('Failed to dispatch a job on collections queue', LOGGER_NAMESPACE)
            })
        })
        .catch(() => {
            Logger.error('Failed to hash ids', LOGGER_NAMESPACE)
        })
}

export function dispatchComputeCollections(): void {
    // This job syncs every single collection in our database
    // There is no point in running it more than once a block
    CollectionsQueue.add(
        JobsEnum.COMPUTE_COLLECTIONS,
        {},
        {
            delay: 6000,
            jobId: 'collections.all',
        }
    ).catch(() => {
        Logger.error('Failed to dispatch a job on collections queue', LOGGER_NAMESPACE)
    })
}

export function dispatchComputeStats(id: string): void {
    CollectionsQueue.add(
        JobsEnum.COMPUTE_STATS,
        { id },
        {
            delay: 6000,
            jobId: `collections.stats.${id}`,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch a job on collections queue', LOGGER_NAMESPACE)
    })
}

export function dispatchComputeRarity({ id, delay = 6000 }: { id: string; delay?: number }): void {
    TokensQueue.add(
        JobsEnum.COMPUTE_RARITY,
        { id },
        {
            delay,
            jobId: `tokens.rarity.${id}`,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch a job on tokens queue', LOGGER_NAMESPACE)
    })
}

export function dispatchComputeTraits(id: string): void {
    TraitsQueue.add(
        JobsEnum.COMPUTE_TRAITS,
        { id },
        {
            delay: 6000,
            jobId: `traits.${id}`,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch a job on traits queue', LOGGER_NAMESPACE)
    })
}

export function dispatchComputeMetadata({
    id,
    type,
    force = false,
    allTokens = false,
    traits = false,
}: {
    id: string
    type: 'token' | 'collection'
    force?: boolean
    allTokens?: boolean
    traits?: boolean
}): void {
    MetadataQueue.add(
        JobsEnum.COMPUTE_METADATA,
        { id, type, force, allTokens, traits },
        {
            delay: 6000,
            jobId: `metadata.${id}`,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch a job on metadata queue', LOGGER_NAMESPACE)
    })
}

export function dispatchSyncAllMetadata(): void {
    MetadataQueue.add(
        JobsEnum.FETCH_COLLECTIONS,
        {},
        {
            delay: 6000,
            jobId: 'metadata.all',
        }
    ).catch(() => {
        Logger.error('Failed to dispatch sync all metadata', LOGGER_NAMESPACE)
    })
}

export function dispatchSyncOffers(): void {
    ListingsQueue.add(
        JobsEnum.FETCH_OFFERS,
        {},
        {
            delay: 6000,
            jobId: 'listings.offers.all',
        }
    ).catch(() => {
        Logger.error('Failed to dispatch sync offers', LOGGER_NAMESPACE)
    })
}

export function dispatchSyncCollectionTransfer(id: string): void {
    CollectionsQueue.add(
        JobsEnum.SYNC_COLLECTION_TRANSFER,
        { id },
        {
            delay: 6000,
            jobId: `collections.sync-transfer.${id}`,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch sync collection transfer', LOGGER_NAMESPACE)
    })
}

export async function dispatchComputeValidators(): Promise<void> {
    const job = await ValidatorsQueue.getJob('validators.all')
    if (job) {
        await ValidatorsQueue.remove(job.id)
    }
    ValidatorsQueue.add(
        JobsEnum.COMPUTE_VALIDATORS,
        {},
        {
            delay: 6000,
            jobId: 'validators.all',
        }
    ).catch(() => {
        Logger.error('Failed to dispatch compute validators', LOGGER_NAMESPACE)
    })
}

export async function dispatchSyncTokens(): Promise<void> {
    const job = await TokensQueue.getJob('tokens.supply.all')
    if (job) {
        await TokensQueue.remove(job.id)
    }
    TokensQueue.add(
        JobsEnum.SYNC_TOKENS,
        {},
        {
            delay: 6000,
            jobId: 'tokens.supply.all',
        }
    ).catch(() => {
        Logger.error('Failed to dispatch sync tokens', LOGGER_NAMESPACE)
    })
}

export function dispatchComputeTokenSupply(id: string): void {
    TokensQueue.add(
        JobsEnum.COMPUTE_TOKEN_SUPPLY,
        { id },
        {
            delay: 6000,
            jobId: `tokens.supply.${id}`,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch compute token supply', LOGGER_NAMESPACE)
    })
}

export function dispatchRefreshPool(id: string): void {
    TokensQueue.add(
        JobsEnum.REFRESH_POOL,
        { id },
        {
            delay: 6000,
            jobId: `tokens.refresh-pool.${id}`,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch refresh pool', LOGGER_NAMESPACE)
    })
}

export async function dispatchSyncValidators(): Promise<void> {
    const job = await ValidatorsQueue.getJob('validators.sync.all')
    if (job) {
        await ValidatorsQueue.remove(job.id)
    }
    ValidatorsQueue.add(
        JobsEnum.SYNC_VALIDATORS,
        {},
        {
            delay: 6000,
            jobId: 'validators.sync.all',
        }
    ).catch(() => {
        Logger.error('Failed to dispatch sync validators', LOGGER_NAMESPACE)
    })
}

export function dispatchSyncChain(fromBlock?: number, toBlock?: number): void {
    ValidatorsQueue.add(
        JobsEnum.SYNC_CHAIN,
        {
            fromBlock,
            toBlock,
        },
        {
            delay: 6000,
            jobId: `chain.sync.${fromBlock}-${toBlock}`,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch sync chain', LOGGER_NAMESPACE)
    })
}

export function dispatchSyncAccounts(): void {
    AccountsQueue.add(
        JobsEnum.SYNC_ALL_ACCOUNTS,
        {},
        {
            delay: 6000,
            jobId: 'accounts.sync.all',
        }
    ).catch(() => {
        Logger.error('Failed to dispatch sync accounts', LOGGER_NAMESPACE)
    })
}

export function dispatchRefreshListings(ids: string[]): void {
    ListingsQueue.add(
        JobsEnum.REFRESH_LISTINGS,
        { ids },
        {
            delay: 6000,
            jobId: `listings.refresh.${ids}`,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch refresh listings', LOGGER_NAMESPACE)
    })
}

export function dispatchComputeTokenBestListing(id: string): void {
    TokensQueue.add(
        JobsEnum.COMPUTE_TOKEN_BEST_LISTING,
        { id },
        {
            delay: 6000,
            jobId: `tokens.best-listing.${id}`,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch compute token best listing', LOGGER_NAMESPACE)
    })
}

export async function dispatchDestroyedPoolsEvents(extrinsicId?: string): Promise<void> {
    const job = await NominationPoolsQueue.getJob('nomination-pools.destroyed-pools-events')
    if (job) {
        await NominationPoolsQueue.remove(job.id)
    }
    NominationPoolsQueue.add(
        JobsEnum.DESTROYED_POOLS_EVENTS,
        { extrinsicId },
        {
            delay: 6000,
            jobId: 'nomination-pools.destroyed-pools-events',
        }
    ).catch(() => {
        Logger.error('Failed to dispatch destroyed pools events', LOGGER_NAMESPACE)
    })
}

export function dispatchSyncPoolRewards(): void {
    NominationPoolsQueue.add(
        JobsEnum.SYNC_POOL_REWARDS,
        {},
        {
            delay: 6000,
            jobId: 'nomination-pools.sync-rewards',
        }
    ).catch(() => {
        Logger.error('Failed to dispatch sync pool rewards', LOGGER_NAMESPACE)
    })
}

export function dispatchComputePoolRewards(id: string): void {
    NominationPoolsQueue.add(
        JobsEnum.COMPUTE_POOL_REWARDS,
        { id },
        {
            delay: 6000,
            jobId: `nomination-pools.compute-rewards.${id}`,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch compute pool rewards', LOGGER_NAMESPACE)
    })
}
