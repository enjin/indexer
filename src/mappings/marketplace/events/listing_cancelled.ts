import { UnknownVersionError } from '../../../common/errors'
import {
    MarketplaceListingCancelledEvent,
} from '../../../types/generated/events'
import { CancelledListing, Listing, ListingStatusType } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'

interface EventData {
    listingId: Uint8Array
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MarketplaceListingCancelledEvent(ctx);

    if (event.isV6) {
        const { listingId } = event.asV6
        return { listingId }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleListingCancelled(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const listing = await ctx.store.findOneOrFail<Listing>(Listing, {
        where: { id: Buffer.from(data.listingId).toString("hex") },
        relations: {
            seller: true,
            makeAssetId: true,
            takeAssetId: true,
        }
    })

    listing.status = new CancelledListing({
        listingStatus: ListingStatusType.Cancelled,
        height: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
    })

    await ctx.store.save(listing)
}
