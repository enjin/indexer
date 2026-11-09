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
import { addRefreshJob } from '~/queue/refresh-job'
import { QueueType } from '~/queue/types'
import { Logger } from '~/util/logger'
import type { BackfillEphemeralTokensData } from '~/worker/jobs/tokens/backfill-ephemeral-tokens'
import type { BackfillCancellationListingIdsData } from '~/worker/jobs/listings/backfill-cancellation-listing-ids'
import type { BackfillGovernanceData } from '~/worker/jobs/validators/backfill-governance'
import type { ImportGovernanceStateData } from '~/worker/jobs/validators/import-governance-state'
import type { BackfillLoanExtensionActivityData } from '~/worker/jobs/tokens/backfill-loan-extension-activity'
import { randomUUID } from 'node:crypto'

const LOGGER_NAMESPACE = 'sqd:queue'

type RefreshJobOptions = Parameters<typeof addRefreshJob>[3]

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

function logDispatchFailure(message: string, error: unknown): void {
    const cause = error instanceof Error ? error.message : String(error)
    Logger.error(`${message}: ${cause}`, LOGGER_NAMESPACE)
}

/** Enqueue a refresh job. Failures are logged with their cause and never thrown, so indexing continues. */
async function enqueueRefresh(
    queue: Queue,
    name: JobsEnum,
    data: unknown,
    options: RefreshJobOptions,
    failureMessage: string
): Promise<void> {
    try {
        await addRefreshJob(queue, name, data, options)
    } catch (error) {
        logDispatchFailure(failureMessage, error)
    }
}

/** Hash `ids` into a stable job id suffix, then hand it to `enqueue`. A hashing failure is logged. */
function enqueueForIds(ids: string[], hashFailureMessage: string, enqueue: (hashedIds: string) => Promise<void>): void {
    void xxhasher.createId(ids).then(enqueue, (error: unknown) => {
        logDispatchFailure(hashFailureMessage, error)
    })
}

/** Add a job deduplicated by `logicalId`, under a unique physical job id. Failures propagate to the caller. */
async function addDeduplicatedJob(queue: Queue, name: JobsEnum, data: unknown, logicalId: string): Promise<void> {
    await queue.add(name, data, {
        jobId: `${logicalId}.${randomUUID()}`,
        deduplication: { id: logicalId },
    })
}

export function dispatchFetchAllBalances(): void {
    void enqueueRefresh(
        BalancesQueue,
        JobsEnum.FETCH_BALANCES,
        { ids: null },
        { delay: 6000, jobId: 'balances.all' },
        'Failed to dispatch a job on balances queue'
    )
}

export function dispatchFetchBalances(ids: string[]): void {
    enqueueForIds(ids, 'Failed to hash ids', (hashedIds) =>
        enqueueRefresh(
            BalancesQueue,
            JobsEnum.FETCH_BALANCES,
            { ids },
            { delay: 6000, jobId: `balances.${hashedIds}` },
            'Failed to dispatch a job on balances queue'
        )
    )
}

export async function dispatchFetchAccountBalance(id: string): Promise<void> {
    await enqueueRefresh(
        BalancesQueue,
        JobsEnum.FETCH_BALANCE,
        { id },
        { delay: 6000, jobId: `balances.fetch-balance.${id}` },
        'Failed to dispatch a job on balances queue'
    )
}

export function dispatchFetchAccounts(ids: string[]): void {
    enqueueForIds(ids, 'Failed to hash ids', (hashedIds) =>
        enqueueRefresh(
            AccountsQueue,
            JobsEnum.FETCH_ACCOUNTS,
            { ids },
            { delay: 6000, jobId: `accounts.${hashedIds}` },
            'Failed to dispatch a job on accounts queue'
        )
    )
}

export function dispatchComputeCollections(): void {
    // This job syncs every single collection in our database
    // There is no point in running it more than once a block
    void enqueueRefresh(
        CollectionsQueue,
        JobsEnum.COMPUTE_COLLECTIONS,
        {},
        { delay: 6000, jobId: 'collections.all' },
        'Failed to dispatch a job on collections queue'
    )
}

export function dispatchComputeCollectionExtra(ids: string[]): void {
    enqueueForIds(ids, 'Failed to hash collection ids', (hashedIds) =>
        enqueueRefresh(
            CollectionsQueue,
            JobsEnum.FETCH_EXTRA,
            { ids },
            { delay: 6000, jobId: `collections.extra.${hashedIds}` },
            'Failed to dispatch collection extra job'
        )
    )
}

