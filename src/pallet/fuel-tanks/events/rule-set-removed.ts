import { fuelTanks } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import { RuleSetRemoved } from './types'

export function ruleSetRemoved(event: EventItem): RuleSetRemoved {
    return match(event)
        .returnType<RuleSetRemoved>()
        .when(
            () => fuelTanks.ruleSetRemoved.matrixEnjinV603.is(event),
            () => fuelTanks.ruleSetRemoved.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
