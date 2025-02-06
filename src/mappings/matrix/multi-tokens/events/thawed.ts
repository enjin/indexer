import { EventItem } from 'matrixchain-indexer/common/types/contexts'
import { FreezeType_Token as FreezeTypeToken_v500 } from 'matrixchain-indexer/types/generated/v500'
import { UnsupportedEventError } from 'matrixchain-indexer/common/errors'

export function thawed(event: EventItem) {
    if (events.multiTokens.thawed.matrixEnjinV603.is(event)) {
        const { collectionId, freezeType } = events.multiTokens.thawed.matrixEnjinV603.decode(event)

        if (freezeType.__kind === 'Collection') {
            return {
                collectionId,
                freezeType: freezeType.__kind,
                tokenId: undefined,
                collectionAccount: undefined,
                tokenAccount: undefined,
            }
        }

        if (freezeType.__kind === 'CollectionAccount') {
            return {
                collectionId,
                freezeType: freezeType.__kind,
                collectionAccount: freezeType.value,
                tokenId: undefined,
                tokenAccount: undefined,
            }
        }

        if (freezeType.__kind === 'Token') {
            return {
                collectionId,
                freezeType: freezeType.__kind,
                tokenId: (freezeType as FreezeTypeToken_v500).tokenId,
                collectionAccount: undefined,
                tokenAccount: undefined,
            }
        }

        return {
            collectionId,
            freezeType: freezeType.__kind,
            tokenId: freezeType.tokenId,
            tokenAccount: freezeType.accountId,
            collectionAccount: undefined,
        }
    }

    throw new UnsupportedEventError(events.multiTokens.thawed.name)
}
