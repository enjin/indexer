import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

export function reserved(event: EventItem) {
    if (multiTokens.reserved.matrixEnjinV603.is(event)) {
        return multiTokens.reserved.matrixEnjinV603.decode(event)
    }

    if (multiTokens.reserved.v1050.is(event)) {
        return multiTokens.reserved.v1050.decode(event)
    }

    throw new UnsupportedEventError(multiTokens.reserved)
}
