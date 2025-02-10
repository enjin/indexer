import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type AccountAdded = {
    tankId: AccountId32
    userId: AccountId32
    tankDeposit: bigint
    userDeposit: bigint
    totalReceived?: bigint // Added on v1021
}
