import { identity } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import { SubIdentityRevoked } from './types'

export function subIdentityRevoked(event: EventItem): SubIdentityRevoked {
    return match(event)
        .returnType<SubIdentityRevoked>()
        .when(
            () => identity.subIdentityRevoked.matrixEnjinV1000.is(event),
            () => identity.subIdentityRevoked.matrixEnjinV1000.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
