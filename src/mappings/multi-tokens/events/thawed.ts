import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type ThawedEvent = {
    collectionId: bigint
    freezeType: string
    tokenId?: bigint
    collectionAccount?: string
    tokenAccount?: string
}

export function thawed(event: EventItem) {
    return match(event)
        .returnType<ThawedEvent>()
        .when(multiTokens.thawed.matrixEnjinV603.is, (e) => {
            const { collectionId, freezeType } = multiTokens.thawed.matrixEnjinV603.decode(e)

            return match(freezeType)
                .with({ __kind: 'Collection' }, () => ({
                    collectionId,
                    freezeType: freezeType.__kind,
                    tokenId: undefined,
                    collectionAccount: undefined,
                    tokenAccount: undefined,
                }))
                .with({ __kind: 'CollectionAccount' }, () => ({
                    collectionId,
                    freezeType: freezeType.__kind,
                    collectionAccount: freezeType.value,
                    tokenId: undefined,
                    tokenAccount: undefined,
                }))
                .with({ __kind: 'Token' }, () => ({
                    collectionId,
                    freezeType: freezeType.__kind,
                    tokenId: freezeType.tokenId,
                    collectionAccount: undefined,
                    tokenAccount: undefined,
                }))
                .otherwise(() => ({
                    collectionId,
                    freezeType: freezeType.__kind,
                    tokenId: freezeType.tokenId,
                    tokenAccount: freezeType.accountId,
                    collectionAccount: undefined,
                }))
        })
        .otherwise(() => {
            throw new UnsupportedEventError(multiTokens.thawed)
        })
}
