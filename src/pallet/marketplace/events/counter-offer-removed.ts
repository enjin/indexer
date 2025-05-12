import { marketplace } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    Listing,
    MarketplaceCounterOfferRemoved,
    Token,
} from '../../../model'
import { CounterOfferRemoved } from './types'

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
    listing: Listing,
    account: Account
): [EventModel, AccountTokenEvent] | undefined {
    const event = new EventModel({
        id: item.id,
        name: MarketplaceCounterOfferRemoved.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: listing.takeAssetId.collection.id,
        tokenId: listing.takeAssetId.id,
        data: new MarketplaceCounterOfferRemoved({
            listing: listing.id,
            creator: data.creator,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            collectionId: listing.takeAssetId.collection.id,
            tokenId: listing.takeAssetId.id,
            from: account,
            event,
        }),
    ]
}
