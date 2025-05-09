import { multiTokens } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import { Account, AccountTokenEvent, Event as EventModel, Extrinsic, MultiTokensBurned, Token } from '../../../model'
import { Burned } from './types'

export function burned(event: EventItem): Burned {
    return match(event)
        .returnType<Burned>()
        .when(
            () => multiTokens.burned.matrixEnjinV603.is(event),
            () => multiTokens.burned.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function burnedEventModel(
    item: EventItem,
    data: Burned,
    token?: Token
): [EventModel, AccountTokenEvent] | undefined | EventModel {
    const event = new EventModel({
        id: item.id,
        name: MultiTokensBurned.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensBurned({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: `${data.collectionId}-${data.tokenId}`,
            account: data.accountId,
            amount: data.amount,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            collectionId: data.collectionId.toString(),
            tokenId: data.tokenId.toString(),
            from: new Account({ id: data.accountId }),
            event,
        }),
    ]
}
