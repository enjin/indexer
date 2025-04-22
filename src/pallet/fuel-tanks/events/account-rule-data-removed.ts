import { fuelTanks } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import { AccountRuleDataRemoved } from './types'

export function accountRuleDataRemoved(event: EventItem): AccountRuleDataRemoved {
    return match(event)
        .returnType<AccountRuleDataRemoved>()
        .when(
            () => fuelTanks.accountRuleDataRemoved.matrixEnjinV1012.is(event),
            () => fuelTanks.accountRuleDataRemoved.matrixEnjinV1012.decode(event)
        )
        .when(
            () => fuelTanks.accountRuleDataRemoved.matrixEnjinV1000.is(event),
            () => fuelTanks.accountRuleDataRemoved.matrixEnjinV1000.decode(event)
        )
        .when(
            () => fuelTanks.accountRuleDataRemoved.matrixEnjinV603.is(event),
            () => fuelTanks.accountRuleDataRemoved.matrixEnjinV603.decode(event)
        )
        .when(
            () => fuelTanks.accountRuleDataRemoved.matrixV1012.is(event),
            () => fuelTanks.accountRuleDataRemoved.matrixV1012.decode(event)
        )
        .when(
            () => fuelTanks.accountRuleDataRemoved.matrixV1010.is(event),
            () => fuelTanks.accountRuleDataRemoved.matrixV1010.decode(event)
        )
        .when(
            () => fuelTanks.accountRuleDataRemoved.matrixV1000.is(event),
            () => fuelTanks.accountRuleDataRemoved.matrixV1000.decode(event)
        )
        .when(
            () => fuelTanks.accountRuleDataRemoved.matrixV500.is(event),
            () => fuelTanks.accountRuleDataRemoved.matrixV500.decode(event)
        )
        .when(
            () => fuelTanks.accountRuleDataRemoved.enjinV1032.is(event),
            () => fuelTanks.accountRuleDataRemoved.enjinV1032.decode(event)
        )
        .when(
            () => fuelTanks.accountRuleDataRemoved.enjinV1021.is(event),
            () => fuelTanks.accountRuleDataRemoved.enjinV1021.decode(event)
        )
        .when(
            () => fuelTanks.accountRuleDataRemoved.enjinV100.is(event),
            () => fuelTanks.accountRuleDataRemoved.enjinV100.decode(event)
        )
        .when(
            () => fuelTanks.accountRuleDataRemoved.v1032.is(event),
            () => fuelTanks.accountRuleDataRemoved.v1032.decode(event)
        )
        .when(
            () => fuelTanks.accountRuleDataRemoved.v1030.is(event),
            () => fuelTanks.accountRuleDataRemoved.v1030.decode(event)
        )
        .when(
            () => fuelTanks.accountRuleDataRemoved.v1021.is(event),
            () => fuelTanks.accountRuleDataRemoved.v1021.decode(event)
        )
        .when(
            () => fuelTanks.accountRuleDataRemoved.v102.is(event),
            () => fuelTanks.accountRuleDataRemoved.v102.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
