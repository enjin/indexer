import { MultiAddress } from '~/pallet/common/types'

export type Unbond = {
    poolId: number
    memberAccount: MultiAddress
    unbondingPoints: bigint
}
