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
    ListingType,
    MarketplaceListingCancelled,
    MarketplaceOfferCancelled,
    Token,
} from '~/model'
import { ListingCancelled } from '~/pallet/marketplace/events/types'

type ListingCancelledRelations = {
    listing: Listing
    account: Account
    collection: Collection
    token: Token
}

export function listingCancelled(event: EventItem): ListingCancelled {
    return match(event)
        .returnType<ListingCancelled>()
        .when(
            () => marketplace.listingCancelled.matrixEnjinV603.is(event),
            () => marketplace.listingCancelled.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function listingCancelledEventModel(item: EventItem, listingId: string): [EventModel, undefined]
export function listingCancelledEventModel(
    item: EventItem,
    listingId: string,
    relations: ListingCancelledRelations
): [EventModel, AccountTokenEvent]
export function listingCancelledEventModel(
    item: EventItem,
    listingId: string,
    relations?: ListingCancelledRelations
): [EventModel, AccountTokenEvent | undefined] {
    let event: EventModel = new EventModel({
        id: item.id,
        name: MarketplaceListingCancelled.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: relations?.collection.id,
        tokenId: relations?.token.id,
        data: new MarketplaceListingCancelled({
            listing: listingId,
        }),
    })

    if (relations?.listing.type === ListingType.Offer) {
        event = new EventModel({
            id: item.id,
            name: MarketplaceOfferCancelled.name,
            extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
            collectionId: relations.collection.id,
            tokenId: relations.token.id,
            data: new MarketplaceOfferCancelled({
                listing: listingId,
            }),
        })
    }

    if (!relations) return [event, undefined]

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            from: relations.account,
            event,
            token: relations.token,
            collection: relations.collection,
        }),
    ]
}
