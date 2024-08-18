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
    MarketplaceCounterOfferRemoved,
    OfferState,
    Token,
} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { Sns } from '../../../common/sns'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(event: EventItem) {
    if (events.marketplace.counterOfferRemoved.v1011.is(event)) {
        return events.marketplace.counterOfferRemoved.v1011.decode(event)
    }
    throw new UnknownVersionError(events.marketplace.counterOfferRemoved.name)
}

function getEvent(
    item: EventItem,
    data: ReturnType<typeof getEventData>,
    listing: Listing,
    account: Account
): [EventModel, AccountTokenEvent] | undefined {
    const event = new EventModel({
        id: item.id,
        name: MarketplaceCounterOfferRemoved.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: listing.makeAssetId.collection.id,
        tokenId: listing.makeAssetId.id,
        data: new MarketplaceCounterOfferRemoved({
            listing: listing.id,
            creator: data.creator,
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

export async function counterOfferRemoved(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    const data = getEventData(item)
    if (!data) return undefined

    const listingId = data.listingId.substring(2)
    const listing = await ctx.store.findOneByOrFail<Listing>(Listing, { id: listingId })
    const account = await getOrCreateAccount(ctx, data.creator)
    assert(listing.state.isTypeOf === 'OfferState', 'Listing is not an offer')
    listing.updatedAt = new Date(block.timestamp ?? 0)

    listing.state = new OfferState({
        listingType: listing.state.listingType,
        counterOfferCount: listing.state.counterOfferCount - 1,
    })

    const offer = await ctx.store.findOneByOrFail(CounterOffer, { id: `${listing.id}-${account.id}` })

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                account: account.id,
                listing: listing.id,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    await Promise.all([ctx.store.remove(offer), ctx.store.save(listing)])

    return getEvent(item, data, listing, account)
}
