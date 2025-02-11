import { claims } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { ClaimMinted } from './types'

export function claimMinted(event: EventItem): ClaimMinted {
    return match(event)
        .returnType<ClaimMinted>()
        .when(
            () => claims.claimMinted.matrixEnjinV603.is(event),
            () => claims.claimMinted.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
