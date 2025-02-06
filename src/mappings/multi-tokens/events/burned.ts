import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

export function burned(event: EventItem) {
    if (multiTokens.burned.matrixEnjinV603.is(event)) {
        return multiTokens.burned.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(multiTokens.burned)
}
