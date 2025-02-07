import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type UnreservedEvent = {
    collectionId: bigint
    tokenId: bigint
    accountId: string
    amount: bigint
    reserveId?: any
}

export function unreserved(event: EventItem): UnreservedEvent {
    return match(event)
        .returnType<UnreservedEvent>()
        .when(multiTokens.unreserved.matrixEnjinV603.is, multiTokens.unreserved.matrixEnjinV603.decode)
        .when(multiTokens.unreserved.v1050.is, multiTokens.unreserved.v1050.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
