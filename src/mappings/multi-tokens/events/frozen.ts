import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensFrozen } from '@enjin/indexer/model'
import { Freeze } from './types/freeze'

export function frozen(event: EventItem): Freeze {
    return match(event)
        .returnType<Freeze>()
        .when(multiTokens.frozen.matrixEnjinV603.is, multiTokens.frozen.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function frozenEventModel(item: EventItem, data: Freeze): EventModel {
    let tokenId: null | string = null
    if (data.freezeType.value && typeof data.freezeType.value !== 'string') {
        tokenId = 'tokenId' in data.freezeType.value ? `${data.collectionId}-${data.freezeType.value.tokenId}` : null
    }

    return new EventModel({
        id: item.id,
        name: MultiTokensFrozen.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: tokenId,
        data: new MultiTokensFrozen(),
    })
}
