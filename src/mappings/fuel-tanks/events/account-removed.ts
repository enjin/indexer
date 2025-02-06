import { fuelTanks } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

export function accountRemoved(event: EventItem) {
    return match(event)
        .when(fuelTanks.accountRemoved.matrixEnjinV603.is, () => fuelTanks.accountRemoved.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(fuelTanks.accountRemoved)
        })
}
