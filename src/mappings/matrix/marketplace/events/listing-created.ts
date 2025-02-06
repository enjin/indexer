import { UnsupportedEventError } from '../../common/errors'
import { events } from '../../types/generated'
import {
    Account,
    AccountTokenEvent,
    AuctionData,
    AuctionState,
    Event as EventModel,
    Extrinsic,
    FeeSide,
    FixedPriceData,
    FixedPriceState,
    Listing,
    ListingStatus,
    ListingStatusType,
    ListingType,
    MarketplaceOfferCreated,
    MarketplaceListingCreated,
    OfferData,
    OfferState,
    Token,
    TokenAccount,
} from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { getOrCreateAccount } from 'matrixchain-indexer/common/util/entities'
import { Sns } from '../../common/sns'
import { syncCollectionStats } from '../../jobs/collection-stats'

function getEventData(ctx: CommonContext, event: EventItem) {
    if (events.marketplace.listingCreated.matrixEnjinV1012.is(event)) {
        return events.marketplace.listingCreated.matrixEnjinV1012.decode(event)
    }
    if (events.marketplace.listingCreated.matrixEnjinV603.is(event)) {
        return events.marketplace.listingCreated.matrixEnjinV603.decode(event)
    }

    if (events.marketplace.listingCreated.v1011.is(event)) {
        return events.marketplace.listingCreated.v1011.decode(event)
    }
    if (events.marketplace.listingCreated.v1010.is(event)) {
        return events.marketplace.listingCreated.v1010.decode(event)
    }
    if (events.marketplace.listingCreated.v500.is(event)) {
        return events.marketplace.listingCreated.v500.decode(event)
    }

    throw new UnsupportedEventError(events.marketplace.listingCreated.name)
}
