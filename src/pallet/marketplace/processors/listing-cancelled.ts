import {
    AccountTokenEvent,
    Event as EventModel,
    Listing,
    ListingStatus,
    ListingStatusType,
    ListingType,
    MarketplaceListingBookState,
    TokenAccount,
} from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getOrCreateAccount } from '~/util/entities'
import { SnsEvent } from '~/util/sns'
import { findSiblingEvent, SnsCause } from '~/util/sns-cause'
import { marketplace } from '~/type/events'
import * as mappings from '~/pallet/index'
import { QueueUtils } from '~/queue'
import Big from 'big.js'
import { rebuildOfferState } from '~/pallet/marketplace/utils/listing-state'
import { normalizeListingId } from '~/pallet/marketplace/utils/listing-id'

export async function listingCancelled(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent | undefined, SnsEvent | undefined] | undefined> {
    const event = mappings.marketplace.events.listingCancelled(item)
    const listingId = normalizeListingId(event.listingId)

    const listing = await ctx.store.findOne<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            seller: true,
            makeAssetId: {
                collection: true,
            },
            takeAssetId: {
                collection: true,
            },
        },
    })
    if (!listing) {
        const [eventModel] = mappings.marketplace.events.listingCancelledEventModel(item, event.listingId)
        return [eventModel, undefined, undefined]
    }

    const makeAssetId = listing.makeAssetId
    const takeAssetId = listing.takeAssetId
    const seller = await getOrCreateAccount(ctx, listing.seller.id)

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

    if (listing.type === ListingType.Offer) {
        listing.state = rebuildOfferState(listing.amount, listing.state, { isExpired: true })
    }

    await ctx.store.save(listingStatus)
    await ctx.store.save(listing)

    await QueueUtils.dispatchComputeTokenBestListing(
        listing.type !== ListingType.Offer ? makeAssetId.id : takeAssetId.id
    )

    // `resolve_abandoned_listing` emits ListingCancelled and then AbandonedListingReleased for the listing; the
    // release (and the bid it returned) travels on this message, the release event is not published on its own.
    const release = findSiblingEvent(
        block,
        item,
        marketplace.abandonedListingReleased.name,
        mappings.marketplace.events.abandonedListingReleased,
        (e) => normalizeListingId(e.listingId) === listingId
    )

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
            listing: {
                id: listing.id,
                price: Big(listing.price.toString())
                    .mul(10 ** (makeAssetId.nativeMetadata?.decimalCount ?? 0))
                    .toNumber(),
                amount: Big(listing.amount.toString())
                    .div(10 ** (makeAssetId.nativeMetadata?.decimalCount ?? 0))
                    .toNumber(),
                highestPrice: Big(listing.highestPrice.toString())
                    .mul(10 ** (makeAssetId.nativeMetadata?.decimalCount ?? 0))
                    .toNumber(),
                seller: {
                    id: seller.id,
                },
                type: listing.type.toString(),
                data: listing.data.toJSON(),
                state: listing.state.toJSON(),
            },
            token: listing.type === ListingType.Offer ? takeAssetId.id : makeAssetId.id,
            decimalCount: makeAssetId.nativeMetadata?.decimalCount,
            extrinsic: item.extrinsic?.id,
            cause: release ? SnsCause.abandoned : SnsCause.cancelled,
            returnedBid: release?.returnedBid,
        },
    }

    const isOffer: boolean = listing.type === ListingType.Offer

    await QueueUtils.dispatchComputeStats(isOffer ? takeAssetId.collection.id : makeAssetId.collection.id)

    const tokenOwners = await ctx.store.find<TokenAccount>(TokenAccount, {
        where: { token: { id: makeAssetId.id } },
        relations: {
            account: true,
        },
    })
    if (tokenOwners.length > 0) {
        for (const tokenOwner of tokenOwners) {
            await QueueUtils.dispatchComputeAccountStats(tokenOwner.account.id)
        }
    }
    await QueueUtils.dispatchComputeAccountStats(seller.id)

    return [
        ...mappings.marketplace.events.listingCancelledEventModel(item, event.listingId, {
            listing,
            account: seller,
            collection: isOffer ? takeAssetId.collection : makeAssetId.collection,
            token: isOffer ? takeAssetId : makeAssetId,
        }),
        // CancelWhenUnlistable cancels from the on_idle sweep since matrix 1041 (no extrinsic); consumers still need the message.
        snsEvent,
    ]
}
