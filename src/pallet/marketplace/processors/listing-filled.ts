import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    FixedPriceState,
    Listing,
    ListingSale,
    ListingStatus,
    ListingStatusType,
    ListingType,
} from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getBestListing } from '../../../util/entities'
// import { syncCollectionStats } from '../../jobs/collection-stats'
import { Sns } from '../../../util/sns'
import * as mappings from '../../index'

export async function listingFilled(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    const event = mappings.marketplace.events.listingFilled(item)
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

    if (listing.state.listingType === ListingType.FixedPrice) {
        listing.state = new FixedPriceState({
            listingType: ListingType.FixedPrice,
            amountFilled: listing.amount - event.amountRemaining,
        })
    }

    if (event.amountRemaining === 0n) {
        const listingStatus = new ListingStatus({
            id: `${listingId}-${block.height}`,
            type: ListingStatusType.Finalized,
            listing,
            height: block.height,
            createdAt: new Date(block.timestamp ?? 0),
        })
        await ctx.store.insert(listingStatus)
        listing.isActive = false
    }

    listing.updatedAt = new Date(block.timestamp ?? 0)

    const sale = new ListingSale({
        id: `${listingId}-${item.id}`,
        amount: event.amountFilled,
        buyer: new Account({ id: event.buyer }),
        price: 'price' in event ? (event.price as bigint) : listing.highestPrice,
        listing,
        createdAt: new Date(block.timestamp ?? 0),
    })

    if (listing.state.listingType === ListingType.Offer) {
        listing.takeAssetId.lastSale = sale
    } else {
        listing.makeAssetId.lastSale = sale
    }

    await Promise.all([ctx.store.save(listing), ctx.store.save(sale)])

    if (listing.data.listingType === ListingType.Offer) {
        await ctx.store.save(listing.takeAssetId)
        // syncCollectionStats(listing.takeAssetId.collection.id)
    } else {
        if (listing.makeAssetId.bestListing?.id === listing.id && event.amountRemaining === 0n) {
            const bestListing = await getBestListing(ctx, listing.makeAssetId.id)
            listing.makeAssetId.bestListing = null
            if (bestListing) {
                listing.makeAssetId.bestListing = bestListing
            }
        }
        await ctx.store.save(listing.makeAssetId)
        // syncCollectionStats(listing.makeAssetId.collection.id)
    }

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
                buyer: { id: event.buyer },
                amountFilled: event.amountFilled,
                price: 'price' in event ? (event.price as bigint) : listing.highestPrice,
                amountRemaining: event.amountRemaining,
                protocolFee: event.protocolFee,
                royalty: event.royalty,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return mappings.marketplace.events.listingFilledEventModel(item, event, listing)
}
