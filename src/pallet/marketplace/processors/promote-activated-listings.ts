import { LessThanOrEqual } from 'typeorm'
import { Listing, MarketplaceListingBookState } from '~/model'
import { Block, CommonContext } from '~/contexts'
import { storage } from '~/type'

/**
 * Storage v9 keeps a not-yet-active listing in its `PriceLevelQueues` entry next to its start block and emits nothing
 * when that block passes, so a listing indexed as PendingActivation is promoted here once the processed height
 * reaches its start block. Listings removed in the meantime already left PendingActivation through their own events.
 * Older runtimes (Matrixchain 1040 `PendingActivations`) only put a listing on the book when a matching call promotes
 * it, which `refreshPromotedListings` resolves from storage, so height alone must not promote there.
 */
export async function promoteActivatedListings(ctx: CommonContext, block: Block): Promise<number> {
    if (!storage.marketplace.priceLevelQueues.matrixV1041.is(block)) return 0

    const batchSize = 1000
    let promoted = 0

    for (;;) {
        const listings = await ctx.store.find<Listing>(Listing, {
            where: {
                bookState: MarketplaceListingBookState.PendingActivation,
                startBlock: LessThanOrEqual(block.height),
            },
            order: { id: 'ASC' },
            take: batchSize,
        })
        if (listings.length === 0) break

        for (const listing of listings) {
            listing.bookState = MarketplaceListingBookState.Indexed
            listing.updatedAt = new Date(block.timestamp ?? 0)
        }
        await ctx.store.save(listings)
        promoted += listings.length
        if (listings.length < batchSize) break
    }

    return promoted
}
