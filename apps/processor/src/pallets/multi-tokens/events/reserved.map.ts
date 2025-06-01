import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Event as EventModel } from '../../../model'
import { Reserved } from './reserved.type'
import { EventMapBuilder } from '../../event-map.builder'

export interface ReservedProcessData {
    tokenAccount: any
    reserveId: string
}

/**
 * Decode the Reserved event from the EventItem
 */
function decode(event: EventItem): Reserved {
    return match(event)
        .returnType<Reserved>()
        .when(
            () => multiTokens.reserved.matrixEnjinV1022.is(event),
            () => multiTokens.reserved.matrixEnjinV1022.decode(event)
        )
        .when(
            () => multiTokens.reserved.matrixEnjinV603.is(event),
            () => multiTokens.reserved.matrixEnjinV603.decode(event)
        )
        .when(
            () => multiTokens.reserved.matrixV1020.is(event),
            () => multiTokens.reserved.matrixV1020.decode(event)
        )
        .when(
            () => multiTokens.reserved.matrixV500.is(event),
            () => multiTokens.reserved.matrixV500.decode(event)
        )
        .when(
            () => multiTokens.reserved.v1050.is(event),
            () => multiTokens.reserved.v1050.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

/**
 * Create the notification body for the Reserved event
 */
function notificationBody(item: EventItem, data: Reserved, result: ReservedProcessData): any {
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
 * Create the event model for the Reserved event
 */
function eventModel(item: EventItem, data: Reserved, result?: ReservedProcessData): EventModel | undefined {
    return undefined
}

export const reservedMap = EventMapBuilder.create<Reserved, ReservedProcessData>()
    .withDecoder(decode)
    .withNotification(notificationBody)
    .withEventModel(eventModel)
    .build()
