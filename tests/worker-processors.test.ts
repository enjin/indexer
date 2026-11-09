import assert from 'node:assert/strict'
import { createRequire, Module } from 'node:module'
import test, { beforeEach } from 'node:test'
import type { Job } from 'bullmq'
import type { ProcessorDef } from '~/worker/processors/processor.def'

type Call = { fn: string; args: unknown[] }

const calls: Call[] = []
const logs: { level: string; message: string; job: unknown }[] = []
let jobFailure: Error | undefined

const testRequire = createRequire(__filename)

function stub(request: string, exports: unknown): void {
    const path = testRequire.resolve(request)
    assert.equal(testRequire.cache[path], undefined, `${request} loaded before the test stub was installed`)
    const module = new Module(path)
    module.loaded = true
    module.exports = exports
    testRequire.cache[path] = module
}

// Every job function becomes a recorder, so routing is observable without a database or queue.
const recordingJobs = new Proxy(
    {},
    {
        get: (_, name) =>
            typeof name === 'string' && !name.startsWith('__')
                ? (...args: unknown[]) => {
                      calls.push({ fn: name, args })
                      return jobFailure ? Promise.reject(jobFailure) : Promise.resolve()
                  }
                : undefined,
    }
)

stub('~/worker/jobs', recordingJobs)
stub('~/worker/jobs/collections/compute-extras', recordingJobs)
stub('~/worker/jobs/collections/sync-collections', recordingJobs)
stub('~/worker/jobs/validators/sync-active-validators', recordingJobs)
stub('~/worker/utils', {
    logError: (error: Error, job?: unknown) => logs.push({ level: 'error', message: error.message, job }),
    logInfo: (message: string, job?: unknown) => logs.push({ level: 'info', message, job }),
    logDebug: (message: string, job?: unknown) => logs.push({ level: 'debug', message, job }),
})

type Route = [jobName: string, fn: string, dataKeys: string[]]

type Expectation = {
    module: string
    exportName: string
    completed: { level: string; message: string }
    routes: Route[]
}

