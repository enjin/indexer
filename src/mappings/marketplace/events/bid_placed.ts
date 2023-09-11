import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MarketplaceBidPlacedEvent } from '../../../types/generated/events'
import {
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
import { CommonContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'
import { CollectionService } from '../../../services'
import { getBestListing, getOrCreateAccount } from '../../util/entities'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new MarketplaceBidPlacedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }
    throw new UnknownVersionError(data.constructor.name)
}

export async function bidPlaced(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Marketplace.BidPlaced', { event: { args: true; extrinsic: true } }>
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const listingId = Buffer.from(data.listingId).toString('hex')
    const listing = await ctx.store.findOneOrFail<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            makeAssetId: {
                collection: true,
                bestListing: true,
            },
        },
    })
    const account = await getOrCreateAccount(ctx, data.bid.bidder)
    const bid = new Bid({
        id: `${listingId}-${u8aToHex(data.bid.bidder)}-${data.bid.price}`,
        bidder: account,
        price: data.bid.price,
        listing,
        height: block.height,
        createdAt: new Date(block.timestamp),
    })

    listing.highestPrice = data.bid.price
    listing.state = new AuctionState({
        listingType: ListingType.Auction,
        highBid: bid.id,
    })

    await ctx.store.save(bid)

    listing.updatedAt = new Date(block.timestamp)
    await ctx.store.save(listing)

    if (listing.makeAssetId.bestListing?.id === listing.id) {
        const bestListing = await getBestListing(ctx, listing.makeAssetId.id)
        if (bestListing?.id !== listing.id) {
            listing.makeAssetId.bestListing = bestListing
            await ctx.store.save(listing.makeAssetId)
        }
    }

    new CollectionService(ctx.store).sync(listing.makeAssetId.collection.id)

    const event = new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: listing.makeAssetId.collection.id,
        tokenId: listing.makeAssetId.id,
        data: new MarketplaceBidPlaced({
            listing: listing.id,
            bid: bid.id,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.event.id,
            token: new Token({ id: listing.makeAssetId.id }),
            from: bid.bidder,
            event,
        }),
    ]
}
