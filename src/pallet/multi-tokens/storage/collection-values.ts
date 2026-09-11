import assert from 'assert'
import { Codec, Type, TypeKind } from '@subsquid/scale-codec'
import { Runtime } from '@subsquid/substrate-runtime'
import { Block } from '~/contexts'
import { Collection } from '~/pallet/multi-tokens/storage/types'
import { normalizeOptionalMintRateLimitState } from './mint-rate-limit'

type CollectionStorage = {
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
}

const legacyCodecs = new WeakMap<Runtime, { codec: Codec; type: number }>()
const V6_COLLECTION_FIELDS = ['totalInfusion', 'tokenGroupCount', 'mintRateLimit']

function storageValueType(runtime: Runtime): number {
    const item = runtime.description.storage.MultiTokens.items.Collections
    assert(item, 'MultiTokens.Collections storage metadata not found')
    return item.value
}

function collectionFields(runtime: Runtime): string[] {
    const definition = runtime.description.types[storageValueType(runtime)]
    assert(definition.kind === TypeKind.Composite, 'MultiTokens.Collections is not a collection composite')
    return definition.fields.map((field) => {
        assert(field.name, 'MultiTokens.Collections contains an unnamed field')
        return field.name
    })
}

export function hasV6CollectionLayout(runtime: Runtime): boolean {
    return collectionFields(runtime)
        .slice(-V6_COLLECTION_FIELDS.length)
        .every((field, index) => field === V6_COLLECTION_FIELDS[index])
}

function legacyCollectionCodec(runtime: Runtime): { codec: Codec; type: number } {
    const cached = legacyCodecs.get(runtime)
    if (cached) return cached

    const type = storageValueType(runtime)
    const definition = runtime.description.types[type]
    assert(definition.kind === TypeKind.Composite, 'MultiTokens.Collections is not a collection composite')
    assert(hasV6CollectionLayout(runtime), 'MultiTokens.Collections does not have the expected v6 trailing fields')

    const types = runtime.description.types.slice() as Type[]
    types[type] = {
        ...definition,
        fields: definition.fields.slice(0, -1),
    }

    const codec = { codec: new Codec(types), type }
    legacyCodecs.set(runtime, codec)
    return codec
}

function normalizedCollection(value: unknown): Collection {
    assert(value && typeof value === 'object', 'Collection storage value must be an object')
    assert('owner' in value && typeof value.owner === 'string', 'Collection storage value must contain an owner')
    assert(
        'policy' in value && value.policy && typeof value.policy === 'object',
        'Collection storage value must contain a policy'
    )
    assert(
        'tokenCount' in value && typeof value.tokenCount === 'bigint',
        'Collection storage value must contain a token count'
    )
    assert(
        'attributeCount' in value && typeof value.attributeCount === 'number',
        'Collection storage value must contain an attribute count'
    )

    const raw = value as Omit<Collection, 'mintRateLimit'> & { mintRateLimit?: unknown }
    return {
        ...raw,
        mintRateLimit: normalizeOptionalMintRateLimitState(raw.mintRateLimit),
    }
}

export function decodeCollectionStorageValue(runtime: Runtime, value: string): Collection {
    let currentError: unknown
    try {
        return normalizedCollection(runtime.decodeStorageValue('MultiTokens.Collections', value))
    } catch (error) {
        currentError = error
    }

    if (!hasV6CollectionLayout(runtime)) {
        const error = new Error('Unable to decode MultiTokens.Collections storage value') as Error & { cause?: unknown }
        error.cause = currentError
        throw error
    }

    try {
        const { codec, type } = legacyCollectionCodec(runtime)
        return normalizedCollection(codec.decodeBinary(type, value))
    } catch (legacyError) {
        const error = new Error(
            'Unable to decode MultiTokens.Collections as either current or strict pre-v6 collection storage'
        ) as Error & { cause?: unknown }
        error.cause = { currentError, legacyError }
        throw error
    }
}

async function queryRawValues(block: Block, keys: unknown[][]): Promise<(string | undefined)[]> {
    if (keys.length === 0) return []

    const encodedKeys = keys.map((key) => block._runtime.encodeStorageKey('MultiTokens.Collections', ...key))
    const result = await block._runtime.rpc.call('state_queryStorageAt', [encodedKeys, block.hash])

    assert(Array.isArray(result) && result.length === 1, 'Unexpected MultiTokens.Collections storage response')
    const changes = new Map<string, string | null>(result[0].changes)

    return encodedKeys.map((key) => changes.get(key) ?? undefined)
}

export async function getMixedCollections(block: Block, collectionIds: bigint[]): Promise<(Collection | undefined)[]> {
    const values = await queryRawValues(
        block,
        collectionIds.map((collectionId) => [collectionId])
    )
    return values.map((value) =>
        value === undefined ? undefined : decodeCollectionStorageValue(block._runtime, value)
    )
}

export async function getMixedCollection(block: Block, collectionId: bigint): Promise<Collection | undefined> {
    const encodedKey = block._runtime.encodeStorageKey('MultiTokens.Collections', collectionId)
    const value = await block._runtime.rpc.call('state_getStorageAt', [encodedKey, block.hash])

    return typeof value === 'string' && value !== '0x' ? decodeCollectionStorageValue(block._runtime, value) : undefined
}

export async function* getMixedCollectionPairs(
    block: Block,
    storage: CollectionStorage,
    batchSize: number
): AsyncIterable<[bigint, Collection | undefined][]> {
    for await (const keys of storage.getKeysPaged(batchSize, block)) {
        const values = await queryRawValues(
            block,
            keys.map((key) => [key])
        )
        yield keys.map((key, index) => {
            const value = values[index]
            return [key, value === undefined ? undefined : decodeCollectionStorageValue(block._runtime, value)]
        })
    }
}

export function normalizeCollection(value: unknown): Collection | undefined {
    return value ? normalizedCollection(value) : undefined
}

export async function* normalizeCollectionPairs<K>(
    pairs: AsyncIterable<[K, unknown][]>
): AsyncIterable<[K, Collection | undefined][]> {
    for await (const page of pairs) {
        yield page.map(([key, value]) => [key, normalizeCollection(value)])
    }
}
