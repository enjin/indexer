import { fuelTanks } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import { AccountAdded } from './types'

export function accountAdded(event: EventItem): AccountAdded {
    return match(event)
        .returnType<AccountAdded>()
        .when(
            () => fuelTanks.accountAdded.matrixEnjinV1000.is(event),
            () => fuelTanks.accountAdded.matrixEnjinV1000.decode(event)
        )
        .when(
            () => fuelTanks.accountAdded.matrixEnjinV603.is(event),
            () => fuelTanks.accountAdded.matrixEnjinV603.decode(event)
        )
        .when(
            () => fuelTanks.accountAdded.matrixV1000.is(event),
            () => fuelTanks.accountAdded.matrixV1000.decode(event)
        )
        .when(
            () => fuelTanks.accountAdded.matrixV500.is(event),
            () => fuelTanks.accountAdded.matrixV500.decode(event)
        )
        .when(
            () => fuelTanks.accountAdded.enjinV1021.is(event),
            () => fuelTanks.accountAdded.enjinV1021.decode(event)
        )
        .when(
            () => fuelTanks.accountAdded.enjinV100.is(event),
            () => fuelTanks.accountAdded.enjinV100.decode(event)
        )
        .when(
            () => fuelTanks.accountAdded.v1021.is(event),
            () => fuelTanks.accountAdded.v1021.decode(event)
        )
        .when(
            () => fuelTanks.accountAdded.v102.is(event),
            () => fuelTanks.accountAdded.v102.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
