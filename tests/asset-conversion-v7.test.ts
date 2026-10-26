import assert from 'node:assert/strict'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import { Codec, Type, TypeKind } from '@subsquid/scale-codec'
import { Runtime } from '@subsquid/substrate-runtime'
import { compactToU8a, stringToU8a, u8aConcat, u8aToHex } from '@polkadot/util'
import { blake2AsU8a } from '@polkadot/util-crypto'
import type { Block, CallItem, CommonContext, EventItem } from '~/contexts'
import { getRuntimeCached } from '~/decoder/metadata'
import { Account, Collection, Token, TokenAccount } from '~/model'
import { decodeTokenStorageValue, hasV6TokenLayout, tokenLayout } from '~/pallet/multi-tokens/storage/token-values'

// The processors pull in the queue helpers, which open BullMQ connections; stub them so the run exits.
const testRequire = createRequire(__filename)
const noop = () => Promise.resolve()
const accountStatsDispatched: string[] = []
const queueStubs = {
    dispatchComputeStats: noop,
    dispatchComputeAccountStats: (id: string) => {
        accountStatsDispatched.push(id)
        return Promise.resolve()
    },
    dispatchComputeMetadata: noop,
}
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

const { tokenCreated } = testRequire(
    '~/pallet/multi-tokens/processors/token-created'
) as typeof import('~/pallet/multi-tokens/processors/token-created')
const { collectionCreated } = testRequire(
    '~/pallet/multi-tokens/processors/collection-created'
) as typeof import('~/pallet/multi-tokens/processors/collection-created')
const utils = testRequire('~/pallet/multi-tokens/common') as typeof import('~/pallet/multi-tokens/common')
const acProcessors = testRequire(
    '~/pallet/asset-conversion/processors'
) as typeof import('~/pallet/asset-conversion/processors')
const { poolIdOf } = testRequire(
    '~/pallet/asset-conversion/events'
) as typeof import('~/pallet/asset-conversion/events')

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

    insert(value: Row | Row[]): Promise<void> {
        return this.save(value)
    }
}

const json = (value: unknown) => JSON.stringify(value, (_, v: unknown) => (typeof v === 'bigint' ? v.toString() : v))

function tokenValue() {
    return {
        supply: 5n,
        cap: undefined,
        freezeState: undefined,
        requiresDeposit: false,
        creationDeposit: { depositor: undefined, amount: 0n },
        ownerDeposit: 0n,
        totalTokenAccountDeposit: 0n,
        attributeCount: 0,
        accountCount: 1,
        marketBehavior: undefined,
        listingForbidden: false,
        metadata: { decimalCount: 0, name: '0x', symbol: '0x', foreign: undefined },
        infusion: 0n,
        anyoneCanInfuse: false,
        groups: [],
        ephemeralExpiration: undefined,
        isLendable: true,
        lending: undefined,
        mintRateLimit: undefined,
    } as Record<string, unknown>
}

async function fixture(rows: Row[] = []) {
    const real = await getRuntimeCached('enjin-matrixchain', 1041)
    const chain = new Map<string, unknown>()
    const raw = new Map<string, string>()
    const runtime = Object.create(real) as typeof real & Record<string, unknown>
    runtime.getStorage = (_hash: string, name: string, ...key: unknown[]) =>
        Promise.resolve(chain.get(`${name}|${json(key)}`))
    Object.defineProperty(runtime, 'rpc', {
        value: {
            call: (method: string, params: unknown[]) => {
                assert.equal(method, 'state_getStorageAt')
                return Promise.resolve(raw.get(params[0] as string) ?? null)
            },
        },
    })
    const block = { _runtime: runtime, height: 900, hash: '0x09', timestamp: 0 } as unknown as Block
    const store = new MemoryStore(rows)
    const ctx = { store, log: { warn: () => undefined } } as unknown as CommonContext
    const event = (name: string, args: unknown, call?: CallItem): EventItem =>
        ({ id: '900-1', name, args, block, call }) as unknown as EventItem
    const setStorage = (name: string, key: unknown[], value: unknown) => chain.set(`${name}|${json(key)}`, value)
    const setToken = (collectionId: bigint, tokenId: bigint, value: Record<string, unknown>) => {
        const type = real.description.storage.MultiTokens.items.Tokens.value
        raw.set(
            real.encodeStorageKey('MultiTokens.Tokens', collectionId, tokenId),
            real.scaleCodec.encodeToHex(type, value)
        )
    }
    return { real, block, ctx, store, event, setStorage, setToken }
}

