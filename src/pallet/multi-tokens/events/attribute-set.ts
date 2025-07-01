import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensAttributeSet } from '~/model'
import { safeString } from '~/util/tools'
import { AttributeSet } from '~/pallet/multi-tokens/events/types' 
import { hexToString } from '@polkadot/util'

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
            key: safeString(data.key),
            value: safeString(hexToString(data.value)),
        }),
    })
}
