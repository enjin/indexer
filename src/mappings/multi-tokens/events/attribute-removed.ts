import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

export function attributeRemoved(event: EventItem) {
    if (multiTokens.attributeRemoved.matrixEnjinV603.is(event)) {
        return multiTokens.attributeRemoved.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(multiTokens.attributeRemoved)
}
