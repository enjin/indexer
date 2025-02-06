import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type InfusedEvent = {
    collectionId: bigint
    tokenId: bigint
    accountId: any
    amount: bigint
}

export function infused(event: EventItem): InfusedEvent {
    return match(event)
        .returnType<InfusedEvent>()
        .when(multiTokens.infused.matrixEnjinV1012.is, () => multiTokens.infused.matrixEnjinV1012.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
