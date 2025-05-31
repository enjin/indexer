import { claims } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { ClaimRejected } from './types'

export function claimRejected(event: EventItem): ClaimRejected {
    return match(event)
        .returnType<ClaimRejected>()
        .when(
            () => claims.claimRejected.matrixEnjinV603.is(event),
            () => claims.claimRejected.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
