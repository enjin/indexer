import { marketplace } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import {
    Account,
    AccountTokenEvent,
    AccountTokenEventMeta,
    AccountTokenEventMetaCollection,
    AccountTokenEventMetaToken,
    Collection,
    Response,
    Event as EventModel,
    Extrinsic,
    Listing,
    CounterOfferResponse,
    MarketplaceCounterOfferAnswered,
    Token,
    CounterOfferResponseAccept,
    CounterOfferResponseCounter,
    CounterOfferResponseReject,
} from '../../../model'
import { CounterOfferAnswered } from './types'

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
    account: Account,
    collection?: Collection,
    token?: Token
): [EventModel, AccountTokenEvent] | undefined {
    let response: CounterOfferResponse

    switch (data.response?.__kind) {
        case 'Accept':
            response = new CounterOfferResponseAccept({ kind: Response.Accept })
            break
        case 'Counter':
            response = new CounterOfferResponseCounter({
                kind: Response.Counter,
                value: data.response.value,
            })
            break
        case 'Reject':
            response = new CounterOfferResponseReject({ kind: Response.Reject })
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
            from: account,
            event,
            collectionId: listing.takeAssetId.collection.id,
            tokenId: listing.takeAssetId.id,
            meta: new AccountTokenEventMeta({
                collection: !collection
                    ? undefined
                    : new AccountTokenEventMetaCollection({
                          metadata: collection.metadata,
                          createdAt: collection.createdAt,
                      }),
                token: !token
                    ? undefined
                    : new AccountTokenEventMetaToken({
                          nonFungible: token.nonFungible,
                          metadata: token.metadata,
                          createdAt: token.createdAt,
                      }),
            }),
        }),
    ]
}
