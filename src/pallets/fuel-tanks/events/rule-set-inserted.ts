import { fuelTanks } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { RuleSetInserted } from './types'

export function ruleSetInserted(event: EventItem): RuleSetInserted {
    return match(event)
        .returnType<RuleSetInserted>()
        .when(
            () => fuelTanks.ruleSetInserted.matrixEnjinV603.is(event),
            () => fuelTanks.ruleSetInserted.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
