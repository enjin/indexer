import { PoolMutation } from '@enjin/indexer/mappings/common/types'

export type PoolMutated = {
    poolId: number
    mutation: PoolMutation
}
