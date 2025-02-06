import { CommonContext, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { UnsupportedEventError } from 'matrixchain-indexer/common/errors'

export function attributeSet(ctx: CommonContext, event: EventItem) {
    if (events.multiTokens.attributeSet.matrixEnjinV603.is(event)) {
        return events.multiTokens.attributeSet.matrixEnjinV603.decode(event)
    }
    throw new UnsupportedEventError(events.multiTokens.attributeSet.name)
}
