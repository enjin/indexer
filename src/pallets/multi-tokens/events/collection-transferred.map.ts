import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensCollectionTransferred } from '../../../model'
import { CollectionTransferred } from './collection-transferred.type'
import { EventMapBuilder } from '../../event-map.builder'

export interface CollectionTransferredProcessData {
    collection: any
}

/**
 * Decode the CollectionTransferred event from the EventItem
 */
function decode(event: EventItem): CollectionTransferred {
    return match(event)
        .returnType<CollectionTransferred>()
        .when(
            () => multiTokens.collectionTransferred.matrixEnjinV1004.is(event),
            () => multiTokens.collectionTransferred.matrixEnjinV1004.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

/**
 * Create the notification body for the CollectionTransferred event
 */
function notificationBody(item: EventItem, data: CollectionTransferred, result: CollectionTransferredProcessData): any {
    return {
        collectionId: data.collectionId,
        owner: data.newOwner,
        extrinsic: item.extrinsic?.id,
    }
}

/**
 * Create the event model for the CollectionTransferred event
 */
function eventModel(item: EventItem, data: CollectionTransferred, result?: CollectionTransferredProcessData): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensCollectionTransferred.name,
        collectionId: data.collectionId.toString(),
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MultiTokensCollectionTransferred({
            collectionId: data.collectionId,
            owner: data.newOwner,
        }),
    })
}

export const collectionTransferredMap = EventMapBuilder.create<CollectionTransferred, CollectionTransferredProcessData>()
    .withDecoder(decode)
    .withNotification(notificationBody)
    .withEventModel(eventModel)
    .build()
