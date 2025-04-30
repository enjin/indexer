import { multiTokens } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    MultiTokensTransferred,
    Token,
} from '../../../model'
import { Transferred } from './types'

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

    console.log(`ID: ${item.id}`)
    console.log(`FROM: ${data.from}`)
    console.log(`TO: ${data.to}`)
    console.log(`EVENT: ${event.id}`)
    console.log(`TOKEN: ${token?.id}`)

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            from: new Account({ id: data.from }),
            to: new Account({ id: data.to }),
            event,
            token,
        }),
    ]
}
