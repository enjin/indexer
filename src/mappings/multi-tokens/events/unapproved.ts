import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

export function unapproved(event: EventItem) {
    if (multiTokens.unapproved.matrixEnjinV603.is(event)) {
        return multiTokens.unapproved.matrixEnjinV603.decode(event)
    }
    throw new UnsupportedEventError(multiTokens.unapproved)
}
