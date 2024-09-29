import { UnknownVersionError } from '../../../common/errors'
import { events } from '../../../types/generated'
import {
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    Listing,
    ListingStatus,
    ListingStatusType,
    ListingType,
    MarketplaceListingCancelled,
} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getBestListing } from '../../util/entities'
import { Sns } from '../../../common/sns'
import { syncCollectionStats } from '../../../jobs/collection-stats'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.marketplace.listingCancelled.matrixEnjinV603.is(event)) {
        return events.marketplace.listingCancelled.matrixEnjinV603.decode(event)
    }

    throw new UnknownVersionError(events.marketplace.listingCancelled.name)
}

function getEvent(item: EventItem, listing: Listing): [EventModel, AccountTokenEvent] | undefined {
    const event = new EventModel({
        id: item.id,
        name: MarketplaceListingCancelled.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: listing.type === ListingType.Offer ? listing.takeAssetId.collection.id : listing.makeAssetId.collection.id,
        tokenId: listing.type === ListingType.Offer ? listing.takeAssetId.id : listing.makeAssetId.id,
        data: new MarketplaceListingCancelled({
            listing: listing.id,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            token: listing.type === ListingType.Offer ? listing.takeAssetId : listing.makeAssetId,
            from: listing.seller,
            event,
        }),
    ]
}

export async function listingCancelled(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    const data = getEventData(ctx, item)
    if (!data) return undefined

    const listingId = data.listingId.substring(2)
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

    listing.isActive = false
    listing.updatedAt = new Date(block.timestamp ?? 0)

    const listingStatus = new ListingStatus({
        id: `${listingId}-${block.height}`,
        type: ListingStatusType.Cancelled,
        listing,
        height: block.height,
        createdAt: new Date(block.timestamp ?? 0),
    })

    await Promise.all([ctx.store.insert(listingStatus), ctx.store.save(listing)])

    if (listing.makeAssetId.bestListing?.id === listing.id && listing.type !== ListingType.Offer) {
        const bestListing = await getBestListing(ctx, listing.makeAssetId.id)
        listing.makeAssetId.bestListing = null
        if (bestListing) {
            listing.makeAssetId.bestListing = bestListing
        }
        await ctx.store.save(listing.makeAssetId)
    }

    syncCollectionStats(listing.makeAssetId.collection.id)

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                listing: {
                    id: listing.id,
                    price: listing.price.toString(),
                    amount: listing.amount.toString(),
                    highestPrice: listing.highestPrice.toString(),
                    seller: {
                        id: listing.seller.id,
                    },
                    type: listing.type.toString(),
                    data: listing.data.toJSON(),
                    state: listing.state.toJSON(),
                },
                token: listing.type === ListingType.Offer ? listing.takeAssetId.id : listing.makeAssetId.id,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return getEvent(item, listing)
}
