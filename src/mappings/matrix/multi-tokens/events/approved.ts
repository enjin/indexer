import { CommonContext, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { UnsupportedEventError } from 'matrixchain-indexer/common/errors'

export function approved(ctx: CommonContext, event: EventItem) {
    if (events.multiTokens.approved.matrixEnjinV603.is(event)) {
        return events.multiTokens.approved.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(events.multiTokens.approved.name)
}
