import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import type { Block, CommonContext, EventItem } from '~/contexts'
import { getRuntimeCached } from '~/decoder/metadata'
import {
    Account,
    Collection,
    CollectionAccount,
    CollectionApproval,
    Token,
    TokenAccount,
    TokenApproval,
    TokenNamedReserve,
} from '~/model'
import { encodeAddress } from '~/util/tools'

// The processors pull in the queue helpers, which open BullMQ connections; stub them so the run exits.
const testRequire = createRequire(__filename)
const noop = () => Promise.resolve()
const queueStubs = { dispatchComputeStats: noop, dispatchComputeAccountStats: noop }
const stubbed: [string, NodeJS.Module | undefined][] = []
for (const [path, exports] of [
    ['~/queue', { QueueUtils: queueStubs }],
    ['~/queue/queue-utils', queueStubs],
] as const) {
    const resolved = testRequire.resolve(path)
    stubbed.push([resolved, testRequire.cache[resolved]])
    const module = new Module(resolved)
    module.loaded = true
    module.exports = exports
    testRequire.cache[resolved] = module
}

const processors = testRequire('~/pallet/multi-tokens/processors') as typeof import('~/pallet/multi-tokens/processors')

after(() => {
    for (const [path, original] of stubbed) testRequire.cache[path] = original
})

type Row = { id: string }
type RowClass = new (...args: never[]) => Row

class MemoryStore {
    rows: Row[]

    constructor(rows: Row[] = []) {
        this.rows = [...rows]
    }

    get<T extends Row>(entity: new (...args: never[]) => T, id: string): T {
        const row = this.rows.find((r): r is T => r instanceof entity && r.id === id)
        assert.ok(row, `missing ${entity.name} ${id}`)
        return row
    }

    findOne(entity: RowClass, options: { where: { id: string } }): Promise<Row | undefined> {
        return this.findOneBy(entity, options.where)
    }

    findOneBy(entity: RowClass, where: { id: string }): Promise<Row | undefined> {
        return Promise.resolve(this.rows.find((row) => row instanceof entity && row.id === where.id))
    }

    save(value: Row | Row[]): Promise<void> {
        for (const row of Array.isArray(value) ? value : [value]) {
            this.rows = this.rows.filter((item) => !(item.constructor === row.constructor && item.id === row.id))
            this.rows.push(row)
        }
        return Promise.resolve()
    }
}

const owner = `0x${'aa'.repeat(32)}`
const operator = `0x${'bb'.repeat(32)}`
const receiver = `0x${'cc'.repeat(32)}`
const HEIGHT = 500

const json = (value: unknown) => JSON.stringify(value, (_, v: unknown) => (typeof v === 'bigint' ? v.toString() : v))

async function fixture(rows: Row[]) {
    const real = await getRuntimeCached('enjin-matrixchain', 1041)
    const chain = new Map<string, unknown>()
    const runtime = Object.create(real) as typeof real & Record<string, unknown>
    runtime.getStorage = (_hash: string, name: string, ...key: unknown[]) =>
        Promise.resolve(chain.get(`${name}|${json(key)}`))
    const block = { _runtime: runtime, height: HEIGHT, hash: '0x02', timestamp: 0 } as unknown as Block
    const store = new MemoryStore(rows)
    const ctx = { store, log: { warn: () => undefined } } as unknown as CommonContext
    const event = (name: string, args: unknown): EventItem =>
        ({ id: '500-1', name, args, block, extrinsic: { id: '500-0', index: 0, hash: '0x00' } }) as unknown as EventItem
    const setStorage = (name: string, key: unknown[], value: unknown) => chain.set(`${name}|${json(key)}`, value)
    return { block, ctx, store, event, setStorage }
}

function tokenAccountRow(account: string, extra: Partial<TokenAccount> = {}) {
    return new TokenAccount({
        id: `${account}-7-1`,
        balance: 100n,
        reservedBalance: 0n,
        totalBalance: 100n,
        lockedBalance: 0n,
        namedReserves: null,
        locks: null,
        approvals: null,
        isFrozen: false,
        account: new Account({ id: account }),
        ...extra,
    })
}

