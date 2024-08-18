import assert from 'assert'
import { UnknownVersionError } from '../../../common/errors'
import { events } from '../../../types/generated'
import {
    Account,
    AccountTokenEvent,
    CounterOffer,
    Event as EventModel,
    Extrinsic,
    Listing,
    MarketplaceBidPlaced,
    MarketplaceCounterOfferPlaced,
    OfferState,
    Token,
} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { Sns } from '../../../common/sns'
import { getOrCreateAccount } from '../../util/entities'

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
    })

    if (!listing) return undefined
    listing.updatedAt = new Date(block.timestamp ?? 0)
    const account = await getOrCreateAccount(ctx, data.counterOffer.deposit.depositor)
    assert(listing.state.isTypeOf === 'OfferState', 'Listing is not an offer')

    listing.state = new OfferState({
        listingType: listing.state.listingType,
        counterOfferCount: listing.state.counterOfferCount + 1,
    })

    const offer = new CounterOffer({
        id: `${listing.id}-${account.id}`,
        listing,
        buyerPrice: data.counterOffer.buyerPrice,
        amount: data.counterOffer.deposit.amount,
        sellerPrice: data.counterOffer.sellerPrice,
        account,
        createdAt: new Date(block.timestamp ?? 0),
    })

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                buyerPrice: data.counterOffer.buyerPrice?.toString(),
                amount: data.counterOffer.deposit.amount.toString(),
                sellerPrice: data.counterOffer.sellerPrice.toString(),
                account: account.id,
                listing: listing.id,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    await Promise.all([ctx.store.save(offer), ctx.store.save(listing)])

    return getEvent(item, data, listing, account)
}
