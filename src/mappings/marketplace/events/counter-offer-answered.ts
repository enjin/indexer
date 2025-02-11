import { marketplace } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import {
    Account,
    AccountTokenEvent,
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
} from '../../../model'
import { CounterOfferAnswered } from './types'

export function counterOfferAnswered(event: EventItem): CounterOfferAnswered {
    return match(event)
        .returnType<CounterOfferAnswered>()
        .when(marketplace.counterOfferAnswered.matrixEnjinV1012.is, marketplace.counterOfferAnswered.matrixEnjinV1012.decode)
        .when(marketplace.counterOfferAnswered.matrixV1011.is, marketplace.counterOfferAnswered.matrixV1011.decode)
        .when(marketplace.counterOfferAnswered.matrixV1010.is, marketplace.counterOfferAnswered.matrixV1010.decode)
        .when(marketplace.counterOfferAnswered.v1031.is, marketplace.counterOfferAnswered.v1031.decode)
        .when(marketplace.counterOfferAnswered.v1030.is, marketplace.counterOfferAnswered.v1030.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function counterOfferAnsweredEventModel(
    item: EventItem,
    data: CounterOfferAnswered,
    listing: Listing,
    account: Account
): [EventModel, AccountTokenEvent] | undefined {
    let response: CounterOfferResponse

    switch (data.response?.__kind) {
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
