import { marketplace } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
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
} from '../../../model'
import { ListingCancelled } from './types'

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

export function listingCancelledEventModel(
    item: EventItem,
    listing: Listing
): [EventModel, AccountTokenEvent] | undefined {
    let event: EventModel = new EventModel({
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
            collectionId: listing.makeAssetId.collection.id,
            tokenId: listing.makeAssetId.id,
            from: listing.seller,
            event,
        }),
    ]
}
