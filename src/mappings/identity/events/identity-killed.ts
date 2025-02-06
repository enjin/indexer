import { identity } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type IdentityKilledEvent = {
    who: string
    deposit: bigint
}

export function identityKilled(event: EventItem) {
    return match(event)
        .returnType<IdentityKilledEvent>()
        .when(identity.identityKilled.matrixEnjinV1000.is, () => identity.identityKilled.matrixEnjinV1000.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(identity.identityKilled)
        })
}
