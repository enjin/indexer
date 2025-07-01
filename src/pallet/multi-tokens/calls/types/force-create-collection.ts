import { DefaultCollectionDescriptor } from '~/pallet/common/types'

export type ForceCreateCollection = {
    owner: string
    collectionId: bigint
    descriptor: DefaultCollectionDescriptor
}
