import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type FrozenEvent = {
    collectionId: bigint
    freezeType: string
    freezeState?: boolean
    tokenId?: bigint
    collectionAccount?: string
    tokenAccount?: string
}

function frozen(event: EventItem) {
    return match(event)
        .returnType<FrozenEvent>()
        .when(multiTokens.frozen.matrixEnjinV603.is, (e) => {
            const { collectionId, freezeType } = multiTokens.frozen.matrixEnjinV603.decode(e)

            return match(freezeType)
                .with({ __kind: 'Collection' }, () => ({
                    collectionId,
                    freezeType: freezeType.__kind,
                    freezeState: undefined,
                    tokenId: undefined,
                    collectionAccount: undefined,
                    tokenAccount: undefined,
                }))
                .with({ __kind: 'CollectionAccount' }, () => ({
                    collectionId,
                    freezeType: freezeType.__kind,
                    freezeState: undefined,
                    collectionAccount: freezeType.value,
                    tokenId: undefined,
                    tokenAccount: undefined,
                }))
                .with({ __kind: 'Token' }, () => ({
                    collectionId,
                    freezeType: freezeType.__kind,
                    freezeState: freezeType.freezeState,
                    tokenId: freezeType.tokenId,
                    collectionAccount: undefined,
                    tokenAccount: undefined,
                }))
                .otherwise(() => ({
                    collectionId,
                    freezeType: freezeType.__kind,
                    freezeState: undefined,
                    tokenId: freezeType.tokenId,
                    tokenAccount: freezeType.accountId,
                    collectionAccount: undefined,
                }))
        })
        .otherwise(() => {
            throw new UnsupportedEventError(multiTokens.frozen)
        })
}
