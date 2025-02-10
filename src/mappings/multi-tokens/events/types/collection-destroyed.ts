import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type CollectionDestroyed = {
    collectionId: bigint
    caller: AccountId32
}
