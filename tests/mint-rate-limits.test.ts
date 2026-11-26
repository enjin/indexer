import assert from 'node:assert/strict'
import fs from 'node:fs'
import { createRequire, Module } from 'node:module'
import test, { after } from 'node:test'
import { Codec, Type, TypeKind } from '@subsquid/scale-codec'
import { Runtime } from '@subsquid/substrate-runtime'
import type { Job } from 'bullmq'
import { Block, EventItem } from '~/contexts'
import { Collection, Token } from '~/model'
import { normalizeDefaultMintParams, normalizeFlexibleMintParams } from '~/pallet/multi-tokens/calls/mint-rate-limit'
import {
    mintRateLimitChangeScheduled,
    mintRateLimitChangeScheduledEventModel,
    mintRateLimitUpdated,
    mintRateLimitUpdatedEventModel,
} from '~/pallet/multi-tokens/events/mint-rate-limit'
import { toMintRateLimitStateModel } from '~/pallet/multi-tokens/processors/mint-rate-limit-state'
import { decodeCollectionStorageValue, getMixedCollection } from '~/pallet/multi-tokens/storage/collection-values'
import { normalizeMintRateLimitState } from '~/pallet/multi-tokens/storage/mint-rate-limit'
import { decodeTokenStorageValue } from '~/pallet/multi-tokens/storage/token-values'
import { calls, events, storage } from '~/type'
import config from '~/util/config'
import { Sns, type SnsEvent } from '~/util/sns'
import { applyPendingMintRateLimitChanges } from '~/worker/jobs/tokens/apply-pending-mint-rate-limit-changes'

const testRequire = createRequire(__filename)
const queueModulePath = testRequire.resolve('~/queue')
const originalQueueModule = testRequire.cache[queueModulePath]
assert.equal(originalQueueModule, undefined, 'queue module loaded before the test stub was installed')
const queueModule = new Module(queueModulePath)
queueModule.loaded = true
const appliedPayloads = new Map<string, string>()
queueModule.exports = {
    TokensQueue: {
        toKey: (key: string) => key,
        client: Promise.resolve({
            hset: (_key: string, payloads: Record<string, string>) => {
                assert(_key.startsWith('mint-rate-limit-applied:'))
                for (const [id, payload] of Object.entries(payloads)) appliedPayloads.set(id, payload)
                return Promise.resolve(Object.keys(payloads).length)
            },
            hgetall: () => Promise.resolve(Object.fromEntries(appliedPayloads)),
            hdel: (_key: string, eventId: string) => {
                assert(_key.startsWith('mint-rate-limit-applied:'))
                appliedPayloads.delete(eventId)
                return Promise.resolve(1)
            },
        }),
    },
    QueueUtils: {
        dispatchComputeAccountStats: () => Promise.resolve(),
        dispatchComputeStats: () => Promise.resolve(),
        dispatchComputeTokenNativeMetadata: () => Promise.resolve(),
    },
}
testRequire.cache[queueModulePath] = queueModule

const {
    mintRateLimitUpdated: processMintRateLimitUpdated,
    mintRateLimitChangeScheduled: processMintRateLimitChangeScheduled,
    mintRateLimitChangeCancelled: processMintRateLimitChangeCancelled,
} = testRequire(
    '~/pallet/multi-tokens/processors/mint-rate-limit'
) as typeof import('~/pallet/multi-tokens/processors/mint-rate-limit')
const { refreshMintRateLimits } = testRequire(
    '~/pallet/multi-tokens/processors/minted'
) as typeof import('~/pallet/multi-tokens/processors/minted')

after(() => {
    testRequire.cache[queueModulePath] = originalQueueModule
})

type MetadataLine = {
    specName: string
    specVersion: number
    metadata: string
}

