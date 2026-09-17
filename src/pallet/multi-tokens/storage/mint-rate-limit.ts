import assert from 'assert'
import { MintRateLimit, MintRateLimitState, MintRateWindow, PendingMintRateLimitChange } from '~/pallet/common/types'

export const MINT_RATE_BUCKETS = 9

function normalizedBigInt(value: unknown, name: string): bigint {
    assert(
        typeof value === 'bigint' || (typeof value === 'number' && Number.isSafeInteger(value)),
        `${name} must be a lossless integer`
    )
    return BigInt(value)
}

export function normalizeMintRateLimit(value: unknown): MintRateLimit {
    assert(value && typeof value === 'object', 'Mint rate limit must be an object')
    const raw = value as { period?: unknown; max?: unknown }
    return {
        period: normalizedBigInt(raw.period, 'Mint rate limit period'),
        max: normalizedBigInt(raw.max, 'Mint rate limit maximum'),
    }
}

function normalizeMintRateWindow(value: unknown): MintRateWindow {
    assert(value && typeof value === 'object', 'Mint rate window must be an object')
    const raw = value as { lastSlot?: unknown; buckets?: unknown }
    assert(Array.isArray(raw.buckets), 'Mint rate window buckets must be an array')
    assert(raw.buckets.length === MINT_RATE_BUCKETS, `Mint rate window must contain ${MINT_RATE_BUCKETS} buckets`)

    return {
        lastSlot: normalizedBigInt(raw.lastSlot, 'Mint rate window slot'),
        buckets: raw.buckets.map((bucket) => normalizedBigInt(bucket, 'Mint rate window bucket')),
    }
}

function normalizePendingMintRateLimitChange(value: unknown): PendingMintRateLimitChange {
    assert(value && typeof value === 'object', 'Pending mint rate limit change must be an object')
    const raw = value as { newLimit?: unknown; effectiveBlock?: unknown }
    return {
        newLimit:
            raw.newLimit === undefined || raw.newLimit === null ? undefined : normalizeMintRateLimit(raw.newLimit),
        effectiveBlock: normalizedBigInt(raw.effectiveBlock, 'Mint rate limit effective block'),
    }
}

export function normalizeMintRateLimitState(value: unknown): MintRateLimitState {
    assert(value && typeof value === 'object', 'Mint rate limit state must be an object')
    const raw = value as { limit?: unknown; window?: unknown; pending?: unknown }
    return {
        limit: normalizeMintRateLimit(raw.limit),
        window: normalizeMintRateWindow(raw.window),
        pending:
            raw.pending === undefined || raw.pending === null
                ? undefined
                : normalizePendingMintRateLimitChange(raw.pending),
    }
}

export function normalizeOptionalMintRateLimit(value: unknown): MintRateLimit | undefined {
    return value === undefined || value === null ? undefined : normalizeMintRateLimit(value)
}

export function normalizeOptionalMintRateLimitState(value: unknown): MintRateLimitState | undefined {
    return value === undefined || value === null ? undefined : normalizeMintRateLimitState(value)
}
