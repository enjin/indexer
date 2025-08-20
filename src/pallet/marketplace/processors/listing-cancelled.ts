import {
    AccountTokenEvent,
    Event as EventModel,
    Listing,
    ListingStatus,
    ListingStatusType,
    ListingType,
    OfferState,
} from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getBestListing, getOrCreateAccount } from '~/util/entities'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { QueueUtils } from '~/queue'

export async function listingCancelled(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent, SnsEvent | undefined] | undefined> {
    const event = mappings.marketplace.events.listingCancelled(item)
    const listingId = event.listingId.substring(2)

    const listing = await ctx.store.findOne<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            seller: true,
            makeAssetId: {
                collection: true,
                bestListing: true,
            },
            takeAssetId: {
                collection: true,
            },
        },
    })
    if (!listing) return undefined

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
    listing.updatedAt = new Date(block.timestamp ?? 0)

    if (listing.type === ListingType.Offer) {
        listing.state = new OfferState({
            listingType: ListingType.Offer,
            counterOfferCount: (listing.state as OfferState).counterOfferCount,
            isExpired: true,
        })
    }

    await ctx.store.save(listingStatus)
    await ctx.store.save(listing)

    if (listing.type !== ListingType.Offer) {
        const bestListing = await getBestListing(ctx, makeAssetId.id)
        makeAssetId.bestListing = null
        if (bestListing) {
            makeAssetId.bestListing = bestListing
        }
        await ctx.store.save(makeAssetId)
    }

    const snsEvent: SnsEvent = {
        id: item.id,
        name: item.name,
        body: {
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
            token: listing.type === ListingType.Offer ? takeAssetId.id : makeAssetId.id,
            extrinsic: item.extrinsic?.id,
        },
    }

    QueueUtils.dispatchComputeStats(makeAssetId.collection.id)

    const isOffer = listing.type === ListingType.Offer

    return [
        ...mappings.marketplace.events.listingCancelledEventModel(
            item,
            listing,
            seller,
            isOffer ? takeAssetId.collection : makeAssetId.collection,
            isOffer ? takeAssetId : makeAssetId
        ),
        item.extrinsic ? snsEvent : undefined,
    ]
}
