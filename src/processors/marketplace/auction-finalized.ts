import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    Listing,
    ListingSale,
    ListingStatus,
    ListingStatusType,
} from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { getBestListing } from '../../common/util/entities'
import { Sns } from '../../common/sns'
import * as mappings from './../../mappings'
import { syncCollectionStats } from '../../jobs/collection-stats'

export async function auctionFinalized(
    ctx: CommonContext,
    block: BlockHeader,
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
                bestListing: true,
            },
        },
    })

    if (data.winningBid) {
        const sale = new ListingSale({
            id: `${listingId}-${item.id}`,
            amount: listing.amount,
            price: data.winningBid.price,
            buyer: new Account({ id: data.winningBid.bidder }),
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

    syncCollectionStats(listing.makeAssetId.collection.id)

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

    return mappings.marketplace.events.auctionFinalizedEventModel(item, data, listing)
}
