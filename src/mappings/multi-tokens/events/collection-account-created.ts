import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

export function collectionAccountCreated(event: EventItem) {
    if (multiTokens.collectionAccountCreated.matrixEnjinV603.is(event)) {
        return multiTokens.collectionAccountCreated.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(multiTokens.collectionAccountCreated)
}
