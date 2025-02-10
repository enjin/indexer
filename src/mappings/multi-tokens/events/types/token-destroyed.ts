import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type TokenDestroyed = {
    collectionId: bigint
    tokenId: bigint
    caller: AccountId32
}
