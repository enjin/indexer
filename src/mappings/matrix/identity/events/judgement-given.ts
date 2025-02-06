import { CallNotDefinedError, UnsupportedEventError } from '../../common/errors'
import { events, calls } from '../../types/generated'
import { Event as EventModel, Judgement, JudgementType, Registration } from '../../model'
import { CommonContext, BlockHeader, EventItem, CallItem } from 'matrixchain-indexer/common/types/contexts'
import { getOrCreateAccount } from 'matrixchain-indexer/common/util/entities'

function getEventData(event: EventItem) {
    if (events.identity.judgementGiven.matrixEnjinV1000.is(event)) {
        return events.identity.judgementGiven.matrixEnjinV1000.decode(event)
    }

    throw new UnsupportedEventError(events.identity.judgementGiven.name)
}
