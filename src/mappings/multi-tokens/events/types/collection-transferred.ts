import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type CollectionTransferred = {
    collectionId: bigint
    newOwner: AccountId32
}
