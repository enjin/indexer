import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type TokenMutatedEvent = {
    collectionId: bigint
    tokenId: bigint
    behavior?: any
    name?: Uint8Array
    anyoneCanInfuse?: boolean
    listingForbidden?: boolean
    metadata?: any
}

export function tokenMutated(event: EventItem) {
    return match(event)
        .returnType<TokenMutatedEvent>()
        .when(multiTokens.tokenMutated.matrixEnjinV1012.is, (e) => {
            const { collectionId, tokenId, mutation } = multiTokens.tokenMutated.matrixEnjinV1012.decode(e)
            return {
                collectionId,
                tokenId,
                behavior: mutation.behavior,
                name: mutation.name,
                anyoneCanInfuse: mutation.anyoneCanInfuse,
                listingForbidden: mutation.listingForbidden,
            }
        })
        .when(multiTokens.tokenMutated.v1010.is, (e) => {
            const { collectionId, tokenId, mutation } = multiTokens.tokenMutated.v1010.decode(e)
            return {
                collectionId,
                tokenId,
                behavior: mutation.behavior,
                name: mutation.name,
                anyoneCanInfuse: mutation.anyoneCanInfuse,
                listingForbidden: mutation.listingForbidden,
            }
        })
        .when(multiTokens.tokenMutated.matrixEnjinV603.is, (e) => {
            const { collectionId, tokenId, mutation } = multiTokens.tokenMutated.matrixEnjinV603.decode(e)
            return {
                collectionId,
                tokenId,
                metadata: mutation.metadata,
                behavior: mutation.behavior,
                listingForbidden: mutation.listingForbidden,
            }
        })
        .otherwise(() => {
            throw new UnsupportedEventError(multiTokens.tokenMutated)
        })
}
