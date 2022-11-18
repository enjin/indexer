import { UnknownVersionError } from '../../../common/errors'
import { MarketplaceListingCancelledEvent } from '../../../types/generated/events'
import { Listing, ListingStatus, ListingStatusType } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { EventService } from '../../../services'

interface EventData {
    listingId: Uint8Array
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MarketplaceListingCancelledEvent(ctx)

    if (event.isEfinityV3000) {
        const { listingId } = event.asEfinityV3000
        return { listingId }
    }
    throw new UnknownVersionError(event.constructor.name)
}

export async function handleListingCancelled(ctx: EventHandlerContext) {
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
        type: ListingStatusType.Cancelled,
        listing,
        height: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
    })
    await ctx.store.insert(listingStatus)

    new EventService(ctx, listing.makeAssetId).MarketplaceListingCancel(listing.seller, listing)

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

        if (floorListing.length === 0 || (floorListing.length === 1 && floorListing[0].id === listing.id)) {
            listing.makeAssetId.collection.floorListing = null
            await ctx.store.save(listing.makeAssetId.collection)
        }

        if (floorListing.length >= 2 && floorListing[0].id === listing.id) {
            ;[, listing.makeAssetId.collection.floorListing] = floorListing
            await ctx.store.save(listing.makeAssetId.collection)
        }
    }
}
