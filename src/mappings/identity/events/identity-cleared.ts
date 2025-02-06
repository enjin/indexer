import { identity } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type IdentityClearedEvent = {
    who: string
    deposit: bigint
}

function getEventData(event: EventItem) {
    return match(event)
        .returnType<IdentityClearedEvent>()
        .when(identity.identityCleared.matrixEnjinV1000.is, () => identity.identityCleared.matrixEnjinV1000.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(identity.identityCleared)
        })
}
