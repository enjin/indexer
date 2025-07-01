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
    MarketplaceBidPlaced,
    Token,
} from '~/model'
import { BidPlaced } from '~/pallet/marketplace/events/types'

export function bidPlaced(event: EventItem): BidPlaced {
    return match(event)
        .returnType<BidPlaced>()
        .when(
            () => marketplace.bidPlaced.matrixEnjinV603.is(event),
            () => marketplace.bidPlaced.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function bidPlacedEventModel(
    item: EventItem,
    data: BidPlaced,
    listing: Listing,
    bidder: Account,
    collection: Collection,
    token: Token
): [EventModel, AccountTokenEvent] | undefined {
    const event = new EventModel({
        id: item.id,
        name: MarketplaceBidPlaced.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: collection.id,
        tokenId: token.id,
        data: new MarketplaceBidPlaced({
            listing: listing.id,
            bid: `${listing.id}-${bidder.id}-${data.bid.price}`,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            from: bidder,
            event,
            token,
            collection,
        }),
    ]
}
