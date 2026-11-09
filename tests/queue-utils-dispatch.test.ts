import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'
import { createRequire, Module } from 'node:module'
import { join } from 'node:path'
import test from 'node:test'

// Golden master for every QueueUtils dispatcher: which queue and job each one enqueues, with which
// payload and options, and what it logs or throws when enqueueing or id hashing fails.
// Regenerate deliberately with UPDATE_QUEUE_UTILS_SNAPSHOT=1 and review the fixture diff.

type Mode = 'ok' | 'enqueue-fails' | 'hash-fails'
type Enqueue = { via: 'addRefreshJob' | 'queue.add'; queue: string; name: string; data: unknown; options: unknown }
type Outcome = { enqueued: Enqueue[]; logged: string[]; rejected?: string }

const enqueued: Enqueue[] = []
const logged: string[] = []
let mode: Mode = 'ok'

const testRequire = createRequire(__filename)

function stub(request: string, exports: unknown): void {
    const path = testRequire.resolve(request)
    assert.equal(testRequire.cache[path], undefined, `${request} loaded before the test stub was installed`)
    const module = new Module(path)
    module.loaded = true
    module.exports = exports
    testRequire.cache[path] = module
}

function normalize<T>(value: T): T {
    const json = JSON.stringify(value, (_, v: unknown) => (v === undefined ? '<undefined>' : v))
    return JSON.parse(json.replace(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/g, '<uuid>')) as T
}

function enqueueResult(): Promise<unknown> {
    return mode === 'enqueue-fails' ? Promise.reject(new Error('redis unavailable')) : Promise.resolve({})
}

function fakeQueue(queue: string) {
    return {
        name: queue,
        add: (name: string, data: unknown, options: unknown) => {
            enqueued.push(normalize({ via: 'queue.add' as const, queue, name, data, options }))
            return enqueueResult()
        },
    }
}

stub('~/queue', {
    AccountsQueue: fakeQueue('accounts'),
    BalancesQueue: fakeQueue('balances'),
    CollectionsQueue: fakeQueue('collections'),
    ListingsQueue: fakeQueue('listings'),
    MetadataQueue: fakeQueue('metadata'),
    TokensQueue: fakeQueue('tokens'),
    TraitsQueue: fakeQueue('traits'),
    ValidatorsQueue: fakeQueue('validators'),
    NominationPoolsQueue: fakeQueue('nomination-pools'),
})
stub('~/queue/refresh-job', {
    addRefreshJob: (queue: { name: string }, name: string, data: unknown, options: unknown) => {
        enqueued.push(normalize({ via: 'addRefreshJob' as const, queue: queue.name, name, data, options }))
        return enqueueResult()
    },
})
stub('~/util/hasher', {
    xxhasher: {
        createId: (ids: string[]) =>
            mode === 'hash-fails'
                ? Promise.reject(new Error('hasher not ready'))
                : Promise.resolve(`hash(${[...ids].sort().join(',')})`),
    },
})
stub('~/util/logger', {
    Logger: {
        error: (message: unknown, namespace?: string) => logged.push(`${namespace}: ${String(message)}`),
    },
})

const QueueUtils = testRequire('~/queue/queue-utils') as Record<string, (...args: unknown[]) => unknown>

const genesisHash = `0x${'ab'.repeat(32)}`

