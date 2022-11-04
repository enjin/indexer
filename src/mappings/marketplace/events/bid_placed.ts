import { UnknownVersionError } from '../../../common/errors'
import { MarketplaceBidPlacedEvent } from '../../../types/generated/events'
import { AuctionState, Bid, Collection, Listing, ListingStatusType, ListingType, Token } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { Bid as BidEvent } from '../../../types/generated/v6'
import { encodeId } from '../../../common/tools'
import { getOrCreateAccount } from '../../util/entities'
import { Event } from '../../../event'

interface EventData {
    listingId: Uint8Array
    bid: BidEvent
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MarketplaceBidPlacedEvent(ctx)

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

    const listingId = Buffer.from(data.listingId).toString('hex')
    const listing = await ctx.store.findOneOrFail<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            makeAssetId: {
                collection: {
                    floorListing: true
                }
            },
        },
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

    listing.highestPrice = data.bid.price
    listing.state = new AuctionState({
        listingType: ListingType.Auction,
        highBid: bid.id,
    })

    await ctx.store.save(bid)

    listing.updatedAt = new Date(ctx.block.timestamp)
    await ctx.store.save(listing)

    new Event(ctx, listing.makeAssetId).MarketplaceBid(account, bid)

    if (listing.makeAssetId.collection.floorListing?.id === listing.id) {
        const floorListing = await ctx.store.findOne<Listing>(Listing, {
            where: {
                makeAssetId: { collection: { id: listing.makeAssetId.collection.id } },
                status: { type: ListingStatusType.Active },
            },
            order: {
                highestPrice: "DESC",
            },
        })

        if (floorListing && floorListing.id !== listing.id) {
            listing.makeAssetId.collection.floorListing = floorListing
            await ctx.store.save(listing.makeAssetId.collection)
        }
    }
}
