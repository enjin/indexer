import { AccountTokenEvent, Event as EventModel, Listing, ListingType, MarketplaceListingBookState } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { SnsEvent } from '~/util/sns'

type UnindexedListing = { blockHash: string; event: EventModel }

const unindexedBeforeCreation = new Map<string, UnindexedListing>()

function dropOtherBlocks(blockHash: string) {
    for (const [id, entry] of unindexedBeforeCreation) {
        if (entry.blockHash !== blockHash) unindexedBeforeCreation.delete(id)
    }
}

function rememberUnindexedListing(listingId: string, blockHash: string, event: EventModel) {
    dropOtherBlocks(blockHash)
    unindexedBeforeCreation.set(listingId, { blockHash, event })
}

/**
 * Returns the ListingNotIndexed event seen earlier in the same block for a listing that did not exist yet, and
 * forgets it. Entries from other blocks (including reorganized ones) are discarded.
 */
export function takeUnindexedListing(listingId: string, blockHash: string): EventModel | undefined {
    dropOtherBlocks(blockHash)
    const entry = unindexedBeforeCreation.get(listingId)
    unindexedBeforeCreation.delete(listingId)
    return entry?.event
}

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
        // `force_create_listing` emits ListingNotIndexed before the ListingCreated of the same listing.
        const result = mappings.marketplace.events.listingNotIndexedEventModel(item, data)
        rememberUnindexedListing(listingId, block.hash, result[0])
        return [...result, undefined]
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