export async function dispatchComputeStats(id: string): Promise<void> {
    await enqueueRefresh(
        CollectionsQueue,
        JobsEnum.COMPUTE_STATS,
        { id },
        { delay: 60000, jobId: `collections.stats.${id}` },
        'Failed to dispatch a job on collections queue'
    )
}

export async function dispatchComputeRarity({ id }: { id: string }): Promise<void> {
    await enqueueRefresh(
        TokensQueue,
        JobsEnum.COMPUTE_RARITY,
        { id },
        { delay: 120000, jobId: `tokens.rarity.${id}` },
        'Failed to dispatch a job on tokens queue'
    )
}

export async function dispatchComputeTraits(id: string): Promise<void> {
    await enqueueRefresh(
        TraitsQueue,
        JobsEnum.COMPUTE_TRAITS,
        { id },
        { delay: 120000, jobId: `traits.${id}` },
        'Failed to dispatch a job on traits queue'
    )
}

export function dispatchLogTraitTokenHotChanges({
    tokenId,
    delete: shouldDelete = false,
}: {
    tokenId: string
    delete?: boolean
}): void {
    const jobId = shouldDelete ? `traits.hotChanges.${tokenId}.delete` : `traits.hotChanges.${tokenId}`
    void enqueueRefresh(
        TraitsQueue,
        JobsEnum.LOG_TRAIT_TOKEN_HOT_CHANGES,
        { tokenId, delete: shouldDelete },
        { jobId, keepLastIfActive: false },
        'Failed to dispatch a job on traits queue'
    )
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
    const baseJobId = force ? `metadata.force.${id}` : `metadata.${id}`
    // Pending jobs retain the first payload, so a collection-only job cannot stand in for a fan-out.
    const jobId = type === 'collection' && allTokens ? `${baseJobId}.all-tokens` : baseJobId
    await enqueueRefresh(
        MetadataQueue,
        JobsEnum.COMPUTE_METADATA,
        { id, type, force, allTokens, traits },
        { delay, jobId },
        'Failed to dispatch a job on metadata queue'
    )
}

export async function dispatchComputeTokenGroupMetadata(id: string, delay?: number, force = false): Promise<void> {
    const jobId = force ? `metadata.tokenGroup.force.${id}` : `metadata.tokenGroup.${id}`
    await enqueueRefresh(
        MetadataQueue,
        JobsEnum.COMPUTE_TOKEN_GROUP_METADATA,
        { id, force },
        { delay, jobId },
        'Failed to dispatch a job on metadata queue'
    )
}

export function dispatchSyncTokenGroupMetadata(): void {
    void enqueueRefresh(
        MetadataQueue,
        JobsEnum.SYNC_TOKEN_GROUP_METADATA,
        {},
        { delay: 6000, jobId: 'metadata.tokenGroup.all' },
        'Failed to dispatch sync token group metadata'
    )
}

export function dispatchSyncAllMetadata(): void {
    void enqueueRefresh(
        MetadataQueue,
        JobsEnum.SYNC_METADATA,
        {},
        { delay: 6000, jobId: 'metadata.all' },
        'Failed to dispatch sync all metadata'
    )
}

export function dispatchSyncFuelTankRuleSets(tankId?: string): void {
    void enqueueRefresh(
        MetadataQueue,
        JobsEnum.SYNC_FUEL_TANK_RULE_SETS,
        { tankId },
        { delay: 6000, jobId: `metadata.fuelTankRuleSets.sync.${tankId}` },
        'Failed to dispatch sync fuel tank rule sets'
    )
}

export function dispatchSyncOffers(): void {
    void enqueueRefresh(
        ListingsQueue,
        JobsEnum.FETCH_OFFERS,
        {},
        { delay: 6000, jobId: 'listings.offers.all' },
        'Failed to dispatch sync offers'
    )
}

export function dispatchSyncCollectionTransfer(id: string): void {
    void enqueueRefresh(
        CollectionsQueue,
        JobsEnum.SYNC_COLLECTION_TRANSFER,
        { id },
        { delay: 6000, jobId: `collections.sync-transfer.${id}` },
        'Failed to dispatch sync collection transfer'
    )
}

export async function dispatchComputeValidators(): Promise<void> {
    await enqueueRefresh(
        ValidatorsQueue,
        JobsEnum.COMPUTE_VALIDATORS,
        {},
        { delay: 6000, jobId: 'validators.all' },
        'Failed to dispatch compute validators'
    )
}

