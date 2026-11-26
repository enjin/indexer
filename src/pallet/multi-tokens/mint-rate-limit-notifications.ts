import { createHash } from 'node:crypto'
import type { MintRateLimit, MintRateWindow } from '~/pallet/common/types'
import { MINT_RATE_BUCKETS } from '~/pallet/multi-tokens/storage/mint-rate-limit'
import config from '~/util/config'
import type { SnsEvent } from '~/util/sns'
import type { MintRateLimitState } from '~/model'

const BUCKETS = BigInt(MINT_RATE_BUCKETS)
const MAX_BLOCK = 0xffff_ffffn

export type MintRateLimitSubject = { collectionId: string; tokenId?: string | null }
type MintRateLimitSnapshot = { limit: MintRateLimit; window: MintRateWindow } | null | undefined
type MintRateLimitPayload = { max: string; period: string } | null

export interface MintRateLimitStatus {
    scope: 'token' | 'collection'
    status: 'reached' | 'available'
    effectiveBlock: string
    limit: MintRateLimitPayload
}

function limitPayload(limit: MintRateLimit | null): MintRateLimitPayload {
    return limit ? { max: limit.max.toString(), period: limit.period.toString() } : null
}

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

export function mintRateLimitChangeApplied(
    { collectionId, tokenId }: MintRateLimitSubject,
    block: bigint,
    limit: MintRateLimit | null
): SnsEvent {
    const subject = tokenId == null ? `collection:${collectionId}` : `token:${collectionId}-${tokenId}`
    return {
        id: createHash('sha256')
            .update(`${config.chainName}:mint-rate-limit:${subject}:ChangeApplied:${block}`)
            .digest('hex'),
        name: 'MultiTokens.MintRateLimitChangeApplied',
        body: {
            collectionId,
            tokenId: tokenId ?? null,
            effectiveBlock: block.toString(),
            limit: limitPayload(limit),
        },
    }
}

export function mintRateLimitStatuses(
    scope: MintRateLimitStatus['scope'],
    before: MintRateLimitState | null | undefined,
    after: MintRateLimitState | null | undefined,
    block: bigint
): MintRateLimitStatus[] {
    const statuses: MintRateLimitStatus[] = []
    const wasBlocked = mintRateLimitBlocked(before, block)
    const blocked = mintRateLimitBlocked(after, block)

    // A later mint can observe a window that reopened without a chain event.
    if (before && after && !wasBlocked && !before.pending && after.window.lastSlot > before.window.lastSlot) {
        const previousSlot = before.window.lastSlot * mintRateLimitSlotLength(before.limit.period)
        const available = mintRateLimitAvailableAt(before, previousSlot)
        if (available !== undefined && available <= block) {
            statuses.push({
                scope,
                status: 'available',
                effectiveBlock: available.toString(),
                limit: limitPayload(before.limit),
            })
        }
    }

    if (wasBlocked !== blocked) {
        statuses.push({
            scope,
            status: blocked ? 'reached' : 'available',
            effectiveBlock: block.toString(),
            limit: limitPayload(after?.limit ?? null),
        })
    }
    return statuses
}
