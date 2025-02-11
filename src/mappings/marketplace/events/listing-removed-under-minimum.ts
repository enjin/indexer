import { marketplace } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { AccountTokenEvent, Event as EventModel, Extrinsic, Listing, MarketplaceListingRemovedUnderMinimum, Token } from '../../../model'
import { ListingRemovedUnderMinimum } from './types'

export function listingRemovedUnderMinimum(event: EventItem): ListingRemovedUnderMinimum {
    return match(event)
        .returnType<ListingRemovedUnderMinimum>()
        .when(() => marketplace.listingRemovedUnderMinimum.matrixEnjinV1014.is(event), marketplace.listingRemovedUnderMinimum.matrixEnjinV1014.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function listingRemovedUnderMinimumEventModel(item: EventItem, listing: Listing): [EventModel, AccountTokenEvent] | undefined {
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
            token: new Token({ id: listing.makeAssetId.id }),
            from: listing.seller,
            event,
        }),
    ]
}
