import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type CollectionCreated = {
    collectionId: bigint
    owner: AccountId32
}
