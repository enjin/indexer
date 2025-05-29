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
    const data = mappings.marketplace.events.auctionFinalized(item)
    const listingId = data.listingId.substring(2)

    const listing = await ctx.store.findOne<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            seller: true,
            makeAssetId: {
                collection: true,
            },
        },
    })
    if (!listing) return undefined

    const makeAssetId = listing.makeAssetId
    const status = new ListingStatus({
        id: `${listingId}-${block.height}`,
        type: ListingStatusType.Finalized,
        listing,
        height: block.height,
        createdAt: new Date(block.timestamp ?? 0),
    })
    await ctx.store.save(status)

    if (data.winningBid) {
        const sale = new ListingSale({
            id: `${listingId}-${item.id}`,
            amount: listing.amount,
            price: data.winningBid.price,
            buyer: new Account({ id: data.winningBid.bidder }),
            listing,
            createdAt: new Date(block.timestamp ?? 0),
        })

        await ctx.store.save(sale)
        makeAssetId.lastSale = sale
    }

    if (makeAssetId.bestListing?.id === listing.id) {
        const bestListing = await getBestListing(ctx, makeAssetId.id)
        makeAssetId.bestListing = null
        if (bestListing) {
            makeAssetId.bestListing = bestListing
        }
    }

    listing.isActive = false
    listing.updatedAt = new Date(block.timestamp ?? 0)

    await ctx.store.save(listing)
    await ctx.store.save(makeAssetId)

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
                winningBid: data.winningBid
                    ? {
                          bidder: {
                              id: data.winningBid.bidder,
                          },
                          price: data.winningBid.price.toString(),
                      }
                    : null,
                protocolFee: data.protocolFee,
                royalty: data.royalty,
                token: listing.makeAssetId.id,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    QueueUtils.dispatchComputeStats(makeAssetId.collection.id)

    return mappings.marketplace.events.auctionFinalizedEventModel(
        item,
        data,
        listing,
        makeAssetId.collection,
        makeAssetId
    )
}
