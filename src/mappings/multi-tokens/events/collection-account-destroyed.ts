import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type CollectionAccountDestroyedEvent = {
    collectionId: bigint
    accountId: string
}

export function collectionAccountDestroyed(event: EventItem): CollectionAccountDestroyedEvent {
    return match(event)
        .returnType<CollectionAccountDestroyedEvent>()
        .when(
            multiTokens.collectionAccountDestroyed.matrixEnjinV603.is,
            multiTokens.collectionAccountDestroyed.matrixEnjinV603.decode
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
