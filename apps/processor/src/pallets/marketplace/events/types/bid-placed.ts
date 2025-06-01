import { Bid, H256 } from '../../../common/types'

export type BidPlaced = {
    listingId: H256
    bid: Bid
}
