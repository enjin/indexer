import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    Listing,
    ListingSale,
    ListingStatus,
    ListingStatusType,
} from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getBestListing } from '../../../util/entities'
import { Sns } from '../../../util/sns'
import * as mappings from '../../index'
import { QueueUtils } from '../../../queue'

export async function auctionFinalized(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    const event = mappings.marketplace.events.auctionFinalized(item)
    const listingId = event.listingId.substring(2)
    const listing = await ctx.store.findOne<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            seller: true,
            makeAssetId: {
                collection: true,
                bestListing: true,
            },
        },
    })

    if (!listing) return undefined

    if (event.winningBid) {
        const sale = new ListingSale({
            id: `${listingId}-${item.id}`,
            amount: listing.amount,
            price: event.winningBid.price,
            buyer: new Account({ id: event.winningBid.bidder }),
            listing,
            createdAt: new Date(block.timestamp ?? 0),
        })
        listing.makeAssetId.lastSale = sale
        await ctx.store.save(sale)
    }

    listing.isActive = false
    listing.updatedAt = new Date(block.timestamp ?? 0)

    const listingStatus = new ListingStatus({
        id: `${listingId}-${block.height}`,
        type: ListingStatusType.Finalized,
        listing,
        height: block.height,
        createdAt: new Date(block.timestamp ?? 0),
    })

    await Promise.all([ctx.store.insert(listingStatus), ctx.store.save(listing)])

    if (listing.makeAssetId.bestListing?.id === listing.id) {
        const bestListing = await getBestListing(ctx, listing.makeAssetId.id)
        listing.makeAssetId.bestListing = null
        if (bestListing) {
            listing.makeAssetId.bestListing = bestListing
        }
    }
    await ctx.store.save(listing.makeAssetId)

    //QueueUtils.dispatchComputeStats(listing.makeAssetId.collection.id)

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                listing: {
                    seller: {
                        id: listing.seller.id,
                    },
                    id: listing.id,
                    highestPrice: listing.highestPrice.toString(),
                    amount: listing.amount.toString(),
                    price: listing.price.toString(),
                    data: listing.data.toJSON(),
                },
                winningBid: event.winningBid
                    ? {
                          bidder: {
                              id: event.winningBid.bidder,
                          },
                          price: event.winningBid.price.toString(),
                      }
                    : null,
                protocolFee: event.protocolFee,
                royalty: event.royalty,
                token: listing.makeAssetId.id,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return mappings.marketplace.events.auctionFinalizedEventModel(
        item,
        event,
        listing,
        listing.makeAssetId.collection,
        listing.makeAssetId
    )
}
