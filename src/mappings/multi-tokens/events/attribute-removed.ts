import { multiTokens } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

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
