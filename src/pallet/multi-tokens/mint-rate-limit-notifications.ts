import { createHash } from 'node:crypto'
import type { MintRateLimit, MintRateWindow } from '~/pallet/common/types'
import { MINT_RATE_BUCKETS } from '~/pallet/multi-tokens/storage/mint-rate-limit'
import config from '~/util/config'
import type { SnsEvent } from '~/util/sns'

const BUCKETS = BigInt(MINT_RATE_BUCKETS)
const MAX_BLOCK = 0xffff_ffffn

export type MintRateLimitSubject = { collectionId: string; tokenId?: string | null }
type MintRateLimitSnapshot = { limit: MintRateLimit; window: MintRateWindow } | null | undefined

export function mintRateLimitSlotLength(period: bigint): bigint {
    // The runtime rounds up using saturating arithmetic on its u32 block number.
    const rounded = period + BUCKETS - 2n
    return (rounded > MAX_BLOCK ? MAX_BLOCK : rounded) / (BUCKETS - 1n) || 1n
}

export function mintRateLimitUsageAtBlock(window: MintRateWindow, period: bigint, block: bigint): bigint {
    const slot = block / mintRateLimitSlotLength(period)
    const buckets = [...window.buckets]
    for (let offset = 1n; offset <= slot - window.lastSlot && offset <= BUCKETS; offset++) {
        buckets[Number((window.lastSlot + offset) % BUCKETS)] = 0n
    }
    return buckets.reduce((total, amount) => total + amount, 0n)
}

export function mintRateLimitBlocked(state: MintRateLimitSnapshot, block: bigint): boolean {
    return !!state && mintRateLimitUsageAtBlock(state.window, state.limit.period, block) >= state.limit.max
}

export function mintRateLimitAvailableAt(state: MintRateLimitSnapshot, block: bigint): bigint | undefined {
    if (!state || !mintRateLimitBlocked(state, block)) return

    const length = mintRateLimitSlotLength(state.limit.period)
    for (let offset = 1n; offset <= BUCKETS; offset++) {
        const due = (state.window.lastSlot + offset) * length
        if (due > block && !mintRateLimitBlocked(state, due)) return due
    }
}

export function mintRateLimitNotification(
    type: 'ChangeApplied' | 'Reached' | 'Available',
    { collectionId, tokenId }: MintRateLimitSubject,
    block: bigint,
    limit: MintRateLimit | null
): SnsEvent {
    const subject = tokenId == null ? `collection:${collectionId}` : `token:${collectionId}-${tokenId}`
    return {
        id: createHash('sha256')
            .update(`${config.chainName}:mint-rate-limit:${subject}:${type}:${block}`)
            .digest('hex'),
        name: `MultiTokens.MintRateLimit${type}`,
        body: {
            collectionId,
            tokenId: tokenId ?? null,
            effectiveBlock: block.toString(),
            limit: limit ? { max: limit.max.toString(), period: limit.period.toString() } : null,
        },
    }
}
