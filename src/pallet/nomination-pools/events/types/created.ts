import { AccountId32 } from '~/pallet/common/types'

export type Created = {
    depositor?: AccountId32 // Removed on v101
    creator?: AccountId32 // Added on v101
    poolId: number
    capacity: bigint
}
