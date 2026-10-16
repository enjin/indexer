import { AccountId32 } from '~/pallet/common/types'

export type RewardPayoutFailed = {
    poolId: number
    era: number
    validatorStash: AccountId32
    reward: bigint
    error: unknown
}
