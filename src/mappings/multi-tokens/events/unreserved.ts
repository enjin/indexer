import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

export function unreserved(eventItem: EventItem) {
    if (multiTokens.unreserved.matrixEnjinV603.is(eventItem)) {
        return multiTokens.unreserved.matrixEnjinV603.decode(eventItem)
    }

    if (multiTokens.unreserved.v1050.is(eventItem)) {
        return multiTokens.unreserved.v1050.decode(eventItem)
    }

    throw new UnsupportedEventError(multiTokens.unreserved)
}
