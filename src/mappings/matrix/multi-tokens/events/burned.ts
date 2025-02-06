import { EventItem } from 'matrixchain-indexer/common/types/contexts'
import { UnsupportedEventError } from 'matrixchain-indexer/common/errors'

export function burned(event: EventItem) {
    if (events.multiTokens.burned.matrixEnjinV603.is(event)) {
        return events.multiTokens.burned.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(events.multiTokens.burned.name)
}
