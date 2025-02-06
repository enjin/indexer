import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

export function collectionCreated(event: EventItem) {
    if (multiTokens.collectionCreated.matrixEnjinV603.is(event)) {
        return multiTokens.collectionCreated.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(multiTokens.collectionCreated)
}
