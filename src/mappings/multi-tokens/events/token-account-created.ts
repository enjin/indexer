import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensTokenAccountCreated } from '@enjin/indexer/model'

type TokenAccountCreatedEvent = {
    collectionId: bigint
    tokenId: bigint
    accountId: string
    balance: bigint
}

export function tokenAccountCreated(event: EventItem): TokenAccountCreated {
    return match(event)
        .returnType<TokenAccountCreated>()
        .when(multiTokens.tokenAccountCreated.matrixEnjinV603.is, multiTokens.tokenAccountCreated.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function tokenAccountCreatedEventModel(item: EventItem, data: TokenAccountCreatedEvent) {
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
