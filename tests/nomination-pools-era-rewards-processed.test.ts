import assert from 'node:assert/strict'
import { createRequire, Module } from 'node:module'
import test, { after, mock } from 'node:test'
import Big from 'big.js'
import { FindOperator } from 'typeorm'
import type { Block, CommonContext, EventItem } from '~/contexts'
import { getRuntimeCached } from '~/decoder/metadata'
import type { EventHandlerResult } from '~/processor.handler'
import type { SnsEvent } from '~/util/sns'
import {
    BonusCycle,
    CommissionPayment,
    EarlyBirdMintEvent,
    Era,
    EraReward,
    Event as EventModel,
    NominationPool,
    NominationPoolsEraRewardsProcessed,
    PoolBalance,
    PoolMember,
    PoolMemberRewards,
    PoolState,
    Account,
} from '~/model'
// `~/model` resolves to the checked-in `src/model/index.js`, which skips the overrides; install the pool helpers.
import '~/model/overridden'

// The processor pulls in the pallet mappings, which open the job queue; stub it so the run exits, and record any
// dispatch so the tests pin that this processor queues nothing.
const queueCalls: string[] = []
const testRequire = createRequire(__filename)
const queueModulePath = testRequire.resolve('~/queue')
const originalQueueModule = testRequire.cache[queueModulePath]
assert.equal(originalQueueModule, undefined, 'queue module loaded before the test stub was installed')
const queueModule = new Module(queueModulePath)
queueModule.loaded = true
queueModule.exports = {
    QueueUtils: new Proxy(
        {},
        {
            get: (_, name) => () => {
                queueCalls.push(String(name))
                return Promise.resolve()
            },
        }
    ),
}
testRequire.cache[queueModulePath] = queueModule

const { eraRewardsProcessed, computeEraApy, discardEra } = testRequire(
    '~/pallet/nomination-pools/processors/era-rewards-processed'
) as typeof import('~/pallet/nomination-pools/processors/era-rewards-processed')
const Sentry = testRequire('@sentry/node') as typeof import('@sentry/node')

after(() => {
    testRequire.cache[queueModulePath] = originalQueueModule
})

type Row = { id: string }
type RowClass = new (...args: never[]) => Row
type FindOptions = { where?: unknown; order?: { era?: { index?: string } }; take?: number }

function matches(value: unknown, where: unknown): boolean {
    if (where instanceof FindOperator) {
        const operator = where as FindOperator<unknown>
        assert.equal(operator.type, 'in', `unsupported operator ${operator.type}`)
        return (operator.value as unknown[]).includes(value)
    }
    if (where !== null && typeof where === 'object') {
        if (value === null || typeof value !== 'object') return false
        return Object.entries(where).every(([key, inner]) => matches((value as Record<string, unknown>)[key], inner))
    }
    return value === where
}

const describe = (value: Row | Row[]) =>
    Array.isArray(value)
        ? `${value[0]?.constructor.name ?? '[]'}[${value.map((row) => row.id).join(',')}]`
        : `${value.constructor.name}:${value.id}`

/** In-memory store with the subset of TypeORM the processor uses; `ops` records every write in order. */
class EraStore {
    rows: Row[]
    ops: string[] = []

    constructor(rows: Row[] = []) {
        this.rows = [...rows]
    }

    of<T extends Row>(entity: new (...args: never[]) => T): T[] {
        return this.rows.filter((row): row is T => row instanceof entity)
    }

    get<T extends Row>(entity: new (...args: never[]) => T, id: string): T {
        const row = this.of(entity).find((item) => item.id === id)
        assert.ok(row, `missing ${entity.name}:${id}`)
        return row
    }

    find(entity: RowClass, options: FindOptions): Promise<Row[]> {
        const rows = this.rows.filter(
            (row) => row instanceof entity && (options.where === undefined || matches(row, options.where))
        )
        if (options.order?.era?.index?.toLowerCase() === 'desc') {
            const index = (row: Row) => (row as unknown as { era: Era }).era.index
            rows.sort((a, b) => index(b) - index(a))
        }
        return Promise.resolve(rows.slice(0, options.take ?? rows.length))
    }

    findOneBy(entity: RowClass, where: unknown): Promise<Row | undefined> {
        return Promise.resolve(this.rows.find((row) => row instanceof entity && matches(row, where)))
    }

