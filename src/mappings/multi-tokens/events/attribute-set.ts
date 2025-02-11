import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensAttributeSet } from '../../../model'
import { safeString } from '../../../common/tools'
import { hexToString } from '@polkadot/util'
import { AttributeSet } from './types'

export function attributeSet(event: EventItem): AttributeSet {
    return match(event)
        .returnType<AttributeSet>()
        .when(
            () => multiTokens.attributeSet.matrixEnjinV603.is(event),
            () => multiTokens.attributeSet.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function attributeSetEventModel(item: EventItem, data: AttributeSet): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensAttributeSet.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensAttributeSet({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            key: safeString(hexToString(data.key)),
            value: safeString(hexToString(data.value)),
        }),
    })
}
