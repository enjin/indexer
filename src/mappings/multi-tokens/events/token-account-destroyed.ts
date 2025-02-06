import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

export function tokenAccountDestroyed(event: EventItem) {
    if (multiTokens.tokenAccountDestroyed.matrixEnjinV603.is(event)) {
        return multiTokens.tokenAccountDestroyed.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(multiTokens.tokenAccountDestroyed)
}
