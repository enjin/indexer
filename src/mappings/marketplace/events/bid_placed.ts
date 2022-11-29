import { UnknownVersionError } from '../../../common/errors'
import { MarketplaceBidPlacedEvent } from '../../../types/generated/events'
import { AuctionState, Bid, Listing, ListingType } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { Bid as BidEvent } from '../../../types/generated/v6'
import { encodeId } from '../../../common/tools'
import { getOrCreateAccount } from '../../util/entities'
import { EventService, CollectionService } from '../../../services'

interface EventData {
    listingId: Uint8Array
    bid: BidEvent
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MarketplaceBidPlacedEvent(ctx)

    if (event.isEfinityV3000) {
        const { listingId, bid } = event.asEfinityV3000
        return { listingId, bid }
    }
    throw new UnknownVersionError(event.constructor.name)
}

export async function bidPlaced(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const listingId = Buffer.from(data.listingId).toString('hex')
    const listing = await ctx.store.findOneOrFail<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            makeAssetId: {
                collection: true,
            },
        },
    })

    const address = encodeId(data.bid.bidder)
    const account = await getOrCreateAccount(ctx, address)

    const bid = new Bid({
        id: `${listingId}-${address}-${data.bid.price}`,
        bidder: account,
        price: data.bid.price,
        listing,
        height: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
    })

    listing.highestPrice = data.bid.price
    listing.state = new AuctionState({
        listingType: ListingType.Auction,
        highBid: bid.id,
    })

    await ctx.store.save(bid)

    listing.updatedAt = new Date(ctx.block.timestamp)
    await ctx.store.save(listing)

    new EventService(ctx, listing.makeAssetId).MarketplaceBid(account, bid)

    new CollectionService(ctx.store).sync(listing.makeAssetId.collection.id)
}
