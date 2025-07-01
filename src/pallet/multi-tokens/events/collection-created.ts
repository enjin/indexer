import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensCollectionCreated } from '~/model'
import { CollectionCreated } from '~/pallet/multi-tokens/events/types'

export function collectionCreated(event: EventItem): CollectionCreated {
    return match(event)
        .returnType<CollectionCreated>()
        .when(
            () => multiTokens.collectionCreated.matrixEnjinV603.is(event),
            () => multiTokens.collectionCreated.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function collectionCreatedEventModel(item: EventItem, data: CollectionCreated) {
    return new EventModel({
        id: item.id,
        name: MultiTokensCollectionCreated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MultiTokensCollectionCreated({
            collectionId: data.collectionId,
            owner: data.owner,
        }),
    })
}
