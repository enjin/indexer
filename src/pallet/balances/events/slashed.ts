import { balances } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { Slashed } from '~/pallet/balances/events/types'

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
