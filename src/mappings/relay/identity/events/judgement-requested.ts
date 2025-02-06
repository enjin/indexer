import { UnknownVersionError } from '../../../common/errors'
import { identity } from '../../../types/generated/events'
import { Event as EventModel, Judgement, JudgementType, Registration } from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(event: EventItem) {
    if (identity.judgementRequested.enjinV110.is(event)) {
        return identity.judgementRequested.enjinV110.decode(event)
    }

    throw new UnknownVersionError(identity.judgementRequested.name)
}
