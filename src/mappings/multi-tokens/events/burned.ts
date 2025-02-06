import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type BurnedEvent = {
    collectionId: bigint
    tokenId: bigint
    accountId: string
    amount: bigint
}

export function burned(event: EventItem) {
    return match(event)
        .returnType<BurnedEvent>()
        .when(multiTokens.burned.matrixEnjinV603.is, multiTokens.burned.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(multiTokens.burned)
        })
}
