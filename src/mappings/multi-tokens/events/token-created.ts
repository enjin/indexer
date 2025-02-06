import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

export function tokenCreated(event: EventItem) {
    w if (multiTokens.tokenCreated.matrixEnjinV603.is(event)) {
        const { collectionId, tokenId, issuer, initialSupply } = multiTokens.tokenCreated.matrixEnjinV603.decode(event)
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

    throw new UnsupportedEventError(multiTokens.tokenCreated)
}
