import {
    MintRateLimit as MintRateLimitModel,
    MintRateLimitState as MintRateLimitStateModel,
    MintRateWindow as MintRateWindowModel,
    PendingMintRateLimitChange as PendingMintRateLimitChangeModel,
} from '~/model'
import { MintRateLimit, MintRateLimitState, MintRateWindow } from '~/pallet/common/types'
import { mintRateLimitSlotLength, mintRateLimitUsageAtBlock } from '~/pallet/multi-tokens/mint-rate-limit-notifications'
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
    indexedHeight: number
): MintRateLimitStateModel | null {
    if (!state) return null

    const height = BigInt(indexedHeight)
    const { pending } = state
    if (pending && pending.effectiveBlock <= height) {
        if (!pending.newLimit) return null
        return new MintRateLimitStateModel({
            limit: toMintRateLimitModel(pending.newLimit),
            window: new MintRateWindowModel(
                carryWindow(state.window, state.limit.period, pending.newLimit.period, height)
            ),
            pending: null,
        })
    }

    return new MintRateLimitStateModel({
        limit: toMintRateLimitModel(state.limit),
        window: new MintRateWindowModel({
            lastSlot: state.window.lastSlot,
            buckets: state.window.buckets,
        }),
        pending: pending
            ? new PendingMintRateLimitChangeModel({
                  newLimit: pending.newLimit ? toMintRateLimitModel(pending.newLimit) : null,
                  effectiveBlock: pending.effectiveBlock,
              })
            : null,
    })
}
