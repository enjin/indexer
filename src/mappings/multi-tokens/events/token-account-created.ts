import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

export function tokenAccountCreated(event: EventItem) {
    if (multiTokens.tokenAccountCreated.matrixEnjinV603.is(event)) {
        return multiTokens.tokenAccountCreated.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(multiTokens.tokenAccountCreated)
}
