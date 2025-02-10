import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type Unapproved = {
    collectionId: bigint
    tokenId?: bigint
    owner: AccountId32
    operator: AccountId32
}