function runtimeFor(
    network: 'canary-matrixchain' | 'canary-relaychain',
    version: number,
    call?: (method: string, params?: unknown[]) => Promise<unknown>
): Runtime {
    const metadata = fs
        .readFileSync(`typegen/${network}.jsonl`, 'utf8')
        .split('\n')
        .filter(Boolean)
        .map((line) => JSON.parse(line) as MetadataLine)
        .find((line) => line.specVersion === version)

    assert(metadata)
    return new Runtime(
        { specName: metadata.specName, specVersion: metadata.specVersion, implName: '', implVersion: 0 },
        metadata.metadata,
        undefined,
        call ? { call } : undefined
    )
}

function runtime1040(call?: (method: string, params?: unknown[]) => Promise<unknown>): Runtime {
    return runtimeFor('canary-matrixchain', 1040, call)
}

const owner = `0x${'11'.repeat(32)}`
const largeMaximum = 9_007_199_254_740_993n

void test('the mint rate limit job waits for an indexed finalized block', async (t) => {
    const query = t.mock.fn(<T>(sql: string): Promise<T> => {
        assert.match(sql, /squid_processor\.status/)
        return Promise.resolve([{ height: -1 }] as T)
    })
    const transaction = t.mock.fn(() => {
        throw new Error('unexpected transaction before finality')
    })
    await applyPendingMintRateLimitChanges({} as Job, { query, transaction })
    assert.equal(query.mock.callCount(), 1)
})

void test('the mint rate limit job applies due replacements and removals in both scopes', async (t) => {
    const state = {
        limit: { period: '80', max: '100' },
        window: { lastSlot: '19', buckets: ['0', '70', '30', '0', '0', '0', '0', '0', '0'] },
    }
    const replacement = { ...state, pending: { effectiveBlock: '200', newLimit: { period: '160', max: '200' } } }
    const removal = { ...state, pending: { effectiveBlock: '200' } }
    const batches = [
        Array.from({ length: 1000 }, (_, index) => ({ id: `1-${index}`, state: replacement })),
        [],
        [{ id: '2', state: removal }],
    ]
    const query = t.mock.fn(<T>(sql: string, parameters?: unknown[]): Promise<T> => {
        if (!parameters) {
            assert.match(sql, /squid_processor\.status/)
            return Promise.resolve([{ height: 200 }] as T)
        }
        if (sql.includes('FOR UPDATE SKIP LOCKED')) {
            assert.deepEqual(parameters, [200, 1000])
            return Promise.resolve(batches.shift() as T)
        }
        return Promise.resolve([] as T)
    })
    const transaction = <T>(run: (manager: { query: typeof query }) => Promise<T>): Promise<T> => run({ query })
    const job = { log: () => Promise.resolve(1) } as Job

    await applyPendingMintRateLimitChanges(job, { query, transaction })

    assert.equal(batches.length, 0)
    const updates = query.mock.calls.filter(({ arguments: [sql] }) => sql.startsWith('UPDATE'))
    assert.equal(updates.length, 2)
    assert.match(updates[0].arguments[0], /UPDATE "token"/)
    assert.match(updates[1].arguments[0], /UPDATE "collection"/)
    const tokens = JSON.parse(String(updates[0].arguments[1]?.[0]))
    assert.equal(tokens.length, 1000)
    assert.deepEqual(tokens[0], {
        id: '1-0',
        state: {
            limit: { period: '160', max: '200' },
            window: { lastSlot: '10', buckets: ['0', '70', '0', '0', '0', '0', '0', '0', '0'] },
        },
    })
    assert.deepEqual(JSON.parse(String(updates[1].arguments[1]?.[0])), [{ id: '2', state: null }])
})