/** The runtime with storage v7's `creationBlock` appended to the token, as enjin/pallets master encodes it. */
function v7Runtime(real: Runtime) {
    const type = real.description.storage.MultiTokens.items.Tokens.value
    const definition = real.description.types[type]
    assert(definition.kind === TypeKind.Composite)
    const u32 = real.description.types.findIndex((t) => t.kind === TypeKind.Primitive && t.primitive === 'U32')
    assert(u32 >= 0)

    const types = real.description.types.slice() as Type[]
    types[type] = { ...definition, fields: [...definition.fields, { name: 'creationBlock', type: u32 }] }
    const codec = new Codec(types)
    const runtime = {
        description: { ...real.description, types },
        decodeStorageValue: (_name: string, value: string) => codec.decodeBinary(type, value),
    } as unknown as Runtime

    return { runtime, codec, type }
}

void test('token layout check accepts the v6 and v7 trailing fields', async () => {
    const { real } = await fixture()
    const { runtime } = v7Runtime(real)

    assert.equal(tokenLayout(real), 'v6')
    assert.equal(tokenLayout(runtime), 'v7')
    assert.equal(hasV6TokenLayout(real), true)
    assert.equal(hasV6TokenLayout(runtime), true)
})

void test('Canary Matrixchain 1042 metadata decodes current and lazily unmigrated tokens', async () => {
    const current = await getRuntimeCached('canary-matrixchain', 1042)
    const previous = await getRuntimeCached('canary-matrixchain', 1041)
    const currentType = current.description.storage.MultiTokens.items.Tokens.value
    const previousType = previous.description.storage.MultiTokens.items.Tokens.value

    assert.equal(tokenLayout(current), 'v7')
    assert.equal(tokenLayout(previous), 'v6')

    const v7 = current.scaleCodec.encodeToHex(currentType, { ...tokenValue(), creationBlock: 13376712 })
    const v6 = previous.scaleCodec.encodeToHex(previousType, tokenValue())
    assert.equal(decodeTokenStorageValue(current, v7).creationBlock, 13376712n)
    assert.equal(decodeTokenStorageValue(current, v6).creationBlock, undefined)
})

void test('Enjin Matrixchain 1042 metadata decodes current and lazily unmigrated tokens', async () => {
    const current = await getRuntimeCached('enjin-matrixchain', 1042)
    const previous = await getRuntimeCached('enjin-matrixchain', 1041)
    const currentType = current.description.storage.MultiTokens.items.Tokens.value
    const previousType = previous.description.storage.MultiTokens.items.Tokens.value

    assert.equal(tokenLayout(current), 'v7')
    assert.equal(tokenLayout(previous), 'v6')

    const v7 = current.scaleCodec.encodeToHex(currentType, { ...tokenValue(), creationBlock: 12331000 })
    const v6 = previous.scaleCodec.encodeToHex(previousType, tokenValue())
    assert.equal(decodeTokenStorageValue(current, v7).creationBlock, 12331000n)
    assert.equal(decodeTokenStorageValue(current, v6).creationBlock, undefined)
})

void test('v7 token decoder reads v7, lazily unmigrated v6 and pre-v6 encodings', async () => {
    const { real } = await fixture()
    const { runtime, codec, type } = v7Runtime(real)

    const v7 = codec.encodeToHex(type, { ...tokenValue(), creationBlock: 1234 })
    const v6 = real.scaleCodec.encodeToHex(type, tokenValue())
    const preV6Types = real.description.types.slice() as Type[]
    const definition = real.description.types[type]
    assert(definition.kind === TypeKind.Composite)
    preV6Types[type] = { ...definition, fields: definition.fields.slice(0, -4) }
    const preV6Value = tokenValue()
    delete preV6Value.ephemeralExpiration
    delete preV6Value.isLendable
    delete preV6Value.lending
    delete preV6Value.mintRateLimit
    const preV6 = new Codec(preV6Types).encodeToHex(type, preV6Value)

    const current = decodeTokenStorageValue(runtime, v7)
    assert.equal(current.creationBlock, 1234n)
    assert.equal(current.isLendable, true)
    assert.equal(current.supply, 5n)

    const unmigrated = decodeTokenStorageValue(runtime, v6)
    assert.equal(unmigrated.creationBlock, undefined)
    assert.equal(unmigrated.isLendable, true)

    const old = decodeTokenStorageValue(runtime, preV6)
    assert.equal(old.creationBlock, undefined)
    assert.equal(old.isLendable, false)

    assert.throws(() => decodeTokenStorageValue(runtime, `${v7}ff`), /either current or strict pre-v6 token/)
})

void test('TokenCreated from AssetConversion.create_pool reads the token from storage instead of throwing', async () => {
    const collection = new Collection({ id: '2000', attributes: [] })
    const { block, ctx, store, event, setToken } = await fixture([collection])
    setToken(2000n, 3n, tokenValue())

    const call = { id: '900-0', name: 'AssetConversion.create_pool', args: {}, success: true, block } as CallItem
    const item = event(
        'MultiTokens.TokenCreated',
        {
            collectionId: '2000',
            tokenId: '3',
            issuer: { __kind: 'Signed', value: `0x${'aa'.repeat(32)}` },
            initialSupply: '0',
        },
        call
    )

    await tokenCreated(ctx, block, item, false)

    const token = store.rows.find((row): row is Token => row instanceof Token && row.id === '2000-3')
    assert.ok(token)
    assert.equal(token.isLendable, true)
    assert.equal(token.creationSupply, 0n)
})

