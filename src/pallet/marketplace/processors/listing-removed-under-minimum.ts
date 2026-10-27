import {
    AccountTokenEvent,
    Event as EventModel,
    Listing,
    ListingStatus,
    ListingStatusType,
    ListingType,
    MarketplaceListingBookState,
} from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getOrCreateAccount } from '~/util/entities'
import { SnsEvent } from '~/util/sns'
import { SnsCause } from '~/util/sns-cause'
import { marketplace } from '~/type/events'
import * as mappings from '~/pallet/index'
import { QueueUtils } from '~/queue'
import { normalizeListingId } from '~/pallet/marketplace/utils/listing-id'

export async function listingRemovedUnderMinimum(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent | undefined, SnsEvent | undefined] | undefined> {
    const event = mappings.marketplace.events.listingRemovedUnderMinimum(item)
    const listingId = normalizeListingId(event.listingId)

    const listing = await ctx.store.findOne<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            seller: true,
            takeAssetId: {
                collection: true,
            },
            makeAssetId: {
                collection: true,
            },
        },
    })
    if (!listing) {
        const [eventModel] = mappings.marketplace.events.listingRemovedUnderMinimumEventModel(item, event.listingId)
        return [eventModel, undefined, undefined]
    }

    const takeAssetId = listing.takeAssetId
    const makeAssetId = listing.makeAssetId
    const seller = await getOrCreateAccount(ctx, listing.seller.id)
    const isOffer = listing.type === ListingType.Offer

    await QueueUtils.dispatchComputeTokenBestListing(!isOffer ? makeAssetId.id : takeAssetId.id)

    const listingStatus = new ListingStatus({
        id: `${listingId}-${block.height}`,
        type: ListingStatusType.Cancelled,
        listing,
        height: block.height,
        createdAt: new Date(block.timestamp ?? 0),
    })

    listing.isActive = false
    listing.bookState = MarketplaceListingBookState.Removed
    listing.updatedAt = new Date(block.timestamp ?? 0)

    await ctx.store.insert(listingStatus)
    await ctx.store.save(listing)

    // The chain removes a listing it cannot settle at its minimum instead of cancelling or filling it, so consumers
    // get the cancellation they already handle, with the reason; the chain-level name is not published.
    const snsEvent: SnsEvent = {
        id: item.id,
        name: marketplace.listingCancelled.name,
        body: {
            cause: SnsCause.underMinimum,
            listing: {
                id: listing.id,
                price: listing.price.toString(),
                amount: listing.amount.toString(),
                highestPrice: listing.highestPrice.toString(),
                seller: {
                    id: seller.id,
                },
                type: listing.type.toString(),
                data: listing.data.toJSON(),
                state: listing.state.toJSON(),
            },
            token: isOffer ? takeAssetId.id : makeAssetId.id,
            decimalCount: isOffer ? takeAssetId.nativeMetadata?.decimalCount : makeAssetId.nativeMetadata?.decimalCount,
            extrinsic: item.extrinsic?.id,
        },
    }

    await QueueUtils.dispatchComputeStats(makeAssetId.collection.id)

    return [
        ...mappings.marketplace.events.listingRemovedUnderMinimumEventModel(item, event.listingId, {
            listing,
            account: seller,
            collection: isOffer ? takeAssetId.collection : makeAssetId.collection,
            token: isOffer ? takeAssetId : makeAssetId,
        }),
        // An auction finalized by the on_idle sweep has no extrinsic; consumers still need the message.
        snsEvent,
    ]
}
