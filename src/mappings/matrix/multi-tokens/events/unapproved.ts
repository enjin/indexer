import { EventItem } from 'matrixchain-indexer/common/types/contexts'
import { UnsupportedEventError } from 'matrixchain-indexer/common/errors'

export function unapproved(event: EventItem) {
    if (events.multiTokens.unapproved.matrixEnjinV603.is(event)) {
        return events.multiTokens.unapproved.matrixEnjinV603.decode(event)
    }
    throw new UnsupportedEventError(events.multiTokens.unapproved.name)
}
