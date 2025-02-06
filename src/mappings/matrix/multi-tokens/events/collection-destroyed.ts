import { EventItem } from 'matrixchain-indexer/common/types/contexts'
import { UnsupportedEventError } from 'matrixchain-indexer/common/errors'

export function collectionDestroyed(event: EventItem) {
    if (events.multiTokens.collectionDestroyed.matrixEnjinV603.is(event)) {
        return events.multiTokens.collectionDestroyed.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(events.multiTokens.collectionDestroyed.name)
}
