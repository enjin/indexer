import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensCollectionDestroyed } from '~/model'
import { CollectionDestroyed } from '~/pallet/multi-tokens/events/types'

export function collectionDestroyed(event: EventItem): CollectionDestroyed {
    return match(event)
        .returnType<CollectionDestroyed>()
        .when(
            () => multiTokens.collectionDestroyed.matrixEnjinV603.is(event),
            () => multiTokens.collectionDestroyed.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function collectionDestroyedEventModel(item: EventItem, data: CollectionDestroyed): EventModel | undefined {
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
