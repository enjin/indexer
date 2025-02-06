import assert from 'assert'
import { UnsupportedEventError } from '../../common/errors'
import { events } from '../../types/generated'
import {
    Account,
    AccountTokenEvent,
    CounterOffer,
    Event as EventModel,
    Extrinsic,
    Listing,
    MarketplaceCounterOfferPlaced,
    OfferState,
    Token,
} from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { Sns } from '../../common/sns'
import { getOrCreateAccount } from 'matrixchain-indexer/common/util/entities'

function getEventData(event: EventItem) {
    if (events.marketplace.counterOfferPlaced.matrixEnjinV1012.is(event)) {
        return events.marketplace.counterOfferPlaced.matrixEnjinV1012.decode(event)
    }

    if (events.marketplace.counterOfferPlaced.v1010.is(event)) {
        return events.marketplace.counterOfferPlaced.v1010.decode(event)
    }

    if (events.marketplace.counterOfferPlaced.v1011.is(event)) {
        return events.marketplace.counterOfferPlaced.v1011.decode(event)
    }

    throw new UnsupportedEventError(events.marketplace.counterOfferPlaced.name)
}
