import { DefaultCollectionDescriptor, AccountId32, H160, RangeInclusive } from '~/pallet/common/types'

export type ForceCreateEthereumCollection = {
    owner: AccountId32
    claimer?: H160 // Added on v1021
    nativeCollectionId?: bigint // Removed on v1021
    ethereumCollectionId: bigint
    tokenRange?: RangeInclusive // Removed on v1021
    descriptor: DefaultCollectionDescriptor
}
