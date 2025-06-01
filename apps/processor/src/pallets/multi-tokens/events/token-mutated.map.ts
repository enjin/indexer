import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensTokenMutated } from '../../../model'
import { TokenMutated } from './token-mutated.type'
import { EventMapBuilder } from '../../event-map.builder'
import { TokenMutatedProcessData } from './token-mutated.processor'

/**
 * Decode the TokenMutated event from the EventItem
 */
function decode(event: EventItem): TokenMutated {
    return match(event)
        .returnType<TokenMutated>()
        .when(
            () => multiTokens.tokenMutated.matrixEnjinV1022.is(event),
            () => multiTokens.tokenMutated.matrixEnjinV1022.decode(event)
        )
        .when(
            () => multiTokens.tokenMutated.matrixEnjinV1012.is(event),
            () => multiTokens.tokenMutated.matrixEnjinV1012.decode(event)
        )
        .when(
            () => multiTokens.tokenMutated.matrixEnjinV603.is(event),
            () => multiTokens.tokenMutated.matrixEnjinV603.decode(event)
        )
        .when(
            () => multiTokens.tokenMutated.matrixV1020.is(event),
            () => multiTokens.tokenMutated.matrixV1020.decode(event)
        )
        .when(
            () => multiTokens.tokenMutated.matrixV1010.is(event),
            () => multiTokens.tokenMutated.matrixV1010.decode(event)
        )
        .when(
            () => multiTokens.tokenMutated.matrixV500.is(event),
            () => multiTokens.tokenMutated.matrixV500.decode(event)
        )
        .when(
            () => multiTokens.tokenMutated.enjinV1032.is(event),
            () => multiTokens.tokenMutated.enjinV1032.decode(event)
        )
        .when(
            () => multiTokens.tokenMutated.enjinV100.is(event),
            () => multiTokens.tokenMutated.enjinV100.decode(event)
        )
        .when(
            () => multiTokens.tokenMutated.v1050.is(event),
            () => multiTokens.tokenMutated.v1050.decode(event)
        )
        .when(
            () => multiTokens.tokenMutated.v1030.is(event),
            () => multiTokens.tokenMutated.v1030.decode(event)
        )
        .when(
            () => multiTokens.tokenMutated.v100.is(event),
            () => multiTokens.tokenMutated.v100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

/**
 * Create the notification body for the TokenMutated event
 */
function notificationBody(item: EventItem, data: TokenMutated, result: TokenMutatedProcessData): any {
    return {
        collectionId: data.collectionId,
        tokenId: data.tokenId,
        token: `${data.collectionId}-${data.tokenId}`,
        mutation: data.mutation,
        extrinsic: item.extrinsic?.id,
    }
}

/**
 * Create the event model for the TokenMutated event
 */
function eventModel(item: EventItem, data: TokenMutated): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensTokenMutated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensTokenMutated(),
    })
}

export const tokenMutatedMap = EventMapBuilder.create<TokenMutated, TokenMutatedProcessData>()
    .withDecoder(decode)
    .withNotification(notificationBody)
    .withEventModel(eventModel)
    .build()
