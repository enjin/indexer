import { CommonContext, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { UnsupportedEventError } from 'matrixchain-indexer/common/errors'

export function claimTokensCompleted(ctx: CommonContext, event: EventItem) {
    if (events.multiTokens.claimTokensCompleted.matrixEnjinV1000.is(event)) {
        return events.multiTokens.claimTokensCompleted.matrixEnjinV1000.decode(event)
    }
    throw new UnsupportedEventError(events.multiTokens.claimTokensCompleted.name)
}
