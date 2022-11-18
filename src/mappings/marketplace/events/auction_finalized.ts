import { UnknownVersionError } from '../../../common/errors'
import { MarketplaceAuctionFinalizedEvent } from '../../../types/generated/events'
import { AuctionState, Bid as BidModel, Listing, ListingStatus, ListingStatusType, ListingType } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { Bid } from '../../../types/generated/v6'
import { EventService } from '../../../services'
import { encodeId } from '../../../common/tools'
import { getOrCreateAccount } from '../../util/entities'

interface EventData {
    listingId: Uint8Array
    winningBid: Bid | undefined
    protocolFee: bigint
    royalty: bigint
}

async function getHighestSale(winningBid: Bid, listing: Listing, ctx: EventHandlerContext): Promise<Listing> {
    if (!listing.makeAssetId.collection.highestSale) {
        return listing
    }

    if (listing.makeAssetId.collection.highestSale.state.listingType === ListingType.FixedPrice) {
        return BigInt(winningBid.price) > listing.makeAssetId.collection.highestSale.price
            ? listing
            : listing.makeAssetId.collection.highestSale
    }

    const highBidId = (listing.makeAssetId.collection.highestSale.state as AuctionState).highBid
    if (!highBidId) {
        return listing
    }

    const highBid = await ctx.store.findOne<BidModel>(BidModel, {
        where: { id: highBidId },
    })

    if (!highBid) {
        return listing
    }

    return BigInt(winningBid.price) > BigInt(highBid.price) ? listing : listing.makeAssetId.collection.highestSale
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MarketplaceAuctionFinalizedEvent(ctx)

    if (event.isEfinityV3000) {
        const { listingId, winningBid, protocolFee, royalty } = event.asEfinityV3000
        return { listingId, winningBid, protocolFee, royalty }
    }
    throw new UnknownVersionError(event.constructor.name)
}

export async function handleAuctionFinalized(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const listingId = Buffer.from(data.listingId).toString('hex')
    const listing = await ctx.store.findOneOrFail<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            seller: true,
            makeAssetId: {
                collection: {
                    floorListing: true,
                },
            },
        },
    })

    listing.updatedAt = new Date(ctx.block.timestamp)
    await ctx.store.save(listing)

    const listingStatus = new ListingStatus({
        id: `${listingId}-${ctx.block.height}`,
        type: ListingStatusType.Finalized,
        listing,
        height: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
    })
    await ctx.store.insert(listingStatus)

    if (data.winningBid) {
        listing.makeAssetId.collection.lastSale = listing
        listing.makeAssetId.collection.highestSale = await getHighestSale(data.winningBid, listing, ctx)
        await ctx.store.save(listing.makeAssetId.collection)

        new EventService(ctx, listing.makeAssetId).MarketplacePurchase(
            listing.seller,
            await getOrCreateAccount(ctx, encodeId(data.winningBid.bidder)),
            listing,
            1n
        )
    }

    if (listing.makeAssetId.collection.floorListing?.id === listing.id) {
        const floorListing = await ctx.store.find<Listing>(Listing, {
            where: {
                makeAssetId: { collection: { id: listing.makeAssetId.collection.id } },
                status: { type: ListingStatusType.Active },
            },
            order: {
                highestPrice: 'ASC',
            },
            take: 2,
        })

        if (floorListing.length === 1 && floorListing[0].id === listing.id) {
            listing.makeAssetId.collection.floorListing = null
            await ctx.store.save(listing.makeAssetId.collection)
        }

        if (floorListing.length >= 2 && floorListing[0].id === listing.id) {
            ;[, listing.makeAssetId.collection.floorListing] = floorListing
            await ctx.store.save(listing.makeAssetId.collection)
        }
    }
}
