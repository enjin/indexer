import assert from 'assert'
import { UnknownVersionError } from '../../../common/errors'
import { events } from '../../../types/generated'
import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    Listing,
    MarketplaceCounterOfferAnswered,
    CounterOfferResponse,
    Token,
    CounterOfferResponseAccept,
    CounterOfferResponseType,
    CounterOfferResponseCounter,
    CounterOfferResponseReject,
    ListingType,
    CounterOffer,
} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { Sns } from '../../../common/sns'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(event: EventItem) {
    if (events.marketplace.counterOfferAnswered.enjinV1032.is(event)) {
        return events.marketplace.counterOfferAnswered.enjinV1032.decode(event)
    }

    if (events.marketplace.counterOfferAnswered.v1031.is(event)) {
        return events.marketplace.counterOfferAnswered.v1031.decode(event)
    }

    throw new UnknownVersionError(events.marketplace.counterOfferAnswered.name)
}

function getEvent(
    item: EventItem,
    data: ReturnType<typeof getEventData>,
    listing: Listing,
    account: Account
): [EventModel, AccountTokenEvent] | undefined {
    let response: CounterOfferResponse

    switch (data.response.__kind) {
        case 'Accept':
            response = new CounterOfferResponseAccept({ kind: CounterOfferResponseType.Accept })
            break
        case 'Counter':
            response = new CounterOfferResponseCounter({ kind: CounterOfferResponseType.Counter, value: data.response.value })
            break
        case 'Reject':
            response = new CounterOfferResponseReject({ kind: CounterOfferResponseType.Reject })
            break
        default:
            throw new Error('Unknown offer response type')
    }

    const event = new EventModel({
        id: item.id,
        name: MarketplaceCounterOfferAnswered.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: listing.takeAssetId.collection.id,
        tokenId: listing.takeAssetId.id,
        data: new MarketplaceCounterOfferAnswered({
            listing: listing.id,
            creator: account.id,
            response,
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
