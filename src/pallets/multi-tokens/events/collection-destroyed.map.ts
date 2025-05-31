import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensCollectionDestroyed } from '../../../model'
import { CollectionDestroyed } from '../types'

export function collectionDestroyed(event: EventItem): CollectionDestroyedType {
    return match(event)
        .returnType<CollectionDestroyedType>()
        .when(
            () => multiTokens.collectionDestroyed.matrixEnjinV603.is(event),
            () => multiTokens.collectionDestroyed.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function collectionDestroyedEventModel(item: EventItem, data: CollectionDestroyedType): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensCollectionDestroyed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MultiTokensCollectionDestroyed({
            collectionId: data.collectionId,
            caller: data.caller,
        }),
    })
}
