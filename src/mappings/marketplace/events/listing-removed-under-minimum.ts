import { marketplace } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import {
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    Listing,
    MarketplaceListingRemovedUnderMinimum,
    Token,
} from '@enjin/indexer/model'

type ListingRemovedUnderMinimumEvent = {
    listingId: string
}

export function listingRemovedUnderMinimum(event: EventItem): ListingRemovedUnderMinimumEvent {
    return match(event)
        .returnType<ListingRemovedUnderMinimumEvent>()
        .when(
            marketplace.listingRemovedUnderMinimum.matrixEnjinV1014.is,
            marketplace.listingRemovedUnderMinimum.matrixEnjinV1014.decode
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

function getEvent(item: EventItem, listing: Listing): [EventModel, AccountTokenEvent] | undefined {
    const event = new EventModel({
        id: item.id,
        name: MarketplaceListingRemovedUnderMinimum.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: listing.makeAssetId.collection.id,
        tokenId: listing.makeAssetId.id,
        data: new MarketplaceListingRemovedUnderMinimum({
            listing: listing.id,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            token: new Token({ id: event.tokenId! }),
            from: listing.seller,
            event,
        }),
    ]
}
