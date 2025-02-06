import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

export function collectionMutated(event: EventItem) {
    if (multiTokens.collectionMutated.matrixEnjinV603.is(event)) {
        return multiTokens.collectionMutated.matrixEnjinV603.decode(event)
    }

    if (multiTokens.collectionMutated.v1050.is(event)) {
        return multiTokens.collectionMutated.v1050.decode(event)
    }

    throw new UnsupportedEventError(multiTokens.collectionMutated)
}
