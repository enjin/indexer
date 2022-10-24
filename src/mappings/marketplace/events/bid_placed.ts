import { UnknownVersionError } from '../../../common/errors'
import { MarketplaceBidPlacedEvent } from '../../../types/generated/events'
import { AuctionState, Bid, Listing, ListingType } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { Bid as BidEvent } from '../../../types/generated/v6'
import { encodeId } from '../../../common/tools'
import { getOrCreateAccount } from '../../util/entities'

interface EventData {
    listingId: Uint8Array
    bid: BidEvent,
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MarketplaceBidPlacedEvent(ctx);

    if (event.isEfinityV3000) {
        const { listingId, bid } = event.asEfinityV3000
        return { listingId, bid }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleBidPlaced(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const listingId = Buffer.from(data.listingId).toString("hex")
    const listing = await ctx.store.findOneOrFail<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            seller: true,
            makeAssetId: true,
            takeAssetId: true,
        }
    })

    const address = encodeId(data.bid.bidder)
    const account = await getOrCreateAccount(ctx, address)

    const bid = new Bid({
        id: `${listingId}-${address}-${data.bid.price}`,
        bidder: account,
        price: data.bid.price,
        listing: listing,
        height: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
    })

    listing.state = new AuctionState({
        listingType: ListingType.Auction,
        highBid: bid.id,
    })

    await ctx.store.save(bid)

    listing.updatedAt = new Date(ctx.block.timestamp)
    await ctx.store.save(listing)
}
