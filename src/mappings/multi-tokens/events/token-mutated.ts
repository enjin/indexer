import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

export function tokenMutated(event: EventItem) {
    if (multiTokens.tokenMutated.matrixEnjinV1012.is(event)) {
        const { collectionId, tokenId, mutation } = multiTokens.tokenMutated.matrixEnjinV1012.decode(event)

        return {
            collectionId,
            tokenId,
            behavior: mutation.behavior,
            name: mutation.name,
            anyoneCanInfuse: mutation.anyoneCanInfuse,
            listingForbidden: mutation.listingForbidden,
        }
    }

    if (multiTokens.tokenMutated.v1010.is(event)) {
        const { collectionId, tokenId, mutation } = multiTokens.tokenMutated.v1010.decode(event)

        return {
            collectionId,
            tokenId,
            behavior: mutation.behavior,
            name: mutation.name,
            anyoneCanInfuse: mutation.anyoneCanInfuse,
            listingForbidden: mutation.listingForbidden,
        }
    }

    if (multiTokens.tokenMutated.matrixEnjinV603.is(event)) {
        const { collectionId, tokenId, mutation } = multiTokens.tokenMutated.matrixEnjinV603.decode(event)

        return {
            collectionId,
            tokenId,
            metadata: mutation.metadata,
            behavior: mutation.behavior,
            listingForbidden: mutation.listingForbidden,
        }
    }

    throw new UnsupportedEventError(multiTokens.tokenMutated)
}
