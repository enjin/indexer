import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { ReserveRepatriated } from './types'

export function reserveRepatriated(event: EventItem): ReserveRepatriated {
    return match(event)
        .returnType<ReserveRepatriated>()
        .when(
            () => balances.reserveRepatriated.matrixEnjinV603.is(event),
            () => balances.reserveRepatriated.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
