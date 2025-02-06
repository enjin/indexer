import { EventItem } from 'matrixchain-indexer/common/types/contexts'
import { UnsupportedEventError } from 'matrixchain-indexer/common/errors'

export function tokenAccountCreated(event: EventItem) {
    if (events.multiTokens.tokenAccountCreated.matrixEnjinV603.is(event)) {
        return events.multiTokens.tokenAccountCreated.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(events.multiTokens.tokenAccountCreated.name)
}
