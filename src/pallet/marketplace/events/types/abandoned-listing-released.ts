import { H256 } from '~/pallet/common/types'

export type AbandonedListingReleased = {
    listingId: H256
    returnedBid?: {
        bidder: string
        price: bigint
    }
}
