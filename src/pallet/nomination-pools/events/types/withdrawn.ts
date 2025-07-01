import { AccountId32 } from '~/pallet/common/types'

export type Withdrawn = {
    member: AccountId32
    poolId: number
    balance: bigint
    points: bigint
}
