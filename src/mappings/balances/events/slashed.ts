import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
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
