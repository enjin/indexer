import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

export function collectionTransferred(event: EventItem) {
    if (multiTokens.collectionTransferred.matrixEnjinV1004.is(event)) {
        return multiTokens.collectionTransferred.matrixEnjinV1004.decode(event)
    }

    throw new UnsupportedEventError(multiTokens.collectionTransferred)
}
