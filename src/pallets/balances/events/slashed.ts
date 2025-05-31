import { balances } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Slashed } from './types'

export function slashed(event: EventItem): Slashed {
    return match(event)
        .returnType<Slashed>()
        .when(
            () => balances.slashed.matrixEnjinV603.is(event),
            () => balances.slashed.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
