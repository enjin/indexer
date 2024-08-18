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
    MarketplaceCounterOfferPlaced,
    Token,
} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { Sns } from '../../../common/sns'
import { getBestListing, getOrCreateAccount } from '../../util/entities'
import { syncCollectionStats } from '../../../jobs/collection-stats'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.marketplace.counterOfferPlaced.v1011.is(event)) {
        return events.marketplace.counterOfferPlaced.v1011.decode(event)
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
        data: new MarketplaceCounterOfferPlaced({
            listing: data.listingId.substring(2),
            accountId: data.counterOffer.deposit.depositor,
            buyerPrice: data.counterOffer.buyerPrice,
            depositAmount: data.counterOffer.deposit.amount,
            sellerPrice: data.counterOffer.sellerPrice,
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

export async function counterOfferPlaced(
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

    if (!listing || !listing.makeAssetId) return undefined
    listing.updatedAt = new Date(block.timestamp ?? 0)
    const account = await getOrCreateAccount(ctx, data.counterOffer.deposit.depositor)

    

    await Promise.all([ctx.store.save(bid), ctx.store.save(listing)])

    return getEvent(item, data, listing, account)
}
