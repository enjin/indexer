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
import { type Queue, type Job } from 'bullmq'
import { QueueType } from '~/queue/types'
import { Logger } from '~/util/logger'

const LOGGER_NAMESPACE = 'sqd:queue'

async function hasExistingJob(job: Job | undefined): Promise<boolean> {
    if (!job?.id) return false
    const isWaitingOrDelayed = (await job.isDelayed()) || (await job.isWaiting())
    const isActive = await job.isActive()
    return isWaitingOrDelayed || isActive
}

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

export async function dispatchFetchAccountBalance(id: string): Promise<void> {
    const jobId = `balances.fetch-balance.${id}`
    const job = await BalancesQueue.getJob(jobId)
    if (job?.id && (await hasExistingJob(job))) return
    if (job?.id) await BalancesQueue.remove(job.id)
    BalancesQueue.add(
        JobsEnum.FETCH_BALANCE,
        { id },
        {
            delay: 6000,
            jobId,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch a job on balances queue', LOGGER_NAMESPACE)
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
        .then(async (hashedIds) => {
            const jobId = `collections.extra.${hashedIds}`
            const job = await CollectionsQueue.getJob(jobId)
            if (job?.id && (await hasExistingJob(job))) return
            if (job?.id) await CollectionsQueue.remove(job.id)
            CollectionsQueue.add(
                JobsEnum.FETCH_EXTRA,
                { ids },
                {
                    delay: 6000,
                    jobId,
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

export async function dispatchComputeStats(id: string): Promise<void> {
    const jobId = `collections.stats.${id}`
    const job = await CollectionsQueue.getJob(jobId)
    if (job?.id && (await hasExistingJob(job))) return
    if (job?.id) await CollectionsQueue.remove(job.id)
    CollectionsQueue.add(
        JobsEnum.COMPUTE_STATS,
        { id },
        {
            delay: 60000,
            jobId,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch a job on collections queue', LOGGER_NAMESPACE)
    })
}

export async function dispatchComputeRarity({ id }: { id: string; delay?: number }): Promise<void> {
    const jobId = `tokens.rarity.${id}`
    const job = await TokensQueue.getJob(jobId)
    if (job?.id && (await hasExistingJob(job))) return
    if (job?.id) await TokensQueue.remove(job.id)
    TokensQueue.add(
        JobsEnum.COMPUTE_RARITY,
        { id },
        {
            delay: 120000,
            jobId,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch a job on tokens queue', LOGGER_NAMESPACE)
    })
}

export async function dispatchComputeTraits(id: string): Promise<void> {
    const jobId = `traits.${id}`
    const job = await TraitsQueue.getJob(jobId)
    if (job?.id && (await hasExistingJob(job))) return
    if (job?.id) await TraitsQueue.remove(job.id)
    TraitsQueue.add(
        JobsEnum.COMPUTE_TRAITS,
        { id },
        {
            delay: 120000,
            jobId,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch a job on traits queue', LOGGER_NAMESPACE)
    })
}

export async function dispatchComputeMetadata({
    id,
    type,
    force = false,
    allTokens = false,
    traits = false,
    delay = 60000,
}: {
    id: string
    type: 'token' | 'collection'
    force?: boolean
    allTokens?: boolean
    traits?: boolean
    delay?: number
}) {
    const jobId = force ? `metadata.force.${id}` : `metadata.${id}`
    const job = await MetadataQueue.getJob(jobId)
    if (job?.id && (await hasExistingJob(job))) return
    if (job?.id) await MetadataQueue.remove(job.id)
    MetadataQueue.add(
        JobsEnum.COMPUTE_METADATA,
        { id, type, force, allTokens, traits },
        {
            delay,
            jobId,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch a job on metadata queue', LOGGER_NAMESPACE)
    })
}

export async function dispatchComputeTokenGroupMetadata(id: string, delay?: number): Promise<void> {
    const jobId = `metadata.tokenGroup.${id}`
    const job = await MetadataQueue.getJob(jobId)
    if (job?.id && (await hasExistingJob(job))) return
    if (job?.id) await MetadataQueue.remove(job.id)
    MetadataQueue.add(
        JobsEnum.COMPUTE_TOKEN_GROUP_METADATA,
        { id },
        {
            delay,
            jobId,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch a job on metadata queue', LOGGER_NAMESPACE)
    })
}

export function dispatchSyncTokenGroupMetadata(): void {
    MetadataQueue.add(
        JobsEnum.SYNC_TOKEN_GROUP_METADATA,
        {},
        {
            delay: 6000,
            jobId: 'metadata.tokenGroup.all',
        }
    ).catch(() => {
        Logger.error('Failed to dispatch sync token group metadata', LOGGER_NAMESPACE)
    })
}

export function dispatchSyncAllMetadata(): void {
    MetadataQueue.add(
        JobsEnum.SYNC_METADATA,
        {},
        {
            delay: 6000,
            jobId: 'metadata.all',
        }
    ).catch(() => {
        Logger.error('Failed to dispatch sync all metadata', LOGGER_NAMESPACE)
    })
}

export function dispatchSyncFuelTankRuleSets(tankId?: string): void {
    const jobId = `metadata.fuelTankRuleSets.sync.${tankId}`
    MetadataQueue.add(JobsEnum.SYNC_FUEL_TANK_RULE_SETS, { tankId }, {
        delay: 6000,
        jobId,
    }).catch(() => {
        Logger.error('Failed to dispatch sync fuel tank rule sets', LOGGER_NAMESPACE)
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
    const jobId = 'validators.all'
    const job = await ValidatorsQueue.getJob(jobId)
    if (job?.id && (await hasExistingJob(job))) return
    if (job?.id) await ValidatorsQueue.remove(job.id)
    ValidatorsQueue.add(
        JobsEnum.COMPUTE_VALIDATORS,
        {},
        {
            delay: 6000,
            jobId,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch compute validators', LOGGER_NAMESPACE)
    })
}

export async function dispatchSyncTokens(): Promise<void> {
    const jobId = 'tokens.supply.all'
    const job = await TokensQueue.getJob(jobId)
    if (job?.id && (await hasExistingJob(job))) return
    if (job?.id) await TokensQueue.remove(job.id)
    TokensQueue.add(
        JobsEnum.SYNC_TOKENS,
        {},
        {
            delay: 6000,
            jobId,
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
    NominationPoolsQueue.add(
        JobsEnum.REFRESH_POOL,
        { id },
        {
            delay: 6000,
            jobId: `nomination-pools.refresh-pool.${id}`,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch refresh pool', LOGGER_NAMESPACE)
    })
}

export async function dispatchSyncValidators(): Promise<void> {
    const jobId = 'validators.sync.all'
    const job = await ValidatorsQueue.getJob(jobId)
    if (job?.id && (await hasExistingJob(job))) return
    if (job?.id) await ValidatorsQueue.remove(job.id)
    ValidatorsQueue.add(
        JobsEnum.SYNC_VALIDATORS,
        {},
        {
            delay: 6000,
            jobId,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch sync validators', LOGGER_NAMESPACE)
    })
}

export async function dispatchSyncActiveValidators(): Promise<void> {
    const job = await ValidatorsQueue.getJob('validators.sync.active.all')
    if (job?.id && (await hasExistingJob(job))) return
    if (job?.id) await ValidatorsQueue.remove(job.id)
    ValidatorsQueue.add(
        JobsEnum.SYNC_ACTIVE_VALIDATORS,
        {},
        {
            delay: 6000,
            jobId: 'validators.sync.active.all',
        }
    ).catch(() => {
        Logger.error('Failed to dispatch sync active validators', LOGGER_NAMESPACE)
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

export async function dispatchImportBlock(blockNumber: number, toBlock?: number): Promise<void> {
    const jobId = `chain.import.${blockNumber}-${toBlock ?? blockNumber}`
    const job = await ValidatorsQueue.getJob(jobId)
    if (job?.id && (await hasExistingJob(job))) return
    ValidatorsQueue.add(
        JobsEnum.IMPORT_BLOCK,
        {
            blockNumber,
            toBlock,
        },
        {
            delay: 0,
            jobId,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch import block', LOGGER_NAMESPACE)
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
            delay: 20000,
            jobId: `tokens.best-listing.${id}`,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch compute token best listing', LOGGER_NAMESPACE)
    })
}

export function dispatchComputeTokenInfusion(id: string): void {
    TokensQueue.add(
        JobsEnum.COMPUTE_TOKEN_INFUSION,
        { id },
        {
            delay: 6000,
            jobId: `tokens.infusion.${id}`,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch compute token infusion', LOGGER_NAMESPACE)
    })
}

export function dispatchComputeTokenCreationSupply(id: string): void {
    TokensQueue.add(
        JobsEnum.COMPUTE_TOKEN_CREATION_SUPPLY,
        { id },
        {
            delay: 6000,
            jobId: `tokens.creation-supply.${id}`,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch compute token creation supply', LOGGER_NAMESPACE)
    })
}

export function dispatchSyncPools(): void {
    NominationPoolsQueue.add(
        JobsEnum.SYNC_POOLS,
        {},
        {
            delay: 6000,
            jobId: 'nomination-pools.sync-pools',
        }
    ).catch(() => {
        Logger.error('Failed to dispatch sync pools', LOGGER_NAMESPACE)
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

export function dispatchComputePoolMemberRewards(id: string): void {
    NominationPoolsQueue.add(
        JobsEnum.COMPUTE_POOL_MEMBER_REWARDS,
        { id },
        {
            delay: 6000,
            jobId: `nomination-pools.compute-member-rewards.${id}`,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch compute pool member rewards', LOGGER_NAMESPACE)
    })
}

export function dispatchComputePoolOffers(id: string): void {
    NominationPoolsQueue.add(
        JobsEnum.COMPUTE_POOL_OFFERS,
        { id },
        {
            delay: 6000,
            jobId: `nomination-pools.compute-pool-offers.${id}`,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch compute pool offers', LOGGER_NAMESPACE)
    })
}

export function dispatchBackfillPoolMemberRewardsEraIndex(): void {
    NominationPoolsQueue.add(
        JobsEnum.BACKFILL_POOL_MEMBER_REWARDS_ERA_INDEX,
        {},
        {
            jobId: 'nomination-pools.backfill-member-rewards-era-index',
        }
    ).catch(() => {
        Logger.error('Failed to dispatch backfill pool member rewards era index', LOGGER_NAMESPACE)
    })
}

export async function dispatchComputeAccountStats(id: string): Promise<void> {
    const jobId = `accounts.compute-stats.${id}`
    const job = await AccountsQueue.getJob(jobId)
    if (job?.id && (await hasExistingJob(job))) return
    if (job?.id) await AccountsQueue.remove(job.id)
    AccountsQueue.add(
        JobsEnum.COMPUTE_ACCOUNT_STATS,
        { id },
        {
            delay: 24000,
            jobId,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch compute account stats', LOGGER_NAMESPACE)
    })
}

export function dispatchSyncUserInfusions(): void {
    AccountsQueue.add(
        JobsEnum.SYNC_USER_INFUSIONS,
        {},
        {
            delay: 6000,
            jobId: 'accounts.sync-user-infusions',
        }
    ).catch(() => {
        Logger.error('Failed to dispatch sync user infusions', LOGGER_NAMESPACE)
    })
}
