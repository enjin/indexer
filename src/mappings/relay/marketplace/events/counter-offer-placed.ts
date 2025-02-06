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
    MarketplaceCounterOfferPlaced,
    OfferState,
    Token,
} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { Sns } from '../../../common/sns'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(event: EventItem) {
    if (events.marketplace.counterOfferPlaced.enjinV1032.is(event)) {
        return events.marketplace.counterOfferPlaced.enjinV1032.decode(event)
    }

    if (events.marketplace.counterOfferPlaced.v1031.is(event)) {
        return events.marketplace.counterOfferPlaced.v1031.decode(event)
    }

    throw new UnknownVersionError(events.marketplace.counterOfferPlaced.name)
}

function getEvent(
    item: EventItem,
    data: ReturnType<typeof getEventData>,
    listing: Listing,
    account: Account
): [EventModel, AccountTokenEvent] | undefined {
    const event = new EventModel({
        id: item.id,
        name: MarketplaceCounterOfferPlaced.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: listing.takeAssetId.collection.id,
        tokenId: listing.takeAssetId.id,
        data: new MarketplaceCounterOfferPlaced({
            listing: listing.id,
            accountId: data.counterOffer.deposit.depositor,
            buyerPrice: data.counterOffer.buyerPrice,
            depositAmount: 'deposit' in data.counterOffer ? data.counterOffer.deposit.amount : 1n,
            sellerPrice: 'sellerPrice' in data.counterOffer ? data.counterOffer.sellerPrice : 1n,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            token: new Token({ id: listing.takeAssetId.id }),
            from: account,
            event,
        }),
    ]
}
