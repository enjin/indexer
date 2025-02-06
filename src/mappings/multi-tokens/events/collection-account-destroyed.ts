import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

export function collectionAccountDestroyed(event: EventItem) {
    if (multiTokens.collectionAccountDestroyed.matrixEnjinV603.is(event)) {
        return multiTokens.collectionAccountDestroyed.matrixEnjinV603.decode(event)
    }
    throw new UnsupportedEventError(multiTokens.collectionAccountDestroyed)
}
