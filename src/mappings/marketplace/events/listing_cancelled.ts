import { UnknownVersionError } from '../../../common/errors'
import { MarketplaceListingCancelledEvent } from '../../../types/generated/events'
import { CancelledListing, Listing, ListingStatusType } from '../../../model'
import {
    MarketplaceListingCancelledEvent,
} from '../../../types/generated/events'
import { CancelledListing, Collection, Listing, ListingStatusType, Token } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { Event } from '../../../event'

interface EventData {
    listingId: Uint8Array
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MarketplaceListingCancelledEvent(ctx)

    if (event.isEfinityV3000) {
        const { listingId } = event.asEfinityV3000
        return { listingId }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleListingCancelled(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const listingId = Buffer.from(data.listingId).toString('hex')
    const listing = await ctx.store.findOneOrFail<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            seller: true,
            makeAssetId: { collection: true },
            takeAssetId: true,
        },
    })

    listing.status = new CancelledListing({
        listingStatus: ListingStatusType.Cancelled,
        height: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
    })

    listing.updatedAt = new Date(ctx.block.timestamp)
    await ctx.store.save(listing)

    new Event(ctx, listing.makeAssetId).MarketplaceListingCancel(listing.seller, listing)

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
    console.log("after collection")

    if (collection.floorListing?.id === listing.id) {
        console.log("before floor listing fetching")
        const floorListing = await ctx.store.find<Listing>(Listing, {
            where: {
                makeAssetId: { collection: { id: collection.id } },
                status: { listingStatus: ListingStatusType.Active },
            },
            order: {
                highestPrice: "DESC",
            },
        })
        console.log(floorListing)
        // const floorListing = await ctx.store.findOne<Listing>(Listing, {
        //     where: {
        //         makeAssetId: { collection: { id: collection.id } },
        //         status: { listingStatus: ListingStatusType.Active },
        //     },
        //     relations: {
        //         seller: true,
        //         makeAssetId: true,
        //         takeAssetId: true,
        //     },
        //     order: {
        //         highestPrice: "DESC",
        //     },
        // })
        // console.log(floorListing)

        // if (floorListing && floorListing.id !== listing.id) {
        //     collection.floorListing = floorListing
        //     await ctx.store.save(collection)
        // } else {
        //     collection.floorListing = null
        //     await ctx.store.save(collection)
        // }
    }
}
