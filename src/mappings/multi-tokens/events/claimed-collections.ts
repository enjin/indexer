import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

export function claimedCollections(event: EventItem) {
    if (multiTokens.claimedCollections.matrixEnjinV1000.is(event)) {
        return multiTokens.claimedCollections.matrixEnjinV1000.decode(event)
    }

    if (multiTokens.claimedCollections.matrixEnjinV603.is(event)) {
        return multiTokens.claimedCollections.matrixEnjinV603.decode(event)
    }

    if (multiTokens.claimedCollections.matrixV1000.is(event)) {
        return multiTokens.claimedCollections.matrixV1000.decode(event)
    }

    if (multiTokens.claimedCollections.matrixV604.is(event)) {
        return multiTokens.claimedCollections.matrixV604.decode(event)
    }

    if (multiTokens.claimedCollections.enjinV1021.is(event)) {
        return multiTokens.claimedCollections.enjinV1021.decode(event)
    }

    if (multiTokens.claimedCollections.enjinV101.is(event)) {
        return multiTokens.claimedCollections.enjinV101.decode(event)
    }

    if (multiTokens.claimedCollections.v1021.is(event)) {
        return multiTokens.claimedCollections.v1021.decode(event)
    }

    if (multiTokens.claimedCollections.v106.is(event)) {
        return multiTokens.claimedCollections.v106.decode(event)
    }

    throw new UnsupportedEventError(multiTokens.claimedCollections)
}
