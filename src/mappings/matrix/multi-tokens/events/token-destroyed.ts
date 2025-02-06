import { EventItem } from 'matrixchain-indexer/common/types/contexts'
import { UnsupportedEventError } from 'matrixchain-indexer/common/errors'

export function tokenDestroyed(event: EventItem) {
    if (events.multiTokens.tokenDestroyed.matrixEnjinV603.is(event)) {
        const { collectionId, tokenId, caller } = events.multiTokens.tokenDestroyed.matrixEnjinV603.decode(event)
        return { collectionId, tokenId, caller }
    }

    throw new UnsupportedEventError(events.multiTokens.tokenDestroyed.name)
}