function tokenRow() {
    return new Token({ id: '7-1', collection: new Collection({ id: '7' }), accountDepositCount: 3 })
}

const approve = (amount: number) => ({
    collectionId: 7,
    tokenId: 1,
    owner,
    operator,
    amount: String(amount),
    expiration: undefined,
})

void test('Approved replaces the operator approval instead of appending a second one', async () => {
    const { ctx, store, event } = await fixture([tokenAccountRow(owner)])

    await processors.approved(ctx, event('MultiTokens.Approved', approve(10)), false)
    await processors.approved(ctx, event('MultiTokens.Approved', approve(4)), false)

    const approvals = store.get(TokenAccount, `${owner}-7-1`).approvals ?? []
    assert.equal(approvals.length, 1)
    assert.equal(approvals[0].accountId, encodeAddress(operator))
    assert.equal(approvals[0].amount, 4n)
})

const transfer = (amount: number) => ({
    collectionId: 7,
    tokenId: 1,
    operator,
    from: owner,
    to: receiver,
    amount: String(amount),
})

function transferRows(allowance: bigint, collectionApproval?: CollectionApproval) {
    return [
        tokenRow(),
        new Account({ id: owner }),
        new Account({ id: receiver }),
        tokenAccountRow(owner, {
            approvals: [new TokenApproval({ accountId: encodeAddress(operator), amount: allowance })],
        }),
        tokenAccountRow(receiver, { balance: 0n, totalBalance: 0n }),
        new CollectionAccount({ id: `7-${owner}`, approvals: collectionApproval ? [collectionApproval] : null }),
    ]
}

void test('an operator transfer spends the token allowance and removes it once exhausted', async () => {
    const { block, ctx, store, event } = await fixture(transferRows(10n))

    await processors.transferred(ctx, block, event('MultiTokens.Transferred', transfer(6)), false)
    assert.equal(store.get(TokenAccount, `${owner}-7-1`).approvals?.[0].amount, 4n)

    await processors.transferred(ctx, block, event('MultiTokens.Transferred', transfer(4)), false)
    assert.deepEqual(store.get(TokenAccount, `${owner}-7-1`).approvals, [])
    assert.equal(store.get(TokenAccount, `${owner}-7-1`).balance, 90n)
})

void test('a live collection approval covers the transfer and leaves the token allowance alone', async () => {
    const live = new CollectionApproval({ accountId: encodeAddress(operator), expiration: HEIGHT + 1 })
    const { block, ctx, store, event } = await fixture(transferRows(10n, live))

    await processors.transferred(ctx, block, event('MultiTokens.Transferred', transfer(6)), false)
    assert.equal(store.get(TokenAccount, `${owner}-7-1`).approvals?.[0].amount, 10n)
})

void test('an expired collection approval falls back to the token allowance', async () => {
    const expired = new CollectionApproval({ accountId: encodeAddress(operator), expiration: HEIGHT })
    const { block, ctx, store, event } = await fixture(transferRows(10n, expired))

    await processors.transferred(ctx, block, event('MultiTokens.Transferred', transfer(6)), false)
    assert.equal(store.get(TokenAccount, `${owner}-7-1`).approvals?.[0].amount, 4n)
})

void test('Slashed lowers the reserved and total balance', async () => {
    const { block, ctx, store, event } = await fixture([
        tokenAccountRow(owner, { balance: 60n, reservedBalance: 40n, totalBalance: 100n }),
    ])

    await processors.slashed(
        ctx,
        block,
        event('MultiTokens.Slashed', { collectionId: 7, tokenId: 1, accountId: owner, amount: '15' }),
        false
    )

    const account = store.get(TokenAccount, `${owner}-7-1`)
    assert.equal(account.balance, 60n)
    assert.equal(account.reservedBalance, 25n)
    assert.equal(account.totalBalance, 85n)
})

