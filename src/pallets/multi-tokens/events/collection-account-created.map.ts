import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensCollectionAccountCreated } from '../../../model'
import { CollectionAccountCreated } from './collection-account-created.type'
import { EventMapBuilder } from '../../event-map.builder'
import { CollectionAccountCreatedProcessData } from './collection-account-created.processor'

/**
 * Decode the CollectionAccountCreated event from the EventItem
 */
function decode(event: EventItem): CollectionAccountCreated {
    return match(event)
        .returnType<CollectionAccountCreated>()
        .when(
            () => multiTokens.collectionAccountCreated.matrixEnjinV603.is(event),
            () => multiTokens.collectionAccountCreated.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

/**
 * Create the notification body for the CollectionAccountCreated event
 */
function notificationBody(item: EventItem, data: CollectionAccountCreated, result: CollectionAccountCreatedProcessData): any {
    return {
        collectionId: data.collectionId.toString(),
        account: data.accountId,
        extrinsic: item.extrinsic?.id,
    }
}

/**
 * Create the event model for the CollectionAccountCreated event
 */
function eventModel(item: EventItem, data: CollectionAccountCreated, result?: CollectionAccountCreatedProcessData): EventModel | undefined {
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

export const collectionAccountCreatedMap = EventMapBuilder.create<CollectionAccountCreated, CollectionAccountCreatedProcessData>()
    .withDecoder(decode)
    .withNotification(notificationBody)
    .withEventModel(eventModel)
    .build()
