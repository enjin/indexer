import { Event as EventModel, Listing, MarketplaceListingBookState } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { migratedBookState } from '~/pallet/marketplace/utils/listing-state'

export async function migrationCompleted(ctx: CommonContext, block: Block, item: EventItem): Promise<EventModel> {
    const data = mappings.marketplace.events.migrationCompleted(item)
    const batchSize = 1000
    let hasMore = true

    while (hasMore) {
        const listings = await ctx.store.find<Listing>(Listing, {
            where: {
                bookState: MarketplaceListingBookState.Unknown,
                isActive: true,
            },
            order: { id: 'ASC' },
            take: batchSize,
        })

        for (const listing of listings) {
            listing.bookState = migratedBookState(listing, block.height)
            listing.updatedAt = new Date(block.timestamp ?? 0)
        }
        if (listings.length > 0) await ctx.store.save(listings)
        hasMore = listings.length === batchSize
    }

    return mappings.marketplace.events.migrationCompletedEventModel(item, data)
}
