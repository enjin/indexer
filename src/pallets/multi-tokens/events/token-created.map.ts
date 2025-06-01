import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensTokenCreated } from '../../../model'
import { TokenCreated } from './token-created.type'
import { unwrapAccount } from '../../../utils/entities'
import { EventMapBuilder } from '../../event-map.builder'
import { TokenCreatedProcessData } from './token-created.processor'

/**
 * Decode the TokenCreated event from the EventItem
 */
function decode(event: EventItem): TokenCreated {
    return match(event)
        .returnType<TokenCreated>()
        .when(
            () => multiTokens.tokenCreated.matrixEnjinV603.is(event),
            () => multiTokens.tokenCreated.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

/**
 * Create the notification body for the TokenCreated event
 */
function notificationBody(item: EventItem, data: TokenCreated, result: TokenCreatedProcessData): any {
    return {
        collectionId: data.collectionId,
        tokenId: data.tokenId,
        token: `${data.collectionId}-${data.tokenId}`,
        issuer: unwrapAccount(data.issuer),
        initialSupply: data.initialSupply,
        extrinsic: item.extrinsic?.id,
    }
}

/**
 * Create the event model for the TokenCreated event
 */
function eventModel(item: EventItem, data: TokenCreated, result?: TokenCreatedProcessData): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensTokenCreated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensTokenCreated({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            issuer: unwrapAccount(data.issuer),
            initialSupply: data.initialSupply,
        }),
    })
}

export const tokenCreatedMap = EventMapBuilder.create<TokenCreated, TokenCreatedProcessData>()
    .withDecoder(decode)
    .withNotification(notificationBody)
    .withEventModel(eventModel)
    .build()
