import { H256, CounterOffer } from '../../../common/types'

export type CounterOfferPlaced = {
    listingId: H256
    counterOffer: CounterOffer
}
