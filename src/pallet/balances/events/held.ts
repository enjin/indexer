import { balances } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { HoldChange } from '~/pallet/balances/events/types'

export function held(event: EventItem): HoldChange {
    return match(event)
        .returnType<HoldChange>()
        .when(
            () => balances.held.matrixV1040.is(event),
            () => balances.held.matrixV1040.decode(event)
        )
        .when(
            () => balances.held.enjinV1070.is(event),
            () => balances.held.enjinV1070.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
