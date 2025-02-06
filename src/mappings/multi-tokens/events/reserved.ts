import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type ReservedEvent = {
    collectionId: bigint
    tokenId: bigint
    amount: bigint
}

export function reserved(event: EventItem): ReservedEvent {
    return match(event)
        .returnType<ReservedEvent>()
        .when(multiTokens.reserved.matrixEnjinV603.is, () => multiTokens.reserved.matrixEnjinV603.decode(event))
        .when(multiTokens.reserved.v1050.is, () => multiTokens.reserved.v1050.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
