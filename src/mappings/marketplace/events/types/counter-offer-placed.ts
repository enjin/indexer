import { H256, CounterOffer } from '@enjin/indexer/mappings/common/types'

export type CounterOfferPlaced = {
    listingId: H256
    counterOffer: CounterOffer
}
