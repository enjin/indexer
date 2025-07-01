import { AccountId32 } from '~/pallet/common/types'

export type CollectionTransferred = {
    collectionId: bigint
    newOwner: AccountId32
}
