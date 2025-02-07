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
    MarketplaceAuctionFinalized,
} from '@enjin/indexer/model'

type AuctionFinalizedEvent = {
    listingId: string
    winningBid?: {
        bidder: string
        price: bigint
    }
    protocolFee: bigint
    royalty: bigint
}

export function auctionFinalized(event: EventItem): AuctionFinalizedEvent {
    return match(event)
        .returnType<AuctionFinalizedEvent>()
        .when(marketplace.auctionFinalized.matrixEnjinV603.is, marketplace.auctionFinalized.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function auctionFinalizedEventModel(
    item: EventItem,
    data: any,
    listing: Listing
): [EventModel, AccountTokenEvent] | undefined {
    const event = new EventModel({
        id: item.id,
        name: MarketplaceAuctionFinalized.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: listing.makeAssetId.collection.id,
        tokenId: listing.makeAssetId.id,
        data: new MarketplaceAuctionFinalized({
            listing: listing.id,
            winningBid: data.winningBid ? `${listing.id}-${data.winningBid.bidder}-${data.winningBid.price}` : null,
            protocolFee: data.protocolFee,
            royalty: data.royalty,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            token: listing.makeAssetId,
            from: listing.seller,
            to: data.winningBid?.bidder ? new Account({ id: data.winningBid.bidder }) : null,
            event,
        }),
    ]
}
