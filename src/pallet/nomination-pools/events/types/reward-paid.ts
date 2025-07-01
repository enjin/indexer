import { AccountId32 } from '~/pallet/common/types'

export type RewardPaid = {
    poolId: number
    era: number
    validatorStash: AccountId32
    reward: bigint
    bonus: bigint
}
