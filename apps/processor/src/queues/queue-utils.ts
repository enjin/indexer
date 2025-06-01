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
import { xxhasher } from '../utils/hasher'
import { match } from 'ts-pattern'
import { type Queue } from 'bullmq'
import { QueueType } from './types'
import { logger } from '../utils/helpers'

const log = logger('sqd:worker')

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
        log.error('Failed to dispatch a job on balances queue')
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
                log.error('Failed to dispatch a job on balances queue')
            })
        })
        .catch(() => {
            log.error('Failed to hash ids')
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
                log.error('Failed to dispatch a job on accounts queue')
            })
        })
        .catch(() => {
            log.error('Failed to hash ids')
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
                log.error('Failed to dispatch a job on collections queue')
            })
        })
        .catch(() => {
            log.error('Failed to hash ids')
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
        log.error('Failed to dispatch a job on collections queue')
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
        log.error('Failed to dispatch a job on collections queue')
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
        log.error('Failed to dispatch a job on tokens queue')
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
        log.error('Failed to dispatch a job on traits queue')
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
        log.error('Failed to dispatch a job on metadata queue')
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
        log.error('Failed to dispatch sync all metadata')
    })
}
