import { UnknownVersionError } from '../../../common/errors'
import { events } from '../../../types/generated'
import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    Listing,
    ListingSale,
    ListingStatus,
    ListingStatusType,
    MarketplaceAuctionFinalized,
} from '../../../model'
import { CommonContext, EventItem, BlockHeader } from '../../types/contexts'
import { getBestListing } from '../../util/entities'
import { Sns } from '../../../common/sns'
import { syncCollectionStats } from '../../../jobs/collection-stats'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.marketplace.auctionFinalized.matrixEnjinV603.is(event)) {
        return events.marketplace.auctionFinalized.matrixEnjinV603.decode(event)
    }

    throw new UnknownVersionError(events.marketplace.auctionFinalized.name)
}

function getEvent(
    item: EventItem,
    data: ReturnType<typeof getEventData>,
    listing: Listing
): [EventModel, AccountTokenEvent] | undefined {
    const event = new EventModel({
        id: item.id,
        name: MarketplaceAuctionFinalized.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: listing.makeAssetId.collection.id,
        tokenId: listing.makeAssetId.id,
        data: new MarketplaceAuctionFinalized({
            listing: listing.id,
            winningBid: data.winningBid ? `${listing.id}-${data.winningBid.bidder}-${data.winningBid.price}` : null,
            protocolFee: data.protocolFee,
            royalty: data.royalty,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            token: listing.makeAssetId,
            from: listing.seller,
            to: data.winningBid?.bidder ? new Account({ id: data.winningBid.bidder }) : null,
            event,
        }),
    ]
}

export async function auctionFinalized(
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
        },
    })

    if (!listing || !listing.makeAssetId) {
        return undefined
    }

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

    return getEvent(item, data, listing)
}