const expectations: Expectation[] = [
    {
        module: '~/worker/processors/accounts.processor',
        exportName: 'AccountsProcessor',
        completed: { level: 'debug', message: 'Finished fetching accounts' },
        routes: [
            ['FETCH_ACCOUNTS', 'syncAccounts', ['ids']],
            ['SYNC_ALL_ACCOUNTS', 'syncAllAccounts', []],
            ['COMPUTE_ACCOUNT_STATS', 'computeAccountStats', []],
            ['SYNC_ACCOUNTS_STATS', 'syncAccountsStats', []],
            ['SYNC_USER_INFUSIONS', 'syncUserInfusions', []],
        ],
    },
    {
        module: '~/worker/processors/balances.processor',
        exportName: 'BalancesProcessor',
        completed: { level: 'debug', message: 'Finished fetching balances' },
        routes: [
            ['FETCH_BALANCES', 'syncBalances', ['ids']],
            ['FETCH_BALANCE', 'fetchBalance', ['id']],
        ],
    },
    {
        module: '~/worker/processors/collections.processor',
        exportName: 'CollectionsProcessor',
        completed: { level: 'debug', message: 'Finished computing collections' },
        routes: [
            ['COMPUTE_COLLECTIONS', 'syncCollections', []],
            ['FETCH_EXTRA', 'computeExtras', ['ids']],
            ['COMPUTE_STATS', 'computeStats', ['id']],
            ['SYNC_COLLECTION_TRANSFER', 'syncCollectionTransfer', ['id']],
        ],
    },
    {
        module: '~/worker/processors/listings.processor',
        exportName: 'ListingsProcessor',
        completed: { level: 'info', message: 'Finished computing listings' },
        routes: [
            ['INVALIDATE_LISTINGS', 'computeListings', []],
            ['FETCH_OFFERS', 'syncOffers', []],
            ['SYNC_COUNTER_OFFERS', 'syncCounterOffers', []],
            ['REFRESH_LISTINGS', 'refreshListings', ['ids']],
            ['SYNC_LISTINGS', 'syncListings', []],
            ['SYNC_OFFER_EVENTS', 'syncOfferEvents', []],
            ['BACKFILL_CANCELLATION_LISTING_IDS', 'backfillCancellationListingIds', []],
        ],
    },
    {
        module: '~/worker/processors/metadata.processor',
        exportName: 'MetadataProcessor',
        completed: { level: 'debug', message: 'Finished computing metadata' },
        routes: [
            ['COMPUTE_METADATA', 'computeMetadata', []],
            ['SYNC_METADATA', 'syncMetadata', []],
            ['SYNC_FUEL_TANKS', 'syncFuelTanks', []],
            ['SYNC_FUEL_TANK_RULE_SETS', 'syncFuelTankRuleSets', []],
            ['COMPUTE_TOKEN_GROUP_METADATA', 'computeTokenGroupMetadata', []],
            ['SYNC_TOKEN_GROUP_METADATA', 'syncTokenGroupMetadata', []],
        ],
    },
    {
        module: '~/worker/processors/nomination_pools.processor',
        exportName: 'NominationPoolsProcessor',
        completed: { level: 'debug', message: 'Finished computing nomination pools' },
        routes: [
            ['SYNC_POOLS', 'syncPools', []],
            ['COMPUTE_POOL_REWARDS', 'computePoolRewards', ['id']],
            ['COMPUTE_ERA_REWARDS', 'computeEraRewards', ['id']],
            ['COMPUTE_POOL_MEMBER_REWARDS', 'computePoolMemberRewards', ['id']],
            ['SYNC_POOL_MEMBERS', 'syncPoolMembers', []],
            ['SYNC_MEMBERS_BONDED', 'syncMembersBonded', []],
            ['REFRESH_POOL', 'refreshPool', ['id']],
            ['COMPUTE_POOL_OFFERS', 'computePoolOffers', ['id']],
            ['SYNC_ORPHANED_EARLY_BIRD_REWARDS', 'syncOrphanedEarlyBirdRewards', []],
            ['SYNC_STAKE_EXCHANGE_OFFERS_EVENT', 'syncStakeExchangeOffersEvents', []],
            ['BACKFILL_POOL_MEMBER_REWARDS_ERA_INDEX', 'backfillPoolMemberRewardsEraIndex', []],
            ['BACKFILL_POOL_MEMBER_REWARDS', 'backfillPoolMemberRewards', []],
            ['SYNC_ACCOUNT_UNBONDING_ERAS', 'syncAccountUnbondingEras', ['id']],
            ['SYNC_UNBONDING_ERAS', 'syncUnbondingEras', []],
        ],
    },
    {
        module: '~/worker/processors/tokens.processor',
        exportName: 'TokensProcessor',
        completed: { level: 'debug', message: 'Finished computing tokens' },
        routes: [
            ['COMPUTE_RARITY', 'computeRarity', ['id']],
            ['SYNC_TOKENS', 'syncTokens', []],
            ['COMPUTE_TOKEN_SUPPLY', 'computeTokenSupply', ['id']],
            ['COMPUTE_TOKEN_BEST_LISTING', 'computeTokenBestListing', ['id']],
            ['COMPUTE_TOKEN_INFUSION', 'computeTokenInfusion', ['id']],
            ['SYNC_TOKEN_GROUP_POSITIONS', 'syncTokenGroupPositions', []],
            ['COMPUTE_TOKEN_CREATION_SUPPLY', 'computeTokenCreationSupply', ['id']],
            ['COMPUTE_TOKEN_NATIVE_METADATA', 'computeTokenNativeMetadata', ['id']],
            ['MIGRATE_TOKEN_GROUP_IDS', 'migrateTokenGroupIds', []],
            ['SYNC_COLLECTION_TOKENS_NATIVE', 'syncCollectionTokensNative', []],
            ['EXPLAIN_QUERY', 'explainQuery', []],
            ['BACKFILL_EPHEMERAL_TOKENS', 'backfillEphemeralTokens', []],
            ['BACKFILL_LOAN_EXTENSION_ACTIVITY', 'backfillLoanExtensionActivity', []],
        ],
    },
    {
        module: '~/worker/processors/traits.processor',
        exportName: 'TraitsProcessor',
        completed: { level: 'debug', message: 'Finished computing traits' },
        routes: [
            ['COMPUTE_TRAITS', 'computeTraits', ['id']],
            ['FIX_TRAITS', 'fixTraits', ['id']],
            ['FIX_ATTRIBUTES', 'fixAttributes', ['id']],
            ['LOG_TRAIT_TOKEN_HOT_CHANGES', 'logTraitTokenHotChanges', []],
        ],
    },
    {
        module: '~/worker/processors/validators.processor',
        exportName: 'ValidatorsProcessor',
        completed: { level: 'debug', message: 'Finished computing validators' },
        routes: [
            ['COMPUTE_VALIDATORS', 'computeValidators', []],
            ['SYNC_VALIDATORS', 'syncValidators', []],
            ['SYNC_CHAIN', 'syncChain', ['fromBlock', 'toBlock']],
            ['SYNC_ACTIVE_VALIDATORS', 'syncActiveValidators', []],
            ['SYNC_CHAIN_INFOS_FROM_MATRIX', 'syncChainInfosFromMatrix', []],
            ['IMPORT_BLOCK', 'importBlock', ['blockNumber', 'toBlock']],
            ['BACKFILL_EXTRINSIC_BLOCK_RELATION', 'backfillExtrinsicBlockRelation', []],
            ['BACKFILL_EVENT_POSITION', 'backfillEventPosition', []],
            ['BACKFILL_EVENT_TIMESTAMPS', 'backfillEventTimestamps', []],
            ['BACKFILL_CHAIN_FINALITY', 'backfillChainFinality', []],
            ['BACKFILL_GOVERNANCE', 'backfillGovernance', []],
            ['IMPORT_GOVERNANCE_STATE', 'importGovernanceState', []],
        ],
    },
]

