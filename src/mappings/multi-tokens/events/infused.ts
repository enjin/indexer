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

export function infused(event: EventItem) {
    return match(event)
        .returnType<InfusedEvent>()
        .when(multiTokens.infused.matrixEnjinV1012.is, () => multiTokens.infused.matrixEnjinV1012.decode(event))
        .when(multiTokens.infused.v1050.is, () => multiTokens.infused.v1050.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(multiTokens.infused)
        })
}
