import { AccountId32, CommissionPayment } from '~/pallet/common/types'

export type RewardPaid = {
    poolId: number
    era: number
    validatorStash: AccountId32
    reward: bigint
    bonus?: bigint // Removed on v1060
    commission?: CommissionPayment // Added on v1060
}
