import assert from 'node:assert/strict'
import fs from 'node:fs'
import test from 'node:test'
import { Codec, Type, TypeKind } from '@subsquid/scale-codec'
import { Runtime } from '@subsquid/substrate-runtime'
import type { EntityManager } from 'typeorm'
import { Block, EventItem } from '~/contexts'
import { Collection, Token } from '~/model'
import { normalizeDefaultMintParams, normalizeFlexibleMintParams } from '~/pallet/multi-tokens/calls/mint-rate-limit'
import {
    mintRateLimitChangeScheduled,
    mintRateLimitChangeScheduledEventModel,
    mintRateLimitUpdated,
    mintRateLimitUpdatedEventModel,
} from '~/pallet/multi-tokens/events/mint-rate-limit'
import { decodeCollectionStorageValue, getMixedCollection } from '~/pallet/multi-tokens/storage/collection-values'
import { normalizeMintRateLimitState } from '~/pallet/multi-tokens/storage/mint-rate-limit'
import { decodeTokenStorageValue } from '~/pallet/multi-tokens/storage/token-values'
import { reconcileMintRateLimits } from '~/pallet/multi-tokens/processors/mint-rate-limit-reconciliation'
import { EffectiveMintRateLimitResolver, MintRateLimitScope } from '~/server-extension/effective-mint-rate-limit'

type MetadataLine = {
    specName: string
    specVersion: number
    metadata: string
}

function runtime1040(call?: (method: string, params?: unknown[]) => Promise<unknown>): Runtime {
    const metadata = fs
        .readFileSync('typegen/canary-matrixchain.jsonl', 'utf8')
        .split('\n')
        .filter(Boolean)
        .map((line) => JSON.parse(line) as MetadataLine)
        .find((line) => line.specVersion === 1040)

    assert(metadata)
    return new Runtime(
        { specName: metadata.specName, specVersion: metadata.specVersion, implName: '', implVersion: 0 },
        metadata.metadata,
        undefined,
        call ? { call } : undefined
    )
}

const owner = `0x${'11'.repeat(32)}`
const largeMaximum = 9_007_199_254_740_993n

function rateState(pendingRemoval = false) {
    return {
        limit: { period: 64, max: largeMaximum },
        window: { lastSlot: 12, buckets: [1n, 2n, 3n, 4n, 5n, 6n, 7n, 8n, largeMaximum] },
        pending: pendingRemoval ? { newLimit: undefined, effectiveBlock: 200 } : undefined,
    }
}

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

function encodeCurrentAndLegacy(storageName: 'Tokens' | 'Collections', value: Record<string, unknown>) {
    const runtime = runtime1040()
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

void test('block reconciliation deduplicates candidates, saves canonical snapshots, and does not recreate missing entities', async () => {
    const collectionBytes = encodeCurrentAndLegacy('Collections', collectionValue(rateState())).current
    const tokenBytes = encodeCurrentAndLegacy('Tokens', tokenValue(rateState(true))).current
    let storageQueries = 0
    const runtime = runtime1040((method, params) => {
        assert.equal(method, 'state_queryStorageAt')
        assert(params)
        assert.equal(params[1], '0xblock')
        const keys = params[0] as string[]
        storageQueries++
        const collectionKey = runtime.encodeStorageKey('MultiTokens.Collections', 0n)
        const tokenKey = runtime.encodeStorageKey('MultiTokens.Tokens', 0n, 0n)
        const changes = keys.flatMap((key) => {
            if (key === collectionKey) return [[key, collectionBytes]]
            if (key === tokenKey) return [[key, tokenBytes]]
            return []
        })
        return Promise.resolve([{ changes }])
    })
    const collection = new Collection({ id: '0' })
    const token = new Token({ id: '0-0', tokenId: 0n, collection })
    const saved: unknown[][] = []
    const ctx = {
        store: {
            find: (entity: unknown) => Promise.resolve(entity === Collection ? [collection] : [token]),
            save: (entities: unknown[]) => Promise.resolve(saved.push(entities)),
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
    const missingTokenEvent = eventItem(runtime, 'MultiTokens.MintRateLimitUpdated', {
        collectionId: '0',
        tokenId: '99',
        limit: { period: 64, max: '100' },
    })

    await reconcileMintRateLimits(ctx, { _runtime: runtime, height: 190, hash: '0xblock' } as Block, [
        collectionEvent,
        tokenEvent,
        tokenEvent,
        missingTokenEvent,
    ])

    assert.equal(storageQueries, 2)
    assert.equal(saved.length, 2)
    assert.equal(collection.mintRateLimit?.limit.max, largeMaximum)
    assert.equal(token.mintRateLimit?.pending?.effectiveBlock, 200n)
})

void test('effective policy evaluates scheduled changes at the latest indexed block without rewriting raw state', async () => {
    const rawState = {
        limit: { period: '64', max: '1000' },
        window: { lastSlot: '1', buckets: ['0', '0', '0', '0', '0', '0', '0', '0', '0'] },
        pending: { newLimit: null, effectiveBlock: '200' },
    }
    let indexedBlock = '199'
    let indexedHash = '0xbefore'
    const manager = {
        query: (_query: string, params: unknown[]) => {
            assert.deepEqual(params, ['0-0'])
            return Promise.resolve([
                {
                    mint_rate_limit: rawState,
                    indexed_block: indexedBlock,
                    indexed_hash: indexedHash,
                },
            ])
        },
    } as unknown as EntityManager
    const resolver = new EffectiveMintRateLimitResolver(() => Promise.resolve(manager))
    const before = await resolver.effectiveMintRateLimit('0', '0')
    indexedBlock = '200'
    indexedHash = '0xindexed'
    const result = await resolver.effectiveMintRateLimit('0', '0')

    assert.equal(before?.effectiveLimit?.max, 1000n)
    assert(result)
    assert.equal(result.scope, MintRateLimitScope.TOKEN)
    assert.equal(result.evaluationBlock, 200n)
    assert.equal(result.evaluationBlockHash, '0xindexed')
    assert.equal(result.storedLimit?.max, 1000n)
    assert.deepEqual(result.window?.buckets, [0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n])
    assert.equal(result.pendingChange?.newLimit, null)
    assert.equal(result.effectiveLimit, null)
    assert.equal(rawState.pending.newLimit, null)
})