void test('the Tokens job sends only effective-block SNS and retries it with a stable id', async (t) => {
    const originalTopic = config.amazonSns.topicArn
    config.amazonSns.topicArn = 'test-topic'
    t.after(() => {
        config.amazonSns.topicArn = originalTopic
    })
    let height = 199
    let pending = true
    let failOnce = true
    const query = <T>(sql: string, parameters?: unknown[]): Promise<T> => {
        if (sql.includes('squid_processor.status')) return Promise.resolve([{ height }] as T)
        if (sql.includes('FOR UPDATE SKIP LOCKED') && sql.includes('FROM "collection"') && pending && height >= 200) {
            const state = {
                limit: { max: '1', period: '144' },
                window: { lastSlot: '11', buckets: ['0', '0', '1', '0', '0', '0', '0', '0', '0'] },
                pending: { effectiveBlock: '200' },
            }
            return Promise.resolve([{ id: '124745', state }] as T)
        }
        if (sql.startsWith('UPDATE')) {
            assert.deepEqual(JSON.parse(String(parameters?.[0])), [{ id: '124745', state: null }])
            pending = false
        }
        if (sql.includes('AS pending')) return Promise.resolve([{ pending: pending ? '200' : null }] as T)
        return Promise.resolve([] as T)
    }
    const transaction = <T>(run: (manager: { query: typeof query }) => Promise<T>): Promise<T> => run({ query })
    const send = t.mock.fn((event: SnsEvent, block: bigint) => {
        assert.equal(pending, false)
        assert.equal(block, 200n)
        assert.equal(event.name, 'MultiTokens.MintRateLimitChangeApplied')
        if (failOnce) {
            failOnce = false
            return Promise.reject(new Error('SNS unavailable'))
        }
        return Promise.resolve(true)
    })
    t.mock.method(Sns, 'getInstance', () => ({ sendFinalized: send }))
    const job = { log: () => Promise.resolve(1) } as Job

    await applyPendingMintRateLimitChanges(job, { query, transaction })
    assert.equal(send.mock.callCount(), 0)
    assert.equal(appliedPayloads.size, 0)

    height = 203
    await assert.rejects(applyPendingMintRateLimitChanges(job, { query, transaction }), /SNS unavailable/)
    assert.equal(appliedPayloads.size, 1)
    await applyPendingMintRateLimitChanges(job, { query, transaction })
    await applyPendingMintRateLimitChanges(job, { query, transaction })
    assert.equal(send.mock.callCount(), 2)
    const [first, retry] = send.mock.calls.map(({ arguments: [event] }) => event)
    assert.equal(first.id, retry.id)
    assert.deepEqual(first.body, { collectionId: '124745', tokenId: null, effectiveBlock: '200', limit: null })
    assert.equal(appliedPayloads.size, 0)
})

function rateState(pendingRemoval = false) {
    return {
        limit: { period: 64, max: largeMaximum },
        window: { lastSlot: 12, buckets: [1n, 2n, 3n, 4n, 5n, 6n, 7n, 8n, largeMaximum] },
        pending: pendingRemoval ? { newLimit: undefined, effectiveBlock: 200 } : undefined,
    }
}

void test('a due replacement drops expired usage and carries the rest into the new window', () => {
    const state = {
        limit: { period: 80n, max: 100n },
        window: { lastSlot: 19n, buckets: [0n, 70n, 30n, 0n, 0n, 0n, 0n, 0n, 0n] },
        pending: { effectiveBlock: 200n, newLimit: { period: 160n, max: largeMaximum } },
    }

    const before = toMintRateLimitStateModel(state, 199)
    assert(before)
    assert.equal(before.limit.max, 100n)
    assert.equal(before.pending?.effectiveBlock, 200n)

    const applied = toMintRateLimitStateModel(state, 200)
    assert(applied)
    assert.equal(applied.limit.max, largeMaximum)
    assert.equal(applied.limit.period, 160n)
    assert.equal(applied.pending, null)
    assert.equal(applied.window.lastSlot, 10n)
    assert.deepEqual(applied.window.buckets, [0n, 70n, 0n, 0n, 0n, 0n, 0n, 0n, 0n])
})

