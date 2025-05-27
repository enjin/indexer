import {
    AccountTokenEvent,
    AuctionState,
    Bid,
    Event as EventModel,
    Listing,
    MarketplaceListingData,
} from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { Sns } from '../../../util/sns'
import * as mappings from '../../index'
import { getBestListing, getOrCreateAccount } from '../../../util/entities'
import { QueueUtils } from '../../../queue'

export async function bidPlaced(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    const event = mappings.marketplace.events.bidPlaced(item)
    const listingId = event.listingId.substring(2)
    const [listing, bidder, lastBid] = await Promise.all([
        ctx.store.findOneOrFail<Listing>(Listing, {
            where: { id: listingId },
            relations: {
                seller: true,
                makeAssetId: {
                    collection: true,
                    bestListing: true,
                },
            },
        }),
        getOrCreateAccount(ctx, event.bid.bidder),
        ctx.store.findOne<Bid>(Bid, {
            where: { listing: { id: listingId } },
            relations: {
                bidder: true,
            },
            order: { createdAt: 'DESC' },
        }),
    ])

    const bid = new Bid({
        id: `${listingId}-${event.bid.bidder}-${event.bid.price}`,
        bidder: bidder,
        price: event.bid.price,
        listing,
        height: block.height,
        extrinsicHash: item.extrinsic?.hash,
        createdAt: new Date(block.timestamp ?? 0),
    })

    listing.highestPrice = event.bid.price
    listing.state = new AuctionState({
        listingType: MarketplaceListingData.Auction,
        highBid: bid.id,
    })
    listing.updatedAt = new Date(block.timestamp ?? 0)

    await Promise.all([ctx.store.save(bid), ctx.store.save(listing)])

    if (listing.makeAssetId.bestListing?.id === listing.id) {
        const bestListing = await getBestListing(ctx, listing.makeAssetId.id)
        if (bestListing?.id !== listing.id) {
            listing.makeAssetId.bestListing = bestListing
            await ctx.store.save(listing.makeAssetId)
        }
    }

    QueueUtils.dispatchComputeStats(listing.makeAssetId.collection.id)

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                listing: {
                    seller: {
                        id: listing.seller.id,
                    },
                    id: listing.id,
                    highestPrice: listing.highestPrice.toString(),
                    amount: listing.amount.toString(),
                    price: listing.price.toString(),
                    data: listing.data.toJSON(),
                },
                lastBid: lastBid
                    ? {
                          id: lastBid.id,
                          price: lastBid.price.toString(),
                          bidder: {
                              id: lastBid.bidder.id,
                          },
                      }
                    : null,
                bid: {
                    id: bid.id,
                    price: bid.price.toString(),
                    bidder: {
                        id: bid.bidder.id,
                    },
                },
                token: listing.makeAssetId.id,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return mappings.marketplace.events.bidPlacedEventModel(
        item,
        event,
        listing,
        bidder,
        listing.makeAssetId.collection,
        listing.makeAssetId
    )
}
