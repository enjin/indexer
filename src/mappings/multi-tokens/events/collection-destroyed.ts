import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensCollectionDestroyed } from '@enjin/indexer/model'

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

export function collectionDestroyedEventModel(item: EventItem, data: CollectionDestroyedEvent): EventModel | undefined {
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
