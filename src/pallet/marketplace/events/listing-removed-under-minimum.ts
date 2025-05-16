import { marketplace } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import {
    AccountTokenEvent,
    AccountTokenEventMeta,
    AccountTokenEventMetaCollection,
    AccountTokenEventMetaToken,
    Collection,
    Event as EventModel,
    Extrinsic,
    Listing,
    MarketplaceListingRemovedUnderMinimum,
    Token,
} from '../../../model'
import { ListingRemovedUnderMinimum } from './types'

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
    collection?: Collection,
    token?: Token
): [EventModel, AccountTokenEvent] | undefined {
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
            from: listing.seller,
            event,
            collectionId: listing.makeAssetId.collection.id,
            tokenId: listing.makeAssetId.id,
            meta: new AccountTokenEventMeta({
                collection: !collection
                    ? undefined
                    : new AccountTokenEventMetaCollection({
                          metadata: collection.metadata,
                          createdAt: collection.createdAt,
                      }),
                token: !token
                    ? undefined
                    : new AccountTokenEventMetaToken({
                          nonFungible: token.nonFungible,
                          metadata: token.metadata,
                          createdAt: token.createdAt,
                      }),
            }),
        }),
    ]
}
