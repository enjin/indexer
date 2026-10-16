import { balances } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { HoldChange } from '~/pallet/balances/events/types'

export function burnedHeld(event: EventItem): HoldChange {
    return match(event)
        .returnType<HoldChange>()
        .when(
            () => balances.burnedHeld.matrixEnjinV1041.is(event),
            () => balances.burnedHeld.matrixEnjinV1041.decode(event)
        )
        .when(
            () => balances.burnedHeld.enjinV1070.is(event),
            () => balances.burnedHeld.enjinV1070.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
