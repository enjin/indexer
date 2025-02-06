import { UnsupportedEventError } from '../../common/errors'
import { identity } from '../../types/generated/events'
import { Event as EventModel, JudgementType, Registration } from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { getOrCreateAccount } from 'matrixchain-indexer/common/util/entities'

function getEventData(event: EventItem) {
    if (identity.judgementUnrequested.matrixEnjinV1000.is(event)) {
        return identity.judgementUnrequested.matrixEnjinV1000.decode(event)
    }

    throw new UnsupportedEventError(identity.judgementUnrequested.name)
}
