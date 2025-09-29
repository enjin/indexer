import {
    Account,
    AccountStats,
    AccountTokenEvent,
    Event as EventModel,
    Listing,
    ListingSale,
    ListingStatus,
    ListingStatusType,
} from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getBestListing, getOrCreateAccount } from '~/util/entities'
import { SnsEvent } from '~/util/sns'
import * as mappings from '~/pallet/index'
import { QueueUtils } from '~/queue'

export async function auctionFinalized(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent, SnsEvent | undefined] | undefined> {
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
        const buyer = await getOrCreateAccount(ctx, data.winningBid.bidder)
        const sale = new ListingSale({
            id: `${listingId}-${item.id}`,
            amount: listing.amount,
            price: data.winningBid.price,
            buyer,
            listing,
            createdAt: new Date(block.timestamp ?? 0),
        })

        await ctx.store.save(sale)
        makeAssetId.lastSale = sale

        if (!buyer.stats) {
            buyer.stats = new AccountStats({
                totalCollections: 0,
                totalTokens: 0,
                volume: 0n,
            })
        }
        buyer.stats.volume += sale.amount * sale.price
        await ctx.store.save(buyer)
    }

    listing.isActive = false
    listing.updatedAt = new Date(block.timestamp ?? 0)

    await ctx.store.save(listing)

    const bestListing = await getBestListing(ctx, makeAssetId.id)
    makeAssetId.bestListing = null
    if (bestListing) {
        makeAssetId.bestListing = bestListing
    }

    await ctx.store.save(makeAssetId)

    const snsEvent: SnsEvent = {
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
            extrinsic: item.extrinsic?.id,
        },
    }

    QueueUtils.dispatchComputeStats(makeAssetId.collection.id)

    return [
        ...mappings.marketplace.events.auctionFinalizedEventModel(
            item,
            data,
            listing,
            makeAssetId.collection,
            makeAssetId
        ),
        item.extrinsic ? snsEvent : undefined,
    ]
}
