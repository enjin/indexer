import { marketplace } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import {
    Account,
    AccountTokenEvent,
    Collection,
    Event as EventModel,
    Extrinsic,
    Listing,
    MarketplaceAuctionFinalized,
    Token,
} from '~/model'
import { AuctionFinalized } from '~/pallet/marketplace/events/types'

export function auctionFinalized(event: EventItem): AuctionFinalized {
    return match(event)
        .returnType<AuctionFinalized>()
        .when(
            () => marketplace.auctionFinalized.matrixEnjinV603.is(event),
            () => marketplace.auctionFinalized.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function auctionFinalizedEventModel(
    item: EventItem,
    data: AuctionFinalized,
    listing: Listing,
    collection: Collection,
    token: Token
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
            from: listing.seller,
            to: data.winningBid?.bidder ? new Account({ id: data.winningBid.bidder }) : null,
            event,
            token,
            collection,
        }),
    ]
}
