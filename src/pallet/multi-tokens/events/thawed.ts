import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensThawed } from '~/model'
import { Freeze } from '~/pallet/multi-tokens/events/types'

export function thawed(event: EventItem): Freeze {
    return match(event)
        .returnType<Freeze>()
        .when(
            () => multiTokens.thawed.matrixEnjinV603.is(event),
            () => multiTokens.thawed.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function thawedEventModel(item: EventItem, data: Freeze): EventModel | undefined {
    let tokenId: null | string = null
    if (data.freezeType.__kind !== 'Collection' && data.freezeType.__kind !== 'CollectionAccount') {
        tokenId = `${data.collectionId}-${data.freezeType.tokenId}`
    }

    return new EventModel({
        id: item.id,
        name: MultiTokensThawed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: tokenId,
        data: new MultiTokensThawed(),
    })
}
