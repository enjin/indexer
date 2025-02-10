import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type Created = {
    depositor?: AccountId32 // Removed on v101
    creator?: AccountId32 // Added on v101
    poolId: number
    capacity: bigint
}
