import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensAttributeSet } from '@enjin/indexer/model'
import { safeString } from '@enjin/indexer/common/tools'
import { hexToString } from '@polkadot/util'

type AttributeSetEvent = {
    collectionId: bigint
    tokenId?: bigint | undefined
    key: string
    value: string
}

export function attributeSet(event: EventItem): AttributeSetEvent {
    return match(event)
        .returnType<AttributeSetEvent>()
        .when(multiTokens.attributeSet.matrixEnjinV603.is, multiTokens.attributeSet.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

export function attributeSetEventModel(item: EventItem, data: AttributeSetEvent): EventModel | undefined {
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
