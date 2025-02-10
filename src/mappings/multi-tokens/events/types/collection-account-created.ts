import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type CollectionAccountCreated = {
    collectionId: bigint
    accountId: AccountId32
}
