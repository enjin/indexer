import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensAttributeRemoved } from '../../../model'
import { AttributeRemoved } from './types'

export function attributeRemoved(event: EventItem): AttributeRemoved {
    return match(event)
        .returnType<AttributeRemoved>()
        .when(multiTokens.attributeRemoved.matrixEnjinV603.is, multiTokens.attributeRemoved.matrixEnjinV603.decode)
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