const allJobNames = expectations.flatMap((e) => e.routes.map(([name]) => name))

function fakeJob(name: string): Job {
    return { name, data: { id: 'id-1', ids: ['a', 'b'], fromBlock: 10, toBlock: 20, blockNumber: 15 } } as Job
}

function load(expectation: Expectation): { instance: ProcessorDef; slaveHandle: ProcessorDef['handle'] } {
    const module = testRequire(expectation.module)
    const Processor = module[expectation.exportName] as new () => ProcessorDef
    assert.ok(module.default instanceof Processor, 'default export is an instance of the named class')
    return { instance: new Processor(), slaveHandle: module.default.handle }
}

beforeEach(() => {
    calls.length = 0
    logs.length = 0
    jobFailure = undefined
})

for (const expectation of expectations) {
    const { exportName } = expectation

    void test(`${exportName} routes each job to its job function with the job and its data`, async () => {
        const { instance } = load(expectation)
        for (const [jobName, fn, dataKeys] of expectation.routes) {
            calls.length = 0
            const job = fakeJob(jobName)
            await instance.handle(job)
            const data = job.data as Record<string, unknown>
            assert.deepEqual(calls, [{ fn, args: [job, ...dataKeys.map((key) => data[key])] }], jobName)
        }
    })

    void test(`${exportName} handle works when detached from its instance, as the sandboxed slave calls it`, async () => {
        const { slaveHandle } = load(expectation)
        const [jobName, fn] = expectation.routes[0]
        await slaveHandle(fakeJob(jobName))
        assert.equal(calls[0]?.fn, fn)
    })

    void test(`${exportName} fails the job when its job function rejects`, async () => {
        const { instance } = load(expectation)
        jobFailure = new Error('job function failed')
        await assert.rejects(instance.handle(fakeJob(expectation.routes[0][0])), jobFailure)
    })

    void test(`${exportName} rejects jobs that belong to other processors`, async () => {
        const { instance } = load(expectation)
        const own = new Set(expectation.routes.map(([name]) => name))
        for (const jobName of [...allJobNames.filter((name) => !own.has(name)), 'UNKNOWN', 'constructor']) {
            await assert.rejects(instance.handle(fakeJob(jobName)), {
                message: `${jobName} is not a valid job for this processor`,
            })
        }
        assert.deepEqual(calls, [])
    })

    void test(`${exportName} logs completion and failures`, () => {
        const { instance } = load(expectation)
        const job = fakeJob(expectation.routes[0][0])

        instance.completed?.(job)
        instance.failed?.(job, undefined)
        instance.failed?.(undefined, new Error('boom'))

        assert.deepEqual(logs, [
            { ...expectation.completed, job },
            { level: 'error', message: 'boom', job: undefined },
        ])
    })
}
