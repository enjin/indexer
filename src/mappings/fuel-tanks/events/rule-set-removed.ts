import { fuelTanks } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
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
