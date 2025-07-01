import { H256, CounterOffer } from '~/pallet/common/types'

export type CounterOfferPlaced = {
    listingId: H256
    counterOffer: CounterOffer
}
