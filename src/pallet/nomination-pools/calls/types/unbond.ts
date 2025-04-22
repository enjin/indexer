import { MultiAddress } from '../../../common/types'

export type Unbond = {
    poolId: number
    memberAccount: MultiAddress
    unbondingPoints: bigint
}
