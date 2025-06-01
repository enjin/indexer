import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensTokenDestroyed } from '../../../model'
import { TokenDestroyed } from './token-destroyed.type'
import { EventMapBuilder } from '../../event-map.builder'
import { TokenDestroyedProcessData } from './token-destroyed.processor'

/**
 * Decode the TokenDestroyed event from the EventItem
 */
function decode(event: EventItem): TokenDestroyed {
    return match(event)
        .returnType<TokenDestroyed>()
        .when(
            () => multiTokens.tokenDestroyed.matrixEnjinV603.is(event),
            () => multiTokens.tokenDestroyed.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

/**
 * Create the notification body for the TokenDestroyed event
 */
function notificationBody(item: EventItem, data: TokenDestroyed, result: TokenDestroyedProcessData): any {
    return {
        collectionId: data.collectionId,
        tokenId: data.tokenId,
        token: `${data.collectionId}-${data.tokenId}`,
        caller: data.caller,
        extrinsic: item.extrinsic?.id,
    }
}

/**
 * Create the event model for the TokenDestroyed event
 */
function eventModel(item: EventItem, data: TokenDestroyed, result?: TokenDestroyedProcessData): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensTokenDestroyed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensTokenDestroyed({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            caller: data.caller,
        }),
    })
}

export const tokenDestroyedMap = EventMapBuilder.create<TokenDestroyed, TokenDestroyedProcessData>()
    .withDecoder(decode)
    .withNotification(notificationBody)
    .withEventModel(eventModel)
    .build()
