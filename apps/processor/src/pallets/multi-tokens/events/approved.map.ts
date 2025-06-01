import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensApproved } from '../../../model'
import { Approved } from './approved.type'
import { EventMapBuilder } from '../../event-map.builder'
import { ApprovedProcessData } from './approved.processor'

/**
 * Decode the Approved event from the EventItem
 */
function decode(event: EventItem): Approved {
    return match(event)
        .returnType<Approved>()
        .when(
            () => multiTokens.approved.matrixEnjinV603.is(event),
            () => multiTokens.approved.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

/**
 * Create the notification body for the Approved event
 */
function notificationBody(item: EventItem, data: Approved, result: ApprovedProcessData): any {
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
 * Create the event model for the Approved event
 */
function eventModel(item: EventItem, data: Approved, result?: ApprovedProcessData): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensApproved.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensApproved({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            owner: data.owner,
            operator: data.operator,
            amount: data.amount,
            expiration: data.expiration,
        }),
    })
}

export const approvedMap = EventMapBuilder.create<Approved, ApprovedProcessData>()
    .withDecoder(decode)
    .withNotification(notificationBody)
    .withEventModel(eventModel)
    .build()
