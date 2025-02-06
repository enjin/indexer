import { EventItem } from 'matrixchain-indexer/common/types/contexts'
import { UnsupportedEventError } from 'matrixchain-indexer/common/errors'

export function collectionAccountCreated(event: EventItem) {
    if (events.multiTokens.collectionAccountCreated.matrixEnjinV603.is(event)) {
        return events.multiTokens.collectionAccountCreated.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(events.multiTokens.collectionAccountCreated.name)
}
