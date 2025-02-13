import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensTokenAccountCreated } from '../../../model'
import { TokenAccountCreated } from './types'

export function tokenAccountCreated(event: EventItem): TokenAccountCreated {
    return match(event)
        .returnType<TokenAccountCreated>()
        .when(
            () => multiTokens.tokenAccountCreated.matrixEnjinV603.is(event),
            () => multiTokens.tokenAccountCreated.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function tokenAccountCreatedEventModel(item: EventItem, data: TokenAccountCreated) {
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
