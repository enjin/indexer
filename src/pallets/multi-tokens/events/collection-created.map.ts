import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensCollectionCreated } from '../../../model'
import { CollectionCreated } from '../types'

export function collectionCreated(event: EventItem): CollectionCreatedType {
    return match(event)
        .returnType<CollectionCreatedType>()
        .when(
            () => multiTokens.collectionCreated.matrixEnjinV603.is(event),
            () => multiTokens.collectionCreated.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function collectionCreatedEventModel(item: EventItem, data: CollectionCreatedType) {
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