function tokenValue(mintRateLimit: ReturnType<typeof rateState> | undefined) {
    return {
        supply: 1n,
        cap: { __kind: 'Supply', value: 1n },
        freezeState: undefined,
        requiresDeposit: true,
        creationDeposit: { depositor: undefined, amount: 0n },
        ownerDeposit: 0n,
        totalTokenAccountDeposit: 0n,
        attributeCount: 0,
        accountCount: 1,
        marketBehavior: undefined,
        listingForbidden: false,
        metadata: { decimalCount: 0, name: '0x746f6b656e', symbol: '0x544b4e', foreign: undefined },
        infusion: 0n,
        anyoneCanInfuse: false,
        groups: [],
        ephemeralExpiration: undefined,
        isLendable: false,
        lending: undefined,
        mintRateLimit,
    }
}

function collectionValue(mintRateLimit: ReturnType<typeof rateState> | undefined) {
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
        explicitRoyaltyCurrencies: [],
        totalInfusion: 0n,
        tokenGroupCount: 0,
        mintRateLimit,
    }
}

function encodeCurrentAndLegacy(
    storageName: 'Tokens' | 'Collections',
    value: Record<string, unknown>,
    runtime = runtime1040()
) {
    const type = runtime.description.storage.MultiTokens.items[storageName].value
    const current = runtime.scaleCodec.encodeToHex(type, value)
    const definition = runtime.description.types[type]
    assert.equal(definition.kind, TypeKind.Composite)

    const trailingFields = storageName === 'Tokens' ? 4 : 1
    const types = runtime.description.types.slice() as Type[]
    types[type] = { ...definition, fields: definition.fields.slice(0, -trailingFields) }
    const legacyValue = { ...value }
    if (storageName === 'Tokens') {
        delete legacyValue.ephemeralExpiration
        delete legacyValue.isLendable
        delete legacyValue.lending
    }
    delete legacyValue.mintRateLimit

    return { runtime, current, legacy: new Codec(types).encodeToHex(type, legacyValue) }
}

void test('Canary Relaychain 1080 decodes current and pre-v6 token and collection storage', () => {
    const runtime = runtimeFor('canary-relaychain', 1080)
    const token = encodeCurrentAndLegacy('Tokens', tokenValue(rateState(true)), runtime)
    const collection = encodeCurrentAndLegacy('Collections', collectionValue(rateState()), runtime)

    assert.equal(decodeTokenStorageValue(runtime, token.current).mintRateLimit?.limit.max, largeMaximum)
    assert.equal(decodeTokenStorageValue(runtime, token.legacy).mintRateLimit, undefined)
    assert.equal(decodeCollectionStorageValue(runtime, collection.current).mintRateLimit?.limit.max, largeMaximum)
    assert.equal(decodeCollectionStorageValue(runtime, collection.legacy).mintRateLimit, undefined)
})

void test('Canary Relaychain 1080 metadata matches the indexed event, call, and storage codecs', () => {
    const block = { _runtime: runtimeFor('canary-relaychain', 1080) } as Block

    assert(events.marketplace.listingCreated.v1080.matches(block))
    assert(events.multiTokens.tokenMutated.v1080.matches(block))
    assert(events.multiTokens.frozen.v1080.matches(block))
    assert(calls.fuelTanks.createFuelTank.v1080.matches(block))
    assert(calls.fuelTanks.insertRuleSet.v1080.matches(block))
    assert(calls.fuelTanks.dispatch.v1080.matches(block))
    assert(calls.multiTokens.mint.v1080.matches(block))
    assert(calls.utility.batchAll.v1080.matches(block))
    assert(storage.multiTokens.collections.v1080.is(block))
    assert(storage.multiTokens.tokens.v1080.is(block))
    assert(storage.multiTokens.attributes.v1080.is(block))
    assert(storage.multiTokens.tokenGroupAttributes.v1080.is(block))
})

function eventItem(runtime: Runtime, name: string, args: unknown): EventItem {
    return { id: '190-2', name, args, block: { _runtime: runtime } } as EventItem
}

