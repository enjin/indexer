import { H256, Bid } from '~/pallet/common/types'

export type AuctionFinalized = {
    listingId: H256
    winningBid?: Bid
    protocolFee: bigint
    royalty: bigint
}