    async findOneOrFail(entity: RowClass, options: { where: unknown }): Promise<Row> {
        const row = await this.findOneBy(entity, options.where)
        if (!row) throw new Error('Missing entity')
        return row
    }

    async countBy(entity: RowClass, where: unknown): Promise<number> {
        return (await this.find(entity, { where })).length
    }

    save(value: Row | Row[]): Promise<void> {
        this.ops.push(`save ${describe(value)}`)
        this.put(value)
        return Promise.resolve()
    }

    insert(value: Row | Row[]): Promise<void> {
        this.ops.push(`insert ${describe(value)}`)
        for (const row of Array.isArray(value) ? value : [value]) {
            const duplicate = this.rows.some((item) => item.constructor === row.constructor && item.id === row.id)
            if (duplicate) throw new Error(`duplicate key ${describe(row)}`)
        }
        this.put(value)
        return Promise.resolve()
    }

    private put(value: Row | Row[]) {
        for (const row of Array.isArray(value) ? value : [value]) {
            this.rows = this.rows.filter((item) => !(item.constructor === row.constructor && item.id === row.id))
            this.rows.push(row)
        }
    }
}

const HEAD = '0x02'
const memberId = `0x${'bb'.repeat(32)}`
const otherId = `0x${'cc'.repeat(32)}`
const thirdId = `0x${'ee'.repeat(32)}`
const beneficiaryId = `0x${'aa'.repeat(32)}`
const E18 = 10n ** 18n
const ERA = 10

const json = (value: unknown) => JSON.stringify(value, (_, v: unknown) => (typeof v === 'bigint' ? v.toString() : v))

type Pair = [[bigint, bigint, string], { balance: bigint } | undefined]

/**
 * A relaychain runtime (1050 is the last spec that still emits `EraRewardsProcessed`) whose storage reads come from
 * `chain` and whose `MultiTokens.TokenAccounts` pairs come from `pairs`, so the processor runs without an RPC node.
 */
async function fixture(rows: Row[] = [], options: { spec?: number; timestamp?: number } = {}) {
    const real = await getRuntimeCached('enjin-relaychain', options.spec ?? 1050)
    const chain = new Map<string, unknown>()
    let pairs: Pair[] = []
    const read = (hash: string, name: string, key: unknown[]) => chain.get(`${hash}|${name}|${json(key)}`)
    const runtime = Object.create(real) as typeof real & Record<string, unknown>
    runtime.getStorage = (hash: string, name: string, ...key: unknown[]) => Promise.resolve(read(hash, name, key))
    runtime.queryStorage = (hash: string, name: string, keys: unknown[][]) =>
        Promise.resolve(keys.map((key) => read(hash, name, [key])))
    runtime.getStoragePairs = (hash: string, name: string, ...key: unknown[]) => {
        assert.equal(hash, HEAD)
        assert.equal(name, 'MultiTokens.TokenAccounts')
        assert.deepEqual(key, [1n, 1n])
        return Promise.resolve(pairs)
    }
    // `MultiTokens.Tokens` is read raw over RPC; no pool token supply, so `updatePool` keeps the stored rate.
    Object.defineProperty(runtime, 'rpc', { value: { call: () => Promise.resolve(null) } })

    const block = {
        _runtime: runtime,
        height: 500,
        hash: HEAD,
        parentHash: '0x01',
        timestamp: options.timestamp,
    } as unknown as Block
    const set = (name: string, key: unknown[], value: unknown) => chain.set(`${HEAD}|${name}|${json(key)}`, value)
    const setPairs = (value: Pair[]) => {
        pairs = value
    }

    const store = new EraStore(rows)
    const ctx = { store, log: { warn: () => undefined } } as unknown as CommonContext
    const event = (args: Record<string, unknown>, extrinsic = true): EventItem =>
        ({
            id: '500-1',
            name: 'NominationPools.EraRewardsProcessed',
            args,
            block,
            extrinsic: extrinsic ? { id: '500-0', index: 0, hash: '0x00', call: {} } : undefined,
        }) as unknown as EventItem
    return { block, store, ctx, event, set, setPairs }
}

