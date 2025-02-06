import { CommonContext, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { UnsupportedEventError } from 'matrixchain-indexer/common/errors'

export function infused(ctx: CommonContext, event: EventItem) {
    if (events.multiTokens.infused.matrixEnjinV1012.is(event)) {
        return events.multiTokens.infused.matrixEnjinV1012.decode(event)
    }

    throw new UnsupportedEventError(events.multiTokens.infused.name)
}
