import { fuelTanks } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type AccountAddedEvent = {
    tankId: string
    userId: string
    tankDeposit: bigint
    userDeposit: bigint
    totalReceived?: bigint
}

export function accountAdded(event: EventItem): AccountAddedEvent {
    return match(event)
        .returnType<AccountAddedEvent>()
        .when(fuelTanks.accountAdded.matrixEnjinV1000.is, fuelTanks.accountAdded.matrixEnjinV1000.decode)
        .when(fuelTanks.accountAdded.matrixEnjinV603.is, fuelTanks.accountAdded.matrixEnjinV603.decode)
        .when(fuelTanks.accountAdded.matrixV1000.is, fuelTanks.accountAdded.matrixV1000.decode)
        .when(fuelTanks.accountAdded.matrixV500.is, fuelTanks.accountAdded.matrixV500.decode)
        .when(fuelTanks.accountAdded.enjinV1021.is, fuelTanks.accountAdded.enjinV1021.decode)
        .when(fuelTanks.accountAdded.enjinV100.is, fuelTanks.accountAdded.enjinV100.decode)
        .when(fuelTanks.accountAdded.v1021.is, fuelTanks.accountAdded.v1021.decode)
        .when(fuelTanks.accountAdded.v102.is, fuelTanks.accountAdded.v102.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
