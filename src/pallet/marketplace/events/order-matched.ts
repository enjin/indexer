import { EventItem } from '~/contexts'
import {
    Account,
    AccountTokenEvent,
    Collection,
    Event as EventModel,
    Extrinsic,
    Listing,
    MarketplaceOrderMatched,
    MarketplaceOrderSide,
    Token,
} from '~/model'
import { OrderMatched } from '~/pallet/marketplace/events/types'
import { marketplace } from '~/type/events'
import { UnsupportedEventError } from '~/util/errors'

export function orderMatched(event: EventItem): OrderMatched {
    if (!marketplace.orderMatched.matrixV1040.is(event)) throw new UnsupportedEventError(event)
    return marketplace.orderMatched.matrixV1040.decode(event)
}

export function assetId(asset: OrderMatched['assetId']): string {
    return `${asset.collectionId}-${asset.tokenId}`
}

export function orderMatchedEventModel(
    item: EventItem,
    data: OrderMatched,
    taker: Account,
    remainderListing: Listing | undefined,
    asset: Token | undefined,
    collection: Collection | undefined
): [EventModel, AccountTokenEvent] {
    const event = new EventModel({
        id: item.id,
        name: MarketplaceOrderMatched.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.assetId.collectionId.toString(),
        tokenId: assetId(data.assetId),
        data: new MarketplaceOrderMatched({
            taker: taker.id,
            assetId: assetId(data.assetId),
            currencyId: assetId(data.currencyId),
            side: data.side.__kind as MarketplaceOrderSide,
            amountMatched: data.amountMatched,
            ordersExamined: data.ordersExamined,
            remainderListingId: data.remainderListingId?.replace(/^0x/, ''),
            remainderListing: remainderListing?.id,
            unrestedAmount: data.unrestedAmount,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            from: taker,
            event,
            token: asset,
            collection,
        }),
    ]
}
