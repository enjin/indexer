import { AccountTokenEvent, AuctionState, Bid, Event as EventModel, Listing, ListingType, Token } from '../../../model'
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

    const listing = await ctx.store.findOne<Listing>(Listing, {
        where: { id: listingId },
    })
    if (!listing) return undefined

    const makeAssetId = await ctx.store.findOne<Token>(Token, {
        where: { id: listing.makeAssetId.id },
        relations: {
            collection: true,
            bestListing: true,
        },
    })
    if (!makeAssetId) return undefined

    const currentBidder = await getOrCreateAccount(ctx, event.bid.bidder)
    const previousBid = await ctx.store.findOne<Bid>(Bid, {
        where: { listing: { id: listingId } },
        order: { createdAt: 'DESC' },
    })

    const bid = new Bid({
        id: `${listingId}-${event.bid.bidder}-${event.bid.price}`,
        bidder: currentBidder,
        price: event.bid.price,
        listing,
        height: block.height,
        extrinsicHash: item.extrinsic?.hash,
        createdAt: new Date(block.timestamp ?? 0),
    })

    listing.highestPrice = event.bid.price
    listing.updatedAt = new Date(block.timestamp ?? 0)
    listing.state = new AuctionState({
        listingType: ListingType.Auction,
        highBid: bid.id,
    })

    await ctx.store.save(bid)
    await ctx.store.save(listing)

    if (makeAssetId.bestListing?.id === listing.id) {
        const bestListing = await getBestListing(ctx, makeAssetId.id)
        if (bestListing?.id !== listing.id) {
            makeAssetId.bestListing = bestListing
            await ctx.store.save(makeAssetId)
        }
    }

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
                lastBid: previousBid
                    ? {
                          id: previousBid.id,
                          price: previousBid.price.toString(),
                          bidder: {
                              id: previousBid.bidder.id,
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

    QueueUtils.dispatchComputeStats(listing.makeAssetId.collection.id)

    return mappings.marketplace.events.bidPlacedEventModel(
        item,
        event,
        listing,
        currentBidder,
        makeAssetId.collection,
        makeAssetId
    )
}
