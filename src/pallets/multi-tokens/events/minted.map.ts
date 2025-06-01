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
    MultiTokensMinted,
    Token,
    TokenAccount,
    PoolMember,
} from '../../../model'
import { Minted } from './minted.type'
import { unwrapAccount } from '../../../utils/entities'
import { generateAccountTokenEventToken, generateAccountTokenEventCollection } from '../../../utils/event'
import { EventMapBuilder } from '../../event-map.builder'

export interface MintedProcessData {
    token: Token
    recipient?: Account
    issuer?: Account
    tokenAccount?: TokenAccount
    poolMember?: PoolMember
    promises?: Promise<void>[]
}

/**
 * Decode the Minted event from the EventItem
 */
function decode(event: EventItem): Minted {
    return match(event)
        .returnType<Minted>()
        .when(
            () => multiTokens.minted.matrixEnjinV603.is(event),
            () => multiTokens.minted.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

/**
 * Create the notification body for the Minted event
 */
function notificationBody(item: EventItem, data: Minted, result: MintedProcessData): any {
    return {
        collectionId: data.collectionId,
        tokenId: data.tokenId,
        token: result.token.id,
        issuer: result.issuer?.id,
        recipient: result.recipient?.id,
        amount: data.amount,
        extrinsic: item.extrinsic?.id,
    }
}

/**
 * Create the event model for the Minted event
 */
function eventModel(item: EventItem, data: Minted, result?: MintedProcessData): [EventModel, AccountTokenEvent] | EventModel | undefined {
    if (!result?.token) return undefined

    // Handle skipSave case
    if (!result.recipient || !result.issuer) {
        const event = new EventModel({
            id: item.id,
            name: MultiTokensMinted.name,
            extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
            collectionId: data.collectionId.toString(),
            tokenId: `${data.collectionId}-${data.tokenId}`,
            data: new MultiTokensMinted({
                collectionId: data.collectionId,
                tokenId: data.tokenId,
                token: `${data.collectionId}-${data.tokenId}`,
                issuer: unwrapAccount(data.issuer),
                recipient: data.recipient,
                amount: data.amount,
            }),
        })

        return [
            event,
            new AccountTokenEvent({
                id: item.id,
                from: new Account({ id: unwrapAccount(data.issuer) }),
                to: new Account({ id: data.recipient }),
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

    const { token, recipient, issuer } = result

    const event = new EventModel({
        id: item.id,
        name: MultiTokensMinted.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensMinted({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: `${data.collectionId}-${data.tokenId}`,
            issuer: unwrapAccount(data.issuer),
            recipient: data.recipient,
            amount: data.amount,
        }),
    })

    const accountEvent = new AccountTokenEvent({
        id: item.id,
        from: issuer,
        to: recipient,
        event,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        meta: new AccountTokenEventMeta({
            collection: token.collection ? generateAccountTokenEventCollection(token.collection) : undefined,
            token: generateAccountTokenEventToken(token),
        }),
    })

    return [event, accountEvent]
}

export const mintedMap = EventMapBuilder.create<Minted, MintedProcessData>()
    .withDecoder(decode)
    .withNotification(notificationBody)
    .withEventModel(eventModel)
    .build()
