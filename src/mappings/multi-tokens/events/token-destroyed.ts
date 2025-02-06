import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type TokenDestroyedEvent = {
    collectionId: bigint
    tokenId: bigint
    caller: string
}

export function tokenDestroyed(event: EventItem) {
    return match(event)
        .returnType<TokenDestroyedEvent>()
        .when(multiTokens.tokenDestroyed.matrixEnjinV603.is, () => multiTokens.tokenDestroyed.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(multiTokens.tokenDestroyed)
        })
}
