import { claims } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
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
