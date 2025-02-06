import { AccountTokenEvent, Event as EventModel, Listing, ListingStatus, ListingStatusType, ListingType } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { getBestListing } from 'matrixchain-indexer/common/util/entities'
import { Sns } from '../../common/sns'
import * as mappings from './../../mappings'
import { syncCollectionStats } from '../../jobs/collection-stats'

export async function listingRemovedUnderMinimum(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    const data = mappings.marketplace.events.listingRemovedUnderMinimum(item)
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

    return mappings.marketplace.events.listingRemovedUnderMinimumEventModel(item, listing)
}
