import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensCollectionAccountDestroyed } from '../../../model'
import { CollectionAccountDestroyed } from './collection-account-destroyed.type'
import { EventMapBuilder } from '../../event-map.builder'
import { CollectionAccountDestroyedProcessData } from './collection-account-destroyed.processor'

/**
 * Decode the CollectionAccountDestroyed event from the EventItem
 */
function decode(event: EventItem): CollectionAccountDestroyed {
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

/**
 * Create the notification body for the CollectionAccountDestroyed event
 */
function notificationBody(item: EventItem, data: CollectionAccountDestroyed, result: CollectionAccountDestroyedProcessData): any {
    return {
        collectionId: data.collectionId.toString(),
        account: data.accountId,
        extrinsic: item.extrinsic?.id,
    }
}

/**
 * Create the event model for the CollectionAccountDestroyed event
 */
function eventModel(item: EventItem, data: CollectionAccountDestroyed, result?: CollectionAccountDestroyedProcessData): EventModel | undefined {
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

export const collectionAccountDestroyedMap = EventMapBuilder.create<CollectionAccountDestroyed, CollectionAccountDestroyedProcessData>()
    .withDecoder(decode)
    .withNotification(notificationBody)
    .withEventModel(eventModel)
    .build()
