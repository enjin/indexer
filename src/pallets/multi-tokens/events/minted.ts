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
} from '../../../model'
import { Minted } from './types'
import { unwrapAccount } from '../../../utils/entities'
import { generateAccountTokenEventToken, generateAccountTokenEventCollection } from '../../../utils/event'

export function minted(event: EventItem): Minted {
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

export function mintedEventModel(
    item: EventItem,
    data: Minted,
    collection?: Collection,
    token?: Token
): [EventModel, AccountTokenEvent] | EventModel | undefined {
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
                collection: !collection ? undefined : generateAccountTokenEventCollection(collection),
                token: !token ? undefined : generateAccountTokenEventToken(token),
            }),
        }),
    ]
}
