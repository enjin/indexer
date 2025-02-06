import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type MintedEvent = {
    collectionId: bigint
    tokenId: bigint
    issuer: string
    recipient: string
    amount: bigint
}

function minted(event: EventItem) {
    return match(event)
        .returnType<MintedEvent>()
        .when(multiTokens.minted.matrixEnjinV603.is, (e) => {
            const { collectionId, tokenId, issuer, recipient, amount } = multiTokens.minted.matrixEnjinV603.decode(e)
            return match(issuer)
                .with({ __kind: 'Signed' }, () => ({
                    collectionId,
                    tokenId,
                    issuer: issuer.value,
                    recipient,
                    amount,
                }))
                .otherwise(() => ({
                    collectionId,
                    tokenId,
                    issuer: '0x0000000000000000000000000000000000000000000000000000000000000000',
                    recipient,
                    amount,
                }))
        })
        .otherwise(() => {
            throw new UnsupportedEventError(multiTokens.minted)
        })
}
