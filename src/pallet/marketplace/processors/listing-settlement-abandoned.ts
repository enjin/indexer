import { AccountTokenEvent, Event as EventModel, Listing, ListingType } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'

export async function listingSettlementAbandoned(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent | undefined]> {
    const data = mappings.marketplace.events.listingSettlementAbandoned(item)
    const listing = await ctx.store.findOne<Listing>(Listing, {
        where: { id: data.listingId.replace(/^0x/, '') },
        relations: {
            seller: true,
            makeAssetId: { collection: true },
            takeAssetId: { collection: true },
        },
    })

    if (!listing) return mappings.marketplace.events.listingSettlementAbandonedEventModel(item, data)

    // The on_idle sweep stopped retrying: the listing, its reserves and any winning bid stay on chain until
    // `resolve_abandoned_listing` (or a manual settlement) removes it, so it remains active here as well.
    listing.settlementAbandoned = true
    listing.updatedAt = new Date(block.timestamp ?? 0)
    await ctx.store.save(listing)

    const token = listing.type === ListingType.Offer ? listing.takeAssetId : listing.makeAssetId
    return mappings.marketplace.events.listingSettlementAbandonedEventModel(item, data, {
        listing,
        account: listing.seller,
        collection: token.collection,
        token,
    })
}
