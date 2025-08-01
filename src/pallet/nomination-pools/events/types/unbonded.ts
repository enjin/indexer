import { AccountId32 } from '~/pallet/common/types'

export type Unbonded = {
    member: AccountId32
    poolId: number
    balance: bigint
    points: bigint
    era: number
}
