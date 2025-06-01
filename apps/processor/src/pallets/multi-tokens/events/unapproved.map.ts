import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensUnapproved } from '../../../model'
import { Unapproved } from './unapproved.type'
import { EventMapBuilder } from '../../event-map.builder'
import { UnapprovedProcessData } from './unapproved.processor'

/**
 * Decode the Unapproved event from the EventItem
 */
function decode(event: EventItem): Unapproved {
    return match(event)
        .returnType<Unapproved>()
        .when(
            () => multiTokens.unapproved.matrixEnjinV603.is(event),
            () => multiTokens.unapproved.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

/**
 * Create the notification body for the Unapproved event
 */
function notificationBody(item: EventItem, data: Unapproved, result: UnapprovedProcessData): any {
    return {
        kind: result.kind,
        address: result.address,
        operator: data.operator,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ?? null,
        token: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        extrinsic: item.extrinsic?.id,
    }
}

/**
 * Create the event model for the Unapproved event
 */
function eventModel(item: EventItem, data: Unapproved): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensUnapproved.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensUnapproved({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            owner: data.owner,
            operator: data.operator,
        }),
    })
}

export const unapprovedMap = EventMapBuilder.create<Unapproved, UnapprovedProcessData>()
    .withDecoder(decode)
    .withNotification(notificationBody)
    .withEventModel(eventModel)
    .build()
