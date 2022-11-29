import { UnknownVersionError } from '../../../common/errors'
import { MarketplaceListingCancelledEvent } from '../../../types/generated/events'
import { Listing, ListingStatus, ListingStatusType } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { EventService, CollectionService } from '../../../services'

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

export async function listingCancelled(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const listingId = Buffer.from(data.listingId).toString('hex')
    const listing = await ctx.store.findOneOrFail<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            seller: true,
            makeAssetId: {
                collection: true,
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
    await ctx.store.insert(ListingStatus, listingStatus as any)

    new EventService(ctx, listing.makeAssetId).MarketplaceListingCancel(listing.seller, listing)

    new CollectionService(ctx.store).sync(listing.makeAssetId.collection.id)
}
