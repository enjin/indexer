import { DefaultCollectionMutation } from '@enjin/indexer/mappings/common/types'

export type CollectionMutated = {
    collectionId: bigint
    mutation: DefaultCollectionMutation
}
