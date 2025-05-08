import { marketplace } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    MarketplaceListingCreated,
    MarketplaceOfferCreated,
    Token,
} from '../../../model'
import { ListingCreated } from './types'

export function listingCreated(event: EventItem): ListingCreated {
    return match(event)
        .returnType<ListingCreated>()
        .when(
            () => marketplace.listingCreated.matrixEnjinV1022.is(event),
            () => marketplace.listingCreated.matrixEnjinV1022.decode(event)
        )
        .when(
            () => marketplace.listingCreated.matrixEnjinV1012.is(event),
            () => marketplace.listingCreated.matrixEnjinV1012.decode(event)
        )
        .when(
            () => marketplace.listingCreated.matrixEnjinV603.is(event),
            () => marketplace.listingCreated.matrixEnjinV603.decode(event)
        )
        .when(
            () => marketplace.listingCreated.matrixV1020.is(event),
            () => marketplace.listingCreated.matrixV1020.decode(event)
        )
        .when(
            () => marketplace.listingCreated.matrixV1011.is(event),
            () => marketplace.listingCreated.matrixV1011.decode(event)
        )
        .when(
            () => marketplace.listingCreated.matrixV1010.is(event),
            () => marketplace.listingCreated.matrixV1010.decode(event)
        )
        .when(
            () => marketplace.listingCreated.matrixV500.is(event),
            () => marketplace.listingCreated.matrixV500.decode(event)
        )
        .when(
            () => marketplace.listingCreated.enjinV1050.is(event),
            () => marketplace.listingCreated.enjinV1050.decode(event)
        )
        .when(
            () => marketplace.listingCreated.enjinV1032.is(event),
            () => marketplace.listingCreated.enjinV1032.decode(event)
        )
        .when(
            () => marketplace.listingCreated.enjinV110.is(event),
            () => marketplace.listingCreated.enjinV110.decode(event)
        )
        .when(
            () => marketplace.listingCreated.v1050.is(event),
            () => marketplace.listingCreated.v1050.decode(event)
        )
        .when(
            () => marketplace.listingCreated.v1031.is(event),
            () => marketplace.listingCreated.v1031.decode(event)
        )
        .when(
            () => marketplace.listingCreated.v1030.is(event),
            () => marketplace.listingCreated.v1030.decode(event)
        )
        .when(
            () => marketplace.listingCreated.v110.is(event),
            () => marketplace.listingCreated.v110.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function listingCreatedEventModel(
    item: EventItem,
    data: ListingCreated
): [EventModel, AccountTokenEvent] | undefined {
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

    if (data.listing.data.__kind === 'Offer') {
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

    // TODO: Fix this
    const to = null
    // if (data.listing.data.__kind === 'Offer' && listing.takeAssetId.nonFungible) {
    //     const tokenOwner = await ctx.store.findOne<TokenAccount>(TokenAccount, {
    //         where: { token: { id: listing.takeAssetId.id } },
    //     })
    //     if (tokenOwner) {
    //         to = tokenOwner.account
    //     }
    // }

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            collectionId: data.listing.makeAssetId.collectionId.toString(),
            tokenId: `${data.listing.makeAssetId.collectionId}-${data.listing.makeAssetId.tokenId}`,
            from: new Account({ id: 'creator' in data.listing ? data.listing.creator : data.listing.seller }),
            to,
            event,
        }),
    ]
}
