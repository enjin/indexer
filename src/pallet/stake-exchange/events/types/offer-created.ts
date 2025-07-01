import { Offer } from '~/pallet/common/types'

export type OfferCreated = {
    offerId: bigint
    offer: Offer
}
