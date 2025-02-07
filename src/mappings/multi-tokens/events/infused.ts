import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Account, AccountTokenEvent, Event as EventModel, Extrinsic, MultiTokensInfused, Token } from '@enjin/indexer/model'

type InfusedEvent = {
    collectionId: bigint
    tokenId: bigint
    accountId: any
    amount: bigint
}

export function infused(event: EventItem): InfusedEvent {
    return match(event)
        .returnType<InfusedEvent>()
        .when(multiTokens.infused.matrixEnjinV1012.is, multiTokens.infused.matrixEnjinV1012.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function infusedEventModel(
    item: EventItem,
    data: any,
    token?: Token
): [EventModel, AccountTokenEvent] | EventModel | undefined {
    const event = new EventModel({
        id: item.id,
        name: MultiTokensInfused.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensInfused({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            amount: data.amount,
            accountId: data.accountId,
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
