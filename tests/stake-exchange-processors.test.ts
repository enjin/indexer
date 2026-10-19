import assert from 'node:assert/strict'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import type { Block, CallItem, CommonContext, EventItem } from '~/contexts'
import { getRuntimeCached } from '~/decoder/metadata'
import type { EventHandlerResult } from '~/processor.handler'
import type { SnsEvent } from '~/util/sns'
import {
    Account,
    Commission,
    Event as EventModel,
    NominationPool,
    PoolBalance,
    PoolMember,
    PoolState,
    StakeExchangeLiquidityAdded,
    StakeExchangeOffer,
    StakeExchangeOfferState,
    Token,
    TokenAccount,
    UnbondingEras,
} from '~/model'
// `~/model` resolves to the checked-in `src/model/index.js`, which skips the overrides; install the pool helpers.
import '~/model/overridden'

// The processors pull in the pallet mappings, which open the job queue; stub it so the run exits.
const testRequire = createRequire(__filename)
const queueModulePath = testRequire.resolve('~/queue')
const originalQueueModule = testRequire.cache[queueModulePath]
assert.equal(originalQueueModule, undefined, 'queue module loaded before the test stub was installed')
const queueModule = new Module(queueModulePath)
queueModule.loaded = true
queueModule.exports = { QueueUtils: { dispatchSyncActiveValidators: () => Promise.resolve() } }
testRequire.cache[queueModulePath] = queueModule

const stakeExchange = testRequire(
    '~/pallet/stake-exchange/processors'
) as typeof import('~/pallet/stake-exchange/processors')
const nominationPools = testRequire(
    '~/pallet/nomination-pools/processors'
) as typeof import('~/pallet/nomination-pools/processors')

after(() => {
    testRequire.cache[queueModulePath] = originalQueueModule
})

type Row = { id: string }
type RowClass = new (...args: never[]) => Row

function matches(value: unknown, where: unknown): boolean {
    if (where !== null && typeof where === 'object') {
        if (value === null || typeof value !== 'object') return false
        return Object.entries(where).every(([key, inner]) => matches((value as Record<string, unknown>)[key], inner))
    }
    return value === where
}

class MemoryStore {
    rows: Row[]

    constructor(rows: Row[] = []) {
        this.rows = [...rows]
    }

    of<T extends Row>(entity: new (...args: never[]) => T): T[] {
        return this.rows.filter((row): row is T => row instanceof entity)
    }

    find(entity: RowClass, options: { where?: unknown }): Promise<Row[]> {
        return Promise.resolve(
            this.rows.filter(
                (row) => row instanceof entity && (options.where === undefined || matches(row, options.where))
            )
        )
    }

    findOne(entity: RowClass, options: { where: unknown }): Promise<Row | undefined> {
        return this.findOneBy(entity, options.where)
    }

    async findOneOrFail(entity: RowClass, options: { where: unknown }): Promise<Row> {
        return this.findOneByOrFail(entity, options.where)
    }

    findOneBy(entity: RowClass, where: unknown): Promise<Row | undefined> {
        return Promise.resolve(this.rows.find((row) => row instanceof entity && matches(row, where)))
    }

    async findOneByOrFail(entity: RowClass, where: unknown): Promise<Row> {
        const row = await this.findOneBy(entity, where)
        if (!row) throw new Error('Missing entity')
        return row
    }

    save(value: Row | Row[]): Promise<void> {
        for (const row of Array.isArray(value) ? value : [value]) {
            this.rows = this.rows.filter((item) => !(item.constructor === row.constructor && item.id === row.id))
            this.rows.push(row)
        }
        return Promise.resolve()
    }
}

const sellerId = `0x${'bb'.repeat(32)}`
const creatorId = `0x${'cc'.repeat(32)}`
const ownerId = `0x${'aa'.repeat(32)}`
const tankId = `0x${'11'.repeat(32)}`

let blockCounter = 0

