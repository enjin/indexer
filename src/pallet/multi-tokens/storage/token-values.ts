import assert from 'assert'
import { Codec, Type, TypeKind } from '@subsquid/scale-codec'
import { Runtime } from '@subsquid/substrate-runtime'
import { Block } from '~/contexts'
import { Token } from '~/pallet/multi-tokens/storage/types'
import { normalizeOptionalMintRateLimitState } from './mint-rate-limit'

type TokenStorage<K extends unknown[]> = {
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<K[]>
}

const legacyCodecs = new WeakMap<Runtime, LegacyCodec[]>()
const V6_TOKEN_FIELDS = ['ephemeralExpiration', 'isLendable', 'lending', 'mintRateLimit']
// Storage v7 (Canary Matrixchain 1042) appends `creation_block` after `mint_rate_limit`.
const V7_TOKEN_FIELDS = [...V6_TOKEN_FIELDS, 'creationBlock']

type LegacyCodec = { codec: Codec; type: number }

/**
 * The trailing token fields of a runtime's `MultiTokens.Tokens` value. Storage v6 and v7 both migrate lazily, so a
 * runtime with the v7 layout still holds v6 and pre-v6 encodings until each token is rewritten.
 */
export type TokenLayout = 'v6' | 'v7'

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

function endsWith(fields: string[], suffix: string[]): boolean {
    return fields.length >= suffix.length && fields.slice(-suffix.length).every((field, i) => field === suffix[i])
}

export function tokenLayout(runtime: Runtime): TokenLayout | undefined {
    const fields = tokenFields(runtime)
    if (endsWith(fields, V7_TOKEN_FIELDS)) return 'v7'
    if (endsWith(fields, V6_TOKEN_FIELDS)) return 'v6'
    return undefined
}

/**
 * Whether the runtime's token carries the v6 fields (`isLendable`, `lending`, `mintRateLimit`), in the v6 layout or
 * in the v7 layout that appends `creationBlock` after them.
 */
export function hasV6TokenLayout(runtime: Runtime): boolean {
    return tokenLayout(runtime) !== undefined
}

function truncatedTokenCodec(runtime: Runtime, type: number, dropped: number): LegacyCodec {
    const definition = runtime.description.types[type]
    assert(definition.kind === TypeKind.Composite, 'MultiTokens.Tokens is not a token composite')

    const types = runtime.description.types.slice() as Type[]
    types[type] = {
        ...definition,
        fields: definition.fields.slice(0, -dropped),
    }

    return { codec: new Codec(types), type }
}

/** Older encodings a lazily migrating runtime may still hold, newest first. */
function legacyTokenCodecs(runtime: Runtime): LegacyCodec[] {
    const cached = legacyCodecs.get(runtime)
    if (cached) return cached

    const layout = tokenLayout(runtime)
    assert(layout, 'MultiTokens.Tokens does not have the expected v6 or v7 trailing fields')

    const type = storageValueType(runtime)
    const codecs =
        layout === 'v7'
            ? [
                  truncatedTokenCodec(runtime, type, V7_TOKEN_FIELDS.length - V6_TOKEN_FIELDS.length),
                  truncatedTokenCodec(runtime, type, V7_TOKEN_FIELDS.length),
              ]
            : [truncatedTokenCodec(runtime, type, V6_TOKEN_FIELDS.length)]

    legacyCodecs.set(runtime, codecs)
    return codecs
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

    const raw = value as Omit<
        Token,
        'ephemeralExpiration' | 'isLendable' | 'lending' | 'mintRateLimit' | 'creationBlock'
    > & {
        ephemeralExpiration?: number | bigint
        isLendable?: boolean
        lending?: { lender: string; expiration: number | bigint }
        mintRateLimit?: unknown
        creationBlock?: number | bigint
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
    assert(
        raw.creationBlock === undefined ||
            typeof raw.creationBlock === 'number' ||
            typeof raw.creationBlock === 'bigint',
        'Token creation block must be a block number'
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
        mintRateLimit: normalizeOptionalMintRateLimitState(raw.mintRateLimit),
        creationBlock: raw.creationBlock === undefined ? undefined : BigInt(raw.creationBlock),
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

    const legacyErrors: unknown[] = []
    for (const { codec, type } of legacyTokenCodecs(runtime)) {
        try {
            return normalizedToken(codec.decodeBinary(type, value))
        } catch (legacyError) {
            legacyErrors.push(legacyError)
        }
    }

    const error = new Error(
        'Unable to decode MultiTokens.Tokens as either current or strict pre-v6 token storage'
    ) as Error & { cause?: unknown }
    error.cause = { currentError, legacyErrors }
    throw error
}

async function queryRawValues(block: Block, keys: unknown[][]): Promise<(string | undefined)[]> {
    if (keys.length === 0) return []

    const encodedKeys = keys.map((key) => block._runtime.encodeStorageKey('MultiTokens.Tokens', ...key))
    const result = await block._runtime.rpc.call('state_queryStorageAt', [encodedKeys, block.hash])

    assert(Array.isArray(result) && result.length === 1, 'Unexpected MultiTokens.Tokens storage response')
    const changes = new Map<string, string | null>(result[0].changes)

    return encodedKeys.map((key) => changes.get(key) ?? undefined)
}

export async function getMixedTokens(block: Block, keys: [bigint, bigint][]): Promise<(Token | undefined)[]> {
    const values = await queryRawValues(block, keys)
    return values.map((value) => (value === undefined ? undefined : decodeTokenStorageValue(block._runtime, value)))
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

export function normalizeToken(value: unknown): Token | undefined {
    return value ? normalizedToken(value) : undefined
}

export async function* normalizeTokenPairs<K>(
    pairs: AsyncIterable<[K, unknown][]>
): AsyncIterable<[K, Token | undefined][]> {
    for await (const page of pairs) {
        yield page.map(([key, value]) => [key, normalizeToken(value)])
    }
}