export async function dispatchSyncTokens(): Promise<void> {
    await enqueueRefresh(
        TokensQueue,
        JobsEnum.SYNC_TOKENS,
        {},
        { delay: 6000, jobId: 'tokens.supply.all' },
        'Failed to dispatch sync tokens'
    )
}

export function dispatchComputeTokenSupply(id: string): void {
    void enqueueRefresh(
        TokensQueue,
        JobsEnum.COMPUTE_TOKEN_SUPPLY,
        { id },
        { delay: 6000, jobId: `tokens.supply.${id}` },
        'Failed to dispatch compute token supply'
    )
}

export function dispatchRefreshPool(id: string): void {
    void enqueueRefresh(
        NominationPoolsQueue,
        JobsEnum.REFRESH_POOL,
        { id },
        { delay: 6000, jobId: `nomination-pools.refresh-pool.${id}` },
        'Failed to dispatch refresh pool'
    )
}

export async function dispatchSyncValidators(): Promise<void> {
    await enqueueRefresh(
        ValidatorsQueue,
        JobsEnum.SYNC_VALIDATORS,
        {},
        { delay: 6000, jobId: 'validators.sync.all' },
        'Failed to dispatch sync validators'
    )
}

export async function dispatchSyncActiveValidators(): Promise<void> {
    await enqueueRefresh(
        ValidatorsQueue,
        JobsEnum.SYNC_ACTIVE_VALIDATORS,
        {},
        { delay: 6000, jobId: 'validators.sync.active.all' },
        'Failed to dispatch sync active validators'
    )
}

export function dispatchSyncChain(fromBlock?: number, toBlock?: number): void {
    void enqueueRefresh(
        ValidatorsQueue,
        JobsEnum.SYNC_CHAIN,
        { fromBlock, toBlock },
        { delay: 6000, jobId: `chain.sync.${fromBlock}-${toBlock}`, keepLastIfActive: false },
        'Failed to dispatch sync chain'
    )
}

export function dispatchSyncChainInfosFromMatrix(blockNumberGte?: number): void {
    void enqueueRefresh(
        ValidatorsQueue,
        JobsEnum.SYNC_CHAIN_INFOS_FROM_MATRIX,
        { blockNumberGte },
        { delay: 6000, jobId: `chain-infos.matrix.sync.${blockNumberGte ?? 'default'}`, keepLastIfActive: false },
        'Failed to dispatch sync chain infos from matrix'
    )
}

export async function dispatchImportBlock(blockNumber: number, toBlock?: number): Promise<void> {
    await enqueueRefresh(
        ValidatorsQueue,
        JobsEnum.IMPORT_BLOCK,
        { blockNumber, toBlock },
        { delay: 0, jobId: `chain.import.${blockNumber}-${toBlock ?? blockNumber}`, keepLastIfActive: false },
        'Failed to dispatch import block'
    )
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
    void enqueueRefresh(
        ValidatorsQueue,
        JobsEnum.BACKFILL_EXTRINSIC_BLOCK_RELATION,
        options ?? {},
        { jobId, keepLastIfActive: false },
        'Failed to dispatch backfill extrinsic block relation'
    )
}

export async function dispatchBackfillEventPosition(data?: { batchSize?: number }): Promise<void> {
    await addDeduplicatedJob(
        ValidatorsQueue,
        JobsEnum.BACKFILL_EVENT_POSITION,
        data ?? {},
        'validators.backfill-event-position'
    )
}

export async function dispatchBackfillLoanExtensionActivity(
    data: BackfillLoanExtensionActivityData = {}
): Promise<void> {
    await addDeduplicatedJob(
        TokensQueue,
        JobsEnum.BACKFILL_LOAN_EXTENSION_ACTIVITY,
        data,
        'tokens.backfill-loan-extension-activity'
    )
}

/** Explicitly requested historical repair, bounded to at most 100,000 blocks per job. */
export async function dispatchBackfillEventTimestamps(data: {
    fromBlock: number
    toBlock: number
    batchSize?: number
}): Promise<void> {
    await addDeduplicatedJob(
        ValidatorsQueue,
        JobsEnum.BACKFILL_EVENT_TIMESTAMPS,
        data,
        `validators.backfill-event-timestamps.${data.fromBlock}-${data.toBlock}`
    )
}

