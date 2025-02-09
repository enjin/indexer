import { AccountId32, H256 } from '@enjin/indexer/mappings/common/types'

export type CounterOfferRemoved = {
    listingId: H256
    creator: AccountId32
}
