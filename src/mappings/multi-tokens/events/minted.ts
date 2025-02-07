import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Account, AccountTokenEvent, Event as EventModel, Extrinsic, MultiTokensMinted, Token } from '@enjin/indexer/model'

type MintedEvent = {
    collectionId: bigint
    tokenId: bigint
    issuer: {
        __kind: string
        value?: string
    }
    recipient: string
    amount: bigint
}

export function minted(event: EventItem): MintedEvent {
    return match(event)
        .returnType<MintedEvent>()
        .when(multiTokens.minted.matrixEnjinV603.is, multiTokens.minted.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function mintedEventModel(
    item: EventItem,
    data: MintedEvent,
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
            issuer: data.issuer,
            recipient: data.recipient,
            amount: data.amount,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            token,
            from: new Account({ id: data.issuer }),
            to: new Account({ id: data.recipient }),
            event,
        }),
    ]
}
