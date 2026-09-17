import { EventItem } from '~/contexts'
import {
    Account,
    AccountTokenEvent,
    Collection,
    Event as EventModel,
    Extrinsic,
    Listing,
    MarketplaceListingNotIndexed,
    Token,
} from '~/model'
import { ListingNotIndexed } from '~/pallet/marketplace/events/types'
import { marketplace } from '~/type/events'
import { UnsupportedEventError } from '~/util/errors'

export function listingNotIndexed(event: EventItem): ListingNotIndexed {
    if (!marketplace.listingNotIndexed.matrixV1040.is(event)) throw new UnsupportedEventError(event)
    return marketplace.listingNotIndexed.matrixV1040.decode(event)
}

export function listingNotIndexedEventModel(
    item: EventItem,
    data: ListingNotIndexed,
    relations?: { listing: Listing; account: Account; collection: Collection; token: Token }
): [EventModel, AccountTokenEvent | undefined] {
    const listingId = data.listingId.replace(/^0x/, '')
    const event = new EventModel({
        id: item.id,
        name: MarketplaceListingNotIndexed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: relations?.collection.id,
        tokenId: relations?.token.id,
        data: new MarketplaceListingNotIndexed({
            listingId,
            listing: relations?.listing.id,
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
