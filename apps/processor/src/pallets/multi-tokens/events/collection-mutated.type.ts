import { DefaultCollectionMutation } from '../../common/types'

export type CollectionMutated = {
    collectionId: bigint
    mutation: DefaultCollectionMutation
}
