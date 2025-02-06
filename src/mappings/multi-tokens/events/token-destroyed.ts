import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

export function tokenDestroyed(event: EventItem) {
    if (multiTokens.tokenDestroyed.matrixEnjinV603.is(event)) {
        const { collectionId, tokenId, caller } = multiTokens.tokenDestroyed.matrixEnjinV603.decode(event)
        return { collectionId, tokenId, caller }
    }

    throw new UnsupportedEventError(multiTokens.tokenDestroyed)
}
