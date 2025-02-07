import { fuelTanks } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type RuleSetRemovedEvent = {
    tankId: string
    ruleSetId: number
}

export function ruleSetRemoved(event: EventItem): RuleSetRemovedEvent {
    return match(event)
        .returnType<RuleSetRemovedEvent>()
        .when(fuelTanks.ruleSetRemoved.matrixEnjinV603.is, fuelTanks.ruleSetRemoved.matrixEnjinV603.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
