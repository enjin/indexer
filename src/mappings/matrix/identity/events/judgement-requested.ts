import { UnsupportedEventError } from '../../common/errors'
import { identity } from '../../types/generated/events'
import { Event as EventModel, Judgement, JudgementType, Registration } from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { getOrCreateAccount } from 'matrixchain-indexer/common/util/entities'

function getEventData(event: EventItem) {
    if (identity.judgementRequested.matrixEnjinV1000.is(event)) {
        return identity.judgementRequested.matrixEnjinV1000.decode(event)
    }

    throw new UnsupportedEventError(identity.judgementRequested.name)
}
