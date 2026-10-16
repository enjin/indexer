import { AccountTokenEvent, Event as EventModel, Listing, ListingType } from '~/model'
import { CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'

// The chain emits `ListingCancelled` for the same listing right before this event, and that processor already
// deactivates the listing; this one only records the release and the bid that went back to the bidder.
export async function abandonedListingReleased(
    ctx: CommonContext,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent | undefined]> {
    const data = mappings.marketplace.events.abandonedListingReleased(item)
    const listing = await ctx.store.findOne<Listing>(Listing, {
        where: { id: data.listingId.replace(/^0x/, '') },
        relations: {
            seller: true,
            makeAssetId: { collection: true },
            takeAssetId: { collection: true },
        },
    })

    if (!listing) return mappings.marketplace.events.abandonedListingReleasedEventModel(item, data)

    const token = listing.type === ListingType.Offer ? listing.takeAssetId : listing.makeAssetId
    return mappings.marketplace.events.abandonedListingReleasedEventModel(item, data, {
        listing,
        account: listing.seller,
        collection: token.collection,
        token,
    })
}
