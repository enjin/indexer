import {
    AccountTokenEvent,
    Event as EventModel,
    Listing,
    ListingStatus,
    ListingStatusType,
    ListingType,
    Token,
} from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getBestListing, getOrCreateAccount } from '../../../util/entities'
import { Sns } from '../../../util/sns'
import * as mappings from '../../index'
import { QueueUtils } from '../../../queue'

export async function listingRemovedUnderMinimum(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    const event = mappings.marketplace.events.listingRemovedUnderMinimum(item)
    const listingId = event.listingId.substring(2)

    const listing = await ctx.store.findOne<Listing>(Listing, {
        where: { id: listingId },
    })
    if (!listing) return undefined

    const takeAssetId = await ctx.store.findOne<Token>(Token, {
        where: { id: listing.takeAssetId.id },
        relations: {
            collection: true,
        },
    })
    if (!takeAssetId) return undefined

    const makeAssetId = await ctx.store.findOne<Token>(Token, {
        where: { id: listing.makeAssetId.id },
        relations: {
            collection: true,
            bestListing: true,
        },
    })
    if (!makeAssetId) return undefined

    const isOffer = listing.type === ListingType.Offer
    const seller = await getOrCreateAccount(ctx, listing.seller.id)

    if (makeAssetId.bestListing?.id === listing.id && listing.type !== ListingType.Offer) {
        const bestListing = await getBestListing(ctx, makeAssetId.id)
        makeAssetId.bestListing = null
        if (bestListing) {
            makeAssetId.bestListing = bestListing
        }
        await ctx.store.save(makeAssetId)
    }

    const listingStatus = new ListingStatus({
        id: `${listingId}-${block.height}`,
        type: ListingStatusType.Cancelled,
        listing,
        height: block.height,
        createdAt: new Date(block.timestamp ?? 0),
    })

    listing.isActive = false
    listing.updatedAt = new Date(block.timestamp ?? 0)

    await ctx.store.insert(listingStatus)
    await ctx.store.save(listing)

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
                        id: seller.id,
                    },
                    type: listing.type.toString(),
                    data: listing.data.toJSON(),
                    state: listing.state.toJSON(),
                },
                token: isOffer ? takeAssetId.id : makeAssetId.id,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    QueueUtils.dispatchComputeStats(makeAssetId.collection.id)

    return mappings.marketplace.events.listingRemovedUnderMinimumEventModel(
        item,
        listing,
        seller,
        isOffer ? takeAssetId.collection : makeAssetId.collection,
        isOffer ? takeAssetId : makeAssetId
    )
}
