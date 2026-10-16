import { EventItem } from '~/contexts'
import {
    Account,
    AccountTokenEvent,
    Collection,
    Event as EventModel,
    Extrinsic,
    Listing,
    MarketplaceAbandonedListingReleased,
    Token,
} from '~/model'
import { AbandonedListingReleased } from '~/pallet/marketplace/events/types'
import { marketplace } from '~/type/events'
import { UnsupportedEventError } from '~/util/errors'

export function abandonedListingReleased(event: EventItem): AbandonedListingReleased {
    if (!marketplace.abandonedListingReleased.matrixEnjinV1041.is(event)) throw new UnsupportedEventError(event)
    return marketplace.abandonedListingReleased.matrixEnjinV1041.decode(event)
}

export function abandonedListingReleasedEventModel(
    item: EventItem,
    data: AbandonedListingReleased,
    relations?: { listing: Listing; account: Account; collection: Collection; token: Token }
): [EventModel, AccountTokenEvent | undefined] {
    const event = new EventModel({
        id: item.id,
        name: MarketplaceAbandonedListingReleased.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: relations?.collection.id,
        tokenId: relations?.token.id,
        data: new MarketplaceAbandonedListingReleased({
            listingId: data.listingId.replace(/^0x/, ''),
            listing: relations?.listing.id,
            returnedBidder: data.returnedBid?.bidder,
            returnedBidPrice: data.returnedBid?.price,
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
