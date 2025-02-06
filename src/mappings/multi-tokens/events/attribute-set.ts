import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

export function attributeSet(event: EventItem) {
    if (multiTokens.attributeSet.matrixEnjinV603.is(event)) {
        return multiTokens.attributeSet.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(multiTokens.attributeSet)
}
