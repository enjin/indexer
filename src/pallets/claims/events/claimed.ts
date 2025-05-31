import { claims } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Claimed } from './types'

export function claimed(event: EventItem): Claimed {
    return match(event)
        .returnType<Claimed>()
        .when(
            () => claims.claimed.matrixEnjinV603.is(event),
            () => claims.claimed.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
