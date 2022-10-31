import { UnknownVersionError } from '../../../common/errors'
import { MarketplaceAuctionFinalizedEvent } from '../../../types/generated/events'
import { FinalizedListing, Listing, ListingStatusType } from '../../../model'
import {
    MarketplaceAuctionFinalizedEvent,
} from '../../../types/generated/events'
import {
    Collection,
    FinalizedListing,
    Listing,
    ListingStatusType, Token,
} from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { Bid } from '../../../types/generated/v6'
import { Event } from '../../../event'
import { encodeId } from '../../../common/tools'
import { getOrCreateAccount } from '../../util/entities'

interface EventData {
    listingId: Uint8Array
    winningBid: Bid | undefined
    protocolFee: BigInt
    royalty: BigInt
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MarketplaceAuctionFinalizedEvent(ctx)

    if (event.isEfinityV3000) {
        const { listingId, winningBid, protocolFee, royalty } = event.asEfinityV3000
        return { listingId, winningBid, protocolFee, royalty }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
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
                collection: true
            },
            takeAssetId: true,
        },
    })

    listing.status = new FinalizedListing({
        listingStatus: ListingStatusType.Finalized,
        height: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
    })

    listing.updatedAt = new Date(ctx.block.timestamp)
    await ctx.store.save(listing)

    if (data.winningBid) {
        return new Event(ctx, listing.makeAssetId).MarketplacePurchase(
            listing.seller,
            await getOrCreateAccount(ctx, encodeId(data.winningBid.bidder)),
            listing,
            1n
        )
    }

    const collection = await ctx.store.findOneOrFail<Collection>(Collection, {
        where: { id: listing.makeAssetId.collection.id },
        relations: {
            owner: true,
            floorListing: true,
            tokens: true,
            collectionAccounts: true,
            tokenAccounts: true,
            attributes: true,
        }
    })

    if (collection.floorListing?.id === listing.id) {
        const floorListing = await ctx.store.findOne<Listing>(Listing, {
            where: {
                makeAssetId: { collection: { id: collection.id } },
                status: { listingStatus: ListingStatusType.Active },
            },
            order: {
                highestPrice: "DESC",
            },
        })

        if (floorListing && floorListing.id !== listing.id) {
            collection.floorListing = floorListing
            await ctx.store.save(collection)
        } else {
            collection.floorListing = null
            await ctx.store.save(collection)
        }
    }
}
