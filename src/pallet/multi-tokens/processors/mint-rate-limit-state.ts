import {
    MintRateLimit as MintRateLimitModel,
    MintRateLimitState as MintRateLimitStateModel,
    MintRateWindow as MintRateWindowModel,
    PendingMintRateLimitChange as PendingMintRateLimitChangeModel,
} from '~/model'
import { MintRateLimit, MintRateLimitState } from '~/pallet/common/types'

export function toMintRateLimitModel(limit: MintRateLimit): MintRateLimitModel {
    return new MintRateLimitModel({
        period: limit.period,
        max: limit.max,
    })
}

export function toMintRateLimitStateModel(state?: MintRateLimitState): MintRateLimitStateModel | null {
    if (!state) return null

    return new MintRateLimitStateModel({
        limit: toMintRateLimitModel(state.limit),
        window: new MintRateWindowModel({
            lastSlot: state.window.lastSlot,
            buckets: state.window.buckets,
        }),
        pending: state.pending
            ? new PendingMintRateLimitChangeModel({
                  newLimit: state.pending.newLimit ? toMintRateLimitModel(state.pending.newLimit) : null,
                  effectiveBlock: state.pending.effectiveBlock,
              })
            : null,
    })
}
