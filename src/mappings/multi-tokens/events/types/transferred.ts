import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type Transferred = {
    collectionId: bigint
    tokenId: bigint
    operator: AccountId32
    from: AccountId32
    to: AccountId32
    amount: bigint
}
