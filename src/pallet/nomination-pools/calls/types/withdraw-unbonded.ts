import { MultiAddress } from '~/pallet/common/types'

export type WithdrawUnbonded = {
    poolId: number
    memberAccount: MultiAddress
    numSlashingSpans: number
}