async function fixture(rows: Row[] = []) {
    const runtime = await getRuntimeCached('enjin-relaychain', 1080)
    blockCounter += 1
    const block = { _runtime: runtime, height: 500, hash: `0x${blockCounter}`, timestamp: 0 } as unknown as Block
    const store = new MemoryStore(rows)
    const warnings: string[] = []
    const ctx = { store, log: { warn: (message: string) => warnings.push(message) } } as unknown as CommonContext
    const call = (name: string, args: unknown, id = '500-0'): CallItem =>
        ({ id, name, args, success: true, block, events: [] }) as unknown as CallItem
    const event = (name: string, args: unknown, emitter?: CallItem, id = '500-1'): EventItem => {
        const item = {
            id,
            index: Number(id.split('-')[1]),
            name,
            args,
            block,
            call: emitter,
            // the top-level call is a wrapper the stake-exchange decoders cannot read
            extrinsic: { id: '500-0', index: 0, call: { name: 'Utility.batch_all', args: {}, block } },
        } as unknown as EventItem
        emitter?.events.push(item)
        return item
    }
    return { block, store, ctx, call, event, warnings }
}

function sns(result: EventHandlerResult): SnsEvent {
    assert.ok(Array.isArray(result))
    return result[1] as SnsEvent
}

function offerRow(extra: Partial<StakeExchangeOffer> = {}) {
    return new StakeExchangeOffer({
        id: '9',
        offerId: 9n,
        account: new Account({ id: creatorId }),
        total: 1_000n,
        amount: 1_000n,
        rate: 0n,
        state: StakeExchangeOfferState.Active,
        ...extra,
    })
}

function poolRow(extra: Partial<NominationPool> = {}) {
    return new NominationPool({
        id: '7',
        name: 'pool',
        points: 0n,
        state: PoolState.Open,
        commission: new Commission({ current: 0, max: 0 }),
        capacity: 10n ** 30n,
        tokenId: 7n,
        rate: 2n * 10n ** 18n,
        balance: new PoolBalance({ active: 0n, stash: 0n, reward: 0n, bonus: 0n }),
        slashes: [],
        totalMembers: 1,
        accumulatedCommission: 0n,
        validators: [],
        degenToken: new Token({
            id: '2-7',
            tokenAccounts: [new TokenAccount({ id: 'owner-2-7', account: new Account({ id: ownerId }) })],
        }),
        ...extra,
    })
}

const addLiquidity = (offerId: number, amount: string) => ({
    __kind: 'StakeExchange',
    value: { __kind: 'add_liquidity', offerId, amount },
})

void test('LiquidityAdded under a batch reads the amount from its own call, not the top-level wrapper', async () => {
    const { store, ctx, call, event } = await fixture([offerRow()])
    const emitter = call('StakeExchange.add_liquidity', { offerId: 9, amount: '250' })

    const result = await stakeExchange.liquidityAdded(
        ctx,
        {} as Block,
        event('StakeExchange.LiquidityAdded', { who: creatorId, offerId: 9 }, emitter)
    )

    const [offer] = store.of(StakeExchangeOffer)
    assert.equal(offer.total, 1_250n)
    assert.equal(offer.amount, 1_250n)
    assert.equal(sns(result).body.amount, 250n)
})

void test('LiquidityWithdrawn under a fuel-tank dispatch reads the inner call amount', async () => {
    const { store, ctx, call, event } = await fixture([offerRow()])
    const emitter = call('FuelTanks.dispatch', {
        tankId: { __kind: 'Id', value: tankId },
        call: { __kind: 'StakeExchange', value: { __kind: 'withdraw_liquidity', offerId: 9, amount: '400' } },
    })

    await stakeExchange.liquidityWithdrawn(
        ctx,
        {} as Block,
        event('StakeExchange.LiquidityWithdrawn', { who: creatorId, offerId: 9 }, emitter)
    )

    const [offer] = store.of(StakeExchangeOffer)
    assert.equal(offer.total, 600n)
    assert.equal(offer.amount, 600n)
})

