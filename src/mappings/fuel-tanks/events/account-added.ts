import { fuelTanks } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

export function accountAdded(event: EventItem) {
    return match(event)
        .when(fuelTanks.accountAdded.matrixEnjinV1000.is, () => fuelTanks.accountAdded.matrixEnjinV1000.decode(event))
        .when(fuelTanks.accountAdded.matrixEnjinV603.is, () => fuelTanks.accountAdded.matrixEnjinV603.decode(event))
        .when(fuelTanks.accountAdded.matrixV1000.is, () => fuelTanks.accountAdded.matrixV1000.decode(event))
        .when(fuelTanks.accountAdded.matrixV500.is, () => fuelTanks.accountAdded.matrixV500.decode(event))
        .when(fuelTanks.accountAdded.enjinV1021.is, () => fuelTanks.accountAdded.enjinV1021.decode(event))
        .when(fuelTanks.accountAdded.enjinV100.is, () => fuelTanks.accountAdded.enjinV100.decode(event))
        .when(fuelTanks.accountAdded.v1021.is, () => fuelTanks.accountAdded.v1021.decode(event))
        .when(fuelTanks.accountAdded.v102.is, () => fuelTanks.accountAdded.v102.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(fuelTanks.accountAdded)
        })
}
