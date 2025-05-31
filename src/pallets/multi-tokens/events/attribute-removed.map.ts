import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensAttributeRemoved } from '../../../model'
import { AttributeRemoved } from './attribute-removed.type'
import { EventMapBuilder } from '../../event-map.builder'
import { AttributeRemovedProcessData } from './attribute-removed.processor'

/**
 * Decode the AttributeRemoved event from the EventItem
 */
function decode(event: EventItem): AttributeRemoved {
    return match(event)
        .returnType<AttributeRemoved>()
        .when(
            () => multiTokens.attributeRemoved.matrixEnjinV603.is(event),
            () => multiTokens.attributeRemoved.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

/**
 * Create the notification body for the AttributeRemoved event
 */
function notificationBody(item: EventItem, data: AttributeRemoved, result: AttributeRemovedProcessData): any {
    return {
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        key: data.key,
        extrinsic: item.extrinsic?.id,
    }
}

/**
 * Create the event model for the AttributeRemoved event
 */
function eventModel(item: EventItem, data: AttributeRemoved): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensAttributeRemoved.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensAttributeRemoved({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            key: data.key,
        }),
    })
}

export const attributeRemovedMap = EventMapBuilder.create<AttributeRemoved, AttributeRemovedProcessData>()
    .withDecoder(decode)
    .withNotification(notificationBody)
    .withEventModel(eventModel)
    .build()
