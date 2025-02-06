import { CallNotDefinedError, UnknownVersionError } from '../../../common/errors'
import { events, calls } from '../../../types/generated'
import { Event as EventModel, Judgement, JudgementType, Registration } from '../../../model'
import { CommonContext, BlockHeader, EventItem, CallItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(event: EventItem) {
    if (events.identity.judgementGiven.enjinV110.is(event)) {
        return events.identity.judgementGiven.enjinV110.decode(event)
    }

    throw new UnknownVersionError(events.identity.judgementGiven.name)
}
