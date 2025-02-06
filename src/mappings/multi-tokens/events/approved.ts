import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

export function approved(event: EventItem) {
    if (multiTokens.approved.matrixEnjinV603.is(event)) {
        return multiTokens.approved.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(multiTokens.approved)
}
