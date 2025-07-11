import { fuelTanks } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { FreezeStateMutated } from '~/pallet/fuel-tanks/events/types'

export function freezeStateMutated(event: EventItem): FreezeStateMutated {
    return match(event)
        .returnType<FreezeStateMutated>()
        .when(
            () => fuelTanks.freezeStateMutated.matrixEnjinV603.is(event),
            () => fuelTanks.freezeStateMutated.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
