import { UnsupportedEventError } from '../../common/errors'
import { events } from '../../types/generated'
import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    Listing,
    ListingSale,
    ListingStatus,
    ListingStatusType,
    MarketplaceAuctionFinalized,
} from '../../model'
import { CommonContext, EventItem, BlockHeader } from 'matrixchain-indexer/common/types/contexts'
import { getBestListing } from 'matrixchain-indexer/common/util/entities'
import { Sns } from '../../common/sns'
import { syncCollectionStats } from '../../jobs/collection-stats'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.marketplace.auctionFinalized.matrixEnjinV603.is(event)) {
        return events.marketplace.auctionFinalized.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(events.marketplace.auctionFinalized.name)
}
