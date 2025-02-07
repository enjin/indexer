import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensFrozen } from '@enjin/indexer/model'

type FrozenEvent = {
    collectionId: bigint
    freezeType: {
        __kind: string
        value?: string | { tokenId: bigint; freezeState: { __kind: string } | undefined } | { tokenId: bigint; accountId: string }
    }
}

export function frozen(event: EventItem): FrozenEvent {
    return match(event)
        .returnType<FrozenEvent>()
        .when(multiTokens.frozen.matrixEnjinV603.is, multiTokens.frozen.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function frozenEventModel(item: EventItem, data: FrozenEvent): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensFrozen.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensFrozen(),
    })
}