const eventArgs = (extra: Record<string, unknown> = {}) => ({
    poolId: 1,
    era: ERA,
    commission: null,
    bonus: '7',
    reinvested: '1000',
    bonusCycleEnded: false,
    ...extra,
})

function poolRow(extra: Partial<NominationPool> = {}) {
    return new NominationPool({
        id: '1',
        name: 'pool',
        points: 0n,
        state: PoolState.Open,
        capacity: 10n ** 30n,
        tokenId: 7n,
        rate: E18 + 10n ** 15n,
        apy: 0,
        balance: new PoolBalance({ active: 0n, stash: 0n, reward: 0n, bonus: 0n }),
        accumulatedCommission: null,
        bonusCycle: null,
        ...extra,
    })
}

function memberRow(account: string, extra: Partial<PoolMember> = {}) {
    return new PoolMember({
        id: `1-${account}`,
        pool: new NominationPool({ id: '1' }),
        account: new Account({ id: account }),
        accumulatedRewards: null,
        ...extra,
    })
}

function eraRewardRow(era: number, extra: Partial<EraReward> = {}, poolId = '1') {
    return new EraReward({
        id: `${poolId}-${era}`,
        pool: new NominationPool({ id: poolId }),
        era: new Era({ id: era.toString(), index: era }),
        rate: E18,
        changeInRate: 0n,
        active: 1_000_000n,
        reinvested: 0n,
        apy: 0,
        averageApy: 0,
        ...extra,
    })
}

const eraRow = (era = ERA) =>
    new Era({ id: era.toString(), index: era, startAt: new Date(1), startBlock: 1, nodeCount: 3 })

/** `(rate / 1e18) ^ erasPerYear - 1` as a percentage, the first-era APY formula. */
const compound = (ratio: Big) => ratio.pow(365).sub(1).mul(100).toNumber()

function captureSentry() {
    return mock.method(Sentry, 'captureMessage', () => '')
}

function result(value: EventHandlerResult): [EventModel, SnsEvent] {
    assert.ok(Array.isArray(value))
    assert.equal(value.length, 2)
    return value as [EventModel, SnsEvent]
}

void test('an event without an extrinsic is ignored before anything is read', async () => {
    const { ctx, store, event } = await fixture([poolRow()])

    assert.equal(await eraRewardsProcessed(ctx, {} as Block, event(eventArgs(), false)), undefined)
    assert.deepEqual(store.ops, [])
})

