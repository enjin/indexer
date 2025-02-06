import { EventItem } from 'matrixchain-indexer/common/types/contexts'
import { UnsupportedEventError } from 'matrixchain-indexer/common/errors'

export function collectionTransferred(event: EventItem) {
    if (events.multiTokens.collectionTransferred.matrixEnjinV1004.is(event)) {
        return events.multiTokens.collectionTransferred.matrixEnjinV1004.decode(event)
    }

    throw new UnsupportedEventError(events.multiTokens.collectionTransferred.name)
}
