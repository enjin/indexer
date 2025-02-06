import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

export function collectionDestroyed(event: EventItem) {
    if (multiTokens.collectionDestroyed.matrixEnjinV603.is(event)) {
        return multiTokens.collectionDestroyed.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(multiTokens.collectionDestroyed)
}
