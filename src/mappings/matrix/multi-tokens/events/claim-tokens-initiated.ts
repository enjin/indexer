import { CommonContext, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { UnsupportedEventError } from 'matrixchain-indexer/common/errors'

export function claimTokensInitiated(ctx: CommonContext, event: EventItem) {
    if (events.multiTokens.claimTokensInitiated.matrixEnjinV1000.is(event)) {
        return events.multiTokens.claimTokensInitiated.matrixEnjinV1000.decode(event)
    }

    throw new UnsupportedEventError(events.multiTokens.claimTokensInitiated.name)
}
