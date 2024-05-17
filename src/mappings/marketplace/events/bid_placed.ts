import { UnknownVersionError } from '../../../common/errors'
import { events } from '../../../types/generated'
import {
    Account,
    AccountTokenEvent,
    AuctionState,
    Bid,
    Event as EventModel,
    Extrinsic,
    Listing,
    ListingType,
    MarketplaceBidPlaced,
    Token,
} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { Sns } from '../../../common/sns'
import { getBestListing, getOrCreateAccount } from '../../util/entities'
import { syncCollectionStats } from '../../../jobs/collection-stats'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.marketplace.bidPlaced.matrixEnjinV603.is(event)) {
        return events.marketplace.bidPlaced.matrixEnjinV603.decode(event)
    }
    throw new UnknownVersionError(events.marketplace.bidPlaced.name)
}

function getEvent(
    item: EventItem,
    data: ReturnType<typeof getEventData>,
    listing: Listing,
    account: Account
): [EventModel, AccountTokenEvent] | undefined {
    const event = new EventModel({
        id: item.id,
        name: MarketplaceBidPlaced.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: listing.makeAssetId.collection.id,
        tokenId: listing.makeAssetId.id,
        data: new MarketplaceBidPlaced({
            listing: listing.id,
            bid: `${listing.id}-${data.bid.bidder}-${data.bid.price}`,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            token: new Token({ id: listing.makeAssetId.id }),
            from: account,
            event,
        }),
    ]
}

export async function bidPlaced(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    const data = getEventData(ctx, item)
    if (!data) return undefined

    const listingId = data.listingId.substring(2)
    const [listing, account, lastBid] = await Promise.all([
        ctx.store.findOne<Listing>(Listing, {
            where: { id: listingId },
            relations: {
                makeAssetId: {
                    collection: true,
                    bestListing: true,
                },
            },
        }),
        getOrCreateAccount(ctx, data.bid.bidder),
        ctx.store.findOne(Bid, {
            where: { listing: { id: listingId } },
            relations: {
                bidder: true,
            },
            order: { createdAt: 'DESC' },
        }),
    ])

    if (!listing || !listing.makeAssetId) return undefined

    const bid = new Bid({
        id: `${listingId}-${data.bid.bidder}-${data.bid.price}`,
        bidder: account,
        price: data.bid.price,
        listing,
        height: block.height,
        extrinsicHash: item.extrinsic?.hash,
        createdAt: new Date(block.timestamp ?? 0),
    })

    listing.highestPrice = data.bid.price
    listing.state = new AuctionState({
        listingType: ListingType.Auction,
        highBid: bid.id,
    })
    listing.updatedAt = new Date(block.timestamp ?? 0)

    await Promise.all([ctx.store.save(bid), ctx.store.save(listing)])

    if (listing.makeAssetId.bestListing?.id === listing.id) {
        const bestListing = await getBestListing(ctx, listing.makeAssetId.id)
        if (bestListing?.id !== listing.id) {
            listing.makeAssetId.bestListing = bestListing
            ctx.store.save(listing.makeAssetId)
        }
    }

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
                lastBid: lastBid
                    ? {
                          id: lastBid.id,
                          price: lastBid.price.toString(),
                          bidder: {
                              id: lastBid.bidder.id,
                          },
                      }
                    : null,
                bid: {
                    id: bid.id,
                    price: bid.price.toString(),
                    bidder: {
                        id: bid.bidder.id,
                    },
                },
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return getEvent(item, data, listing, account)
}
