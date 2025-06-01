import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import {
    Account,
    AccountTokenEvent,
    AccountTokenEventMeta,
    Collection,
    Event as EventModel,
    Extrinsic,
    MultiTokensTransferred,
    Token,
} from '../../../model'
import { Transferred } from './transferred.type'
import { generateAccountTokenEventToken, generateAccountTokenEventCollection } from '../../../utils/event'
import { EventMapBuilder } from '../../event-map.builder'
import { TransferredProcessData } from './transferred.processor'

/**
 * Decode the Transferred event from the EventItem
 */
function decode(event: EventItem): Transferred {
    return match(event)
        .returnType<Transferred>()
        .when(
            () => multiTokens.transferred.matrixEnjinV603.is(event),
            () => multiTokens.transferred.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

/**
 * Create the notification body for the Transferred event
 */
function notificationBody(item: EventItem, data: Transferred, result: TransferredProcessData): any {
    return {
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        token: `${data.collectionId}-${data.tokenId}`,
        operator: data.operator,
        from: data.from,
        to: data.to,
        amount: data.amount,
        extrinsic: item.extrinsic?.id,
    }
}

/**
 * Create the event model for the Transferred event
 */
function eventModel(
    item: EventItem,
    data: Transferred,
    result?: TransferredProcessData
): [EventModel, AccountTokenEvent] | EventModel | undefined {
    const event = new EventModel({
        id: item.id,
        name: MultiTokensTransferred.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensTransferred({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: `${data.collectionId}-${data.tokenId}`,
            operator: data.operator,
            from: data.from,
            to: data.to,
            amount: data.amount,
        }),
    })

    if (!result) return event

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            from: new Account({ id: data.from }),
            to: new Account({ id: data.to }),
            event,
            collectionId: data.collectionId.toString(),
            tokenId: `${data.collectionId}-${data.tokenId}`,
            meta: new AccountTokenEventMeta({
                collection: !result.token.collection ? undefined : generateAccountTokenEventCollection(result.token.collection),
                token: !result.token ? undefined : generateAccountTokenEventToken(result.token),
            }),
        }),
    ]
}

export const transferredMap = EventMapBuilder.create<Transferred, TransferredProcessData>()
    .withDecoder(decode)
    .withNotification(notificationBody)
    .withEventModel(eventModel)
    .build()
