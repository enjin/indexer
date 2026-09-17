import { marketplace } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import {
    Account,
    AccountTokenEvent,
    Collection,
    Event as EventModel,
    Extrinsic,
    Listing,
    MarketplaceCounterOfferRemoved,
    Token,
} from '~/model'
import { CounterOfferRemoved } from '~/pallet/marketplace/events/types'

export function counterOfferRemoved(event: EventItem): CounterOfferRemoved {
    return match(event)
        .returnType<CounterOfferRemoved>()
        .when(
            () => marketplace.counterOfferRemoved.matrixEnjinV1012.is(event),
            () => marketplace.counterOfferRemoved.matrixEnjinV1012.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function counterOfferRemovedEventModel(
    item: EventItem,
    data: CounterOfferRemoved,
    account: Account,
    relations?: { listing: Listing; collection: Collection; token: Token }
): [EventModel, AccountTokenEvent | undefined] {
    const event = new EventModel({
        id: item.id,
        name: MarketplaceCounterOfferRemoved.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: relations?.collection.id,
        tokenId: relations?.token.id,
        data: new MarketplaceCounterOfferRemoved({
            listing: relations?.listing.id,
            creator: account.id,
        }),
    })

    if (!relations) return [event, undefined]

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            from: account,
            event,
            token: relations.token,
            collection: relations.collection,
        }),
    ]
}