// Arguments for every dispatcher; some get several calls to pin their branches.
const invocations: Record<string, unknown[][]> = {
    dispatchFetchAllBalances: [[]],
    dispatchFetchBalances: [[['b', 'a']]],
    dispatchFetchAccountBalance: [['acc-1']],
    dispatchFetchAccounts: [[['b', 'a']]],
    dispatchComputeCollections: [[]],
    dispatchComputeCollectionExtra: [[['2', '1']]],
    dispatchComputeStats: [['col-1']],
    dispatchComputeRarity: [[{ id: 'col-1' }]],
    dispatchComputeTraits: [['col-1']],
    dispatchLogTraitTokenHotChanges: [[{ tokenId: 'tok-1' }], [{ tokenId: 'tok-1', delete: true }]],
    dispatchComputeMetadata: [
        [{ id: 'tok-1', type: 'token' }],
        [{ id: 'col-1', type: 'collection', force: true, allTokens: true, traits: true, delay: 5 }],
        [{ id: 'col-1', type: 'collection', allTokens: true }],
        [{ id: 'tok-1', type: 'token', allTokens: true }],
    ],
    dispatchComputeTokenGroupMetadata: [['grp-1'], ['grp-1', 7, true]],
    dispatchSyncTokenGroupMetadata: [[]],
    dispatchSyncAllMetadata: [[]],
    dispatchSyncFuelTankRuleSets: [[], ['tank-1']],
    dispatchSyncOffers: [[]],
    dispatchSyncCollectionTransfer: [['col-1']],
    dispatchComputeValidators: [[]],
    dispatchSyncTokens: [[]],
    dispatchComputeTokenSupply: [['tok-1']],
    dispatchRefreshPool: [['pool-1']],
    dispatchSyncValidators: [[]],
    dispatchSyncActiveValidators: [[]],
    dispatchSyncChain: [[], [10, 20]],
    dispatchSyncChainInfosFromMatrix: [[], [100], [0]],
    dispatchImportBlock: [[15], [15, 30], [15, 0]],
    dispatchBackfillExtrinsicBlockRelation: [[], [{ fromBlock: 1, toBlock: 9, batchSize: 3 }], [{ fromBlock: 1 }]],
    dispatchBackfillEventPosition: [[], [{ batchSize: 50 }]],
    dispatchBackfillLoanExtensionActivity: [[], [{ batchSize: 50 }]],
    dispatchBackfillEventTimestamps: [[{ fromBlock: 1, toBlock: 9, batchSize: 3 }]],
    dispatchBackfillChainFinality: [[], [{ fromBlock: 1, toBlock: 9 }]],
    dispatchBackfillGovernance: [
        [{ genesisHash, fromBlock: 1, toBlock: 9 }],
        [{ genesisHash: 'not-a-hash', fromBlock: 1, toBlock: 9 }],
        [{ genesisHash, fromBlock: 9, toBlock: 1 }],
        [{ genesisHash, fromBlock: 1.5, toBlock: 9 }],
        [{ genesisHash, fromBlock: 1, toBlock: 9.5 }],
        [{ genesisHash, fromBlock: -1, toBlock: 9 }],
        [{ genesisHash, fromBlock: 0, toBlock: 0 }],
        [{ genesisHash, fromBlock: 5, toBlock: 5 }],
    ],
    dispatchImportGovernanceState: [[{ genesisHash }], [{ genesisHash: '0x12' }]],
    dispatchSyncAccounts: [[]],
    dispatchRefreshListings: [[['l-2', 'l-1']]],
    dispatchBackfillCancellationListingIds: [[], [{ afterId: 'l-1' }], [{ afterId: '' }]],
    dispatchComputeTokenBestListing: [['tok-1']],
    dispatchComputeTokenInfusion: [['tok-1']],
    dispatchComputeTokenCreationSupply: [['tok-1']],
    dispatchSyncPools: [[]],
    dispatchComputePoolRewards: [['pool-1']],
    dispatchComputePoolMemberRewards: [['pool-1']],
    dispatchComputePoolOffers: [['pool-1']],
    dispatchSyncMembersBonded: [[]],
    dispatchSyncUnbondingEras: [[]],
    dispatchSyncAccountUnbondingEras: [['acc-1']],
    dispatchBackfillPoolMemberRewardsEraIndex: [[]],
    dispatchBackfillPoolMemberRewards: [[], [42], [0]],
    dispatchComputeAccountStats: [['acc-1']],
    dispatchSyncUserInfusions: [[]],
    dispatchComputeTokenNativeMetadata: [['tok-1']],
    dispatchMigrateTokenGroupIds: [['tok-1']],
    dispatchBackfillEphemeralTokens: [[], [{ afterId: 'tok-1', batchSize: 10 }], [{ afterId: '' }]],
}

async function settle(): Promise<void> {
    for (let i = 0; i < 5; i++) await new Promise((resolve) => setImmediate(resolve))
}

async function run(fn: string, args: unknown[], runMode: Mode): Promise<Outcome> {
    mode = runMode
    enqueued.length = 0
    logged.length = 0
    let rejected: string | undefined
    try {
        await QueueUtils[fn](...args)
    } catch (error) {
        rejected = (error as Error).message
    }
    await settle()
    return { enqueued: [...enqueued], logged: [...logged], ...(rejected === undefined ? {} : { rejected }) }
}

type Failure = Omit<Outcome, 'enqueued'>
type Recorded = Outcome & { whenEnqueueFails: Failure; whenHashingFails?: Outcome }

const withoutEnqueued = ({ logged, rejected }: Outcome): Failure => ({
    logged,
    ...(rejected === undefined ? {} : { rejected }),
})

async function record(fn: string, args: unknown[]): Promise<Recorded> {
    const ok = await run(fn, args, 'ok')
    const enqueueFails = await run(fn, args, 'enqueue-fails')
    assert.deepEqual(enqueueFails.enqueued, ok.enqueued, `${fn} enqueues the same job when the queue is down`)
    const hashFails = await run(fn, args, 'hash-fails')
    return {
        ...ok,
        whenEnqueueFails: withoutEnqueued(enqueueFails),
        // Only dispatchers that hash ids behave differently when hashing fails.
        ...(JSON.stringify(hashFails) === JSON.stringify(ok) ? {} : { whenHashingFails: hashFails }),
    }
}

const fixturePath = join(__dirname, 'fixtures', 'queue-utils-dispatch.json')

void test('every exported dispatcher is pinned by the golden master', () => {
    const dispatchers = Object.keys(QueueUtils).filter((name) => name.startsWith('dispatch'))
    assert.deepEqual(dispatchers.sort(), Object.keys(invocations).sort())
})

void test('dispatchers enqueue, log and reject exactly as recorded', async () => {
    const realNow = Date.now
    Date.now = () => 1_700_000_000_000
    try {
        const actual: Record<string, Recorded[]> = {}
        for (const [fn, calls] of Object.entries(invocations)) {
            actual[fn] = []
            for (const args of calls) {
                actual[fn].push(await record(fn, args))
            }
        }

        if (process.env.UPDATE_QUEUE_UTILS_SNAPSHOT === '1') {
            writeFileSync(fixturePath, `${JSON.stringify(actual, null, 4)}\n`)
        }
        const expected = JSON.parse(readFileSync(fixturePath, 'utf8')) as typeof actual
        for (const fn of Object.keys(invocations)) {
            assert.deepEqual(actual[fn], expected[fn], fn)
        }
    } finally {
        Date.now = realNow
    }
})
