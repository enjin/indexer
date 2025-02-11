import { balances } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { Thawed } from './types'

export function thawed(event: EventItem): Thawed {
    return match(event)
        .returnType<Thawed>()
        .when(
            () => balances.thawed.matrixEnjinV603.is(event),
            () => balances.thawed.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
