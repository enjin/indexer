import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { DustLost } from './types'

export function dustLost(event: EventItem): DustLost {
    return match(event)
        .returnType<DustLost>()
        .when(
            () => balances.dustLost.matrixEnjinV603.is(event),
            () => balances.dustLost.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
