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
    MintPolicy,
    RoyaltyCurrency,
    Token,
    TokenAccount,
    TokenApproval,
    TokenBehaviorIsCurrency,
    TokenBehaviorType,
    TokenGroup,
    TokenGroupToken,
    TokenNamedReserve,
} from '~/model'
import { FindOperator } from 'typeorm'
import { encodeAddress } from '~/util/tools'

// The processors pull in the queue helpers, which open BullMQ connections; stub them so the run exits.
const testRequire = createRequire(__filename)
const noop = () => Promise.resolve()
const queueStubs = { dispatchComputeStats: noop, dispatchComputeAccountStats: noop, dispatchComputeMetadata: noop }
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

    find(entity: RowClass, options: { where: Record<string, unknown> }): Promise<Row[]> {
        const matches = (row: Row) =>
            Object.entries(options.where).every(([key, expected]) => {
                const actual = (row as unknown as Record<string, unknown>)[key]
                if (expected instanceof FindOperator) return (expected.value as unknown[]).includes(actual)
                if (expected && typeof expected === 'object' && 'id' in expected) {
                    return (actual as Row | undefined)?.id === expected.id
                }
                return actual === expected
            })
        return Promise.resolve(this.rows.filter((row) => row instanceof entity && matches(row)))
    }

    insert(value: Row | Row[]): Promise<void> {
        for (const row of Array.isArray(value) ? value : [value]) {
            assert.ok(!this.rows.some((r) => r.constructor === row.constructor && r.id === row.id), `dup ${row.id}`)
            this.rows.push(row)
        }
        return Promise.resolve()
    }

    remove(value: Row | Row[]): Promise<void> {
        const removed = Array.isArray(value) ? value : [value]
        this.rows = this.rows.filter((row) => !removed.includes(row))
        return Promise.resolve()
    }

    all<T extends Row>(entity: new (...args: never[]) => T): T[] {
        return this.rows.filter((row): row is T => row instanceof entity)
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
    const raw = new Map<string, string>()
    Object.defineProperty(runtime, 'rpc', {
        value: {
            call: (method: string, params: [string, string]) => {
                assert.equal(method, 'state_getStorageAt')
                return Promise.resolve(raw.get(params[0]) ?? null)
            },
        },
    })
    // Tokens and Collections are read as raw SCALE bytes; encode the decoded value with this runtime's codec.
    const setEncodedStorage = (name: 'Tokens' | 'Collections', key: bigint[], value: unknown) =>
        raw.set(
            runtime.encodeStorageKey(`MultiTokens.${name}`, ...key),
            runtime.scaleCodec.encodeToHex(runtime.description.storage.MultiTokens.items[name].value, value)
        )
    const block = { _runtime: runtime, height: HEIGHT, hash: '0x02', timestamp: 0 } as unknown as Block
    const store = new MemoryStore(rows)
    const ctx = { store, log: { warn: () => undefined } } as unknown as CommonContext
    const event = (name: string, args: unknown): EventItem =>
        ({ id: '500-1', name, args, block, extrinsic: { id: '500-0', index: 0, hash: '0x00' } }) as unknown as EventItem
    const setStorage = (name: string, key: unknown[], value: unknown) => chain.set(`${name}|${json(key)}`, value)
    return { block, ctx, store, event, setStorage, setEncodedStorage }
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

function storedToken(overrides: Record<string, unknown> = {}) {
    return {
        supply: 1n,
        cap: undefined,
        freezeState: undefined,
        requiresDeposit: true,
        creationDeposit: { depositor: undefined, amount: 0n },
        ownerDeposit: 0n,
        totalTokenAccountDeposit: 0n,
        attributeCount: 0,
        accountCount: 1,
        marketBehavior: undefined,
        listingForbidden: false,
        metadata: { decimalCount: 6, name: '0x746f6b656e', symbol: '0x544b4e', foreign: undefined },
        infusion: 0n,
        anyoneCanInfuse: false,
        groups: [],
        ephemeralExpiration: undefined,
        isLendable: false,
        lending: undefined,
        mintRateLimit: undefined,
        ...overrides,
    }
}

function updatedTokenRows() {
    const collection = new Collection({ id: '7', mintPolicy: new MintPolicy({ maxTokenSupply: 1n }) })
    const token = new Token({ id: '7-1', tokenId: 1n, collection, accountDepositCount: 3, nativeMetadata: null })
    const [g1, g2, g3] = ['11', '12', '13'].map((id) => new TokenGroup({ id }))
    return {
        token,
        rows: [token, g1, g2, g3, new TokenGroupToken({ id: '1-11', token, tokenGroup: g1, position: 0 })],
    }
}

const tokenUpdatedEvent = { collectionId: 7, tokenId: 1, value: undefined }

void test('TokenUpdated loads the collection and refreshes metadata, deposit count and group memberships', async () => {
    const { token, rows } = updatedTokenRows()
    const { block, ctx, store, event, setEncodedStorage } = await fixture(rows)
    const loaded: unknown[] = []
    const findOne = store.findOne.bind(store)
    store.findOne = (entity, options) => {
        loaded.push((options as { relations?: unknown }).relations)
        return findOne(entity, options)
    }
    setEncodedStorage('Tokens', [7n, 1n], storedToken({ groups: [13n, 12n] }))

    await processors.tokenUpdated(ctx, block, event('MultiTokens.TokenUpdated', tokenUpdatedEvent), false)

    assert.deepEqual(loaded[0], { collection: true })
    const saved = store.get(Token, '7-1')
    assert.equal(saved, token)
    assert.deepEqual(
        [saved.nativeMetadata?.name, saved.nativeMetadata?.symbol, saved.nativeMetadata?.decimalCount],
        ['token', 'TKN', 6]
    )
    assert.equal(saved.accountDepositCount, 1)
    assert.equal(saved.nonFungible, true)
    const memberships = store.all(TokenGroupToken).map((m) => [m.id, m.tokenGroup.id, m.position])
    assert.deepEqual(memberships, [
        ['1-13', '13', 0],
        ['1-12', '12', 1],
    ])
})

void test('TokenUpdated clears deposits and memberships when the replacement drops them', async () => {
    const { rows } = updatedTokenRows()
    const { block, ctx, store, event, setEncodedStorage } = await fixture(rows)
    setEncodedStorage(
        'Tokens',
        [7n, 1n],
        storedToken({
            requiresDeposit: false,
            supply: 5n,
            marketBehavior: { __kind: 'IsCurrency' },
        })
    )

    await processors.tokenUpdated(ctx, block, event('MultiTokens.TokenUpdated', tokenUpdatedEvent), false)

    const saved = store.get(Token, '7-1')
    assert.equal(saved.accountDepositCount, 0)
    assert.ok(saved.behavior instanceof TokenBehaviorIsCurrency)
    assert.equal(saved.behavior.type, TokenBehaviorType.IsCurrency)
    assert.equal(saved.nonFungible, false)
    assert.deepEqual(store.all(TokenGroupToken), [])
})

function storedCollection(currencies: [number, number][]) {
    return {
        owner,
        policy: {
            mint: { maxTokenCount: undefined, maxTokenSupply: undefined, forceCollapsingSupply: false },
            transfer: { isFrozen: false },
            market: { royalty: undefined },
        },
        tokenCount: 0n,
        attributeCount: 0,
        creationDeposit: { depositor: owner, amount: 0n },
        totalDeposit: 0n,
        explicitRoyaltyCurrencies: currencies.map(([c, t]) => [{ collectionId: BigInt(c), tokenId: BigInt(t) }, null]),
        totalInfusion: 0n,
        tokenGroupCount: 0,
        mintRateLimit: undefined,
    }
}

void test('CollectionUpdated reconciles royalty currencies with the stored list', async () => {
    const collection = new Collection({ id: '7' })
    const [kept, dropped, added] = ['0-0', '0-1', '0-2'].map((id) => new Token({ id }))
    const { block, ctx, store, event, setEncodedStorage } = await fixture([
        collection,
        kept,
        dropped,
        added,
        new RoyaltyCurrency({ id: '7-0-0', collection, token: kept }),
        new RoyaltyCurrency({ id: '7-0-1', collection, token: dropped }),
    ])
    const collectionUpdated = (currencies: [number, number][]) => {
        setEncodedStorage('Collections', [7n], storedCollection(currencies))
        return processors.collectionUpdated(
            ctx,
            block,
            event('MultiTokens.CollectionUpdated', { collectionId: 7, value: undefined }),
            false
        )
    }

    await collectionUpdated([
        [0, 0],
        [0, 2],
        [0, 9],
    ])
    assert.deepEqual(
        store
            .all(RoyaltyCurrency)
            .map((rc) => rc.id)
            .sort(),
        ['7-0-0', '7-0-2']
    )

    await collectionUpdated([])
    assert.deepEqual(store.all(RoyaltyCurrency), [])
})

void test('legacy Native and Foreign token metadata kinds clear the native metadata', () => {
    assert.equal(processors.toNativeTokenMetadata({ __kind: 'Native' }), null)
    assert.equal(processors.toNativeTokenMetadata(undefined), null)
})
