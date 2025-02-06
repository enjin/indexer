import { EventItem } from 'matrixchain-indexer/common/types/contexts'
import { UnsupportedEventError } from 'matrixchain-indexer/common/errors'

export function minted(event: EventItem) {
    if (events.multiTokens.minted.matrixEnjinV603.is(event)) {
        const { collectionId, tokenId, issuer, recipient, amount } = events.multiTokens.minted.matrixEnjinV603.decode(event)
        if (issuer.__kind === 'Signed') {
            return { collectionId, tokenId, issuer: issuer.value, recipient, amount }
        }
        return {
            collectionId,
            tokenId,
            issuer: '0x0000000000000000000000000000000000000000000000000000000000000000',
            recipient,
            amount,
        }
    }

    throw new UnsupportedEventError(events.multiTokens.minted.name)
}
