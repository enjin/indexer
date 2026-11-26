import {
    MintRateLimit as MintRateLimitModel,
    MintRateLimitState as MintRateLimitStateModel,
    MintRateWindow as MintRateWindowModel,
    PendingMintRateLimitChange as PendingMintRateLimitChangeModel,
} from '~/model'
import { MintRateLimit, MintRateLimitState, MintRateWindow } from '~/pallet/common/types'
import {
    mintRateLimitQuietReopening,
    mintRateLimitSlotLength,
    mintRateLimitUsageAtBlock,
} from '~/pallet/multi-tokens/mint-rate-limit-notifications'
import { MINT_RATE_BUCKETS } from '~/pallet/multi-tokens/storage/mint-rate-limit'

const BUCKETS = BigInt(MINT_RATE_BUCKETS)

function carryWindow(window: MintRateWindow, oldPeriod: bigint, newPeriod: bigint, height: bigint): MintRateWindow {
    const carried = mintRateLimitUsageAtBlock(window, oldPeriod, height)
    const lastSlot = height / mintRateLimitSlotLength(newPeriod)
    const buckets = Array<bigint>(MINT_RATE_BUCKETS).fill(0n)
    buckets[Number(lastSlot % BUCKETS)] = carried
    return { lastSlot, buckets }
}

export function toMintRateLimitModel(limit: MintRateLimit): MintRateLimitModel {
    return new MintRateLimitModel({
        period: limit.period,
        max: limit.max,
    })
}

export function toMintRateLimitStateModel(
    state: MintRateLimitState | MintRateLimitStateModel | undefined,
    indexedHeight: number,
    previousBlockedUntil?: bigint | null
): MintRateLimitStateModel | null {
    if (!state) return null

    const height = BigInt(indexedHeight)
    const settled = state.pending && state.pending.effectiveBlock <= height ? state.pending : null
    const limit = settled ? settled.newLimit : state.limit
    if (!limit) return null

    const pending = settled ? null : state.pending
    const window = settled ? carryWindow(state.window, state.limit.period, limit.period, height) : state.window
    const indexed = new MintRateLimitStateModel({
        limit: toMintRateLimitModel(limit),
        window: new MintRateWindowModel({ lastSlot: window.lastSlot, buckets: window.buckets }),
        pending: pending
            ? new PendingMintRateLimitChangeModel({
                  newLimit: pending.newLimit ? toMintRateLimitModel(pending.newLimit) : null,
                  effectiveBlock: pending.effectiveBlock,
              })
            : null,
    })
    if (
        previousBlockedUntil != null &&
        previousBlockedUntil <= height &&
        mintRateLimitQuietReopening(indexed, previousBlockedUntil - 1n) === previousBlockedUntil
    ) {
        indexed.mintBlockedUntil = previousBlockedUntil
    } else {
        indexed.mintBlockedUntil = mintRateLimitQuietReopening(indexed, height)
    }
    return indexed
}
