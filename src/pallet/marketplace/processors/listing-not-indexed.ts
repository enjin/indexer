import { AccountTokenEvent, Event as EventModel, Listing, ListingType, MarketplaceListingBookState } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { SnsEvent } from '~/util/sns'

export async function listingNotIndexed(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent | undefined, SnsEvent | undefined]> {
    const data = mappings.marketplace.events.listingNotIndexed(item)
    const listingId = data.listingId.replace(/^0x/, '')
    const listing = await ctx.store.findOne<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            seller: true,
            makeAssetId: { collection: true },
            takeAssetId: { collection: true },
        },
    })

    if (!listing) {
        return [...mappings.marketplace.events.listingNotIndexedEventModel(item, data), undefined]
    }

    listing.bookState = MarketplaceListingBookState.NotIndexed
    listing.updatedAt = new Date(block.timestamp ?? 0)
    await ctx.store.save(listing)

    const token = listing.type === ListingType.Offer ? listing.takeAssetId : listing.makeAssetId
    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            listingId,
            bookState: listing.bookState,
            token: token.id,
            extrinsic: item.extrinsic?.id,
        },
    }

    return [
        ...mappings.marketplace.events.listingNotIndexedEventModel(item, data, {
            listing,
            account: listing.seller,
            collection: token.collection,
            token,
        }),
        item.extrinsic ? snsEvent : undefined,
    ]
}
