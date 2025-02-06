import assert from 'assert'
import { UnsupportedEventError } from '../../common/errors'
import { events } from '../../types/generated'
import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    Listing,
    MarketplaceCounterOfferAnswered,
    CounterOfferResponse,
    Token,
    CounterOfferResponseAccept,
    CounterOfferResponseType,
    CounterOfferResponseCounter,
    CounterOfferResponseReject,
    ListingType,
    CounterOffer,
} from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { Sns } from '../../common/sns'
import { getOrCreateAccount } from 'matrixchain-indexer/common/util/entities'

function getEventData(event: EventItem) {
    if (events.marketplace.counterOfferAnswered.matrixEnjinV1012.is(event)) {
        return events.marketplace.counterOfferAnswered.matrixEnjinV1012.decode(event)
    }

    if (events.marketplace.counterOfferAnswered.v1011.is(event)) {
        return events.marketplace.counterOfferAnswered.v1011.decode(event)
    }
    throw new UnsupportedEventError(events.marketplace.counterOfferAnswered.name)
}