void test('v1040 metadata exposes mint rate limit storage, calls, and lifecycle events', () => {
    const runtime = runtime1040()
    assert(runtime.description.storage.MultiTokens.items.Tokens)
    assert(runtime.description.storage.MultiTokens.items.Collections)

    const variantNames = (rootType: number) => {
        const root = runtime.description.types[rootType]
        assert.equal(root.kind, TypeKind.Variant)
        const pallet = root.variants.find((variant) => variant.name === 'MultiTokens')
        assert(pallet?.fields[0])
        const nested = runtime.description.types[pallet.fields[0].type]
        assert.equal(nested.kind, TypeKind.Variant)
        return new Set(nested.variants.map((variant) => variant.name))
    }
    const events = variantNames(runtime.description.event)
    const calls = variantNames(runtime.description.call)
    for (const name of ['MintRateLimitUpdated', 'MintRateLimitChangeScheduled', 'MintRateLimitChangeCancelled']) {
        assert(events.has(name))
    }
    for (const name of ['set_mint_rate_limit', 'cancel_mint_rate_limit_change', 'force_set_mint_rate_limit']) {
        assert(calls.has(name))
    }
})

void test('current and strict legacy token layouts decode without losing large values', () => {
    const { runtime, current, legacy } = encodeCurrentAndLegacy('Tokens', tokenValue(rateState(true)))
    const decoded = decodeTokenStorageValue(runtime, current)
    const old = decodeTokenStorageValue(runtime, legacy)

    assert(decoded.mintRateLimit)
    assert(decoded.mintRateLimit.pending)
    assert.equal(decoded.mintRateLimit.limit.max, largeMaximum)
    assert.equal(decoded.mintRateLimit.window.buckets.length, 9)
    assert.equal(decoded.mintRateLimit.window.buckets[8], largeMaximum)
    assert.equal(decoded.mintRateLimit.pending.newLimit, undefined)
    assert.equal(decoded.mintRateLimit.pending.effectiveBlock, 200n)
    assert.equal(old.mintRateLimit, undefined)
    assert.throws(() => decodeTokenStorageValue(runtime, `${current}ff`), /current or strict pre-v6 token/)
})

void test('current and strict legacy collection layouts decode and collection zero is queried', async () => {
    const encoded = encodeCurrentAndLegacy('Collections', collectionValue(rateState()))
    assert.equal(decodeCollectionStorageValue(encoded.runtime, encoded.current).mintRateLimit?.limit.max, largeMaximum)
    assert.equal(decodeCollectionStorageValue(encoded.runtime, encoded.legacy).mintRateLimit, undefined)
    assert.throws(
        () => decodeCollectionStorageValue(encoded.runtime, `${encoded.current}ff`),
        /current or strict pre-v6 collection/
    )

    const runtime = runtime1040((method, params) => {
        assert.equal(method, 'state_getStorageAt')
        assert(params)
        assert.equal(params[0], runtime.encodeStorageKey('MultiTokens.Collections', 0n))
        assert.equal(params[1], '0xabc')
        return Promise.resolve(encoded.current)
    })
    const collection = await getMixedCollection({ _runtime: runtime, hash: '0xabc' } as Block, 0n)
    assert.equal(collection?.tokenCount, 0n)
})

void test('normalization rejects unsafe numbers and malformed windows', () => {
    assert.throws(
        () => normalizeMintRateLimitState({ ...rateState(), limit: { period: 1, max: Number.MAX_SAFE_INTEGER + 1 } }),
        /lossless integer/
    )
    assert.throws(
        () => normalizeMintRateLimitState({ ...rateState(), window: { lastSlot: 1, buckets: [1n] } }),
        /9 buckets/
    )
})

void test('current mint parameter normalizers retain create policies across direct, batch, and force shapes', () => {
    const create = {
        __kind: 'CreateToken' as const,
        mintRateLimit: { period: 64, max: largeMaximum },
    }
    const direct = normalizeDefaultMintParams(create)
    const force = normalizeFlexibleMintParams({ __kind: 'CreateOrMint', value: create })

    assert.equal(direct.__kind === 'CreateToken' && direct.mintRateLimit?.max, largeMaximum)
    assert.equal(force.__kind === 'CreateOrMint' && force.value.mintRateLimit?.period, 64n)
})

