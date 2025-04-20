import { marketplace } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    Listing,
    MarketplaceBidPlaced,
    Token,
} from '../../../model'
import { BidPlaced } from './types'

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
    account: Account
): [EventModel, AccountTokenEvent] | undefined {
    const event = new EventModel({
        id: item.id,
        name: MarketplaceBidPlaced.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: listing.makeAssetId.collection.id,
        tokenId: listing.makeAssetId.id,
        data: new MarketplaceBidPlaced({
            listing: listing.id,
            bid: `${listing.id}-${data.bid.bidder}-${data.bid.price}`,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            token: new Token({ id: listing.makeAssetId.id }),
            from: account,
            event,
        }),
    ]
}
