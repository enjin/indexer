import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensAttributeRemoved } from '~/model'
import { AttributeRemoved } from '~/pallet/multi-tokens/events/types' 

export function attributeRemoved(event: EventItem): AttributeRemoved {
    return match(event)
        .returnType<AttributeRemoved>()
        .when(
            () => multiTokens.attributeRemoved.matrixEnjinV603.is(event),
            () => multiTokens.attributeRemoved.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function attributeRemovedEventModel(item: EventItem, data: AttributeRemoved): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensAttributeRemoved.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensAttributeRemoved({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            key: data.key,
        }),
    })
}
