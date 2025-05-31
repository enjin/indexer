import { MultiAddress } from '../../../common/types'

export type WithdrawUnbonded = {
    poolId: number
    memberAccount: MultiAddress
    numSlashingSpans: number
}
