import { marketplace } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    Listing,
    ListingType,
    MarketplaceListingCreated,
    MarketplaceOfferCreated,
    Token,
    TokenAccount,
} from '@enjin/indexer/model'

type ListingCreatedEvent = {
    listingId: string
    listing: any
}

export function listingCreated(event: EventItem): ListingCreatedEvent {
    return match(event)
        .returnType<ListingCreatedEvent>()
        .when(marketplace.listingCreated.matrixEnjinV1012.is, marketplace.listingCreated.matrixEnjinV1012.decode)
        .when(marketplace.listingCreated.matrixEnjinV603.is, marketplace.listingCreated.matrixEnjinV603.decode)
        .when(marketplace.listingCreated.matrixV1011.is, marketplace.listingCreated.matrixV1011.decode)
        .when(marketplace.listingCreated.matrixV1010.is, marketplace.listingCreated.matrixV1010.decode)
        .when(marketplace.listingCreated.matrixV500.is, marketplace.listingCreated.matrixV500.decode)
        .when(marketplace.listingCreated.enjinV1032.is, marketplace.listingCreated.enjinV1032.decode)
        .when(marketplace.listingCreated.enjinV110.is, marketplace.listingCreated.enjinV110.decode)
        .when(marketplace.listingCreated.v1050.is, marketplace.listingCreated.v1050.decode)
        .when(marketplace.listingCreated.v1031.is, marketplace.listingCreated.v1031.decode)
        .when(marketplace.listingCreated.v1030.is, marketplace.listingCreated.v1030.decode)
        .when(marketplace.listingCreated.v110.is, marketplace.listingCreated.v110.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export async function listingCreatedEventModel(
    item: EventItem,
    data: any,
    listing: Listing
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    let event: EventModel

    event = new EventModel({
        id: item.id,
        name: MarketplaceListingCreated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.listing.makeAssetId.collectionId.toString(),
        tokenId: `${data.listing.makeAssetId.collectionId}-${data.listing.makeAssetId.tokenId}`,
        data: new MarketplaceListingCreated({
            listing: data.listingId.substring(2),
        }),
    })

    if (data.listing.data.__kind === ListingType.Offer) {
        event = new EventModel({
            id: item.id,
            name: MarketplaceOfferCreated.name,
            extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
            collectionId: data.listing.takeAssetId.collectionId.toString(),
            tokenId: `${data.listing.takeAssetId.collectionId}-${data.listing.takeAssetId.tokenId}`,
            data: new MarketplaceOfferCreated({
                listing: data.listingId.substring(2),
            }),
        })
    }

    const to = null
    if (data.listing.data.__kind === 'Offer' && listing.takeAssetId.nonFungible) {
        const tokenOwner = await ctx.store.findOne(TokenAccount, { where: { token: { id: listing.takeAssetId.id } } })
        if (tokenOwner) {
            to = tokenOwner.account
        }
    }

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            token: new Token({ id: event.tokenId! }),
            from: new Account({ id: 'creator' in data.listing ? data.listing.creator : data.listing.seller }),
            to,
            event,
        }),
    ]
}
