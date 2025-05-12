import { marketplace } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    Listing,
    MarketplaceCounterOfferPlaced,
    Token,
} from '../../../model'
import { CounterOfferPlaced } from './types'

export function counterOfferPlaced(event: EventItem): CounterOfferPlaced {
    return match(event)
        .returnType<CounterOfferPlaced>()
        .when(
            () => marketplace.counterOfferPlaced.matrixEnjinV1012.is(event),
            () => marketplace.counterOfferPlaced.matrixEnjinV1012.decode(event)
        )
        .when(
            () => marketplace.counterOfferPlaced.matrixV1011.is(event),
            () => marketplace.counterOfferPlaced.matrixV1011.decode(event)
        )
        .when(
            () => marketplace.counterOfferPlaced.matrixV1010.is(event),
            () => marketplace.counterOfferPlaced.matrixV1010.decode(event)
        )
        .when(
            () => marketplace.counterOfferPlaced.v1031.is(event),
            () => marketplace.counterOfferPlaced.v1031.decode(event)
        )
        .when(
            () => marketplace.counterOfferPlaced.v1030.is(event),
            () => marketplace.counterOfferPlaced.v1030.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function counterOfferPlacedEventModel(
    item: EventItem,
    data: CounterOfferPlaced,
    listing: Listing,
    account: Account
): [EventModel, AccountTokenEvent] | undefined {
    const event = new EventModel({
        id: item.id,
        name: MarketplaceCounterOfferPlaced.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: listing.takeAssetId.collection.id,
        tokenId: listing.takeAssetId.id,
        data: new MarketplaceCounterOfferPlaced({
            listing: listing.id,
            accountId:
                data.counterOffer.deposit != undefined
                    ? data.counterOffer.deposit.depositor
                    : data.counterOffer.accountId,
            buyerPrice: data.counterOffer.price != undefined ? data.counterOffer.price : data.counterOffer.buyerPrice,
            depositAmount: data.counterOffer.deposit != undefined ? data.counterOffer.deposit.amount : 1n,
            sellerPrice: data.counterOffer.sellerPrice != undefined ? data.counterOffer.sellerPrice : 1n,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            collectionId: listing.takeAssetId.collection.id,
            tokenId: listing.takeAssetId.id,
            from: account,
            event,
        }),
    ]
}
