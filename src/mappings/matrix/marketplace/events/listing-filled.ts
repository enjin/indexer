import { UnsupportedEventError } from '../../common/errors'
import { events } from '../../types/generated'
import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    FixedPriceState,
    Listing,
    ListingSale,
    ListingStatus,
    ListingStatusType,
    ListingType,
    MarketplaceListingFilled,
    MarketplaceOfferSettled,
    Token,
} from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { getBestListing } from 'matrixchain-indexer/common/util/entities'
import { syncCollectionStats } from '../../jobs/collection-stats'
import { Sns } from '../../common/sns'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.marketplace.listingFilled.matrixEnjinV1012.is(event)) {
        return events.marketplace.listingFilled.matrixEnjinV1012.decode(event)
    }

    if (events.marketplace.listingFilled.matrixEnjinV603.is(event)) {
        return events.marketplace.listingFilled.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(events.marketplace.listingFilled.name)
}