void test('first era of a pool: era, era reward and member rewards are recorded from the rate change', async () => {
    const sentry = captureSentry()
    const commission = { beneficiary: beneficiaryId, amount: '50' }
    const member = memberRow(memberId)
    const other = memberRow(otherId, { accumulatedRewards: 5n })
    const { block, ctx, store, event, setPairs } = await fixture([poolRow(), member, other], { timestamp: 9_000 })
    setPairs([
        [[1n, 1n, memberId], { balance: 2_000_000n }],
        [[1n, 1n, otherId], { balance: 3_000n }],
        // A holder of the pool token without a PoolMember row is skipped.
        [[1n, 1n, thirdId], { balance: 9_000_000n }],
    ])

    const output = result(await eraRewardsProcessed(ctx, block, event(eventArgs({ commission }))))

    // Writes: the pool refresh, the missing era, the era reward before the member rewards that reference it.
    assert.deepEqual(store.ops, [
        'save NominationPool:1',
        'save Era:10',
        'insert EraReward:1-10',
        'save NominationPool:1',
        `save PoolMember[1-${memberId},1-${otherId}]`,
        `insert PoolMemberRewards[1-${memberId}-10,1-${otherId}-10]`,
    ])
    assert.deepEqual(queueCalls, [])

    const era = store.get(Era, '10')
    assert.equal(era.index, ERA)
    assert.deepEqual(era.startAt, new Date(9_000))
    assert.equal(era.startBlock, 500)
    assert.equal(era.nodeCount, 0)

    const firstApy = compound(Big('1.001'))
    const pool = store.get(NominationPool, '1')
    const reward = store.get(EraReward, '1-10')
    assert.equal(reward.pool, pool)
    assert.equal(reward.era.id, '10')
    assert.equal(reward.rate, E18 + 10n ** 15n)
    // No previous era reward: the rate change is measured against the 1e18 starting rate.
    assert.equal(reward.changeInRate, 10n ** 15n)
    assert.equal(reward.active, 0n, 'active comes from the refreshed pool (no ledger in storage)')
    assert.equal(reward.bonus, 7n)
    assert.equal(reward.reinvested, 1000n)
    assert.deepEqual(reward.commission, new CommissionPayment({ beneficiary: beneficiaryId, amount: 50n }))
    assert.equal(reward.apy, firstApy)
    assert.equal(reward.averageApy, firstApy)
    assert.equal(pool.apy, firstApy)
    assert.equal(pool.accumulatedCommission, 50n, 'a null accumulated commission starts from zero')
    assert.equal(pool.bonusCycle, null, 'bonusCycleEnded=false leaves the bonus cycle alone')

    // points * changeInRate / 1e18
    assert.equal(store.get(PoolMember, `1-${memberId}`).accumulatedRewards, 2_000n)
    assert.equal(store.get(PoolMember, `1-${otherId}`).accumulatedRewards, 5n + 3n)
    const pmr = store.get(PoolMemberRewards, `1-${memberId}-10`)
    assert.equal(pmr.pool, pool)
    assert.equal(pmr.member, member)
    assert.equal(pmr.reward, reward)
    assert.equal(pmr.points, 2_000_000n)
    assert.equal(pmr.rewards, 2_000n)
    assert.equal(pmr.accumulatedRewards, 2_000n)
    const otherPmr = store.get(PoolMemberRewards, `1-${otherId}-10`)
    assert.equal(otherPmr.points, 3_000n)
    assert.equal(otherPmr.rewards, 3n)
    assert.equal(otherPmr.accumulatedRewards, 8n)
    assert.equal(store.of(PoolMemberRewards).length, 2)

    const [model, sns] = output
    assert.equal(model.id, '500-1')
    assert.equal(model.name, 'NominationPoolsEraRewardsProcessed')
    assert.equal(model.extrinsic?.id, '500-0')
    assert.ok(model.data instanceof NominationPoolsEraRewardsProcessed)
    assert.equal(model.data.pool, '1')
    assert.equal(model.data.poolId, '1')
    assert.equal(model.data.tokenId, 7n)
    assert.equal(model.data.era, ERA)
    assert.equal(model.data.eraReward, '1-10')
    assert.equal(model.data.rate, E18 + 10n ** 15n)
    assert.deepEqual(sns, {
        id: '500-1',
        name: 'NominationPools.EraRewardsProcessed',
        body: {
            pool: '1',
            era: ERA,
            rate: E18 + 10n ** 15n,
            extrinsic: '500-0',
            name: 'pool',
            tokenId: '2-7',
        },
    })
    assert.equal(sentry.mock.callCount(), 0, '44% from a zero previous APY is not flagged')
    sentry.mock.restore()
})

void test('later era: rate change and APY are measured against the latest previous era reward of the pool', async () => {
    const sentry = captureSentry()
    const member = memberRow(memberId, { accumulatedRewards: 500n })
    const rows = [
        poolRow({ rate: E18 + 3n * 10n ** 15n, apy: 40, accumulatedCommission: 100n }),
        member,
        eraRow(),
        // Stored out of order: the processor must pick era 9 (the highest index), not the last row.
        eraRewardRow(9, { rate: E18 + 2n * 10n ** 15n, active: 1_000_000n, apy: 30, averageApy: 31 }),
        eraRewardRow(7, { rate: E18, active: 900_000n, apy: 45, averageApy: 46 }),
        eraRewardRow(8, { rate: E18 + 10n ** 15n, active: 950_000n, apy: 35, averageApy: 36 }),
        eraRewardRow(9, { rate: 5n * E18 }, '2'),
    ]
    const { block, ctx, store, event, setPairs } = await fixture(rows)
    setPairs([[[1n, 1n, memberId], { balance: 4_000n }]])

    result(await eraRewardsProcessed(ctx, block, event(eventArgs({ reinvested: '100' }))))

    assert.deepEqual(store.ops, [
        'save NominationPool:1',
        'insert EraReward:1-10',
        'save NominationPool:1',
        `save PoolMember[1-${memberId}]`,
        `insert PoolMemberRewards[1-${memberId}-10]`,
    ])
    assert.equal(store.get(Era, '10').nodeCount, 3, 'an existing era is not recreated')

    const reward = store.get(EraReward, '1-10')
    assert.equal(reward.changeInRate, 10n ** 15n)
    assert.equal(reward.commission, null)
    // Per-era APY: (previous active + reinvested) / previous active, compounded over a year.
    const eraApy = compound(Big(1_000_100).div(1_000_000))
    assert.equal(reward.apy, eraApy)
    // The pool APY averages the per-era APYs, newest first, that are within 50 points of the previous pool APY.
    const average = Big(eraApy).plus(30).plus(45).plus(35).div(4).toNumber()
    assert.equal(reward.averageApy, average)
    const pool = store.get(NominationPool, '1')
    assert.equal(pool.apy, average)
    assert.equal(pool.accumulatedCommission, 100n, 'no commission leaves the accumulated commission unchanged')

    assert.equal(store.get(PoolMember, `1-${memberId}`).accumulatedRewards, 504n)
    const pmr = store.get(PoolMemberRewards, `1-${memberId}-10`)
    assert.equal(pmr.rewards, 4n)
    assert.equal(pmr.accumulatedRewards, 504n)
    assert.equal(sentry.mock.callCount(), 0)
    sentry.mock.restore()
})

