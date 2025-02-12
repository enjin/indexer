import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensCollectionAccountDestroyed } from '../../../model'
import { CollectionAccountDestroyed } from './types'

export function collectionAccountDestroyed(event: EventItem): CollectionAccountDestroyed {
    return match(event)
        .returnType<CollectionAccountDestroyed>()
        .when(
            () => multiTokens.collectionAccountDestroyed.matrixEnjinV603.is(event),
            () => multiTokens.collectionAccountDestroyed.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function collectionAccountDestroyedEventModel(item: EventItem, data: CollectionAccountDestroyed) {
    return new EventModel({
        id: item.id,
        name: MultiTokensCollectionAccountDestroyed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MultiTokensCollectionAccountDestroyed({
            collectionId: data.collectionId,
            account: data.accountId,
        }),
    })
}
