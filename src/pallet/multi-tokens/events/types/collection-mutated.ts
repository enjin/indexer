import { DefaultCollectionMutation } from '~/pallet/common/types'

export type CollectionMutated = {
    collectionId: bigint
    mutation: DefaultCollectionMutation
}