void test('the newest previous era sets the rate change and only the newest 15 era APYs are averaged', async () => {
    const history = Array.from({ length: 40 }, (_, era) =>
        eraRewardRow(era, { rate: E18 + BigInt(era) * 10n ** 12n, apy: era < 10 ? 99 : 1 })
    )
    const { block, ctx, store, event } = await fixture([poolRow({ rate: E18 + 50n * 10n ** 12n }), ...history])

    await eraRewardsProcessed(ctx, block, event(eventArgs({ era: 40, reinvested: '0' })))

    const reward = store.get(EraReward, '1-40')
    assert.equal(reward.changeInRate, 11n * 10n ** 12n)
    assert.equal(reward.apy, 0)
    // The new era (APY 0) and eras 39..26 (APY 1 each), averaged over 15.
    assert.equal(reward.averageApy, Big(14).div(15).toNumber())
})

void test('a rate drop gives a negative APY: flagged, recorded on the reward, floored at zero on the pool', async () => {
    const sentry = captureSentry()
    const { block, ctx, store, event } = await fixture([poolRow({ rate: E18 - 10n ** 15n, apy: 0.5 })])

    await eraRewardsProcessed(ctx, block, event(eventArgs()))

    const apy = compound(Big('0.999'))
    assert.ok(apy < 0)
    assert.equal(store.get(EraReward, '1-10').changeInRate, -(10n ** 15n))
    assert.equal(store.get(EraReward, '1-10').averageApy, apy)
    assert.equal(store.get(NominationPool, '1').apy, 0)
    assert.deepEqual(sentry.mock.calls[0]?.arguments, [`Pool 1 has apy: ${apy}%, previous: 0.5%`, 'warning'])
    assert.equal(sentry.mock.callCount(), 1)
    sentry.mock.restore()
})

void test('an APY above 200% is flagged', async () => {
    const sentry = captureSentry()
    const { block, ctx, event } = await fixture([poolRow({ rate: E18 + 4n * 10n ** 15n })])

    await eraRewardsProcessed(ctx, block, event(eventArgs()))

    const apy = compound(Big('1.004'))
    assert.ok(apy > 200)
    assert.deepEqual(sentry.mock.calls[0]?.arguments, [`Pool 1 has apy: ${apy}%, previous: 0%`, 'warning'])
    sentry.mock.restore()
})

void test('an APY moving more than 50% (relative) away from a previous APY above 1% is flagged', async () => {
    const flagged = captureSentry()
    const jump = await fixture([poolRow({ apy: 20 })])
    await eraRewardsProcessed(jump.ctx, jump.block, jump.event(eventArgs()))
    assert.equal(flagged.mock.callCount(), 1, '20% -> 44%')
    flagged.mock.restore()

    const quiet = captureSentry()
    const close = await fixture([poolRow({ apy: 30 })])
    await eraRewardsProcessed(close.ctx, close.block, close.event(eventArgs()))
    const tiny = await fixture([poolRow({ apy: 1 })])
    await eraRewardsProcessed(tiny.ctx, tiny.block, tiny.event(eventArgs()))
    assert.equal(quiet.mock.callCount(), 0, '30% -> 44% is within 50%, and a previous APY of 1% is ignored')
    quiet.mock.restore()
})

