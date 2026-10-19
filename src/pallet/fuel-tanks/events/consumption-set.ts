import { fuelTanks } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { ConsumptionSet } from '~/pallet/fuel-tanks/events/types'

export function consumptionSet(event: EventItem): ConsumptionSet {
    return match(event)
        .returnType<ConsumptionSet>()
        .when(
            () => fuelTanks.consumptionSet.matrixEnjinV603.is(event),
            () => fuelTanks.consumptionSet.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
