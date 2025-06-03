import { marketplace } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
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
} from '../../../model'
import { ListingRemovedUnderMinimum } from './types'
import { generateAccountTokenEventAttributes, generateAccountTokenEventMeta } from '../../../util/event'

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

export function listingRemovedUnderMinimumEventModel(
    item: EventItem,
    listing: Listing,
    account: Account,
    collection: Collection,
    token: Token
): [EventModel, AccountTokenEvent] | undefined {
    const event = new EventModel({
        id: item.id,
        name: MarketplaceListingRemovedUnderMinimum.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: collection.id,
        tokenId: token.id,
        data: new MarketplaceListingRemovedUnderMinimum({
            listing: listing.id,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            from: account,
            event,
            collectionId: collection.id,
            tokenId: token.id,
            attributes: generateAccountTokenEventAttributes(token.attributes),
            meta: generateAccountTokenEventMeta(collection, token),
        }),
    ]
}