void test('ReserveRepatriated moves the held amount and its named reserve between accounts', async () => {
    const { block, ctx, store, event } = await fixture([
        tokenAccountRow(owner, {
            balance: 60n,
            reservedBalance: 40n,
            totalBalance: 100n,
            namedReserves: [new TokenNamedReserve({ pallet: 'Marketplace', amount: 40n })],
        }),
        tokenAccountRow(receiver, { balance: 0n, totalBalance: 0n }),
    ])

    await processors.reserveRepatriated(
        ctx,
        block,
        event('MultiTokens.ReserveRepatriated', {
            collectionId: 7,
            tokenId: 1,
            source: owner,
            destination: receiver,
            amount: '40',
            reserveId: { __kind: 'Marketplace', value: { __kind: 'Marketplace' } },
        }),
        false
    )

    const source = store.get(TokenAccount, `${owner}-7-1`)
    const destination = store.get(TokenAccount, `${receiver}-7-1`)
    assert.deepEqual([source.reservedBalance, source.totalBalance, source.namedReserves], [0n, 60n, []])
    assert.deepEqual([destination.reservedBalance, destination.totalBalance], [40n, 40n])
    assert.deepEqual(destination.namedReserves, [new TokenNamedReserve({ pallet: 'Marketplace', amount: 40n })])
})

void test('Locked and Unlocked move the locked balance by the reported change', async () => {
    const { block, ctx, store, event } = await fixture([tokenAccountRow(owner)])
    const args = (amount: number) => ({ collectionId: 7, tokenId: 1, accountId: owner, amount: String(amount) })

    await processors.locked(ctx, block, event('MultiTokens.Locked', args(30)), false)
    assert.equal(store.get(TokenAccount, `${owner}-7-1`).lockedBalance, 30n)
    await processors.unlocked(ctx, block, event('MultiTokens.Unlocked', args(10)), false)
    assert.equal(store.get(TokenAccount, `${owner}-7-1`).lockedBalance, 20n)
})

void test('TokenAccountUpdated refreshes the token account from storage at the block', async () => {
    const { block, ctx, store, event, setStorage } = await fixture([tokenAccountRow(owner)])
    setStorage('MultiTokens.TokenAccounts', [7n, 1n, owner], {
        balance: 5n,
        reservedBalance: 2n,
        lockedBalance: 1n,
        holds: [],
        approvals: [[operator, { amount: 3n, expiration: undefined }]],
        isFrozen: true,
        deposit: undefined,
        storageVersion: 0,
    })

    await processors.tokenAccountUpdated(
        ctx,
        block,
        event('MultiTokens.TokenAccountUpdated', { collectionId: 7, tokenId: 1, accountId: owner, value: undefined }),
        false
    )

    const account = store.get(TokenAccount, `${owner}-7-1`)
    assert.deepEqual(
        [account.balance, account.reservedBalance, account.totalBalance, account.lockedBalance, account.isFrozen],
        [5n, 2n, 7n, 1n, true]
    )
    const [approval] = account.approvals ?? []
    assert.deepEqual([approval.accountId, approval.amount], [encodeAddress(operator), 3n])
})

void test('the owner-funded account count is derived from owner_deposit, not summed from event deltas', async () => {
    const { block } = await fixture([])
    const perAccount = processors.ownerFundedAccountCount(block, { requiresDeposit: true, ownerDeposit: 0n })
    assert.equal(perAccount, 1)

    const constant = (await import('~/type/constants')).multiTokens.tokenAccountDeposit.matrixEnjinV603.get(block)
    assert.equal(processors.ownerFundedAccountCount(block, { requiresDeposit: true, ownerDeposit: constant * 4n }), 5)
    assert.equal(processors.ownerFundedAccountCount(block, { requiresDeposit: false, ownerDeposit: 0n }), undefined)
})

void test('TokenUpdated and TokenAccountDepositUpdated are no longer ignored', () => {
    const source = fs.readFileSync(path.resolve(__dirname, '../src/processor.config.ts'), 'utf8')
    const ignored = source.slice(source.indexOf('const ignoreEvents'), source.indexOf('const eventItems'))
    for (const name of ['tokenUpdated', 'tokenAccountDepositUpdated']) {
        assert.ok(!ignored.includes(`multiTokens.${name}.name`), `${name} is still ignored`)
    }
})
