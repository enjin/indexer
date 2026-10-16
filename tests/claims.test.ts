import assert from 'node:assert/strict'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import { Runtime } from '@subsquid/substrate-runtime'
import { FindOperator } from 'typeorm'
import type { Block, CommonContext, EventItem } from '~/contexts'
import { getRuntimeCached } from '~/decoder/metadata'
import { AccountClaimType, Claim, ClaimDetails, ClaimRequest } from '~/model'

const testRequire = createRequire(__filename)
const queueModulePath = testRequire.resolve('~/queue')
const originalQueueModule = testRequire.cache[queueModulePath]
assert.equal(originalQueueModule, undefined, 'queue module loaded before the test stub was installed')
const queueModule = new Module(queueModulePath)
queueModule.loaded = true
queueModule.exports = { QueueUtils: {} }
testRequire.cache[queueModulePath] = queueModule

const { claimed, claimMaturityCutoff, claimMinted, claimMoved } = testRequire(
    '~/pallet/claims/processors'
) as typeof import('~/pallet/claims/processors')

after(() => {
    testRequire.cache[queueModulePath] = originalQueueModule
})

type Row = { id: string }
type RowClass = new (...args: never[]) => Row

function matches(value: unknown, where: unknown): boolean {
    if (where instanceof FindOperator) {
        const expected = where.value as number
        switch (where.type) {
            case 'lessThan':
                return (value as number) < expected
            case 'lessThanOrEqual':
                return (value as number) <= expected
            default:
                throw new Error(`Unsupported operator ${where.type}`)
        }
    }
    if (where !== null && typeof where === 'object') {
        if (value === null || typeof value !== 'object') return false
        return Object.entries(where).every(([key, inner]) => matches((value as Record<string, unknown>)[key], inner))
    }
    return value === where
}

class MemoryStore {
    rows: Row[] = []

    constructor(rows: Row[] = []) {
        this.rows = [...rows]
    }

    of<T extends Row>(entity: new (...args: never[]) => T): T[] {
        return this.rows.filter((row): row is T => row instanceof entity)
    }

    find(entity: RowClass, options: { where: unknown }): Promise<Row[]> {
        return Promise.resolve(this.rows.filter((row) => row instanceof entity && matches(row, options.where)))
    }

    findOneBy(entity: RowClass, where: unknown): Promise<Row | undefined> {
        return Promise.resolve(this.rows.find((row) => row instanceof entity && matches(row, where)))
    }

    save(value: Row | Row[]): Promise<void> {
        for (const row of Array.isArray(value) ? value : [value]) {
            this.rows = this.rows.filter((item) => !(item.constructor === row.constructor && item.id === row.id))
            this.rows.push(row)
        }
        return Promise.resolve()
    }

    insert(value: Row | Row[]): Promise<void> {
        for (const row of Array.isArray(value) ? value : [value]) {
            if (this.rows.some((item) => item.constructor === row.constructor && item.id === row.id)) {
                return Promise.reject(new Error(`duplicate key ${row.id}`))
            }
            this.rows.push(row)
        }
        return Promise.resolve()
    }
}

const oldAddress = `0x${'aa'.repeat(20)}`
const newAddress = `0x${'bb'.repeat(20)}`
const dest = `0x${'11'.repeat(32)}`
const delay = 100

const parentHash = '0x01'

/** `parentClaims` lists the addresses holding a `Claims` entry in the parent block's state. */
async function fixture(height: number, rows: Row[] = [], parentClaims: string[] = []) {
    const base = await getRuntimeCached('enjin-matrixchain', 1041)
    const storage: Record<string, unknown> = {
        'Claims.DelayClaimsPeriod': delay,
        'Claims.TotalUnclaimedAmount': 0n,
    }
    const runtime = Object.create(base) as Runtime
    runtime.getStorage = (hash: string, name: string, ...key: unknown[]) => {
        if (name === 'Claims.Claims') {
            assert.equal(hash, parentHash, 'Claims must be read at the parent block')
            return Promise.resolve(parentClaims.includes(key[0] as string) ? [] : undefined)
        }
        return Promise.resolve(storage[name])
    }
    const parent = { _runtime: runtime, height: height - 1, hash: parentHash }
    const block = { _runtime: runtime, height, hash: '0x00', timestamp: 0, getParent: () => parent } as unknown as Block
    const store = new MemoryStore(rows)
    const warnings: string[] = []
    const ctx = { store, log: { warn: (message: string) => warnings.push(message) } } as unknown as CommonContext
    let index = 0
    const event = (name: string, args: unknown): EventItem =>
        ({ id: `${height}-${index++}`, name, args, block, extrinsic: { id: `${height}-0`, index: 0 } }) as EventItem
    return { block, store, ctx, event, warnings }
}

function request(id: string, who: string, createdBlock: number, amount: bigint, extra: Partial<ClaimRequest> = {}) {
    return new ClaimRequest({
        id,
        who,
        acountType: AccountClaimType.EVM,
        amountClaimable: amount,
        amountBurned: amount,
        hash: `0x${id.padStart(64, '0')}`,
        isEfiToken: false,
        extrinsicIndex: 0,
        isClaimed: false,
        isRejected: false,
        createdBlock,
        createdAt: new Date(0),
        ...extra,
    })
}

