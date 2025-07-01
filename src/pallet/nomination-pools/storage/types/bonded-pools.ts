import { BoundedVec, PoolState, Commission, PoolRoles, BonusCycle } from '~/pallet/common/types'

export type BondedPools = {
    points?: bigint // Removed on v104
    state: PoolState
    commission: Commission
    roles?: PoolRoles // Removed on v110
    tokenId: bigint
    capacity: bigint
    bonusCycle?: BonusCycle // Added on v101
    bonusesPaid?: number[] // Added on v101
    creationBlock?: number // Added on v1023
    name?: BoundedVec // Added on v1023
}
