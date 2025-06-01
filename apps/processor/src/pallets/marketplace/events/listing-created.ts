import { marketplace } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import {
    Account,
    AccountTokenEvent,
    AccountTokenEventMeta,
    Collection,
    Event as EventModel,
    Extrinsic,
    Listing,
    MarketplaceListingCreated,
    MarketplaceOfferCreated,
    Token,
} from '../../../model'
import { ListingCreated } from './types'
import { generateAccountTokenEventToken, generateAccountTokenEventCollection } from '../../../utils/event'

export function listingCreated(event: EventItem): ListingCreated {
    return match(event)
        .returnType<ListingCreated>()
        .when(
            () => marketplace.listingCreated.matrixEnjinV1022.is(event),
            () => marketplace.listingCreated.matrixEnjinV1022.decode(event)
        )
        .when(
            () => marketplace.listingCreated.matrixEnjinV1012.is(event),
            () => marketplace.listingCreated.matrixEnjinV1012.decode(event)
        )
        .when(
            () => marketplace.listingCreated.matrixEnjinV603.is(event),
            () => marketplace.listingCreated.matrixEnjinV603.decode(event)
        )
        .when(
            () => marketplace.listingCreated.matrixV1020.is(event),
            () => marketplace.listingCreated.matrixV1020.decode(event)
        )
        .when(
            () => marketplace.listingCreated.matrixV1011.is(event),
            () => marketplace.listingCreated.matrixV1011.decode(event)
        )
        .when(
            () => marketplace.listingCreated.matrixV1010.is(event),
            () => marketplace.listingCreated.matrixV1010.decode(event)
        )
        .when(
            () => marketplace.listingCreated.matrixV500.is(event),
            () => marketplace.listingCreated.matrixV500.decode(event)
        )
        .when(
            () => marketplace.listingCreated.enjinV1050.is(event),
            () => marketplace.listingCreated.enjinV1050.decode(event)
        )
        .when(
            () => marketplace.listingCreated.enjinV1032.is(event),
            () => marketplace.listingCreated.enjinV1032.decode(event)
        )
        .when(
            () => marketplace.listingCreated.enjinV110.is(event),
            () => marketplace.listingCreated.enjinV110.decode(event)
        )
        .when(
            () => marketplace.listingCreated.v1050.is(event),
            () => marketplace.listingCreated.v1050.decode(event)
        )
        .when(
            () => marketplace.listingCreated.v1031.is(event),
            () => marketplace.listingCreated.v1031.decode(event)
        )
        .when(
            () => marketplace.listingCreated.v1030.is(event),
            () => marketplace.listingCreated.v1030.decode(event)
        )
        .when(
            () => marketplace.listingCreated.v110.is(event),
            () => marketplace.listingCreated.v110.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function listingCreatedEventModel(
    item: EventItem,
    data: ListingCreated,
    listing: Listing,
    fromAccount: Account,
    collection: Collection,
    token: Token,
    toAccount?: Account
): [EventModel, AccountTokenEvent] | undefined {
    let event: EventModel

    event = new EventModel({
        id: item.id,
        name: MarketplaceListingCreated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: collection.id,
        tokenId: token.id,
        data: new MarketplaceListingCreated({
            listing: listing.id,
        }),
    })

    if (data.listing.data.__kind === 'Offer') {
        event = new EventModel({
            id: item.id,
            name: MarketplaceOfferCreated.name,
            extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
            collectionId: collection.id,
            tokenId: token.id,
            data: new MarketplaceOfferCreated({
                listing: listing.id,
            }),
        })
    }

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            from: fromAccount,
            to: toAccount,
            event,
            collectionId: collection.id,
            tokenId: token.id,
            meta: new AccountTokenEventMeta({
                collection: generateAccountTokenEventCollection(collection),
                token: generateAccountTokenEventToken(token),
            }),
        }),
    ]
}
