import { AccountId32 } from '../../../common/types'

export type CollectionTransferred = {
    collectionId: bigint
    newOwner: AccountId32
}
