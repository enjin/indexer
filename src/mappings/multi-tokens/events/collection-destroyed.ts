import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type CollectionDestroyedEvent = {
    collectionId: bigint
    caller: string
}

export function collectionDestroyed(event: EventItem): CollectionDestroyedEvent {
    return match(event)
        .returnType<CollectionDestroyedEvent>()
        .when(multiTokens.collectionDestroyed.matrixEnjinV603.is, () =>
            multiTokens.collectionDestroyed.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
