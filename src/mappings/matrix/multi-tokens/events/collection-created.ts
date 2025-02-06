import { EventItem } from 'matrixchain-indexer/common/types/contexts'
import { UnsupportedEventError } from 'matrixchain-indexer/common/errors'

export function collectionCreated(event: EventItem) {
    if (events.multiTokens.collectionCreated.matrixEnjinV603.is(event)) {
        return events.multiTokens.collectionCreated.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(events.multiTokens.collectionCreated.name)
}
