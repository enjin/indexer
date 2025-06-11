import {
    BalancesQueue,
    AccountsQueue,
    CollectionsQueue,
    MetadataQueue,
    TraitsQueue,
    TokensQueue,
    ListingsQueue,
    ValidatorsQueue,
} from './index'
import { JobsEnum } from './constants'
import { xxhasher } from '../util/hasher'
import { match } from 'ts-pattern'
import { type Queue } from 'bullmq'
import { QueueType } from './types'
import { Logger } from '../util/logger'

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

export function dispatchComputeRarity(id: string): void {
    TokensQueue.add(
        JobsEnum.COMPUTE_RARITY,
        { id },
        {
            delay: 6000,
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

export function dispatchComputeMetadata(
    resourceId: string,
    type: 'token' | 'collection',
    force = false,
    allTokens = false
): void {
    MetadataQueue.add(
        JobsEnum.COMPUTE_METADATA,
        { resourceId, type, force, allTokens },
        {
            delay: 6000,
            jobId: `metadata.${resourceId}`,
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

export function dispatchComputeValidators(): void {
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

export function dispatchSyncTokens(): void {
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
