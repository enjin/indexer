import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import {
    Account,
    AccountTokenEvent,
    AccountTokenEventMeta,
    AccountTokenEventMetaCollection,
    AccountTokenEventMetaToken,
    Event as EventModel,
    Extrinsic,
    MultiTokensBurned,
} from '../../../model'
import { Burned } from './burned.type'
import { EventMapBuilder } from '../../event-map.builder'
import { BurnedProcessData } from './burned.processor'

/**
 * Decode the Burned event from the EventItem
 */
function decode(event: EventItem): Burned {
    return match(event)
        .returnType<Burned>()
        .when(
            () => multiTokens.burned.matrixEnjinV603.is(event),
            () => multiTokens.burned.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

/**
 * Create the notification body for the Burned event
 */
function notificationBody(item: EventItem, data: Burned, result: BurnedProcessData): any {
    return {
        collectionId: data.collectionId,
        tokenId: data.tokenId,
        token: `${data.collectionId}-${data.tokenId}`,
        account: data.accountId,
        amount: data.amount,
        extrinsic: item.extrinsic?.id,
    }
}

/**
 * Create the event model for the Burned event
 */
function eventModel(item: EventItem, data: Burned, result?: BurnedProcessData): [EventModel, AccountTokenEvent] | undefined {
    if (!result?.token) return undefined

    const { token } = result

    const event = new EventModel({
        id: item.id,
        name: MultiTokensBurned.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensBurned({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: `${data.collectionId}-${data.tokenId}`,
            account: data.accountId,
            amount: data.amount,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            from: new Account({ id: data.accountId }),
            event,
            collectionId: data.collectionId.toString(),
            tokenId: data.tokenId.toString(),
            meta: new AccountTokenEventMeta({
                collection: !token.collection
                    ? undefined
                    : new AccountTokenEventMetaCollection({
                          createdAt: token.collection.createdAt,
                      }),
                token: new AccountTokenEventMetaToken({
                    nonFungible: token.nonFungible,
                    createdAt: token.createdAt,
                }),
            }),
        }),
    ]
}

export const burnedMap = EventMapBuilder.create<Burned, BurnedProcessData>()
    .withDecoder(decode)
    .withNotification(notificationBody)
    .withEventModel(eventModel)
    .build()
