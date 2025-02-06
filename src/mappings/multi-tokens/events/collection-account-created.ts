import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type CollectionAccountCreatedEvent = {
    collectionId: bigint
    accountId: string
}

export function collectionAccountCreated(event: EventItem): CollectionAccountCreatedEvent {
    return match(event)
        .returnType<CollectionAccountCreatedEvent>()
        .when(
            multiTokens.collectionAccountCreated.matrixEnjinV603.is,
            multiTokens.collectionAccountCreated.matrixEnjinV603.decode
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