void test('claim maturity cutoff is inclusive like process_claim', () => {
    assert.equal(claimMaturityCutoff(1_000, 100), 900)
    assert.equal(claimMaturityCutoff(1_000, 100n), 900)
})

void test('Claimed pays requests created exactly `delay` blocks earlier and skips immature or rejected ones', async () => {
    const height = 1_000
    const { ctx, store, block, event } = await fixture(height, [
        new ClaimDetails({ id: '0', totalUnclaimedAmount: 0n }),
        request('1', oldAddress, height - delay, 10n),
        request('2', oldAddress, height - delay + 1, 20n),
        request('3', oldAddress, height - delay - 5, 40n, { isRejected: true }),
    ])

    await claimed(ctx, block, event('Claims.Claimed', { who: dest, ethereumAddress: oldAddress, amount: '10' }))

    const byId = new Map(store.of(ClaimRequest).map((row) => [row.id, row]))
    assert.equal(byId.get('1')?.isClaimed, true)
    assert.equal(byId.get('2')?.isClaimed, false)
    assert.equal(byId.get('3')?.isClaimed, false)
    assert.equal(store.of(Claim)[0].enjSum, 10n)
})

void test('Claimed without ClaimDetails or matching requests records the payout instead of halting', async () => {
    const { ctx, store, block, event, warnings } = await fixture(1_000)

    await claimed(ctx, block, event('Claims.Claimed', { who: dest, ethereumAddress: oldAddress, amount: '7' }))

    const [claim] = store.of(Claim)
    assert.equal(claim.amount, 7n)
    assert.equal(claim.enjSum, 0n)
    assert.equal(claim.count, 1)
    assert.equal(store.of(ClaimDetails).length, 1)
    assert.equal(warnings.length, 1)
})

void test('ClaimMoved moves pending requests and drops the ones it overwrites at the new address', async () => {
    const { ctx, store, event } = await fixture(500, [
        request('1', oldAddress, 10, 10n),
        request('2', oldAddress, 20, 20n, { isClaimed: true }),
        request('3', newAddress, 30, 30n),
    ])

    await claimMoved(ctx, event('Claims.ClaimMoved', { old: oldAddress, new: newAddress }))

    const byId = new Map(store.of(ClaimRequest).map((row) => [row.id, row]))
    assert.equal(byId.get('1')?.who, newAddress)
    assert.equal(byId.get('1')?.isRejected, false)
    assert.equal(byId.get('2')?.who, oldAddress)
    assert.equal(byId.get('3')?.isRejected, true)
})

void test('ClaimMoved from an address without pending claims leaves the new address untouched', async () => {
    const { ctx, store, event } = await fixture(500, [request('3', newAddress, 30, 30n)])

    await claimMoved(ctx, event('Claims.ClaimMoved', { old: oldAddress, new: newAddress }))

    assert.equal(store.of(ClaimRequest)[0].isRejected, false)
})

void test('ClaimMoved of unindexed (genesis) claims drops the requests it overwrites at the new address', async () => {
    const { ctx, store, block, event } = await fixture(1_000, [request('3', newAddress, 30, 30n)], [oldAddress])

    await claimMoved(ctx, event('Claims.ClaimMoved', { old: oldAddress, new: newAddress }))
    await claimed(ctx, block, event('Claims.Claimed', { who: dest, ethereumAddress: newAddress, amount: '50' }))

    const [overwritten] = store.of(ClaimRequest)
    assert.equal(overwritten.isRejected, true)
    assert.equal(overwritten.isClaimed, false)
    assert.equal(store.of(Claim)[0].enjSum, 0n)
    assert.equal(store.of(Claim)[0].amount, 50n)
})

void test('a later Claimed by the new address pays the moved requests', async () => {
    const { ctx, store, block, event } = await fixture(1_000, [request('1', oldAddress, 10, 10n)])

    await claimMoved(ctx, event('Claims.ClaimMoved', { old: oldAddress, new: newAddress }))
    await claimed(ctx, block, event('Claims.Claimed', { who: dest, ethereumAddress: newAddress, amount: '10' }))

    assert.equal(store.of(ClaimRequest)[0].isClaimed, true)
    assert.equal(store.of(Claim)[0].enjSum, 10n)
})

void test('two ClaimMinted events for the same address in one block create two requests', async () => {
    const { ctx, store, block, event } = await fixture(700)

    await claimMinted(ctx, block, event('Claims.ClaimMinted', { who: oldAddress, amount: '5' }))
    await claimMinted(ctx, block, event('Claims.ClaimMinted', { who: oldAddress, amount: '6' }))

    const requests = store.of(ClaimRequest)
    assert.equal(requests.length, 2)
    assert.deepEqual(requests.map((row) => row.amountClaimable).sort(), [5n, 6n])
})
