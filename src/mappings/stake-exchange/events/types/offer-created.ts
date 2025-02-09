import { Offer } from '@enjin/indexer/mappings/common/types'

export type OfferCreated = {
    offerId: bigint
    offer: Offer
}
