import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

export function infused(event: EventItem) {
    if (multiTokens.infused.matrixEnjinV1012.is(event)) {
        return multiTokens.infused.matrixEnjinV1012.decode(event)
    }

    if (multiTokens.infused.v1050.is(event)) {
        return multiTokens.infused.v1050.decode(event)
    }

    throw new UnsupportedEventError(multiTokens.infused)
}
