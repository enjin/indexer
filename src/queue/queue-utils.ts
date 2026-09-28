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
import { addRefreshJob } from '~/queue/refresh-job'
import { QueueType } from '~/queue/types'
import { Logger } from '~/util/logger'
import type { BackfillEphemeralTokensData } from '~/worker/jobs/tokens/backfill-ephemeral-tokens'
import type { BackfillCancellationListingIdsData } from '~/worker/jobs/listings/backfill-cancellation-listing-ids'

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

/**
 * Snapshot every job in the `active` list, delete them (which also removes
 * their lock keys left over from a previous worker process), and re-add them
 * to the queue with the same `jobId`, name, data, and options.
 *
 * This is meant to be called once at worker startup so that jobs left hanging
 * in the `active` state from a crashed/restarted worker are picked up again
 * immediately instead of having to wait for `stalledInterval` and then
 * potentially failing with "UnrecoverableError: job stalled more than
 * allowable limit" once `maxStalledCount` is exceeded.
 */
export async function requeueActiveJobs(queue: Queue): Promise<number> {
    const activeJobs = await queue.getJobs(['active'])
    if (activeJobs.length === 0) return 0

    type Snapshot = {
        name: string
        data: unknown
        opts: Record<string, unknown>
    }

    const snapshots: Snapshot[] = activeJobs
        .filter((j) => j.id)
        .map((j) => {
            // Drop BullMQ-managed fields so Queue.add can re-assign them.
            const { timestamp, delay, ...restOpts } = j.opts as Record<string, unknown>
            void timestamp
            void delay
            const jobId = (restOpts.jobId as string | undefined) ?? j.id ?? j.name
            return {
                name: j.name,
                data: j.data,
                opts: { ...restOpts, jobId },
            }
        })

    // Remove every active job (this deletes the job hash + :lock key too).
    await queue.clean(0, 10_000, 'active')

    for (const snap of snapshots) {
        try {
            await queue.add(snap.name, snap.data, snap.opts)
        } catch (err) {
            Logger.error(
                `Failed to re-add active job ${snap.opts.jobId as string} on ${queue.name}: ${String(err)}`,
                LOGGER_NAMESPACE
            )
        }
    }

    return snapshots.length
}

/**
 * Re-queue active jobs across every queue managed by this indexer. Call this
 * once, from the worker process entry point, before constructing any workers.
 */
