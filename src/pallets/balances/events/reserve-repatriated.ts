import { balances } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
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
