import { Bid, H256 } from '@enjin/indexer/mappings/common/types'

export type BidPlaced = {
    listingId: H256
    bid: Bid
}
