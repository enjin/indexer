import assert from 'node:assert/strict'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import { FindOperator } from 'typeorm'
import type { Block, CommonContext, EventItem } from '~/contexts'
import { getRuntimeCached } from '~/decoder/metadata'
import type { EventHandlerResult } from '~/processor.handler'
import type { SnsEvent } from '~/util/sns'
import {
    Account,
    Commission,
    Event as EventModel,
    NominationPool,
    NominationPoolsCommissionUpdated,
    NominationPoolsPoolSlashed,
    NominationPoolsRewardPayoutFailed,
    NominationPoolsUnbondingMemberRemoved,
    PoolBalance,
    PoolMember,
    PoolSlash,
    PoolState,
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

const processors = testRequire(
    '~/pallet/nomination-pools/processors'
) as typeof import('~/pallet/nomination-pools/processors')
const { unbondPointsToBalance, unbondPoolFor } = testRequire(
    '~/pallet/nomination-pools/processors/unbonding-eras'
) as typeof import('~/pallet/nomination-pools/processors/unbonding-eras')
const { createAccount } = testRequire(
    '~/pallet/nomination-pools/processors/pool'
) as typeof import('~/pallet/nomination-pools/processors/pool')

after(() => {
    testRequire.cache[queueModulePath] = originalQueueModule
})

type Row = { id: string }
type RowClass = new (...args: never[]) => Row

function matches(value: unknown, where: unknown): boolean {
    if (where instanceof FindOperator) {
        const operator = where as FindOperator<unknown>
        switch (operator.type) {
            case 'not':
                return !matches(value, operator.value)
            case 'isNull':
                return value == null
            case 'moreThan':
                return (value as bigint) > (operator.value as bigint)
            default:
                throw new Error(`unsupported operator ${operator.type}`)
        }
    }
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

    find(entity: RowClass, options: { where: unknown }): Promise<Row[]> {
        return Promise.resolve(this.rows.filter((row) => row instanceof entity && matches(row, options.where)))
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

    async countBy(entity: RowClass, where: unknown): Promise<number> {
        return (await this.find(entity, { where })).length
    }

    save(value: Row | Row[]): Promise<void> {
        for (const row of Array.isArray(value) ? value : [value]) {
            this.rows = this.rows.filter((item) => !(item.constructor === row.constructor && item.id === row.id))
            this.rows.push(row)
        }
        return Promise.resolve()
    }

    insert(value: Row | Row[]): Promise<void> {
        return this.save(value)
    }
}

const HEAD = '0x02'
const PARENT = '0x01'
const ownerId = `0x${'aa'.repeat(32)}`
const memberId = `0x${'bb'.repeat(32)}`
const otherId = `0x${'cc'.repeat(32)}`
const validatorId = `0x${'dd'.repeat(32)}`

const json = (value: unknown) => JSON.stringify(value, (_, v: unknown) => (typeof v === 'bigint' ? v.toString() : v))

/**
 * A relaychain 1080 runtime whose storage reads come from `chain` (`<hash>|<name>|<keys>`), so processors run
 * against a known chain state without an RPC node.
 */
async function fixture(rows: Row[] = []) {
    const real = await getRuntimeCached('enjin-relaychain', 1080)
    const chain = new Map<string, unknown>()
    const read = (hash: string, name: string, key: unknown[]) => chain.get(`${hash}|${name}|${json(key)}`)
    const runtime = Object.create(real) as typeof real & Record<string, unknown>
    runtime.getStorage = (hash: string, name: string, ...key: unknown[]) => Promise.resolve(read(hash, name, key))
    runtime.queryStorage = (hash: string, name: string, keys: unknown[][]) =>
        Promise.resolve(keys.map((key) => read(hash, name, [key])))
    runtime.getStoragePairsPaged = async function* () {}
    runtime.getStoragePairs = () => Promise.resolve([])
    // `MultiTokens.Tokens` is read raw over RPC; no pool token supply in these fixtures.
    Object.defineProperty(runtime, 'rpc', { value: { call: () => Promise.resolve(null) } })

    const block = {
        _runtime: runtime,
        height: 500,
        hash: HEAD,
        parentHash: PARENT,
        timestamp: 0,
        getParent: () => ({ _runtime: runtime, height: 499, hash: PARENT }),
    } as unknown as Block
    const set = (hash: string, name: string, key: unknown[], value: unknown) =>
        chain.set(`${hash}|${name}|${json(key)}`, value)

    const store = new MemoryStore(rows)
    const ctx = { store, log: { warn: () => undefined } } as unknown as CommonContext
    const event = (name: string, args: unknown, extrinsic = true): EventItem =>
        ({
            id: '500-1',
            name,
            args,
            block,
            extrinsic: extrinsic ? { id: '500-0', index: 0, hash: '0x00', call: {} } : undefined,
        }) as unknown as EventItem
    return { block, store, ctx, event, set }
}

function sns(result: EventHandlerResult): SnsEvent {
    assert.ok(Array.isArray(result))
    return result[1] as SnsEvent
}

function poolRow(extra: Partial<NominationPool> = {}) {
    return new NominationPool({
        id: '1',
        name: 'pool',
        points: 0n,
        state: PoolState.Open,
        commission: new Commission({ current: 50_000_000, max: 100_000_000 }),
        capacity: 10n ** 30n,
        tokenId: 7n,
        rate: 10n ** 18n,
        balance: new PoolBalance({ active: 1_000n, stash: 0n, reward: 0n, bonus: 0n }),
        slashes: [],
        totalMembers: 3,
        accumulatedCommission: 0n,
        validators: [],
        degenToken: new Token({
            id: '2-7',
            tokenAccounts: [new TokenAccount({ id: 'owner-2-7', account: new Account({ id: ownerId }) })],
        }),
        ...extra,
    })
}

function memberRow(account: string, extra: Partial<PoolMember> = {}) {
    return new PoolMember({
        id: `1-${account}`,
        pool: new NominationPool({ id: '1' }),
        account: new Account({ id: account }),
        bonded: 0n,
        isStash: false,
        isActive: true,
        unbondingEras: null,
        tokenAccount: null,
        ...extra,
    })
}

void test('unbond pool points are priced against the era pool, or the era-less pool once merged', () => {
    const subPools = {
        noEra: { points: 400n, balance: 200n },
        withEra: [[10, { points: 100n, balance: 60n }]] as [number, { points: bigint; balance: bigint }][],
    }
    assert.equal(unbondPointsToBalance(unbondPoolFor(subPools, 10), 50n), 30n)
    assert.equal(unbondPointsToBalance(unbondPoolFor(subPools, 3), 40n), 20n)
    assert.equal(unbondPointsToBalance({ points: 100n, balance: 0n }, 50n), 0n)
})

void test('PoolSlashed from the era hooks stores the slashed amount, not the remaining balance', async () => {
    const { block, ctx, store, event, set } = await fixture([poolRow()])
    const bonded = createAccount(block, '1', 1)
    set(PARENT, 'Staking.Ledger', [bonded], { active: 1_000n })
    set(HEAD, 'Staking.Ledger', [bonded], { active: 700n })

    const result = await processors.poolSlashed(
        ctx,
        block,
        event('NominationPools.PoolSlashed', { poolId: 1, balance: '700' }, false)
    )

    const [pool] = store.of(NominationPool)
    assert.equal(pool.slashes.length, 1)
    assert.equal(pool.slashes[0]?.amount, 300n)
    assert.equal(pool.slashes[0]?.balance, 700n)
    assert.equal(pool.balance.active, 700n)
    assert.ok(result instanceof EventModel, 'no notification without an extrinsic')
    assert.ok(result.data instanceof NominationPoolsPoolSlashed)
    assert.equal(result.data.amount, 300n)
    assert.equal(result.data.balance, 700n)
})

void test('a second PoolSlashed in the same block starts from what the first one left', async () => {
    const earlier = new PoolSlash({ amount: 300n, balance: 700n, appliedAt: new Date(0), appliedBlock: 500 })
    const { block, ctx, store, event, set } = await fixture([poolRow({ slashes: [earlier] })])
    set(PARENT, 'Staking.Ledger', [createAccount(block, '1', 1)], { active: 1_000n })

    await processors.poolSlashed(ctx, block, event('NominationPools.PoolSlashed', { poolId: 1, balance: '650' }))

    const [pool] = store.of(NominationPool)
    assert.deepEqual(
        pool.slashes.map((slash) => slash?.amount),
        [300n, 50n]
    )
})

void test('UnbondingPoolSlashed re-prices the chunks of members unbonding into that era', async () => {
    const member = memberRow(memberId, { unbondingEras: [new UnbondingEras({ era: 10, balance: 100n })] })
    const other = memberRow(otherId, { unbondingEras: [new UnbondingEras({ era: 11, balance: 80n })] })
    const { block, ctx, store, event, set } = await fixture([poolRow(), member, other])
    set(HEAD, 'NominationPools.UnbondingMembers', [1, memberId], { unbondingEras: [[10, 100n]] })
    set(HEAD, 'NominationPools.SubPoolsStorage', [1], {
        noEra: { points: 0n, balance: 0n },
        withEra: [
            [10, { points: 200n, balance: 150n }],
            [11, { points: 80n, balance: 80n }],
        ],
    })

    const result = await processors.unbondingPoolSlashed(
        ctx,
        block,
        event('NominationPools.UnbondingPoolSlashed', { poolId: 1, era: 10, balance: '150' }, false)
    )

    const byId = new Map(store.of(PoolMember).map((row) => [row.id, row]))
    assert.deepEqual(
        byId.get(`1-${memberId}`)?.unbondingEras?.map((chunk) => [chunk.era, chunk.balance]),
        [[10, 75n]]
    )
    assert.deepEqual(
        byId.get(`1-${otherId}`)?.unbondingEras?.map((chunk) => [chunk.era, chunk.balance]),
        [[11, 80n]]
    )
    assert.ok(result instanceof EventModel)
})

void test('Unbonded subtracts the ENJ balance from the member bond without re-applying the rate', async () => {
    const member = memberRow(memberId, {
        bonded: 1_000n,
        tokenAccount: new TokenAccount({ id: 'ta', balance: 500n, totalBalance: 500n }),
    })
    const { block, ctx, store, event, set } = await fixture([poolRow({ rate: 2n * 10n ** 18n }), member])
    set(HEAD, 'NominationPools.UnbondingMembers', [1, memberId], { unbondingEras: [[30, 400n]] })

    await processors.unbonded(
        ctx,
        block,
        event('NominationPools.Unbonded', { member: memberId, poolId: 1, balance: '400', points: '400', era: 30 })
    )

    const [updated] = store.of(PoolMember)
    assert.equal(updated.bonded, 600n)
    assert.deepEqual(
        updated.unbondingEras?.map((chunk) => [chunk.era, chunk.balance]),
        [[30, 400n]]
    )
})

void test('Withdrawn of the pool deposit updates the deposit member, not the token owner who receives it', async () => {
    const { block, ctx, store, event } = await fixture()
    const deposit = createAccount(block, '1', 1)
    const stash = memberRow(deposit, { isStash: true, unbondingEras: [new UnbondingEras({ era: 5, balance: 10n })] })
    const owner = memberRow(ownerId, { tokenAccount: new TokenAccount({ id: 'ta', balance: 0n }) })
    await store.save([poolRow({ state: PoolState.Destroying, totalMembers: 2 }), stash, owner])

    const result = await processors.withdrawn(
        ctx,
        block,
        event('NominationPools.Withdrawn', { member: ownerId, poolId: 1, balance: '10', points: '10' })
    )

    const byId = new Map(store.of(PoolMember).map((row) => [row.id, row]))
    assert.equal(byId.get(`1-${deposit}`)?.unbondingEras, null)
    assert.equal(byId.get(`1-${deposit}`)?.isActive, false)
    assert.equal(byId.get(`1-${ownerId}`)?.isActive, true, 'the recipient keeps its own membership')
    assert.equal(store.of(NominationPool)[0].totalMembers, 1)
    assert.equal(sns(result).name, 'NominationPools.DepositWithdrawn')
})

void test('Withdrawn by a member with an unbonding entry stays attributed to that member', async () => {
    const member = memberRow(memberId, {
        unbondingEras: [new UnbondingEras({ era: 5, balance: 10n }), new UnbondingEras({ era: 9, balance: 4n })],
        tokenAccount: new TokenAccount({ id: 'ta', balance: 1n }),
    })
    const { block, ctx, store, event, set } = await fixture([poolRow(), member])
    set(PARENT, 'NominationPools.UnbondingMembers', [1, memberId], {
        unbondingEras: [
            [5, 10n],
            [9, 4n],
        ],
    })
    set(HEAD, 'NominationPools.UnbondingMembers', [1, memberId], { unbondingEras: [[9, 4n]] })

    const result = await processors.withdrawn(
        ctx,
        block,
        event('NominationPools.Withdrawn', { member: memberId, poolId: 1, balance: '10', points: '10' })
    )

    const [updated] = store.of(PoolMember)
    assert.deepEqual(
        updated.unbondingEras?.map((chunk) => [chunk.era, chunk.balance]),
        [[9, 4n]]
    )
    assert.equal(sns(result).name, 'NominationPools.Withdrawn')
})

const mutated = (newCommission: unknown, maxCommission?: number) => ({
    poolId: 1,
    mutation: { newCommission, maxCommission, changeRate: undefined, capacity: undefined, name: undefined },
})

void test('PoolMutated with SomeMutation(None) removes the commission', async () => {
    const { block, ctx, store, event } = await fixture([poolRow()])

    const result = await processors.poolMutated(
        ctx,
        block,
        event('NominationPools.PoolMutated', mutated({ __kind: 'SomeMutation', value: undefined }))
    )

    assert.equal(store.of(NominationPool)[0].commission.current, null)
    assert.equal((sns(result).body as { mutation: Record<string, unknown> }).mutation.newCommission, null)
})

void test('PoolMutated clamps the new commission to a lower max like the chain does', async () => {
    const { block, ctx, store, event } = await fixture([poolRow()])

    await processors.poolMutated(
        ctx,
        block,
        event('NominationPools.PoolMutated', mutated({ __kind: 'SomeMutation', value: 80_000_000 }, 60_000_000))
    )

    const [pool] = store.of(NominationPool)
    assert.equal(pool.commission.max, 60_000_000)
    assert.equal(pool.commission.current, 60_000_000)
})

void test('CommissionUpdated sets the current commission', async () => {
    const { block, ctx, store, event } = await fixture([poolRow()])

    const result = await processors.commissionUpdated(
        ctx,
        block,
        event('NominationPools.CommissionUpdated', { poolId: 1, current: 20_000_000 })
    )

    assert.equal(store.of(NominationPool)[0].commission.current, 20_000_000)
    assert.ok(result instanceof EventModel)
    assert.ok(result.data instanceof NominationPoolsCommissionUpdated)
    assert.equal(result.data.current, 20_000_000)
})

void test('RewardPaid for a destroying pool accumulates the commission and records the event', async () => {
    const { block, ctx, store, event } = await fixture([poolRow({ state: PoolState.Destroying })])

    const result = await processors.rewardPaid(
        ctx,
        block,
        event('NominationPools.RewardPaid', {
            poolId: 1,
            era: 9,
            validatorStash: validatorId,
            reward: '1000',
            commission: { beneficiary: ownerId, amount: '50' },
        })
    )

    assert.equal(store.of(NominationPool)[0].accumulatedCommission, 50n)
    assert.ok(result instanceof EventModel)
})

void test('RewardPayoutFailed records the event with a readable error', async () => {
    const { block, ctx, event } = await fixture([poolRow()])

    const result = await processors.rewardPayoutFailed(
        ctx,
        block,
        event(
            'NominationPools.RewardPayoutFailed',
            {
                poolId: 1,
                era: 9,
                validatorStash: validatorId,
                reward: '1000',
                error: { __kind: 'BadOrigin' },
            },
            false
        )
    )

    assert.ok(result instanceof EventModel)
    assert.ok(result.data instanceof NominationPoolsRewardPayoutFailed)
    assert.equal(result.data.reward, 1000n)
    assert.equal(result.data.validatorStash, validatorId)
    assert.equal(result.data.error, 'BadOrigin')
})

void test('UnbondingMemberRemoved clears the chunks and drops a member without sENJ', async () => {
    const holder = memberRow(memberId, {
        unbondingEras: [new UnbondingEras({ era: 5, balance: 10n })],
        tokenAccount: new TokenAccount({ id: 'ta', balance: 5n }),
    })
    const empty = memberRow(otherId, { unbondingEras: [], tokenAccount: new TokenAccount({ id: 'tb', balance: 0n }) })
    const { block, ctx, store, event } = await fixture([poolRow(), holder, empty])

    await processors.unbondingMemberRemoved(
        ctx,
        block,
        event('NominationPools.UnbondingMemberRemoved', { poolId: 1, member: memberId })
    )
    const result = await processors.unbondingMemberRemoved(
        ctx,
        block,
        event('NominationPools.UnbondingMemberRemoved', { poolId: 1, member: otherId }, false)
    )

    const byId = new Map(store.of(PoolMember).map((row) => [row.id, row]))
    assert.equal(byId.get(`1-${memberId}`)?.unbondingEras, null)
    assert.equal(byId.get(`1-${memberId}`)?.isActive, true)
    assert.equal(byId.get(`1-${otherId}`)?.isActive, false)
    assert.equal(store.of(NominationPool)[0].totalMembers, 2)
    assert.ok(result instanceof EventModel)
    assert.ok(result.data instanceof NominationPoolsUnbondingMemberRemoved)
})
