import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensAttributeRemoved } from '@enjin/indexer/model'

type AttributeRemovedEvent = {
    collectionId: bigint
    tokenId?: bigint | undefined
    key: string
}

export function attributeRemoved(event: EventItem): AttributeRemovedEvent {
    return match(event)
        .returnType<AttributeRemovedEvent>()
        .when(multiTokens.attributeRemoved.matrixEnjinV603.is, multiTokens.attributeRemoved.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function attributeRemovedEventModel(item: EventItem, data: AttributeRemovedEvent): EventModel | undefined {
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
