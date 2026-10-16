import { Perbill } from '~/pallet/common/types'

export type CommissionUpdated = {
    poolId: number
    current?: Perbill
}
