import { claims } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Claimed } from './types/claimed'

export function claimed(event: EventItem): Claimed {
    return match(event)
        .returnType<Claimed>()
        .when(claims.claimed.matrixEnjinV603.is, claims.claimed.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
