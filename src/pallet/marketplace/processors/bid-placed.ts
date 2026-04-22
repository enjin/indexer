import { AccountTokenEvent, AuctionData, AuctionState, Bid, Event as EventModel, Listing, ListingType } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { getOrCreateAccount } from '~/util/entities'
import { QueueUtils } from '~/queue'
import Big from 'big.js'

export async function bidPlaced(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent, SnsEvent | undefined] | undefined> {
    const event = mappings.marketplace.events.bidPlaced(item)
    const listingId = event.listingId.substring(2)

    const listing = await ctx.store.findOne<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            seller: true,
            makeAssetId: {
                collection: true,
                bestListing: true,
            },
        },
    })
    if (!listing) return undefined

    const makeAssetId = listing.makeAssetId
    const currentBidder = await getOrCreateAccount(ctx, event.bid.bidder)
    const previousBid = await ctx.store.findOne<Bid>(Bid, {
        where: { listing: { id: listingId } },
        relations: { bidder: true },
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

    const secondsPerBlock = 6
    const blocksInTenMinutes = (10 * 60) / secondsPerBlock
    if (listing.data instanceof AuctionData && listing.data.endHeight - block.height <= blocksInTenMinutes) {
        listing.data.endHeight = block.height + blocksInTenMinutes
        listing.data = new AuctionData({
            listingType: ListingType.Auction,
            endHeight: listing.data.endHeight,
        })
    }

    await Promise.all([ctx.store.save(bid), ctx.store.save(listing)])

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            listing: {
                seller: {
                    id: listing.seller.id,
                },
                id: listing.id,
                highestPrice: listing.highestPrice * 10n ** BigInt(makeAssetId.nativeMetadata?.decimalCount ?? 0),
                amount: listing.amount / 10n ** BigInt(makeAssetId.nativeMetadata?.decimalCount ?? 0),
                price: listing.price * 10n ** BigInt(makeAssetId.nativeMetadata?.decimalCount ?? 0),
                data: listing.data.toJSON(),
            },
            lastBid: previousBid
                ? {
                      id: previousBid.id,
                      price: Big(previousBid.price.toString()).mul(10 ** (makeAssetId.nativeMetadata?.decimalCount ?? 0)).toNumber(),
                      bidder: {
                          id: previousBid.bidder.id,
                      },
                  }
                : null,
            bid: {
                id: bid.id,
                price: Big(bid.price.toString()).mul(10 ** (makeAssetId.nativeMetadata?.decimalCount ?? 0)).toNumber(),
                bidder: {
                    id: bid.bidder.id,
                },
            },
            token: makeAssetId.id,
            decimalCount: makeAssetId.nativeMetadata?.decimalCount,
            extrinsic: item.extrinsic?.id,
        },
    }

    await QueueUtils.dispatchComputeStats(makeAssetId.collection.id)
    QueueUtils.dispatchComputeTokenBestListing(makeAssetId.id)

    return [
        ...mappings.marketplace.events.bidPlacedEventModel(
            item,
            event,
            listing,
            currentBidder,
            makeAssetId.collection,
            makeAssetId
        ),
        item.extrinsic ? snsEvent : undefined,
    ]
}
