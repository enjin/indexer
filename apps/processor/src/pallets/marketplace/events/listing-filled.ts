import { marketplace } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import {
    Account,
    AccountTokenEvent,
    AccountTokenEventMeta,
    Collection,
    Event as EventModel,
    Extrinsic,
    Listing,
    ListingType,
    MarketplaceListingFilled,
    MarketplaceOfferSettled,
    Token,
} from '../../../model'
import { ListingFilled } from './types'
import { generateAccountTokenEventToken, generateAccountTokenEventCollection } from '../../../utils/event'

export function listingFilled(event: EventItem): ListingFilled {
    return match(event)
        .returnType<ListingFilled>()
        .when(
            () => marketplace.listingFilled.matrixEnjinV1012.is(event),
            () => marketplace.listingFilled.matrixEnjinV1012.decode(event)
        )
        .when(
            () => marketplace.listingFilled.matrixEnjinV603.is(event),
            () => marketplace.listingFilled.matrixEnjinV603.decode(event)
        )
        .when(
            () => marketplace.listingFilled.matrixV1011.is(event),
            () => marketplace.listingFilled.matrixV1011.decode(event)
        )
        .when(
            () => marketplace.listingFilled.matrixV500.is(event),
            () => marketplace.listingFilled.matrixV500.decode(event)
        )
        .when(
            () => marketplace.listingFilled.enjinV1032.is(event),
            () => marketplace.listingFilled.enjinV1032.decode(event)
        )
        .when(
            () => marketplace.listingFilled.enjinV110.is(event),
            () => marketplace.listingFilled.enjinV110.decode(event)
        )
        .when(
            () => marketplace.listingFilled.v1031.is(event),
            () => marketplace.listingFilled.v1031.decode(event)
        )
        .when(
            () => marketplace.listingFilled.v110.is(event),
            () => marketplace.listingFilled.v110.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function listingFilledEventModel(
    item: EventItem,
    data: ListingFilled,
    listing: Listing,
    account: Account,
    collection: Collection,
    token: Token
): [EventModel, AccountTokenEvent] | undefined {
    let event: EventModel

    event = new EventModel({
        id: item.id,
        name: MarketplaceListingFilled.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: collection.id,
        tokenId: token.id,
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
            collectionId: collection.id,
            tokenId: token.id,
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
            from: account,
            to: new Account({ id: data.buyer }),
            event,
            collectionId: collection.id,
            tokenId: token.id,
            meta: new AccountTokenEventMeta({
                collection: generateAccountTokenEventCollection(collection),
                token: generateAccountTokenEventToken(token),
            }),
        }),
    ]
}
