import { CommonContext, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { UnsupportedEventError } from 'matrixchain-indexer/common/errors'

export function claimedCollections(ctx: CommonContext, event: EventItem) {
    if (events.multiTokens.claimedCollections.matrixEnjinV1000.is(event)) {
        return events.multiTokens.claimedCollections.matrixEnjinV1000.decode(event)
    }

    throw new UnsupportedEventError(events.multiTokens.claimedCollections.name)
}
