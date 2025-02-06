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
    MarketplaceListingFilled,
    MarketplaceOfferSettled,
    Token,
} from '@enjin/indexer/model'

type ListingFilledEvent = {
    listingId: string
    buyer: string
    amountFilled: bigint
    amountRemaining: bigint
    protocolFee: bigint
    royalty: bigint
}

export function listingFilled(event: EventItem): ListingFilledEvent {
    return match(event)
        .returnType<ListingFilledEvent>()
        .when(marketplace.listingFilled.matrixEnjinV1012.is, marketplace.listingFilled.matrixEnjinV1012.decode)
        .when(marketplace.listingFilled.matrixEnjinV603.is, marketplace.listingFilled.matrixEnjinV603.decode)
        .when(marketplace.listingFilled.matrixV1011.is, marketplace.listingFilled.matrixV1011.decode)
        .when(marketplace.listingFilled.matrixV500.is, marketplace.listingFilled.matrixV500.decode)
        .when(marketplace.listingFilled.enjinV1032.is, marketplace.listingFilled.enjinV1032.decode)
        .when(marketplace.listingFilled.enjinV110.is, marketplace.listingFilled.enjinV110.decode)
        .when(marketplace.listingFilled.v1031.is, marketplace.listingFilled.v1031.decode)
        .when(marketplace.listingFilled.v110.is, marketplace.listingFilled.v110.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function listingFilledEventModel(
    item: EventItem,
    data: any,
    listing: Listing
): [EventModel, AccountTokenEvent] | undefined {
    let event: EventModel

    event = new EventModel({
        id: item.id,
        name: MarketplaceListingFilled.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: listing.makeAssetId.collection.id,
        tokenId: listing.makeAssetId.id,
        data: new MarketplaceListingFilled({
            listing: listing.id,
            buyer: data.buyer,
            amountFilled: data.amountFilled,
            amountRemaining: data.amountRemaining,
            price: 'price' in data ? (data.price as bigint) : listing.highestPrice,
            protocolFee: data.protocolFee,
            royalty: data.royalty,
        }),
    })

    if (listing.data.listingType === ListingType.Offer) {
        event = new EventModel({
            id: item.id,
            name: MarketplaceOfferSettled.name,
            extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
            collectionId: listing.takeAssetId.collection.id,
            tokenId: listing.takeAssetId.id,
            data: new MarketplaceOfferSettled({
                listing: listing.id,
                buyer: data.buyer,
                amount: data.amountFilled,
                price: 'price' in data ? (data.price as bigint) : listing.highestPrice,
            }),
        })
    }

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            token: new Token({ id: event.tokenId! }),
            from: listing.seller,
            to: new Account({ id: data.buyer }),
            event,
        }),
    ]
}
