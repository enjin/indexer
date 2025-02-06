import { fuelTanks } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type RuleSetInsertedEvent = {
    ruleSetId: number
}

export function ruleSetInserted(event: EventItem): RuleSetInsertedEvent {
    return match(event)
        .returnType<RuleSetInsertedEvent>()
        .when(fuelTanks.ruleSetInserted.matrixEnjinV603.is, () => fuelTanks.ruleSetInserted.matrixEnjinV603.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