void test('a destroying pool records the missing era but no era reward, member reward or notification', async () => {
    const member = memberRow(memberId)
    const { block, ctx, store, event, setPairs } = await fixture([poolRow({ state: PoolState.Destroying }), member])
    setPairs([[[1n, 1n, memberId], { balance: 2_000_000n }]])

    const output = await eraRewardsProcessed(
        ctx,
        block,
        event(eventArgs({ commission: { beneficiary: beneficiaryId, amount: '50' } }))
    )

    assert.equal(output, undefined)
    assert.deepEqual(store.ops, ['save NominationPool:1', 'save Era:10'])
    assert.deepEqual(store.get(Era, '10').startAt, new Date(0), 'a block without a timestamp starts the era at 0')
    assert.equal(store.of(EraReward).length, 0)
    // Pinned as-is: unlike RewardPaid, the commission paid out of a destroying pool is not accumulated.
    assert.equal(store.get(NominationPool, '1').accumulatedCommission, null)
    assert.equal(member.accumulatedRewards, null)
})

void test('a repeated event overwrites the stored era reward and returns without touching members', async () => {
    const existing = eraRewardRow(ERA, {
        bonus: 1n,
        reinvested: 2n,
        rate: 3n,
        changeInRate: 4n,
        apy: 5,
        averageApy: 6,
        commission: new CommissionPayment({ beneficiary: otherId, amount: 9n }),
    })
    const member = memberRow(memberId, { accumulatedRewards: 1n })
    const { block, ctx, store, event, setPairs } = await fixture([poolRow({ apy: 12 }), existing, member])
    setPairs([[[1n, 1n, memberId], { balance: 2_000_000n }]])

    const withCommission = await eraRewardsProcessed(
        ctx,
        block,
        event(eventArgs({ commission: { beneficiary: beneficiaryId, amount: '50' } }))
    )

    assert.equal(withCommission, undefined)
    // With a commission the pool is saved a second time, although nothing on it changed.
    assert.deepEqual(store.ops, ['save NominationPool:1', 'save EraReward:1-10', 'save NominationPool:1'])
    assert.equal(existing.bonus, 7n)
    assert.equal(existing.reinvested, 1000n)
    assert.equal(existing.rate, E18 + 10n ** 15n)
    assert.deepEqual(existing.commission, new CommissionPayment({ beneficiary: beneficiaryId, amount: 50n }))
    assert.equal(existing.changeInRate, 4n)
    assert.equal(existing.apy, 5)
    assert.equal(existing.averageApy, 6)
    const pool = store.get(NominationPool, '1')
    assert.equal(pool.accumulatedCommission, null, 'a replay does not accumulate the commission again')
    assert.equal(pool.apy, 12)
    assert.equal(member.accumulatedRewards, 1n)
    assert.equal(store.of(Era).length, 0, 'the era is not created on a replay')

    store.ops = []
    assert.equal(await eraRewardsProcessed(ctx, block, event(eventArgs({ bonus: '8' }))), undefined)
    assert.deepEqual(store.ops, ['save NominationPool:1', 'save EraReward:1-10'])
    assert.equal(existing.bonus, 8n)
    assert.equal(existing.commission, null)
})

void test('the end of a bonus cycle copies the cycle from BondedPools storage onto the pool', async () => {
    const { block, ctx, store, event, set } = await fixture([poolRow()])
    set('NominationPools.BondedPools', [1], {
        bonusCycle: { start: 100, end: 200, previousStart: 50, pendingDuration: 14 },
    })

    await eraRewardsProcessed(ctx, block, event(eventArgs({ bonusCycleEnded: true })))

    assert.deepEqual(store.ops.slice(0, 2), ['save NominationPool:1', 'save NominationPool:1'])
    assert.deepEqual(
        store.get(NominationPool, '1').bonusCycle,
        new BonusCycle({ start: 100, end: 200, previousStart: 50, pendingDuration: 14 })
    )
    assert.ok(store.of(EraReward).length === 1, 'the era reward is still recorded')
})

