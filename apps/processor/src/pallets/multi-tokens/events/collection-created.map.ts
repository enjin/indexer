import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensCollectionCreated } from '../../../model'
import { CollectionCreated } from './collection-created.type'
import { EventMapBuilder } from '../../event-map.builder'
import { CollectionCreatedProcessData } from './collection-created.processor'

/**
 * Decode the CollectionCreated event from the EventItem
 */
function decode(event: EventItem): CollectionCreated {
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

/**
 * Create the notification body for the CollectionCreated event
 */
function notificationBody(item: EventItem, data: CollectionCreated, result: CollectionCreatedProcessData): any {
    return {
        collectionId: data.collectionId,
        owner: data.owner,
        extrinsic: item.extrinsic?.id,
    }
}

/**
 * Create the event model for the CollectionCreated event
 */
function eventModel(item: EventItem, data: CollectionCreated, result?: CollectionCreatedProcessData): EventModel | undefined {
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

export const collectionCreatedMap = EventMapBuilder.create<CollectionCreated, CollectionCreatedProcessData>()
    .withDecoder(decode)
    .withNotification(notificationBody)
    .withEventModel(eventModel)
    .build()