void test('lifecycle event models preserve scope, large limits, scheduled removal, and nullable extrinsics', () => {
    const runtime = runtime1040()
    const updatedItem = eventItem(runtime, 'MultiTokens.MintRateLimitUpdated', {
        collectionId: '0',
        tokenId: '0',
        limit: { period: 64, max: largeMaximum.toString() },
    })
    const scheduledItem = eventItem(runtime, 'MultiTokens.MintRateLimitChangeScheduled', {
        collectionId: '0',
        tokenId: undefined,
        newLimit: undefined,
        effectiveBlock: 200,
    })
    const updated = mintRateLimitUpdated(updatedItem)
    const scheduled = mintRateLimitChangeScheduled(scheduledItem)
    const updatedModel = mintRateLimitUpdatedEventModel(updatedItem, updated)
    const scheduledModel = mintRateLimitChangeScheduledEventModel(scheduledItem, scheduled)

    assert.equal(updated.limit?.max, largeMaximum)
    assert.equal(updatedModel.collectionId, '0')
    assert.equal(updatedModel.tokenId, '0-0')
    assert.equal(updatedModel.extrinsic, null)
    assert.equal(scheduled.newLimit, undefined)
    assert.equal(scheduledModel.data.newLimit, undefined)
    assert.equal(scheduledModel.data.effectiveBlock, 200n)
})

void test('live mint rate limit processors persist pinned state and return SNS with SNS configured', async (t) => {
    const collectionBytes = encodeCurrentAndLegacy('Collections', collectionValue(rateState())).current
    const tokenBytes = encodeCurrentAndLegacy('Tokens', tokenValue(rateState(true))).current
    let storageQueries = 0
    const runtime = runtime1040((method, params) => {
        assert.equal(method, 'state_getStorageAt')
        assert(params)
        assert.equal(params[1], '0xblock')
        storageQueries++
        const collectionKey = runtime.encodeStorageKey('MultiTokens.Collections', 0n)
        const tokenKey = runtime.encodeStorageKey('MultiTokens.Tokens', 0n, 0n)
        if (params[0] === collectionKey) return Promise.resolve(collectionBytes)
        if (params[0] === tokenKey) return Promise.resolve(tokenBytes)
        return Promise.resolve(null)
    })
    const collection = new Collection({ id: '0' })
    const token = new Token({ id: '0-0', tokenId: 0n, collection })
    const saved: unknown[] = []
    const ctx = {
        log: { warn: () => undefined },
        store: {
            findOneBy: (entity: unknown) => Promise.resolve(entity === Collection ? collection : token),
            save: (entity: unknown) => Promise.resolve(saved.push(entity)),
        },
    } as never
    const collectionEvent = eventItem(runtime, 'MultiTokens.MintRateLimitUpdated', {
        collectionId: '0',
        tokenId: undefined,
        limit: { period: 64, max: '100' },
    })
    const tokenEvent = eventItem(runtime, 'MultiTokens.MintRateLimitUpdated', {
        collectionId: '0',
        tokenId: '0',
        limit: { period: 64, max: '100' },
    })
    const scheduledEvent = eventItem(runtime, 'MultiTokens.MintRateLimitChangeScheduled', {
        collectionId: '0',
        tokenId: undefined,
        newLimit: undefined,
        effectiveBlock: 200,
    })
    const cancelledEvent = eventItem(runtime, 'MultiTokens.MintRateLimitChangeCancelled', {
        collectionId: '0',
        tokenId: '0',
    })

    const block = { _runtime: runtime, height: 190, hash: '0xblock' }
    const originalTopic = config.amazonSns.topicArn
    config.amazonSns.topicArn = 'test-topic'
    t.after(() => {
        config.amazonSns.topicArn = originalTopic
    })

    for (const [handler, item] of [
        [processMintRateLimitUpdated, collectionEvent],
        [processMintRateLimitUpdated, tokenEvent],
        [processMintRateLimitChangeScheduled, scheduledEvent],
        [processMintRateLimitChangeCancelled, cancelledEvent],
    ] as const) {
        const result = await handler(ctx, block, item, false)
        assert(Array.isArray(result))
        const message = result[1]
        assert(message && 'body' in message)
        assert.equal(message.id, item.id)
        assert.equal(message.name, item.name)
        if (item === scheduledEvent) assert.equal(message.body.effectiveBlock, 200n)
    }

    assert.equal(storageQueries, 4)
    assert.equal(saved.length, 4)
    assert.equal(collection.mintRateLimit?.limit.max, largeMaximum)
    assert.equal(token.mintRateLimit?.pending?.effectiveBlock, 200n)
})

