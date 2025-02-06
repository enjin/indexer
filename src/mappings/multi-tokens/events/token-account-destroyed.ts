import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type TokenAccountDestroyedEvent = {
    collectionId: bigint
    tokenId: bigint
    accountId: string
}

function tokenAccountDestroyed(event: EventItem) {
    return match(event)
        .returnType<TokenAccountDestroyedEvent>()
        .when(multiTokens.tokenAccountDestroyed.matrixEnjinV603.is, () =>
            multiTokens.tokenAccountDestroyed.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(multiTokens.tokenAccountDestroyed)
        })
}
