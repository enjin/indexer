import { EventItem } from 'matrixchain-indexer/common/types/contexts'
import { UnsupportedEventError } from 'matrixchain-indexer/common/errors'

export function tokenCreated(event: EventItem) {
    if (events.multiTokens.tokenCreated.matrixEnjinV603.is(event)) {
        const { collectionId, tokenId, issuer, initialSupply } = events.multiTokens.tokenCreated.matrixEnjinV603.decode(event)
        if (issuer.__kind === 'Signed') {
            return { collectionId, tokenId, issuer: issuer.value, initialSupply }
        }
        return {
            collectionId,
            tokenId,
            issuer: '0x0000000000000000000000000000000000000000000000000000000000000000',
            initialSupply,
        }
    }

    throw new UnsupportedEventError(events.multiTokens.tokenCreated.name)
}
