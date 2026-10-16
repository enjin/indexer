import { EventItem } from '~/contexts'
import {
    Account,
    AccountTokenEvent,
    Collection,
    Event as EventModel,
    Extrinsic,
    Listing,
    MarketplaceListingSettlementAbandoned,
    Token,
} from '~/model'
import { ListingSettlementAbandoned } from '~/pallet/marketplace/events/types'
import { marketplace } from '~/type/events'
import { UnsupportedEventError } from '~/util/errors'

export function listingSettlementAbandoned(event: EventItem): ListingSettlementAbandoned {
    if (!marketplace.listingSettlementAbandoned.matrixEnjinV1041.is(event)) throw new UnsupportedEventError(event)
    return marketplace.listingSettlementAbandoned.matrixEnjinV1041.decode(event)
}

export function listingSettlementAbandonedEventModel(
    item: EventItem,
    data: ListingSettlementAbandoned,
    relations?: { listing: Listing; account: Account; collection: Collection; token: Token }
): [EventModel, AccountTokenEvent | undefined] {
    const event = new EventModel({
        id: item.id,
        name: MarketplaceListingSettlementAbandoned.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: relations?.collection.id,
        tokenId: relations?.token.id,
        data: new MarketplaceListingSettlementAbandoned({
            listingId: data.listingId.replace(/^0x/, ''),
            listing: relations?.listing.id,
            attempts: data.attempts,
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
