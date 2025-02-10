import { DefaultCollectionDescriptor } from '@enjin/indexer/mappings/common/types'

export type ForceCreateCollection = {
    owner: string
    collectionId: bigint
    descriptor: DefaultCollectionDescriptor
}