void test('mint rate limit refresh distinguishes deleted indexed entities from missing pinned storage', async () => {
    const runtime = runtime1040((method, params) => {
        assert.equal(method, 'state_getStorageAt')
        assert.equal(params?.[1], '0xmissing')
        return Promise.resolve(null)
    })
    const event = eventItem(runtime, 'MultiTokens.MintRateLimitUpdated', {
        collectionId: '0',
        tokenId: undefined,
        limit: { period: 64, max: '100' },
    })
    const warnings: string[] = []
    const block = { _runtime: runtime, height: 190, hash: '0xmissing' }
    const missingEntityCtx = {
        log: { warn: (message: string) => warnings.push(message) },
        store: {
            findOneBy: () => Promise.resolve(undefined),
            save: () => Promise.reject(new Error('unexpected save')),
        },
    } as never

    await processMintRateLimitUpdated(missingEntityCtx, block, event, false)
    assert.deepEqual(warnings, ['[MintRateLimit] Indexed collection 0 was absent'])

    const staleCollection = new Collection({ id: '0', mintRateLimit: null })
    const missingStorageCtx = {
        log: { warn: () => undefined },
        store: {
            findOneBy: () => Promise.resolve(staleCollection),
            save: () => Promise.reject(new Error('unexpected save')),
        },
    } as never

    await assert.rejects(
        processMintRateLimitUpdated(missingStorageCtx, block, event, false),
        /Collection 0 storage was absent at block 190/
    )
})

void test('mint refreshes both token and collection rate limit windows from pinned storage', async () => {
    const collectionBytes = encodeCurrentAndLegacy('Collections', collectionValue(rateState())).current
    const tokenBytes = encodeCurrentAndLegacy('Tokens', tokenValue(rateState(true))).current
    let storageQueries = 0
    const runtime = runtime1040((method, params) => {
        assert.equal(method, 'state_getStorageAt')
        assert(params)
        assert.equal(params[1], '0xmint')
        storageQueries++

        const collectionKey = runtime.encodeStorageKey('MultiTokens.Collections', 0n)
        const tokenKey = runtime.encodeStorageKey('MultiTokens.Tokens', 0n, 0n)
        if (params[0] === collectionKey) return Promise.resolve(collectionBytes)
        if (params[0] === tokenKey) return Promise.resolve(tokenBytes)
        return Promise.resolve(null)
    })
    const collection = new Collection({ id: '0', collectionId: 0n, mintRateLimit: null })
    const token = new Token({ id: '0-0', tokenId: 0n, collection, mintRateLimit: null })
    const warnings: string[] = []
    const ctx = { log: { warn: (message: string) => warnings.push(message) } } as never

    const collectionUpdated = await refreshMintRateLimits(
        ctx,
        { _runtime: runtime, height: 199, hash: '0xmint' } as Block,
        token,
        0n,
        0n
    )

    assert.equal(collectionUpdated, true)
    assert.equal(storageQueries, 2)
    assert.deepEqual(warnings, [])
    assert.equal(token.mintRateLimit?.pending?.effectiveBlock, 200n)
    assert.equal(collection.mintRateLimit?.limit.max, largeMaximum)

    await refreshMintRateLimits(ctx, { _runtime: runtime, height: 200, hash: '0xmint' } as Block, token, 0n, 0n)
    assert.equal(token.mintRateLimit, null)
})
