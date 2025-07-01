import { fuelTanks } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { AccountRemoved } from '~/pallet/fuel-tanks/events/types'

export function accountRemoved(event: EventItem): AccountRemoved {
    return match(event)
        .returnType<AccountRemoved>()
        .when(
            () => fuelTanks.accountRemoved.matrixEnjinV603.is(event),
            () => fuelTanks.accountRemoved.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
