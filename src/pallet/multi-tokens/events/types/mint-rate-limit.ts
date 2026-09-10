import { MintRateLimit } from '~/pallet/common/types'

export type MintRateLimitUpdated = {
    collectionId: bigint
    tokenId?: bigint
    limit?: MintRateLimit
}

export type MintRateLimitChangeScheduled = {
    collectionId: bigint
    tokenId?: bigint
    newLimit?: MintRateLimit
    effectiveBlock: bigint
}

export type MintRateLimitChangeCancelled = {
    collectionId: bigint
    tokenId?: bigint
}
