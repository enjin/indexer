import { Bid, H256 } from '~/pallet/common/types'

export type BidPlaced = {
    listingId: H256
    bid: Bid
}
