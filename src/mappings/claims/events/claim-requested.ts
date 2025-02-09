import { claims } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { ClaimRequested } from '@enjin/indexer/mappings/claims/events/types'

export function claimRequested(event: EventItem): ClaimRequested {
    return match(event)
        .returnType<ClaimRequested>()
        .when(claims.claimRequested.matrixEnjinV603.is, claims.claimRequested.matrixEnjinV603.decode)
        .when(claims.claimRequested.v104.is, claims.claimRequested.v104.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
