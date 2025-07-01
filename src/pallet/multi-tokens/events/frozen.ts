import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensFrozen } from '~/model'
import { Freeze } from '~/pallet/multi-tokens/events/types'

export function frozen(event: EventItem): Freeze {
    return match(event)
        .returnType<Freeze>()
        .when(
            () => multiTokens.frozen.matrixEnjinV603.is(event),
            () => multiTokens.frozen.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function frozenEventModel(item: EventItem, data: Freeze): EventModel {
    let tokenId: null | string = null

    if (data.freezeType.__kind !== 'Collection' && data.freezeType.__kind !== 'CollectionAccount') {
        tokenId = `${data.collectionId}-${data.freezeType.tokenId}`
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
