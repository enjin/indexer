import { AccountId32 } from '~/pallet/common/types'

export type HoldChange = {
    who: AccountId32
    amount: bigint
}

export type TransferOnHold = {
    source: AccountId32
    dest: AccountId32
    amount: bigint
}

export type TransferAndHold = {
    source: AccountId32
    dest: AccountId32
    transferred: bigint
}
