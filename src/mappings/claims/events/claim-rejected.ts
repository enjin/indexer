import { claims } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
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
