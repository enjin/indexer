import { identity } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type IdentitySetEvent = {
    who: string
}

export function identitySet(event: EventItem) {
    return match(event)
        .returnType<IdentitySetEvent>()
        .when(identity.identitySet.matrixEnjinV1000.is, () => identity.identitySet.matrixEnjinV1000.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(identity.identitySet)
        })
}