export async function requeueAllActiveJobs(): Promise<void> {
    const queues: Queue[] = [
        AccountsQueue,
        BalancesQueue,
        CollectionsQueue,
        ListingsQueue,
        MetadataQueue,
        TokensQueue,
        TraitsQueue,
        ValidatorsQueue,
        NominationPoolsQueue,
    ]

    await Promise.all(
        queues.map(async (q) => {
            try {
                const count = await requeueActiveJobs(q)
                if (count > 0) {
                    Logger.info(`Requeued ${count} active job(s) on ${q.name}`, LOGGER_NAMESPACE)
                }
            } catch (err) {
                Logger.error(`Failed to requeue active jobs on ${q.name}: ${String(err)}`, LOGGER_NAMESPACE)
            }
        })
    )
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
    addRefreshJob(
        BalancesQueue,
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
            addRefreshJob(
                BalancesQueue,
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
    await addRefreshJob(
        BalancesQueue,
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
            addRefreshJob(
                AccountsQueue,
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

export function dispatchComputeCollections(): void {
    // This job syncs every single collection in our database
    // There is no point in running it more than once a block
    addRefreshJob(
        CollectionsQueue,
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
    await addRefreshJob(
        CollectionsQueue,
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
    await addRefreshJob(
        TokensQueue,
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
    await addRefreshJob(
        TraitsQueue,
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

export function dispatchLogTraitTokenHotChanges({
    tokenId,
    delete: shouldDelete = false,
}: {
    tokenId: string
    delete?: boolean
}): void {
    const jobId = shouldDelete ? `traits.hotChanges.${tokenId}.delete` : `traits.hotChanges.${tokenId}`
    TraitsQueue.add(JobsEnum.LOG_TRAIT_TOKEN_HOT_CHANGES, { tokenId, delete: shouldDelete }, { jobId }).catch(() => {
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
    await addRefreshJob(
        MetadataQueue,
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

export async function dispatchComputeTokenGroupMetadata(id: string, delay?: number, force = false): Promise<void> {
    const jobId = force ? `metadata.tokenGroup.force.${id}` : `metadata.tokenGroup.${id}`
    await addRefreshJob(
        MetadataQueue,
        JobsEnum.COMPUTE_TOKEN_GROUP_METADATA,
        { id, force },
        {
            delay,
            jobId,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch a job on metadata queue', LOGGER_NAMESPACE)
    })
}

export function dispatchSyncTokenGroupMetadata(): void {
    addRefreshJob(
        MetadataQueue,
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
    addRefreshJob(
        MetadataQueue,
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
    addRefreshJob(
        MetadataQueue,
        JobsEnum.SYNC_FUEL_TANK_RULE_SETS,
        { tankId },
        {
            delay: 6000,
            jobId,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch sync fuel tank rule sets', LOGGER_NAMESPACE)
    })
}

export function dispatchSyncOffers(): void {
    addRefreshJob(
        ListingsQueue,
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
    addRefreshJob(
        CollectionsQueue,
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
    await addRefreshJob(
        ValidatorsQueue,
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
    await addRefreshJob(
        TokensQueue,
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
    addRefreshJob(
        TokensQueue,
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
    addRefreshJob(
        NominationPoolsQueue,
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
    await addRefreshJob(
        ValidatorsQueue,
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
    await addRefreshJob(
        ValidatorsQueue,
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

export function dispatchSyncChainInfosFromMatrix(blockNumberGte?: number): void {
    ValidatorsQueue.add(
        JobsEnum.SYNC_CHAIN_INFOS_FROM_MATRIX,
        { blockNumberGte },
        {
            delay: 6000,
            jobId: `chain-infos.matrix.sync.${blockNumberGte ?? 'default'}`,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch sync chain infos from matrix', LOGGER_NAMESPACE)
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

export function dispatchBackfillExtrinsicBlockRelation(options?: {
    batchSize?: number
    blockSpan?: number
    fromBlock?: number
    toBlock?: number
}): void {
    const hasRange = typeof options?.fromBlock === 'number' && typeof options.toBlock === 'number'
    const jobId = hasRange
        ? `validators.backfill-extrinsic-block.${options.fromBlock}-${options.toBlock}`
        : `validators.backfill-extrinsic.dispatch.${Date.now()}`
    ValidatorsQueue.add(JobsEnum.BACKFILL_EXTRINSIC_BLOCK_RELATION, options ?? {}, { jobId }).catch(() => {
        Logger.error('Failed to dispatch backfill extrinsic block relation', LOGGER_NAMESPACE)
    })
}

export function dispatchSyncAccounts(): void {
    addRefreshJob(
        AccountsQueue,
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
    addRefreshJob(
        ListingsQueue,
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

export async function dispatchBackfillCancellationListingIds(
    data: BackfillCancellationListingIdsData = {}
): Promise<void> {
    const cursor = data.afterId ?? 'start'
    const jobId = `listings.backfill-cancellation-listing-ids.${cursor}`
    const job = await ListingsQueue.getJob(jobId)
    if (job?.id && (await hasExistingJob(job))) return
    if (job?.id) await ListingsQueue.remove(job.id)

    await ListingsQueue.add(JobsEnum.BACKFILL_CANCELLATION_LISTING_IDS, data, { jobId })
}

export async function dispatchComputeTokenBestListing(id: string): Promise<void> {
    const jobId = `tokens.best-listing.${id}`
    await addRefreshJob(
        TokensQueue,
        JobsEnum.COMPUTE_TOKEN_BEST_LISTING,
        { id },
        {
            delay: 60000,
            jobId,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch compute token best listing', LOGGER_NAMESPACE)
    })
}

export function dispatchComputeTokenInfusion(id: string): void {
    addRefreshJob(
        TokensQueue,
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
    addRefreshJob(
        TokensQueue,
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
    addRefreshJob(
        NominationPoolsQueue,
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
    addRefreshJob(
        NominationPoolsQueue,
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
    addRefreshJob(
        NominationPoolsQueue,
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
    addRefreshJob(
        NominationPoolsQueue,
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

export function dispatchSyncMembersBonded(): void {
    addRefreshJob(
        NominationPoolsQueue,
        JobsEnum.SYNC_MEMBERS_BONDED,
        {},
        {
            jobId: 'nomination-pools.sync-members-bonded',
        }
    ).catch(() => {
        Logger.error('Failed to dispatch sync members bonded', LOGGER_NAMESPACE)
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

export function dispatchBackfillPoolMemberRewards(fromBlock?: number): void {
    NominationPoolsQueue.add(
        JobsEnum.BACKFILL_POOL_MEMBER_REWARDS,
        { fromBlock },
        {
            jobId: `nomination-pools.backfill-member-rewards.${fromBlock ?? 'auto'}`,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch backfill pool member rewards', LOGGER_NAMESPACE)
    })
}

export async function dispatchComputeAccountStats(id: string): Promise<void> {
    const jobId = `accounts.compute-stats.${id}`
    await addRefreshJob(
        AccountsQueue,
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
    addRefreshJob(
        AccountsQueue,
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

export function dispatchComputeTokenNativeMetadata(id: string): void {
    addRefreshJob(
        TokensQueue,
        JobsEnum.COMPUTE_TOKEN_NATIVE_METADATA,
        { id },
        {
            delay: 6000,
            jobId: `tokens.native-metadata.${id}`,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch compute token native metadata', LOGGER_NAMESPACE)
    })
}

export function dispatchMigrateTokenGroupIds(id: string): void {
    TokensQueue.add(
        JobsEnum.MIGRATE_TOKEN_GROUP_IDS,
        { id },
        {
            jobId: `tokens.migrate-token-group-ids.${id}`,
        }
    ).catch(() => {
        Logger.error('Failed to dispatch migrate token group IDs', LOGGER_NAMESPACE)
    })
}

export async function dispatchBackfillEphemeralTokens(data: BackfillEphemeralTokensData = {}): Promise<void> {
    const cursor = data.afterId ?? 'start'
    const jobId = `tokens.backfill-ephemeral.${cursor}`
    const job = await TokensQueue.getJob(jobId)
    if (job?.id && (await hasExistingJob(job))) return
    if (job?.id) await TokensQueue.remove(job.id)

    await TokensQueue.add(JobsEnum.BACKFILL_EPHEMERAL_TOKENS, data, { jobId })
}
