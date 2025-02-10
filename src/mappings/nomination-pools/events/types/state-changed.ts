import { PoolState } from '@enjin/indexer/mappings/common/types'

export type StateChanged = {
    poolId: number
    newState: PoolState
}
