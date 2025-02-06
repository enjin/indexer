import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type TokenAccountCreatedEvent = {
    collectionId: bigint
    tokenId: bigint
    accountId: any
    balance: bigint
}

export function tokenAccountCreated(event: EventItem): TokenAccountCreatedEvent {
    return match(event)
        .returnType<TokenAccountCreatedEvent>()
        .when(multiTokens.tokenAccountCreated.matrixEnjinV603.is, () =>
            multiTokens.tokenAccountCreated.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
