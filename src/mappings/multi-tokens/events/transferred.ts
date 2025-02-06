import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type TransferredEvent = {
    collectionId: bigint
    tokenId: bigint
    operator: string
    from: string
    to: string
    amount: bigint
}

export function transferred(event: EventItem): TransferredEvent {
    return match(event)
        .when(multiTokens.transferred.matrixEnjinV603.is, () => multiTokens.transferred.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
