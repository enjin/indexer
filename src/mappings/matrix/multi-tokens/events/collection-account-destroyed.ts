import { EventItem } from 'matrixchain-indexer/common/types/contexts'
import { UnsupportedEventError } from 'matrixchain-indexer/common/errors'

export function collectionAccountDestroyed(event: EventItem) {
    if (events.multiTokens.collectionAccountDestroyed.matrixEnjinV603.is(event)) {
        return events.multiTokens.collectionAccountDestroyed.matrixEnjinV603.decode(event)
    }
    throw new UnsupportedEventError(events.multiTokens.collectionAccountDestroyed.name)
}
