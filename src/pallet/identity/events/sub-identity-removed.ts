import { identity } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import { SubIdentityRemoved } from './types'

export function subIdentityRemoved(event: EventItem): SubIdentityRemoved {
    return match(event)
        .returnType<SubIdentityRemoved>()
        .when(
            () => identity.subIdentityRemoved.matrixEnjinV1000.is(event),
            () => identity.subIdentityRemoved.matrixEnjinV1000.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
