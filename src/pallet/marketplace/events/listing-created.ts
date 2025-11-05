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
    MarketplaceListingCreated,
    MarketplaceOfferCreated,
    Token,
} from '~/model'
import { ListingCreated } from '~/pallet/marketplace/events/types'

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
            () => marketplace.listingCreated.matrixV1030.is(event),
            () => marketplace.listingCreated.matrixV1030.decode(event)
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
            () => marketplace.listingCreated.v1060.is(event),
            () => marketplace.listingCreated.v1060.decode(event)
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
    eventId: string,
    data: {
        collectionId: bigint
        tokenId: bigint
        listingId: string
        isOffer: boolean
    },
    relation: {
        extrinsic: Extrinsic | undefined
        fromAccount: Account
        collection: Collection
        token: Token
        toAccount: Account | undefined
    }
): [EventModel, AccountTokenEvent] {
    const event = new EventModel({
        id: eventId,
        name: data.isOffer ? MarketplaceOfferCreated.name : MarketplaceListingCreated.name,
        extrinsic: relation.extrinsic,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId.toString()}-${data.tokenId.toString()}`,
        data: data.isOffer
            ? new MarketplaceOfferCreated({
                  listing: data.listingId,
              })
            : new MarketplaceListingCreated({
                  listing: data.listingId,
              }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: eventId,
            from: relation.fromAccount,
            to: relation.toAccount,
            event,
            token: relation.token,
            collection: relation.collection,
        }),
    ]
}
