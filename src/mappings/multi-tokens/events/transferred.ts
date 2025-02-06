import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Account, AccountTokenEvent, Event as EventModel, Extrinsic, MultiTokensTransferred, Token } from '@enjin/indexer/model'

type TransferredEvent = {
    collectionId: bigint
    tokenId: bigint
    operator: string
    from: string
    to: string
    amount: bigint
}

export function transferred(event: EventItem): TransferredEvent {
    return match(event)
        .when(multiTokens.transferred.matrixEnjinV603.is, () => multiTokens.transferred.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function transferredEventModel(
    item: EventItem,
    data: any,
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
            token,
        }),
    ]
}
