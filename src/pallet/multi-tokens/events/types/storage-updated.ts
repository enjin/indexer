import { AccountId32 } from '~/pallet/common/types'

// The `value` the root call wrote is not decoded: processors re-read the normalized storage at the block instead.
export type CollectionUpdated = {
    collectionId: bigint
    value?: unknown
}

export type TokenUpdated = {
    collectionId: bigint
    tokenId: bigint
    value?: unknown
}

export type CollectionAccountUpdated = {
    collectionId: bigint
    accountId: AccountId32
    value?: unknown
}

export type TokenAccountUpdated = {
    collectionId: bigint
    tokenId: bigint
    accountId: AccountId32
    value?: unknown
}
