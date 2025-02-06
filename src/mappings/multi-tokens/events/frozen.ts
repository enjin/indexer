import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

export function frozen(event: EventItem) {
  w   if (multiTokens.frozen.matrixEnjinV603.is(event)) {
        const { collectionId, freezeType } = multiTokens.frozen.matrixEnjinV603.decode(event)

        if (freezeType.__kind === 'Collection') {
            return {
                collectionId,
                freezeType: freezeType.__kind,
                freezeState: undefined,
                tokenId: undefined,
                collectionAccount: undefined,
                tokenAccount: undefined,
            }
        }

        if (freezeType.__kind === 'CollectionAccount') {
            return {
                collectionId,
                freezeType: freezeType.__kind,
                freezeState: undefined,
                collectionAccount: freezeType.value,
                tokenId: undefined,
                tokenAccount: undefined,
            }
        }

        if (freezeType.__kind === 'Token') {
            return {
                collectionId,
                freezeType: freezeType.__kind,
                freezeState: freezeType.freezeState,
                tokenId: freezeType.tokenId,
                collectionAccount: undefined,
                tokenAccount: undefined,
            }
        }

        return {
            collectionId,
            freezeType: freezeType.__kind,
            freezeState: undefined,
            tokenId: freezeType.tokenId,
            tokenAccount: freezeType.accountId,
            collectionAccount: undefined,
        }
    }

    throw new UnsupportedEventError(multiTokens.frozen)
}
