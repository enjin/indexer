import { UnsupportedEventError } from '../../common/errors'
import { events } from '../../types/generated'
import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    FixedPriceState,
    Listing,
    ListingSale,
    ListingStatus,
    ListingStatusType,
    ListingType,
    MarketplaceListingFilled,
    MarketplaceOfferSettled,
    Token,
} from '../../model'
import { CommonContext, EventItem, BlockHeader } from '../../common/types/contexts'
import { getBestListing } from 'matrixchain-indexer/common/util/entities'
import { syncCollectionStats } from '../../jobs/collection-stats'
import { Sns } from '../../common/sns'
import * as mappings from './../../mappings'

export async function listingFilled(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    const data = mappings.marketplace.events.listingFilled(item)
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

    if (!listing || !listing.makeAssetId) return undefined

    if (listing.state.listingType === ListingType.FixedPrice) {
        listing.state = new FixedPriceState({
            listingType: ListingType.FixedPrice,
            amountFilled: listing.amount - data.amountRemaining,
        })
    }

    if (data.amountRemaining === 0n) {
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
        amount: data.amountFilled,
        buyer: new Account({ id: data.buyer }),
        price: 'price' in data ? (data.price as bigint) : listing.highestPrice,
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
        syncCollectionStats(listing.takeAssetId.collection.id)
    } else {
        if (listing.makeAssetId.bestListing?.id === listing.id && data.amountRemaining === 0n) {
            const bestListing = await getBestListing(ctx, listing.makeAssetId.id)
            listing.makeAssetId.bestListing = null
            if (bestListing) {
                listing.makeAssetId.bestListing = bestListing
            }
        }
        await ctx.store.save(listing.makeAssetId)
        syncCollectionStats(listing.makeAssetId.collection.id)
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
                buyer: { id: data.buyer },
                amountFilled: data.amountFilled,
                price: 'price' in data ? (data.price as bigint) : listing.highestPrice,
                amountRemaining: data.amountRemaining,
                protocolFee: data.protocolFee,
                royalty: data.royalty,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return mappings.marketplace.events.listingFilledEventModel(item, data, listing)
}