void test('two add_liquidity calls on one offer inside a dispatched batch each apply their own amount', async () => {
    const { store, ctx, call, event } = await fixture([offerRow()])
    const emitter = call('FuelTanks.dispatch', {
        tankId: { __kind: 'Id', value: tankId },
        call: {
            __kind: 'Utility',
            value: {
                __kind: 'batch_all',
                calls: [addLiquidity(9, '100'), addLiquidity(8, '7'), addLiquidity(9, '30')],
            },
        },
    })

    const firstEvent = event('StakeExchange.LiquidityAdded', { who: creatorId, offerId: 9 }, emitter, '500-1')
    event('StakeExchange.LiquidityAdded', { who: creatorId, offerId: 8 }, emitter, '500-2')
    const secondEvent = event('StakeExchange.LiquidityAdded', { who: creatorId, offerId: 9 }, emitter, '500-3')

    const first = await stakeExchange.liquidityAdded(ctx, {} as Block, firstEvent)
    const second = await stakeExchange.liquidityAdded(ctx, {} as Block, secondEvent)

    assert.equal(sns(first).body.amount, 100n)
    assert.equal(sns(second).body.amount, 30n)
    assert.equal(store.of(StakeExchangeOffer)[0].total, 1_130n)
})

void test('a dispatched force_batch whose earlier withdrawal failed leaves the amount unresolved', async () => {
    // withdrawing 2000 from 1000 liquidity fails inside force_batch; only the 400 withdrawal emits an event
    const { store, ctx, call, event, warnings } = await fixture([offerRow()])
    const withdraw = (amount: string) => ({
        __kind: 'StakeExchange',
        value: { __kind: 'withdraw_liquidity', offerId: 9, amount },
    })
    const emitter = call('FuelTanks.dispatch', {
        tankId: { __kind: 'Id', value: tankId },
        call: { __kind: 'Utility', value: { __kind: 'force_batch', calls: [withdraw('2000'), withdraw('400')] } },
    })

    const result = await stakeExchange.liquidityWithdrawn(
        ctx,
        {} as Block,
        event('StakeExchange.LiquidityWithdrawn', { who: creatorId, offerId: 9 }, emitter)
    )

    assert.ok(result instanceof EventModel)
    assert.equal(store.of(StakeExchangeOffer)[0].total, 1_000n)
    assert.equal(warnings.length, 1)
})

void test('equal candidate amounts resolve even when some candidate calls emitted no event', async () => {
    const { store, ctx, call, event } = await fixture([offerRow()])
    const emitter = call('FuelTanks.dispatch', {
        tankId: { __kind: 'Id', value: tankId },
        call: {
            __kind: 'Utility',
            value: { __kind: 'force_batch', calls: [addLiquidity(9, '5'), addLiquidity(9, '5')] },
        },
    })

    await stakeExchange.liquidityAdded(
        ctx,
        {} as Block,
        event('StakeExchange.LiquidityAdded', { who: creatorId, offerId: 9 }, emitter)
    )

    assert.equal(store.of(StakeExchangeOffer)[0].total, 1_005n)
})

void test('LiquidityAdded under an unknown wrapper is recorded without crashing or touching the offer', async () => {
    const { store, ctx, call, event, warnings } = await fixture([offerRow()])
    const emitter = call('Scheduler.schedule', {})

    const result = await stakeExchange.liquidityAdded(
        ctx,
        {} as Block,
        event('StakeExchange.LiquidityAdded', { who: creatorId, offerId: 9 }, emitter)
    )

    assert.ok(result instanceof EventModel)
    assert.ok(result.data instanceof StakeExchangeLiquidityAdded)
    assert.equal(result.data.amount, 0n)
    assert.equal(store.of(StakeExchangeOffer)[0].total, 1_000n)
    assert.equal(warnings.length, 1)
})

