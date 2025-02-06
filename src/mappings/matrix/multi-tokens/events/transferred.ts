import { EventItem } from 'matrixchain-indexer/common/types/contexts'
import { UnsupportedEventError } from 'matrixchain-indexer/common/errors'

export function transferred(event: EventItem) {
    if (events.multiTokens.transferred.matrixEnjinV603.is(event)) {
        return events.multiTokens.transferred.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(events.multiTokens.transferred.name)
}
