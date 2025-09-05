import { MultiAddress, BoundedVec } from '~/pallet/common/types'

export type CreatePool = {
    tokenId: bigint
    deposit: bigint
    capacity: bigint
    duration?: number // Removed on v1060
    root?: MultiAddress // Removed on v102 => Removed on v110
    admin?: MultiAddress // Added on v102 => Removed on v110
    nominator?: MultiAddress // Removed on v110
    name?: BoundedVec // Added on v1023
}