function buyRows(sellerBalance: bigint, sellerBonded: bigint, unbondingEras: UnbondingEras[] | null = null) {
    const sellerTokenAccount = new TokenAccount({ id: `${sellerId}-1-7`, balance: sellerBalance })
    return [
        offerRow({ total: 10_000n, amount: 10_000n }),
        poolRow({ totalMembers: 2 }),
        new PoolMember({
            id: `7-${sellerId}`,
            pool: new NominationPool({ id: '7' }),
            account: new Account({ id: sellerId }),
            bonded: sellerBonded,
            tokenAccount: sellerTokenAccount,
            isStash: false,
            isActive: true,
            unbondingEras,
        }),
        new PoolMember({
            id: `7-${creatorId}`,
            pool: new NominationPool({ id: '7' }),
            account: new Account({ id: creatorId }),
            bonded: 50n,
            isStash: false,
            isActive: true,
            unbondingEras: null,
        }),
        new Account({ id: sellerId }),
    ]
}

const buyArgs = (amount: string, rate: number) => ({
    who: sellerId,
    tokenId: '7',
    amount,
    rate,
    offerCreator: creatorId,
    offerId: '9',
})

void test('BuyOrderCompleted moves bonded by the ENJ value of the sENJ transferred, not the ENJ paid', async () => {
    // rate 0.6: selling 1000 ENJ costs 600 sENJ, worth 1200 ENJ at a pool rate of 2
    const { store, ctx, event } = await fixture(buyRows(1_500n, 4_000n))

    const result = await stakeExchange.buyOrderCompleted(
        ctx,
        {} as Block,
        event('StakeExchange.BuyOrderCompleted', buyArgs('1000', 600_000_000))
    )

    const seller = store.of(PoolMember).find((member) => member.id === `7-${sellerId}`)
    const creator = store.of(PoolMember).find((member) => member.id === `7-${creatorId}`)
    assert.equal(seller?.bonded, 2_800n)
    assert.equal(creator?.bonded, 1_250n)
    assert.equal(store.of(StakeExchangeOffer)[0].total, 9_000n)
    assert.equal(sns(result).body.points, 600n)
    assert.equal(sns(result).body.rate, 600_000_000n * 10n ** 9n)
})

void test('BuyOrderCompleted that moved the whole sENJ balance leaves the seller nothing bonded', async () => {
    // still unbonding, so the member stays active, but no sENJ is left to back a bonded value
    const { store, ctx, event } = await fixture(buyRows(0n, 4_000n, [new UnbondingEras({ era: 10, balance: 5n })]))

    await stakeExchange.buyOrderCompleted(
        ctx,
        {} as Block,
        event('StakeExchange.BuyOrderCompleted', buyArgs('1000', 500_000_000))
    )

    const seller = store.of(PoolMember).find((member) => member.id === `7-${sellerId}`)
    assert.equal(seller?.bonded, 0n)
})

void test('BuyOrderCompleted treats a reaped seller token account as a zero balance', async () => {
    // TokenAccountDestroyed cleared the link; unbonding eras keep the member active, but nothing stays bonded
    const rows = buyRows(0n, 4_000n, [new UnbondingEras({ era: 10, balance: 5n })])
    const sellerRow = rows.find((row) => row instanceof PoolMember && row.id === `7-${sellerId}`) as PoolMember
    sellerRow.tokenAccount = null
    const { store, ctx, event } = await fixture(rows)

    await stakeExchange.buyOrderCompleted(
        ctx,
        {} as Block,
        event('StakeExchange.BuyOrderCompleted', buyArgs('1000', 500_000_000))
    )

    const seller = store.of(PoolMember).find((member) => member.id === `7-${sellerId}`)
    assert.equal(seller?.bonded, 0n)
    assert.equal(seller.isActive, true)
})

void test('Destroyed leaves offers whitelisting only that pool live', async () => {
    const offer = offerRow()
    const { store, ctx, event } = await fixture([
        offer,
        poolRow({ id: '1', tokenId: 7n }),
        new Token({ id: '2-7', nominationPool: new NominationPool({ id: '1' }) }),
    ])
    const pool = store.of(NominationPool)[0]
    Object.assign(pool, { members: [] })

    await nominationPools.destroyed(ctx, {} as Block, event('NominationPools.Destroyed', { poolId: 1 }))

    assert.equal(store.of(StakeExchangeOffer)[0].state, StakeExchangeOfferState.Active)
    assert.equal(store.of(NominationPool)[0].state, PoolState.Destroyed)
})
