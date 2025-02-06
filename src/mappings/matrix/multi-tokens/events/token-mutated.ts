import { EventItem } from 'matrixchain-indexer/common/types/contexts'
import { UnsupportedEventError } from 'matrixchain-indexer/common/errors'

export function tokenMutated(event: EventItem) {
    if (events.multiTokens.tokenMutated.matrixEnjinV1012.is(event)) {
        const { collectionId, tokenId, mutation } = events.multiTokens.tokenMutated.matrixEnjinV1012.decode(event)

        return {
            collectionId,
            tokenId,
            behavior: mutation.behavior,
            name: mutation.name,
            anyoneCanInfuse: mutation.anyoneCanInfuse,
            listingForbidden: mutation.listingForbidden,
        }
    }

    if (events.multiTokens.tokenMutated.v1010.is(event)) {
        const { collectionId, tokenId, mutation } = events.multiTokens.tokenMutated.v1010.decode(event)

        return {
            collectionId,
            tokenId,
            behavior: mutation.behavior,
            name: mutation.name,
            anyoneCanInfuse: mutation.anyoneCanInfuse,
            listingForbidden: mutation.listingForbidden,
        }
    }

    if (events.multiTokens.tokenMutated.matrixEnjinV603.is(event)) {
        const { collectionId, tokenId, mutation } = events.multiTokens.tokenMutated.matrixEnjinV603.decode(event)

        return {
            collectionId,
            tokenId,
            metadata: mutation.metadata,
            behavior: mutation.behavior,
            listingForbidden: mutation.listingForbidden,
        }
    }

    throw new UnsupportedEventError(events.multiTokens.tokenMutated.name)
}
