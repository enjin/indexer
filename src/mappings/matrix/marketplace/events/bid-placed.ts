import { UnsupportedEventError } from '../../common/errors'
import { events } from '../../types/generated'
import {
    Account,
    AccountTokenEvent,
    AuctionState,
    Bid,
    Event as EventModel,
    Extrinsic,
    Listing,
    ListingType,
    MarketplaceBidPlaced,
    Token,
} from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { Sns } from '../../common/sns'
import { getBestListing, getOrCreateAccount } from 'matrixchain-indexer/common/util/entities'
import { syncCollectionStats } from '../../jobs/collection-stats'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.marketplace.bidPlaced.matrixEnjinV603.is(event)) {
        return events.marketplace.bidPlaced.matrixEnjinV603.decode(event)
    }
    throw new UnsupportedEventError(events.marketplace.bidPlaced.name)
}
