import { claims } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
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
