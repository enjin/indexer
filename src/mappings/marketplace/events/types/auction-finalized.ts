import { H256, Bid } from '@enjin/indexer/mappings/common/types'

export type AuctionFinalized = {
    listingId: H256
    winningBid?: Bid
    protocolFee: bigint
    royalty: bigint
}
