import { identity } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type SubIdentityRemovedEvent = {
    main: string
    sub: string
    deposit: bigint
}

export function subIdentityRemoved(event: EventItem) {
    return match(event)
        .returnType<SubIdentityRemovedEvent>()
        .when(identity.subIdentityRemoved.matrixEnjinV1000.is, () => identity.subIdentityRemoved.matrixEnjinV1000.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(identity.subIdentityRemoved)
        })
}