export function dispatchBackfillChainFinality(options?: {
    fromBlock?: number
    toBlock?: number
    blockSpan?: number
}): void {
    const hasRange = typeof options?.fromBlock === 'number' && typeof options.toBlock === 'number'
    const jobId = hasRange
        ? `validators.backfill-chain-finality.${options.fromBlock}-${options.toBlock}`
        : `validators.backfill-chain-finality.dispatch.${Date.now()}`
    ValidatorsQueue.add(JobsEnum.BACKFILL_CHAIN_FINALITY, options ?? {}, { jobId }).catch((error: unknown) => {
        logDispatchFailure('Failed to dispatch backfill chain finality', error)
    })
}

export async function dispatchBackfillGovernance(data: BackfillGovernanceData): Promise<void> {
    if (
        !Number.isSafeInteger(data.fromBlock) ||
        !Number.isSafeInteger(data.toBlock) ||
        data.fromBlock < 0 ||
        data.fromBlock > data.toBlock ||
        typeof data.genesisHash !== 'string' ||
        !/^0x[0-9a-f]{64}$/i.test(data.genesisHash)
    ) {
        throw new Error('Governance backfill requires a valid chain genesis hash and inclusive block range')
    }
    await addDeduplicatedJob(
        ValidatorsQueue,
        JobsEnum.BACKFILL_GOVERNANCE,
        data,
        `validators.backfill-governance.${data.genesisHash.slice(2, 10)}.${data.fromBlock}-${data.toBlock}`
    )
}

export async function dispatchImportGovernanceState(data: ImportGovernanceStateData): Promise<void> {
    if (typeof data.genesisHash !== 'string' || !/^0x[0-9a-f]{64}$/i.test(data.genesisHash)) {
        throw new Error('Governance state import requires a valid chain genesis hash')
    }
    await addDeduplicatedJob(
        ValidatorsQueue,
        JobsEnum.IMPORT_GOVERNANCE_STATE,
        data,
        `validators.import-governance-state.${data.genesisHash.slice(2, 10)}`
    )
}

export function dispatchSyncAccounts(): void {
    void enqueueRefresh(
        AccountsQueue,
        JobsEnum.SYNC_ALL_ACCOUNTS,
        {},
        { delay: 6000, jobId: 'accounts.sync.all' },
        'Failed to dispatch sync accounts'
    )
}

export function dispatchRefreshListings(ids: string[]): void {
    void enqueueRefresh(
        ListingsQueue,
        JobsEnum.REFRESH_LISTINGS,
        { ids },
        { delay: 6000, jobId: `listings.refresh.${ids}` },
        'Failed to dispatch refresh listings'
    )
}

export async function dispatchBackfillCancellationListingIds(
    data: BackfillCancellationListingIdsData = {}
): Promise<void> {
    const cursor = data.afterId ?? 'start'
    const jobId = `listings.backfill-cancellation-listing-ids.${cursor}`
    await addRefreshJob(ListingsQueue, JobsEnum.BACKFILL_CANCELLATION_LISTING_IDS, data, {
        jobId,
        keepLastIfActive: false,
    })
}

export async function dispatchComputeTokenBestListing(id: string): Promise<void> {
    await enqueueRefresh(
        TokensQueue,
        JobsEnum.COMPUTE_TOKEN_BEST_LISTING,
        { id },
        { delay: 60000, jobId: `tokens.best-listing.${id}` },
        'Failed to dispatch compute token best listing'
    )
}

export function dispatchComputeTokenInfusion(id: string): void {
    void enqueueRefresh(
        TokensQueue,
        JobsEnum.COMPUTE_TOKEN_INFUSION,
        { id },
        { delay: 6000, jobId: `tokens.infusion.${id}` },
        'Failed to dispatch compute token infusion'
    )
}

export function dispatchComputeTokenCreationSupply(id: string): void {
    void enqueueRefresh(
        TokensQueue,
        JobsEnum.COMPUTE_TOKEN_CREATION_SUPPLY,
        { id },
        { delay: 6000, jobId: `tokens.creation-supply.${id}` },
        'Failed to dispatch compute token creation supply'
    )
}

export function dispatchSyncPools(): void {
    void enqueueRefresh(
        NominationPoolsQueue,
        JobsEnum.SYNC_POOLS,
        {},
        { delay: 6000, jobId: 'nomination-pools.sync-pools' },
        'Failed to dispatch sync pools'
    )
}

export function dispatchComputePoolRewards(id: string): void {
    void enqueueRefresh(
        NominationPoolsQueue,
        JobsEnum.COMPUTE_POOL_REWARDS,
        { id },
        { delay: 6000, jobId: `nomination-pools.compute-rewards.${id}` },
        'Failed to dispatch compute pool rewards'
    )
}

