import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { MarketplaceBidPlacedEvent } from '../../../types/generated/events'
import { AuctionState, Bid, Event as EventModel, Extrinsic, Listing, ListingType } from '../../../model'
import { Bid as BidEvent } from '../../../types/generated/v6'
import { Context, getAccount } from '../../../processor'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Event } from '../../../types/generated/support'

interface EventData {
    listingId: Uint8Array
    bid: BidEvent
}

function getEventData(ctx: Context, event: Event): EventData {
    const data = new MarketplaceBidPlacedEvent(ctx, event)

    if (data.isEfinityV3000) {
        const { listingId, bid } = data.asEfinityV3000
        return { listingId, bid }
    }
    throw new UnknownVersionError(data.constructor.name)
}

export async function bidPlaced(
    ctx: Context,
    block: SubstrateBlock,
    item: EventItem<'Marketplace.BidPlaced', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const listingId = Buffer.from(data.listingId).toString('hex')
    const listing = await ctx.store.findOneOrFail<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            makeAssetId: {
                collection: true,
            },
        },
    })

    const account = await getAccount(ctx, data.bid.bidder)
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

    // new EventService(ctx, listing.makeAssetId).MarketplaceBid(account, bid)
    // new CollectionService(ctx.store).sync(listing.makeAssetId.collection.id)

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: null,
    })
}
