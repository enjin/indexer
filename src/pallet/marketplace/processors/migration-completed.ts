import { Event as EventModel, Listing, MarketplaceListingBookState } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { migratedBookState } from '~/pallet/marketplace/utils/listing-state'

export async function migrationCompleted(ctx: CommonContext, block: Block, item: EventItem): Promise<EventModel> {
    const data = mappings.marketplace.events.migrationCompleted(item)
    const listings = await ctx.store.find<Listing>(Listing, {
        where: {
            bookState: MarketplaceListingBookState.Unknown,
            isActive: true,
        },
    })

    for (let index = 0; index < listings.length; index += 1000) {
        const chunk = listings.slice(index, index + 1000)
        for (const listing of chunk) {
            listing.bookState = migratedBookState(listing, block.height)
            listing.updatedAt = new Date(block.timestamp ?? 0)
        }
        await ctx.store.save(chunk)
    }

    return mappings.marketplace.events.migrationCompletedEventModel(item, data)
}