export function dispatchComputePoolMemberRewards(id: string): void {
    void enqueueRefresh(
        NominationPoolsQueue,
        JobsEnum.COMPUTE_POOL_MEMBER_REWARDS,
        { id },
        { delay: 6000, jobId: `nomination-pools.compute-member-rewards.${id}` },
        'Failed to dispatch compute pool member rewards'
    )
}

export function dispatchComputePoolOffers(id: string): void {
    void enqueueRefresh(
        NominationPoolsQueue,
        JobsEnum.COMPUTE_POOL_OFFERS,
        { id },
        { delay: 6000, jobId: `nomination-pools.compute-pool-offers.${id}` },
        'Failed to dispatch compute pool offers'
    )
}

export function dispatchSyncMembersBonded(): void {
    void enqueueRefresh(
        NominationPoolsQueue,
        JobsEnum.SYNC_MEMBERS_BONDED,
        {},
        { jobId: 'nomination-pools.sync-members-bonded' },
        'Failed to dispatch sync members bonded'
    )
}

export function dispatchSyncUnbondingEras(): void {
    void enqueueRefresh(
        NominationPoolsQueue,
        JobsEnum.SYNC_UNBONDING_ERAS,
        {},
        { delay: 6000, jobId: 'nomination-pools.sync-unbonding-eras' },
        'Failed to dispatch sync unbonding eras'
    )
}

export function dispatchSyncAccountUnbondingEras(id: string): void {
    void enqueueRefresh(
        NominationPoolsQueue,
        JobsEnum.SYNC_ACCOUNT_UNBONDING_ERAS,
        { id },
        { delay: 6000, jobId: `nomination-pools.sync-account-unbonding-eras.${id}` },
        'Failed to dispatch sync account unbonding eras'
    )
}

export function dispatchBackfillPoolMemberRewardsEraIndex(): void {
    void enqueueRefresh(
        NominationPoolsQueue,
        JobsEnum.BACKFILL_POOL_MEMBER_REWARDS_ERA_INDEX,
        {},
        { jobId: 'nomination-pools.backfill-member-rewards-era-index', keepLastIfActive: false },
        'Failed to dispatch backfill pool member rewards era index'
    )
}

export function dispatchBackfillPoolMemberRewards(fromBlock?: number): void {
    void enqueueRefresh(
        NominationPoolsQueue,
        JobsEnum.BACKFILL_POOL_MEMBER_REWARDS,
        { fromBlock },
        { jobId: `nomination-pools.backfill-member-rewards.${fromBlock ?? 'auto'}`, keepLastIfActive: false },
        'Failed to dispatch backfill pool member rewards'
    )
}

export async function dispatchComputeAccountStats(id: string): Promise<void> {
    await enqueueRefresh(
        AccountsQueue,
        JobsEnum.COMPUTE_ACCOUNT_STATS,
        { id },
        { delay: 24000, jobId: `accounts.compute-stats.${id}` },
        'Failed to dispatch compute account stats'
    )
}

export function dispatchSyncUserInfusions(): void {
    void enqueueRefresh(
        AccountsQueue,
        JobsEnum.SYNC_USER_INFUSIONS,
        {},
        { delay: 6000, jobId: 'accounts.sync-user-infusions' },
        'Failed to dispatch sync user infusions'
    )
}

export function dispatchComputeTokenNativeMetadata(id: string): void {
    void enqueueRefresh(
        TokensQueue,
        JobsEnum.COMPUTE_TOKEN_NATIVE_METADATA,
        { id },
        { delay: 6000, jobId: `tokens.native-metadata.${id}` },
        'Failed to dispatch compute token native metadata'
    )
}

export function dispatchMigrateTokenGroupIds(id: string): void {
    void enqueueRefresh(
        TokensQueue,
        JobsEnum.MIGRATE_TOKEN_GROUP_IDS,
        { id },
        { jobId: `tokens.migrate-token-group-ids.${id}`, keepLastIfActive: false },
        'Failed to dispatch migrate token group IDs'
    )
}

export async function dispatchBackfillEphemeralTokens(data: BackfillEphemeralTokensData = {}): Promise<void> {
    const cursor = data.afterId ?? 'start'
    const jobId = `tokens.backfill-ephemeral.${cursor}`
    await addRefreshJob(TokensQueue, JobsEnum.BACKFILL_EPHEMERAL_TOKENS, data, { jobId, keepLastIfActive: false })
}
