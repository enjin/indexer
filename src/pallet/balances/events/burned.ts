import { balances } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import { Burned } from './types'

export function burned(event: EventItem): Burned {
    return match(event)
        .returnType<Burned>()
        .when(
            () => balances.burned.matrixEnjinV603.is(event),
            () => balances.burned.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