void test('CollectionCreated without a call builds the collection from storage', async (t) => {
    const owner = `0x${'ef'.repeat(32)}`
    const { block, ctx, store, event } = await fixture()
    t.mock.method(utils, 'collectionFromStorageAsCall', (_block: Block, collectionId: bigint) => {
        assert.equal(collectionId, 2000n)
        return Promise.resolve({
            descriptor: {
                policy: {
                    mint: { maxTokenCount: undefined, maxTokenSupply: undefined, forceCollapsingSupply: false },
                    market: { royalty: undefined },
                },
                explicitRoyaltyCurrencies: [],
                attributes: [],
            },
        })
    })

    const result = await collectionCreated(
        ctx,
        block,
        event('MultiTokens.CollectionCreated', { collectionId: '2000', owner }),
        false
    )

    assert.ok(Array.isArray(result))
    const collection = store.rows.find((row): row is Collection => row instanceof Collection && row.id === '2000')
    assert.ok(collection)
    assert.equal(collection.owner.id, owner)
    assert.equal(collection.mintPolicy.forceCollapsingSupply, false)
})

void test('pool account follows AccountIdConverter over the ascending compact-encoded pool id', () => {
    const enj = { collectionId: 0n, tokenId: 0n }
    const asset = { collectionId: 2000n, tokenId: 7n }
    const expected = u8aToHex(
        blake2AsU8a(
            u8aConcat(
                stringToU8a('ef/ascon'),
                compactToU8a(0n),
                compactToU8a(0n),
                compactToU8a(2000n),
                compactToU8a(7n)
            ),
            256
        )
    )

    assert.deepEqual(poolIdOf(asset, enj), [enj, asset])
    assert.equal(acProcessors.poolAccountOf(poolIdOf(asset, enj)), expected)
})

void test('AssetConversion swaps refresh affected token accounts and supply from block storage', async () => {
    const who = `0x${'11'.repeat(32)}`
    const sendTo = `0x${'22'.repeat(32)}`
    const a = { collectionId: 2000n, tokenId: 1n }
    const b = { collectionId: 2000n, tokenId: 2n }
    const pool = acProcessors.poolAccountOf(poolIdOf(a, b))
    const row = (account: string, tokenId: bigint, balance: bigint) =>
        new TokenAccount({
            id: `${account}-2000-${tokenId}`,
            balance,
            reservedBalance: 0n,
            totalBalance: balance,
            lockedBalance: 0n,
            account: new Account({ id: account }),
        })
    const token = new Token({ id: '2000-1', supply: 1n })
    const { block, ctx, store, event, setStorage, setToken } = await fixture([
        row(who, 1n, 100n),
        row(sendTo, 2n, 0n),
        row(pool, 1n, 1000n),
        row(pool, 2n, 1000n),
        token,
    ])
    const stored = (balance: bigint) => ({
        balance,
        reservedBalance: 0n,
        lockedBalance: 0n,
        holds: [],
        locks: [],
        approvals: [],
        isFrozen: false,
        deposit: undefined,
    })
    setStorage('MultiTokens.TokenAccounts', [2000n, 1n, who], stored(90n))
    setStorage('MultiTokens.TokenAccounts', [2000n, 2n, sendTo], stored(9n))
    setStorage('MultiTokens.TokenAccounts', [2000n, 1n, pool], stored(1010n))
    setStorage('MultiTokens.TokenAccounts', [2000n, 2n, pool], stored(991n))
    setToken(2000n, 1n, tokenValue())

    const targets = acProcessors.assetConversionTargets([
        event('AssetConversion.SwapExecuted', {
            who,
            sendTo,
            amountIn: '10',
            amountOut: '9',
            path: [
                [{ collectionId: '2000', tokenId: '1' }, '10'],
                [{ collectionId: '2000', tokenId: '2' }, '9'],
            ],
        }),
        event('MultiTokens.Transferred', {}),
    ])
    accountStatsDispatched.length = 0
    await acProcessors.refreshAssetConversionBalances(ctx, block, targets)

    const balance = (account: string, tokenId: bigint) =>
        (store.rows.find((r) => r instanceof TokenAccount && r.id === `${account}-2000-${tokenId}`) as TokenAccount)
            .balance
    assert.equal(balance(who, 1n), 90n)
    assert.equal(balance(sendTo, 2n), 9n)
    assert.equal(balance(pool, 1n), 1010n)
    assert.equal(balance(pool, 2n), 991n)
    assert.equal(token.supply, 5n)
    assert.deepEqual([...new Set(accountStatsDispatched)].sort(), [pool, sendTo, who].sort())
})
