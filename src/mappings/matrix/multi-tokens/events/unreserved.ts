import { EventItem } from 'matrixchain-indexer/common/types/contexts'
import { UnsupportedEventError } from 'matrixchain-indexer/common/errors'

export function unreserved(eventItem: EventItem) {
    if (events.multiTokens.unreserved.matrixEnjinV603.is(eventItem)) {
        return events.multiTokens.unreserved.matrixEnjinV603.decode(eventItem)
    }

    throw new UnsupportedEventError(events.multiTokens.unreserved.name)
}
