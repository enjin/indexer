import { balances } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Thawed } from '~/pallet/balances/events/types'

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
