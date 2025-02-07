import { identity } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type IdentityClearedEvent = {
    who: string
    deposit: bigint
}

export function identityCleared(event: EventItem): IdentityClearedEvent {
    return match(event)
        .returnType<IdentityClearedEvent>()
        .when(identity.identityCleared.matrixEnjinV1000.is, identity.identityCleared.matrixEnjinV1000.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
