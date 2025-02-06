import { UnsupportedEventError } from '../../common/errors'
import { events } from '../../types/generated'
import {
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    Listing,
    ListingStatus,
    ListingStatusType,
    ListingType,
    MarketplaceListingCancelled,
    MarketplaceOfferCancelled,
    Token,
} from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { getBestListing } from 'matrixchain-indexer/common/util/entities'
import { Sns } from '../../common/sns'
import { syncCollectionStats } from '../../jobs/collection-stats'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.marketplace.listingCancelled.matrixEnjinV603.is(event)) {
        return events.marketplace.listingCancelled.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(events.marketplace.listingCancelled.name)
}
