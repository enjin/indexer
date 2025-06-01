import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensCollectionDestroyed } from '../../../model'
import { CollectionDestroyed } from './collection-destroyed.type'
import { EventMapBuilder } from '../../event-map.builder'
import { CollectionDestroyedProcessData } from './collection-destroyed.processor'

/**
 * Decode the CollectionDestroyed event from the EventItem
 */
function decode(event: EventItem): CollectionDestroyed {
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

/**
 * Create the notification body for the CollectionDestroyed event
 */
function notificationBody(item: EventItem, data: CollectionDestroyed, result: CollectionDestroyedProcessData): any {
    return {
        collectionId: data.collectionId,
        caller: data.caller,
        extrinsic: item.extrinsic?.id,
    }
}

/**
 * Create the event model for the CollectionDestroyed event
 */
function eventModel(item: EventItem, data: CollectionDestroyed, result?: CollectionDestroyedProcessData): EventModel | undefined {
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

export const collectionDestroyedMap = EventMapBuilder.create<CollectionDestroyed, CollectionDestroyedProcessData>()
    .withDecoder(decode)
    .withNotification(notificationBody)
    .withEventModel(eventModel)
    .build()
