import { fuelTanks } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { DestroyFuelTankScheduled } from '~/pallet/fuel-tanks/events/types'

export function destroyFuelTankScheduled(event: EventItem): DestroyFuelTankScheduled {
    return match(event)
        .returnType<DestroyFuelTankScheduled>()
        .when(
            () => fuelTanks.destroyFuelTankScheduled.matrixEnjinV1031.is(event),
            () => fuelTanks.destroyFuelTankScheduled.matrixEnjinV1031.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
