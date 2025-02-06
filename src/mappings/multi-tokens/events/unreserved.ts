import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type UnreservedEvent = {
    collectionId: bigint
    tokenId: bigint
    accountId: string
    amount: bigint
    reserveId: any
}

export function unreserved(eventItem: EventItem): UnreservedEvent {
    return match(eventItem)
        .returnType<UnreservedEvent>()
        .when(multiTokens.unreserved.matrixEnjinV603.is, () => multiTokens.unreserved.matrixEnjinV603.decode(eventItem))
        .when(multiTokens.unreserved.v1050.is, () => multiTokens.unreserved.v1050.decode(eventItem))
        .otherwise(() => {
            throw new UnsupportedEventError(eventItem)
        })
}
