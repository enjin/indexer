import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import {
    Account,
    AccountTokenEvent,
    AccountTokenEventMeta,
    Event as EventModel,
    Extrinsic,
    MultiTokensInfused,
} from '../../../model'
import { Infused } from './infused.type'
import { unwrapAccount } from '../../../utils/entities'
import { generateAccountTokenEventToken, generateAccountTokenEventCollection } from '../../../utils/event'
import { EventMapBuilder } from '../../event-map.builder'

export interface InfusedProcessData {
    token: any
    infuser: Account
}

/**
 * Decode the Infused event from the EventItem
 */
function decode(event: EventItem): Infused {
    return match(event)
        .returnType<Infused>()
        .when(
            () => multiTokens.infused.matrixEnjinV1022.is(event),
            () => multiTokens.infused.matrixEnjinV1022.decode(event)
        )
        .when(
            () => multiTokens.infused.matrixEnjinV1012.is(event),
            () => multiTokens.infused.matrixEnjinV1012.decode(event)
        )
        .when(
            () => multiTokens.infused.matrixV1020.is(event),
            () => multiTokens.infused.matrixV1020.decode(event)
        )
        .when(
            () => multiTokens.infused.matrixV1010.is(event),
            () => multiTokens.infused.matrixV1010.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

/**
 * Create the notification body for the Infused event
 */
function notificationBody(item: EventItem, data: Infused, result: InfusedProcessData): any {
    return {
        collectionId: result.token.collection.id,
        tokenId: result.token.id,
        amount: data.amount,
        accountId: result.infuser.id,
        extrinsic: item.extrinsic?.id,
    }
}

/**
 * Create the event model for the Infused event
 */
function eventModel(item: EventItem, data: Infused, result?: InfusedProcessData): [EventModel, AccountTokenEvent] | undefined {
    if (!result) return undefined

    const { token, infuser } = result

    const event = new EventModel({
        id: item.id,
        name: MultiTokensInfused.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: token.collection.id,
        tokenId: token.id,
        data: new MultiTokensInfused({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            amount: data.amount,
            accountId: unwrapAccount(data.accountId),
        }),
    })

    const accountEvent = new AccountTokenEvent({
        id: item.id,
        from: infuser,
        event,
        collectionId: token.collection.id,
        tokenId: token.id,
        meta: new AccountTokenEventMeta({
            collection: generateAccountTokenEventCollection(token.collection),
            token: generateAccountTokenEventToken(token),
        }),
    })

    return [event, accountEvent]
}

export const infusedMap = EventMapBuilder.create<Infused, InfusedProcessData>()
    .withDecoder(decode)
    .withNotification(notificationBody)
    .withEventModel(eventModel)
    .build()
