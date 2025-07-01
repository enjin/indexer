import { AccountId32 } from '~/pallet/common/types'

export type AccountAdded = {
    tankId: AccountId32
    userId: AccountId32
    tankDeposit: bigint
    userDeposit: bigint
    totalReceived?: bigint // Added on v1021
}
