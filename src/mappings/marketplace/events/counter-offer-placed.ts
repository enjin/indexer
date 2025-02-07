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
    MarketplaceCounterOfferPlaced,
    Token,
} from '@enjin/indexer/model'

type CounterOfferPlacedEvent = {
    listingId: string
    counterOffer:
        | {
              sellerPrice: bigint
              buyerPrice?: bigint
              deposit: {
                  amount: bigint
                  depositor: string
              }
          }
        | {
              accountId: string
              price: bigint
          }
}

export function counterOfferPlaced(event: EventItem): CounterOfferPlacedEvent {
    return match(event)
        .returnType<CounterOfferPlacedEvent>()
        .when(marketplace.counterOfferPlaced.matrixEnjinV1012.is, marketplace.counterOfferPlaced.matrixEnjinV1012.decode)
        .when(marketplace.counterOfferPlaced.matrixV1011.is, marketplace.counterOfferPlaced.matrixV1011.decode)
        .when(marketplace.counterOfferPlaced.matrixV1010.is, marketplace.counterOfferPlaced.matrixV1010.decode)
        .when(marketplace.counterOfferPlaced.v1031.is, marketplace.counterOfferPlaced.v1031.decode)
        .when(marketplace.counterOfferPlaced.v1030.is, marketplace.counterOfferPlaced.v1030.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function counterOfferPlacedEventModel(
    item: EventItem,
    data: CounterOfferPlacedEvent,
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
            accountId: 'deposit' in data.counterOffer ? data.counterOffer.deposit.depositor : data.counterOffer.accountId,
            buyerPrice: 'price' in data.counterOffer ? data.counterOffer.price : data.counterOffer.buyerPrice,
            depositAmount: 'deposit' in data.counterOffer ? data.counterOffer.deposit.amount : 1n,
            sellerPrice: 'sellerPrice' in data.counterOffer ? data.counterOffer.sellerPrice : 1n,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            token: new Token({ id: listing.takeAssetId.id }),
            from: account,
            event,
        }),
    ]
}
