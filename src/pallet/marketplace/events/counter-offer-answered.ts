import { marketplace } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import {
    Account,
    AccountTokenEvent,
    Collection,
    CounterOfferResponse,
    CounterOfferResponseAccept,
    CounterOfferResponseCounter,
    CounterOfferResponseReject,
    CounterOfferResponseType,
    Event as EventModel,
    Extrinsic,
    Listing,
    MarketplaceCounterOfferAnswered,
    Token,
} from '~/model'
import { CounterOfferAnswered } from '~/pallet/marketplace/events/types'

export function counterOfferAnswered(event: EventItem): CounterOfferAnswered {
    return match(event)
        .returnType<CounterOfferAnswered>()
        .when(
            () => marketplace.counterOfferAnswered.matrixEnjinV1012.is(event),
            () => marketplace.counterOfferAnswered.matrixEnjinV1012.decode(event)
        )
        .when(
            () => marketplace.counterOfferAnswered.matrixV1011.is(event),
            () => marketplace.counterOfferAnswered.matrixV1011.decode(event)
        )
        .when(
            () => marketplace.counterOfferAnswered.matrixV1010.is(event),
            () => marketplace.counterOfferAnswered.matrixV1010.decode(event)
        )
        .when(
            () => marketplace.counterOfferAnswered.v1031.is(event),
            () => marketplace.counterOfferAnswered.v1031.decode(event)
        )
        .when(
            () => marketplace.counterOfferAnswered.v1030.is(event),
            () => marketplace.counterOfferAnswered.v1030.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function counterOfferAnsweredEventModel(
    item: EventItem,
    data: CounterOfferAnswered,
    listing: Listing,
    creator: Account,
    collection: Collection,
    token: Token
): [EventModel, AccountTokenEvent] {
    let response: CounterOfferResponse

    switch (data.response?.__kind) {
        case 'Accept':
            response = new CounterOfferResponseAccept({ kind: CounterOfferResponseType.Accept })
            break
        case 'Counter':
            response = new CounterOfferResponseCounter({
                kind: CounterOfferResponseType.Counter,
                value: data.response.value,
            })
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
        collectionId: collection.id,
        tokenId: token.id,
        data: new MarketplaceCounterOfferAnswered({
            listing: listing.id,
            creator: creator.id,
            response,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            from: creator,
            event,
            token,
            collection,
        }),
    ]
}
