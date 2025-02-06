import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Account, AccountTokenEvent, Event as EventModel, Extrinsic, MultiTokensBurned, Token } from '@enjin/indexer/model'

type BurnedEvent = {
    collectionId: bigint
    tokenId: bigint
    accountId: string
    amount: bigint
}

export function burned(event: EventItem): BurnedEvent {
    return match(event)
        .returnType<BurnedEvent>()
        .when(multiTokens.burned.matrixEnjinV603.is, multiTokens.burned.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

function getEvent(
    item: EventItem,
    data: ReturnType<typeof getEventData>,
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
            token,
            from: new Account({ id: data.accountId }),
            event,
        }),
    ]
}
