import { claims } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
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
