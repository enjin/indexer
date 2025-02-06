import { fuelTanks } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

export function ruleSetRemoved(event: EventItem) {
    return match(event)
        .when(fuelTanks.ruleSetRemoved.matrixEnjinV603.is, () => fuelTanks.ruleSetRemoved.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(fuelTanks.ruleSetRemoved)
        })
}
