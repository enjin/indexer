import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

export function transferred(event: EventItem) {
    if (multiTokens.transferred.matrixEnjinV603.is(event)) {
        return multiTokens.transferred.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(multiTokens.transferred)
}
