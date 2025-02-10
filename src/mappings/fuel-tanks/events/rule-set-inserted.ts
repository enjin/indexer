import { fuelTanks } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { RuleSetInserted } from './types'

export function ruleSetInserted(event: EventItem): RuleSetInserted {
    return match(event)
        .returnType<RuleSetInserted>()
        .when(fuelTanks.ruleSetInserted.matrixEnjinV603.is, fuelTanks.ruleSetInserted.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
