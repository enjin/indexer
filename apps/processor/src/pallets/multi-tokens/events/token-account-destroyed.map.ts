import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensTokenAccountDestroyed } from '../../../model'
import { TokenAccountDestroyed } from './token-account-destroyed.type'
import { EventMapBuilder } from '../../event-map.builder'

export interface TokenAccountDestroyedProcessData {
    collectionAccount: any
    tokenAccount?: any
    poolMembers?: any[]
}

/**
 * Decode the TokenAccountDestroyed event from the EventItem
 */
function decode(event: EventItem): TokenAccountDestroyed {
    return match(event)
        .returnType<TokenAccountDestroyed>()
        .when(
            () => multiTokens.tokenAccountDestroyed.matrixEnjinV603.is(event),
            () => multiTokens.tokenAccountDestroyed.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

/**
 * Create the notification body for the TokenAccountDestroyed event
 */
function notificationBody(item: EventItem, data: TokenAccountDestroyed, result: TokenAccountDestroyedProcessData): any {
    return {
        collectionId: data.collectionId,
        tokenId: data.tokenId,
        token: `${data.collectionId}-${data.tokenId}`,
        account: data.accountId,
        extrinsic: item.extrinsic?.id,
    }
}

/**
 * Create the event model for the TokenAccountDestroyed event
 */
function eventModel(item: EventItem, data: TokenAccountDestroyed, result?: TokenAccountDestroyedProcessData): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensTokenAccountDestroyed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensTokenAccountDestroyed({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            accountId: data.accountId,
        }),
    })
}

export const tokenAccountDestroyedMap = EventMapBuilder.create<TokenAccountDestroyed, TokenAccountDestroyedProcessData>()
    .withDecoder(decode)
    .withNotification(notificationBody)
    .withEventModel(eventModel)
    .build()