void test('the end of a bonus cycle without a cycle in storage leaves the pool cycle alone', async () => {
    const { block, ctx, store, event, set } = await fixture([poolRow()])
    set('NominationPools.BondedPools', [1], { bonusCycle: undefined })

    await eraRewardsProcessed(ctx, block, event(eventArgs({ bonusCycleEnded: true })))

    assert.deepEqual(store.ops.slice(0, 2), ['save NominationPool:1', 'save Era:10'])
    assert.equal(store.get(NominationPool, '1').bonusCycle, null)
})

void test('the end of a bonus cycle for a pool missing from BondedPools fails the block', async () => {
    const { block, ctx, store, event } = await fixture([poolRow()])

    await assert.rejects(
        eraRewardsProcessed(ctx, block, event(eventArgs({ bonusCycleEnded: true }))),
        new Error('Pool info not found')
    )
    assert.deepEqual(store.ops, ['save NominationPool:1'])
})

void test('spec 100 events carry no bonusCycleEnded flag, so BondedPools is not read', async () => {
    const { block, ctx, store, event, set } = await fixture([poolRow()], { spec: 100 })
    set('NominationPools.BondedPools', [1], { bonusCycle: { start: 1, end: 2 } })
    const args: Record<string, unknown> = eventArgs()
    delete args.bonusCycleEnded

    result(await eraRewardsProcessed(ctx, block, event(args)))

    assert.equal(store.get(NominationPool, '1').bonusCycle, null)
    assert.equal(store.get(EraReward, '1-10').bonus, 7n)
})

void test('after an early-bird mint in the same era, member rewards merge into the minted rows', async () => {
    const member = memberRow(memberId, { accumulatedRewards: 10n })
    const other = memberRow(otherId)
    const minted = new PoolMemberRewards({
        id: `1-${memberId}-10`,
        pool: new NominationPool({ id: '1' }),
        member,
        points: 0n,
        rewards: 70n,
        accumulatedRewards: 10n,
    })
    const mint = (id: string, era: number) =>
        new EarlyBirdMintEvent({ id, era: new Era({ id: era.toString(), index: era }), amount: 0n, reward: 0n })
    const { block, ctx, store, event, setPairs } = await fixture([
        poolRow(),
        member,
        other,
        minted,
        mint('a', 9),
        mint('b', ERA),
        mint('c', 3),
    ])
    setPairs([
        [[1n, 1n, memberId], { balance: 2_000_000n }],
        [[1n, 1n, otherId], { balance: 1_000_000n }],
    ])

    await eraRewardsProcessed(ctx, block, event(eventArgs()))

    assert.deepEqual(store.ops.slice(-3), [
        `save PoolMember[1-${memberId},1-${otherId}]`,
        `insert PoolMemberRewards[1-${otherId}-10]`,
        `save PoolMemberRewards[1-${memberId}-10]`,
    ])
    const reward = store.get(EraReward, '1-10')
    assert.equal(minted.reward, reward)
    assert.equal(minted.points, 2_000_000n)
    assert.equal(minted.rewards, 70n + 2_000n, 'the era reward is added to the minted early-bird amount')
    assert.equal(minted.accumulatedRewards, 2_010n)
    assert.equal(member.accumulatedRewards, 2_010n)
    assert.equal(store.get(PoolMemberRewards, `1-${otherId}-10`).rewards, 1_000n)
})

void test('when every member already has an early-bird row, nothing is inserted', async () => {
    const member = memberRow(memberId)
    const minted = new PoolMemberRewards({ id: `1-${memberId}-10`, member, points: 0n, rewards: 1n })
    const mint = new EarlyBirdMintEvent({ id: 'a', era: new Era({ id: '10', index: ERA }), amount: 0n, reward: 0n })
    const { block, ctx, store, event, setPairs } = await fixture([poolRow(), member, minted, mint])
    setPairs([[[1n, 1n, memberId], { balance: 1_000n }]])

    await eraRewardsProcessed(ctx, block, event(eventArgs()))

    assert.deepEqual(store.ops.slice(-2), [
        `save PoolMember[1-${memberId}]`,
        `save PoolMemberRewards[1-${memberId}-10]`,
    ])
    assert.equal(minted.accumulatedRewards, 1n)
    assert.equal(minted.rewards, 2n)
})

