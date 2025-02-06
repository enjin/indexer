import { CommonContext, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { UnsupportedEventError } from 'matrixchain-indexer/common/errors'

export function collectionMutated(ctx: CommonContext, event: EventItem) {
    if (events.multiTokens.collectionMutated.matrixEnjinV603.is(event)) {
        return events.multiTokens.collectionMutated.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(events.multiTokens.collectionMutated.name)
}
