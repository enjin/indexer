import { identity } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import { SubIdentityAdded } from './types'

export function subIdentityAdded(event: EventItem): SubIdentityAdded {
    return match(event)
        .returnType<SubIdentityAdded>()
        .when(
            () => identity.subIdentityAdded.matrixEnjinV1000.is(event),
            () => identity.subIdentityAdded.matrixEnjinV1000.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
