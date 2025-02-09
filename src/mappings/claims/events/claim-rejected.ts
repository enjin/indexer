import { claims } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { ClaimRejected } from '@enjin/indexer/mappings/claims/events/types'

export function claimRejected(event: EventItem): ClaimRejected {
    return match(event)
        .returnType<ClaimRejected>()
        .when(claims.claimRejected.matrixEnjinV603.is, claims.claimRejected.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
