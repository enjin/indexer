import { CommonContext, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { UnsupportedEventError } from 'matrixchain-indexer/common/errors'

export function reserved(ctx: CommonContext, event: EventItem) {
    if (events.multiTokens.reserved.matrixEnjinV603.is(event)) {
        return events.multiTokens.reserved.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(events.multiTokens.reserved.name)
}
