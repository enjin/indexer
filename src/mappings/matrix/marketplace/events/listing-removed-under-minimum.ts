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
    MarketplaceListingRemovedUnderMinimum,
    Token,
} from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { getBestListing } from 'matrixchain-indexer/common/util/entities'
import { Sns } from '../../common/sns'
import { syncCollectionStats } from '../../jobs/collection-stats'

function getEventData(event: EventItem) {
    if (events.marketplace.listingRemovedUnderMinimum.matrixEnjinV1014.is(event)) {
        return events.marketplace.listingRemovedUnderMinimum.matrixEnjinV1014.decode(event)
    }

    throw new UnsupportedEventError(events.marketplace.listingRemovedUnderMinimum.name)
}
