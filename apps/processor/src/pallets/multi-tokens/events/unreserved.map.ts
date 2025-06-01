import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Event as EventModel } from '../../../model'
import { Unreserved } from './unreserved.type'
import { EventMapBuilder } from '../../event-map.builder'
import { UnreservedProcessData } from './unreserved.processor'

/**
 * Decode the Unreserved event from the EventItem
 */
function decode(event: EventItem): Unreserved {
    return match(event)
        .returnType<Unreserved>()
        .when(
            () => multiTokens.unreserved.matrixEnjinV1022.is(event),
            () => multiTokens.unreserved.matrixEnjinV1022.decode(event)
        )
        .when(
            () => multiTokens.unreserved.matrixEnjinV603.is(event),
            () => multiTokens.unreserved.matrixEnjinV603.decode(event)
        )
        .when(
            () => multiTokens.unreserved.matrixV1020.is(event),
            () => multiTokens.unreserved.matrixV1020.decode(event)
        )
        .when(
            () => multiTokens.unreserved.matrixV500.is(event),
            () => multiTokens.unreserved.matrixV500.decode(event)
        )
        .when(
            () => multiTokens.unreserved.v1050.is(event),
            () => multiTokens.unreserved.v1050.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

/**
 * Create the notification body for the Unreserved event
 */
function notificationBody(item: EventItem, data: Unreserved, result: UnreservedProcessData): any {
    return {
        collectionId: data.collectionId,
        tokenId: data.tokenId,
        token: `${data.collectionId}-${data.tokenId}`,
        account: data.accountId,
        amount: data.amount,
        reserveId: result.reserveId,
        extrinsic: item.extrinsic?.id,
    }
}

/**
 * Create the event model for the Unreserved event
 */
function eventModel(item: EventItem, data: Unreserved): EventModel | undefined {
    return undefined
}

export const unreservedMap = EventMapBuilder.create<Unreserved, UnreservedProcessData>()
    .withDecoder(decode)
    .withNotification(notificationBody)
    .withEventModel(eventModel)
    .build()