void test('an early-bird mint in another era does not merge; the minted row id is reused by an insert', async () => {
    const member = memberRow(memberId)
    const mint = new EarlyBirdMintEvent({ id: 'a', era: new Era({ id: '9', index: 9 }), amount: 0n, reward: 0n })
    const { block, ctx, store, event, setPairs } = await fixture([poolRow(), member, mint])
    setPairs([[[1n, 1n, memberId], { balance: 1_000_000n }]])

    await eraRewardsProcessed(ctx, block, event(eventArgs()))

    assert.deepEqual(store.ops.slice(-1), [`insert PoolMemberRewards[1-${memberId}-10]`])
    assert.equal(store.get(PoolMemberRewards, `1-${memberId}-10`).rewards, 1_000n)
})

void test('member points come only from pool-token accounts with an account id; a missing account counts as 0', async () => {
    const members = [memberId, otherId, thirdId].map((account) => memberRow(account, { accumulatedRewards: 1n }))
    const { block, ctx, store, event, setPairs } = await fixture([poolRow(), ...members])
    setPairs([
        [[1n, 1n, memberId], { balance: 2_000_000n }],
        [[1n, 1n, otherId], undefined],
        // Keys of another collection or token, or without an account, are ignored even when returned.
        [[2n, 1n, thirdId], { balance: 5_000_000n }],
        [[1n, 2n, thirdId], { balance: 5_000_000n }],
        [[1n, 1n, ''], { balance: 5_000_000n }],
    ])

    await eraRewardsProcessed(ctx, block, event(eventArgs()))

    assert.deepEqual(
        store.of(PoolMemberRewards).map((row) => [row.id, row.points, row.rewards]),
        [
            [`1-${memberId}-10`, 2_000_000n, 2_000n],
            [`1-${otherId}-10`, 0n, 0n],
        ]
    )
    assert.equal(members[2].accumulatedRewards, 1n, 'a member without a pool-token account is not rewarded')
})

void test('a later accumulated balance treats a null member total as zero', async () => {
    const member = memberRow(memberId, { accumulatedRewards: null })
    const { block, ctx, store, event, setPairs } = await fixture([poolRow({ rate: E18 }), member])
    setPairs([[[1n, 1n, memberId], { balance: 2_000_000n }]])

    await eraRewardsProcessed(ctx, block, event(eventArgs()))

    assert.equal(store.get(EraReward, '1-10').changeInRate, 0n)
    assert.equal(member.accumulatedRewards, 0n)
    assert.equal(store.get(PoolMemberRewards, `1-${memberId}-10`).rewards, 0n)
})

void test('discardEra drops eras 50 or more points away from a non-zero pool APY', () => {
    assert.equal(discardEra(100, 0), false)
    assert.equal(discardEra(60, 10), true)
    assert.equal(discardEra(59.9, 10), false)
    assert.equal(discardEra(-40, 10), true)
    assert.equal(discardEra(-39.9, 10), false)
})

void test('computeEraApy averages up to 15 valid era APYs and falls back when there is nothing to average', () => {
    const rows = (...apys: number[]) => apys.map((apy, era) => eraRewardRow(era, { apy, averageApy: apy + 0.5 }))

    assert.equal(computeEraApy(rows(70), 10).toNumber(), 70, 'a single era is taken as is, even when discarded')
    assert.equal(computeEraApy(rows(10, 20), 10).toNumber(), 15)
    assert.equal(computeEraApy(rows(10, 200), 10).toNumber(), 10, 'discarded eras are left out of the average')
    assert.equal(computeEraApy(rows(100, 200), 10).toNumber(), 10, 'no valid era falls back to the pool APY')
    assert.equal(computeEraApy(rows(...Array.from({ length: 20 }, (_, i) => (i < 15 ? 2 : 50))), 0).toNumber(), 2)
    // With no pool APY nothing is discarded; an average more than 50 above it takes the newest average APY.
    assert.equal(computeEraApy(rows(60, 70), 0).toNumber(), 60.5)
    assert.equal(computeEraApy(rows(50, 50), 0).toNumber(), 50)
})
