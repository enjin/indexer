import { claims } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import { DelayTimeForClaimSet } from './types'

export function delayTimeForClaimSet(event: EventItem): DelayTimeForClaimSet {
    return match(event)
        .returnType<DelayTimeForClaimSet>()
        .when(
            () => claims.delayTimeForClaimSet.matrixEnjinV603.is(event),
            () => claims.delayTimeForClaimSet.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
