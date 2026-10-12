import { balances } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { HoldChange } from '~/pallet/balances/events/types'

export function released(event: EventItem): HoldChange {
    return match(event)
        .returnType<HoldChange>()
        .when(
            () => balances.released.matrixEnjinV1041.is(event),
            () => balances.released.matrixEnjinV1041.decode(event)
        )
        .when(
            () => balances.released.enjinV1070.is(event),
            () => balances.released.enjinV1070.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
