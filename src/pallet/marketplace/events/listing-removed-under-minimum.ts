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
    MarketplaceListingRemovedUnderMinimum,
    Token,
} from '~/model'
import { ListingRemovedUnderMinimum } from '~/pallet/marketplace/events/types'

type ListingRemovedUnderMinimumRelations = {
    listing: Listing
    account: Account
    collection: Collection
    token: Token
}

export function listingRemovedUnderMinimum(event: EventItem): ListingRemovedUnderMinimum {
    return match(event)
        .returnType<ListingRemovedUnderMinimum>()
        .when(
            () => marketplace.listingRemovedUnderMinimum.matrixEnjinV1014.is(event),
            () => marketplace.listingRemovedUnderMinimum.matrixEnjinV1014.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function listingRemovedUnderMinimumEventModel(item: EventItem, listingId: string): [EventModel, undefined]
export function listingRemovedUnderMinimumEventModel(
    item: EventItem,
    listingId: string,
    relations: ListingRemovedUnderMinimumRelations
): [EventModel, AccountTokenEvent]
export function listingRemovedUnderMinimumEventModel(
    item: EventItem,
    listingId: string,
    relations?: ListingRemovedUnderMinimumRelations
): [EventModel, AccountTokenEvent | undefined] {
    const event = new EventModel({
        id: item.id,
        name: MarketplaceListingRemovedUnderMinimum.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: relations?.collection.id,
        tokenId: relations?.token.id,
        data: new MarketplaceListingRemovedUnderMinimum({
            listing: listingId,
        }),
    })

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
