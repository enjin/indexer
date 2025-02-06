import { CommonContext, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { UnsupportedEventError } from 'matrixchain-indexer/common/errors'

export function attributeRemoved(ctx: CommonContext, event: EventItem) {
    if (events.multiTokens.attributeRemoved.matrixEnjinV603.is(event)) {
        return events.multiTokens.attributeRemoved.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(events.multiTokens.attributeRemoved.name)
}
