import assert from 'assert'
import { Codec, Type, TypeKind } from '@subsquid/scale-codec'
import { Runtime } from '@subsquid/substrate-runtime'
import { Block } from '~/contexts'
import { Token } from '~/pallet/multi-tokens/storage/types'

type TokenStorage<K extends unknown[]> = {
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<K[]>
}

const legacyCodecs = new WeakMap<Runtime, { codec: Codec; type: number }>()
const V6_TOKEN_FIELDS = ['ephemeralExpiration', 'isLendable', 'lending', 'mintRateLimit']

function storageValueType(runtime: Runtime): number {
    const item = runtime.description.storage.MultiTokens.items.Tokens
    assert(item, 'MultiTokens.Tokens storage metadata not found')
    return item.value
}

function tokenFields(runtime: Runtime): string[] {
    const definition = runtime.description.types[storageValueType(runtime)]
    assert(definition.kind === TypeKind.Composite, 'MultiTokens.Tokens is not a token composite')
    return definition.fields.map((field) => {
        assert(field.name, 'MultiTokens.Tokens contains an unnamed field')
        return field.name
    })
}

export function hasV6TokenLayout(runtime: Runtime): boolean {
    return tokenFields(runtime)
        .slice(-V6_TOKEN_FIELDS.length)
        .every((field, index) => field === V6_TOKEN_FIELDS[index])
}

function legacyTokenCodec(runtime: Runtime): { codec: Codec; type: number } {
    const cached = legacyCodecs.get(runtime)
    if (cached) return cached

    const type = storageValueType(runtime)
    const definition = runtime.description.types[type]
    assert(definition.kind === TypeKind.Composite, 'MultiTokens.Tokens is not a token composite')
    assert(hasV6TokenLayout(runtime), 'MultiTokens.Tokens does not have the expected v6 trailing fields')

    const types = runtime.description.types.slice() as Type[]
    types[type] = {
        ...definition,
        fields: definition.fields.slice(0, -V6_TOKEN_FIELDS.length),
    }

    const codec = { codec: new Codec(types), type }
    legacyCodecs.set(runtime, codec)
    return codec
}

function normalizedToken(value: unknown): Token {
    assert(value && typeof value === 'object', 'Token storage value must be an object')
    assert('supply' in value && typeof value.supply === 'bigint', 'Token storage value must contain a supply')
    assert(
        'attributeCount' in value && typeof value.attributeCount === 'number',
        'Token storage value must contain an attribute count'
    )
    assert(
        'listingForbidden' in value && typeof value.listingForbidden === 'boolean',
        'Token storage value must contain a listing-forbidden flag'
    )

    const raw = value as Omit<Token, 'ephemeralExpiration' | 'isLendable' | 'lending'> & {
        ephemeralExpiration?: number | bigint
        isLendable?: boolean
        lending?: { lender: string; expiration: number | bigint }
    }
    assert(
        raw.ephemeralExpiration === undefined ||
            typeof raw.ephemeralExpiration === 'number' ||
            typeof raw.ephemeralExpiration === 'bigint',
        'Token ephemeral expiration must be a block number'
    )
    assert(raw.isLendable === undefined || typeof raw.isLendable === 'boolean', 'Token lendable flag must be boolean')
    assert(
        raw.lending === undefined ||
            (typeof raw.lending === 'object' &&
                typeof raw.lending.lender === 'string' &&
                (typeof raw.lending.expiration === 'number' || typeof raw.lending.expiration === 'bigint')),
        'Token lending state is invalid'
    )

    return {
        ...raw,
        ephemeralExpiration: raw.ephemeralExpiration === undefined ? undefined : BigInt(raw.ephemeralExpiration),
        isLendable: raw.isLendable ?? false,
        lending: raw.lending
            ? {
                  lender: raw.lending.lender,
                  expiration: BigInt(raw.lending.expiration),
              }
            : undefined,
    }
}

export function decodeTokenStorageValue(runtime: Runtime, value: string): Token {
    let currentError: unknown
    try {
        return normalizedToken(runtime.decodeStorageValue('MultiTokens.Tokens', value))
    } catch (error) {
        currentError = error
    }

    if (!hasV6TokenLayout(runtime)) {
        const error = new Error('Unable to decode MultiTokens.Tokens storage value') as Error & { cause?: unknown }
        error.cause = currentError
        throw error
    }

    try {
        const { codec, type } = legacyTokenCodec(runtime)
        return normalizedToken(codec.decodeBinary(type, value))
    } catch (legacyError) {
        const error = new Error(
            'Unable to decode MultiTokens.Tokens as either current or strict pre-v6 token storage'
        ) as Error & { cause?: unknown }
        error.cause = { currentError, legacyError }
        throw error
    }
}

async function queryRawValues(block: Block, keys: unknown[][]): Promise<(string | undefined)[]> {
    if (keys.length === 0) return []

    const encodedKeys = keys.map((key) => block._runtime.encodeStorageKey('MultiTokens.Tokens', ...key))
    const result = await block._runtime.rpc.call('state_queryStorageAt', [encodedKeys, block.hash])

    assert(Array.isArray(result) && result.length === 1, 'Unexpected MultiTokens.Tokens storage response')
    const changes = new Map<string, string | null>(result[0].changes)

    return encodedKeys.map((key) => changes.get(key) ?? undefined)
}

export async function getMixedToken(block: Block, key: [bigint, bigint]): Promise<Token | undefined> {
    const encodedKey = block._runtime.encodeStorageKey('MultiTokens.Tokens', ...key)
    const value = await block._runtime.rpc.call('state_getStorageAt', [encodedKey, block.hash])

    return typeof value === 'string' && value !== '0x' ? decodeTokenStorageValue(block._runtime, value) : undefined
}

export async function* getMixedTokenPairs<K extends [bigint, bigint]>(
    block: Block,
    storage: TokenStorage<K>,
    batchSize: number
): AsyncIterable<[K, Token | undefined][]> {
    for await (const keys of storage.getKeysPaged(batchSize, block)) {
        const values = await queryRawValues(block, keys)
        yield keys.map((key, index) => {
            const value = values[index]
            return [key, value === undefined ? undefined : decodeTokenStorageValue(block._runtime, value)]
        })
    }
}

export function normalizeToken(
    value: (Omit<Token, 'isLendable'> & { isLendable?: boolean }) | undefined
): Token | undefined {
    return value ? normalizedToken(value) : undefined
}

export async function* normalizeTokenPairs<K>(
    pairs: AsyncIterable<[K, (Omit<Token, 'isLendable'> & { isLendable?: boolean }) | undefined][]>
): AsyncIterable<[K, Token | undefined][]> {
    for await (const page of pairs) {
        yield page.map(([key, value]) => [key, normalizeToken(value)])
    }
}
