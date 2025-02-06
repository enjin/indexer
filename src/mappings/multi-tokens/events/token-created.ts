import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type TokenCreatedEvent = {
    collectionId: bigint
    tokenId: bigint
    issuer: string
    initialSupply: bigint
}

export function tokenCreated(event: EventItem): TokenCreatedEvent {
    return match(event)
        .when(multiTokens.tokenCreated.matrixEnjinV603.is, (e) => {
            const { collectionId, tokenId, issuer, initialSupply } = multiTokens.tokenCreated.matrixEnjinV603.decode(e)
            return match(issuer)
                .with({ __kind: 'Signed' }, () => ({
                    collectionId,
                    tokenId,
                    issuer: issuer.value,
                    initialSupply,
                }))
                .otherwise(() => ({
                    collectionId,
                    tokenId,
                    issuer: '0x0000000000000000000000000000000000000000000000000000000000000000',
                    initialSupply,
                }))
        })
        .otherwise(() => {
            throw new UnsupportedEventError(multiTokens.tokenCreated)
        })
}
