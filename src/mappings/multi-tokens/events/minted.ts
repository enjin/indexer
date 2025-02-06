import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

export function minted(event: EventItem) {
   w  if (multiTokens.minted.matrixEnjinV603.is(event)) {
        const { collectionId, tokenId, issuer, recipient, amount } = multiTokens.minted.matrixEnjinV603.decode(event)
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

    throw new UnsupportedEventError(multiTokens.minted)
}
