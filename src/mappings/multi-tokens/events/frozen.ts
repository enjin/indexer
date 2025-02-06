import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensFrozen } from '@enjin/indexer/model'

type FrozenEvent = {
    collectionId: bigint
    freezeType: any
    freezeState?: boolean
    tokenId?: bigint
    collectionAccount?: string
    tokenAccount?: string
}

export function frozen(event: EventItem): FrozenEvent {
    return match(event)
        .returnType<FrozenEvent>()
        .when(multiTokens.frozen.matrixEnjinV603.is, multiTokens.frozen.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: MultiTokensFrozen.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensFrozen(),
    })
}
