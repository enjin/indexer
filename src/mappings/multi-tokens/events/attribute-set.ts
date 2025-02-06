import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

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
