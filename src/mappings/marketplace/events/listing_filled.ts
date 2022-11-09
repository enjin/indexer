import { UnknownVersionError } from '../../../common/errors'
import { MarketplaceListingFilledEvent } from '../../../types/generated/events'
import {
    AuctionState, Bid as BidModel,
    Collection,
    FixedPriceState,
    Listing, ListingStatus,
    ListingStatusType,
    ListingType,
} from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { encodeId } from '../../../common/tools'
import { Event } from '../../../event'
import { getOrCreateAccount } from '../../util/entities'
import { Bid } from '../../../types/generated/v6'

interface EventData {
    listingId: Uint8Array
    buyer: Uint8Array
    amountFilled: bigint
    amountRemaining: bigint
    protocolFee: bigint
    royalty: bigint
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MarketplaceListingFilledEvent(ctx)

    if (event.isEfinityV3000) {
        const { listingId, buyer, amountFilled, amountRemaining, protocolFee, royalty } = event.asEfinityV3000
        return { listingId, buyer, amountFilled, amountRemaining, protocolFee, royalty }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleListingFilled(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const listingId = Buffer.from(data.listingId).toString('hex')
    const listing = await ctx.store.findOneOrFail<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            seller: true,
            makeAssetId: {
                collection: {
                    floorListing: true
                }
            },
        },
    })

    listing.state = new FixedPriceState({ listingType: ListingType.FixedPrice, amountFilled: listing.amount - data.amountRemaining })

    if (data.amountRemaining === 0n) {
        const listingStatus = new ListingStatus({
            id: `${listingId}-${ctx.block.height}`,
            type: ListingStatusType.Finalized,
            listing: listing,
            height: ctx.block.height,
            createdAt: new Date(ctx.block.timestamp)
        })
        await ctx.store.insert(listingStatus)
    }

    listing.updatedAt = new Date(ctx.block.timestamp)
    await ctx.store.save(listing)

    listing.makeAssetId.collection.lastSale = listing
    listing.makeAssetId.collection.highestSale = await getHighestSale(listing, ctx)
    await ctx.store.save(listing.makeAssetId.collection)

    new Event(ctx, listing.makeAssetId).MarketplacePurchase(
        listing.seller,
        await getOrCreateAccount(ctx, encodeId(data.buyer)),
        listing,
        data.amountFilled,
        data.amountRemaining
    )

    if (listing.makeAssetId.collection.floorListing?.id === listing.id) {
        const floorListing = await ctx.store.find<Listing>(Listing, {
            where: {
                makeAssetId: { collection: { id: listing.makeAssetId.collection.id } },
                status: { type: ListingStatusType.Active },
            },
            order: {
                highestPrice: "ASC",
            },
            take: 2,
        })

        if (floorListing.length === 0) {
            listing.makeAssetId.collection.floorListing = null
            await ctx.store.save(listing.makeAssetId.collection)
        }

        if (floorListing.length >= 1 && data.amountRemaining === 0n) {
            if (floorListing[0].id === listing.id) {
                listing.makeAssetId.collection.floorListing = floorListing[1] ?? null
                await ctx.store.save(listing.makeAssetId.collection)
            }
        }
    }
}

async function getHighestSale(listing: Listing, ctx: EventHandlerContext): Promise<Listing> {
    if (!listing.makeAssetId.collection.highestSale) {
        return listing
    }

    if (listing.makeAssetId.collection.highestSale.state.listingType == ListingType.FixedPrice) {
        return BigInt(listing.price) > listing.makeAssetId.collection.highestSale.price
            ? listing
            : listing.makeAssetId.collection.highestSale
    }

    const highBidId = (listing.makeAssetId.collection.highestSale.state as AuctionState).highBid
    if (!highBidId) {
        return listing
    }

    const highBid = await ctx.store.findOne<BidModel>(BidModel, {
        where: { id: highBidId }
    })

    if (!highBid) {
        return listing
    }

    return BigInt(listing.price) > BigInt(highBid.price) ? listing : listing.makeAssetId.collection.highestSale
}