import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensTokenAccountCreated } from '../../../model'
import { TokenAccountCreated } from './token-account-created.type'
import { EventMapBuilder } from '../../event-map.builder'

export interface TokenAccountCreatedProcessData {
    tokenAccount?: any
    token?: any
    account?: any
    collectionAccount?: any
    collection?: any
}

/**
 * Decode the TokenAccountCreated event from the EventItem
 */
function decode(event: EventItem): TokenAccountCreated {
    return match(event)
        .returnType<TokenAccountCreated>()
        .when(
            () => multiTokens.tokenAccountCreated.matrixEnjinV603.is(event),
            () => multiTokens.tokenAccountCreated.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

/**
 * Create the notification body for the TokenAccountCreated event
 */
function notificationBody(item: EventItem, data: TokenAccountCreated, result: TokenAccountCreatedProcessData): any {
    return {
        collectionId: data.collectionId,
        tokenId: data.tokenId,
        token: `${data.collectionId}-${data.tokenId}`,
        account: data.accountId,
        balance: data.balance,
        extrinsic: item.extrinsic?.id,
    }
}

/**
 * Create the event model for the TokenAccountCreated event
 */
function eventModel(item: EventItem, data: TokenAccountCreated, result?: TokenAccountCreatedProcessData): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensTokenAccountCreated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensTokenAccountCreated({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            account: data.accountId,
            balance: data.balance,
        }),
    })
}

export const tokenAccountCreatedMap = EventMapBuilder.create<TokenAccountCreated, TokenAccountCreatedProcessData>()
    .withDecoder(decode)
    .withNotification(notificationBody)
    .withEventModel(eventModel)
    .build()
