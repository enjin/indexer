import { multiTokens } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
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
import { Transferred } from './types'
import { generateAccountTokenEventToken, generateAccountTokenEventCollection } from '../../../util/event'

export function transferred(event: EventItem): Transferred {
    return match(event)
        .when(
            () => multiTokens.transferred.matrixEnjinV603.is(event),
            () => multiTokens.transferred.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function transferredEventModel(
    item: EventItem,
    data: Transferred,
    collection?: Collection,
    token?: Token
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
                collection: !collection ? undefined : generateAccountTokenEventCollection(collection),
                token: !token ? undefined : generateAccountTokenEventToken(token),
            }),
        }),
    ]
}
