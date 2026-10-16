import { AccountId32 } from '~/pallet/common/types'

export type Slashed = {
    collectionId: bigint
    tokenId: bigint
    accountId: AccountId32
    amount: bigint
}

export type ReserveRepatriated = {
    collectionId: bigint
    tokenId: bigint
    source: AccountId32
    destination: AccountId32
    amount: bigint
    reserveId?: unknown // Option<Bytes> before v1050, RuntimeHoldReason afterwards
}

export type Locked = {
    collectionId: bigint
    tokenId: bigint
    accountId: AccountId32
    amount: bigint
}

export type Unlocked = Locked

export type TokenAccountDepositUpdated = {
    collectionId: bigint
    tokenId: bigint
    depositor: AccountId32
    deltaAccountCount: number
}
