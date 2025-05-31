import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensCollectionAccountCreated } from '../../../model'
import { CollectionAccountCreated } from '../types'

export function collectionAccountCreated(event: EventItem): CollectionAccountCreatedType {
    return match(event)
        .returnType<CollectionAccountCreatedType>()
        .when(
            () => multiTokens.collectionAccountCreated.matrixEnjinV603.is(event),
            () => multiTokens.collectionAccountCreated.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function collectionAccountCreatedEventModel(item: EventItem, data: CollectionAccountCreatedType) {
    return new EventModel({
        id: item.id,
        name: MultiTokensCollectionAccountCreated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MultiTokensCollectionAccountCreated({
            collectionId: data.collectionId,
            account: data.accountId,
        }),
    })
}
