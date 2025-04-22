import { claims } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import { ClaimRequested } from './types'

export function claimRequested(event: EventItem): ClaimRequested {
    return match(event)
        .returnType<ClaimRequested>()
        .when(
            () => claims.claimRequested.matrixEnjinV603.is(event),
            () => claims.claimRequested.matrixEnjinV603.decode(event)
        )
        .when(
            () => claims.claimRequested.v104.is(event),
            () => claims.claimRequested.v104.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
