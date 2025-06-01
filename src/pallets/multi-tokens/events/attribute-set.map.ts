import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensAttributeSet } from '../../../model'
import { safeString } from '../../../utils/tools'
import { AttributeSet } from './attribute-set.type'
import { hexToString } from '@polkadot/util'
import { EventMapBuilder } from '../../event-map.builder'
import { AttributeSetProcessData } from './attribute-set.processor'

/**
 * Decode the AttributeSet event from the EventItem
 */
function decode(event: EventItem): AttributeSet {
    return match(event)
        .returnType<AttributeSet>()
        .when(
            () => multiTokens.attributeSet.matrixEnjinV603.is(event),
            () => multiTokens.attributeSet.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

/**
 * Create the notification body for the AttributeSet event
 */
function notificationBody(item: EventItem, data: AttributeSet, result: AttributeSetProcessData): any {
    return {
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        key: result.key,
        value: result.value,
        extrinsic: item.extrinsic?.id,
    }
}

/**
 * Create the event model for the AttributeSet event
 */
function eventModel(item: EventItem, data: AttributeSet, result?: AttributeSetProcessData): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensAttributeSet.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensAttributeSet({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            key: safeString(data.key),
            value: safeString(hexToString(data.value)),
        }),
    })
}

export const attributeSetMap = EventMapBuilder.create<AttributeSet, AttributeSetProcessData>()
    .withDecoder(decode)
    .withNotification(notificationBody)
    .withEventModel(eventModel)
    .build()
