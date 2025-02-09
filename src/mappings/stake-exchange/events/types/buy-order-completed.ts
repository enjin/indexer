import { AccountId32, Perbill } from '@enjin/indexer/mappings/common/types'

export type BuyOrderCompleted = {
    who: AccountId32
    tokenId: bigint
    amount: bigint
    rate: bigint | Perbill // Replaced by Perbill on v120
    offerCreator?: AccountId32 // Added on v1026
    offerId?: bigint // Added on v1033
}
