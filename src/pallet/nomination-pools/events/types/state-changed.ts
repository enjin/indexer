import { PoolState } from '~/pallet/common/types'

export type StateChanged = {
    poolId: number
    newState: PoolState
}
