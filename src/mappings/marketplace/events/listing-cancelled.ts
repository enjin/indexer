import { marketplace } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import {
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    Listing,
    ListingType,
    MarketplaceListingCancelled,
    MarketplaceOfferCancelled,
    Token,
} from '@enjin/indexer/model'

type ListingCancelledEvent = {
    listingId: string
}

export function listingCancelled(event: EventItem): ListingCancelledEvent {
    return match(event)
        .returnType<ListingCancelledEvent>()
        .when(marketplace.listingCancelled.matrixEnjinV603.is, marketplace.listingCancelled.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function listingCancelledEventModel(item: EventItem, listing: Listing): [EventModel, AccountTokenEvent] | undefined {
    let event: EventModel

    event = new EventModel({
        id: item.id,
        name: MarketplaceListingCancelled.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: listing.makeAssetId.collection.id,
        tokenId: listing.makeAssetId.id,
        data: new MarketplaceListingCancelled({
            listing: listing.id,
        }),
    })

    if (listing.type === ListingType.Offer) {
        event = new EventModel({
            id: item.id,
            name: MarketplaceOfferCancelled.name,
            extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
            collectionId: listing.takeAssetId.collection.id,
            tokenId: listing.takeAssetId.id,
            data: new MarketplaceOfferCancelled({
                listing: listing.id,
            }),
        })
    }

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
