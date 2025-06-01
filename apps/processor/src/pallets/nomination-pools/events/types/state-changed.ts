import { PoolState } from '../../../common/types'

export type StateChanged = {
    poolId: number
    newState: PoolState
}
