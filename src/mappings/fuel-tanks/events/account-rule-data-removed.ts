import { fuelTanks } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

export function accountRuleDataRemoved(event: EventItem) {
    return match(event)
        .when(fuelTanks.accountRuleDataRemoved.matrixEnjinV1012.is, () =>
            fuelTanks.accountRuleDataRemoved.matrixEnjinV1012.decode(event)
        )
        .when(fuelTanks.accountRuleDataRemoved.matrixEnjinV1000.is, () =>
            fuelTanks.accountRuleDataRemoved.matrixEnjinV1000.decode(event)
        )
        .when(fuelTanks.accountRuleDataRemoved.matrixEnjinV603.is, () =>
            fuelTanks.accountRuleDataRemoved.matrixEnjinV603.decode(event)
        )
        .when(fuelTanks.accountRuleDataRemoved.matrixV1012.is, () => fuelTanks.accountRuleDataRemoved.matrixV1012.decode(event))
        .when(fuelTanks.accountRuleDataRemoved.matrixV1010.is, () => fuelTanks.accountRuleDataRemoved.matrixV1010.decode(event))
        .when(fuelTanks.accountRuleDataRemoved.matrixV1000.is, () => fuelTanks.accountRuleDataRemoved.matrixV1000.decode(event))
        .when(fuelTanks.accountRuleDataRemoved.matrixV500.is, () => fuelTanks.accountRuleDataRemoved.matrixV500.decode(event))
        .when(fuelTanks.accountRuleDataRemoved.enjinV1032.is, () => fuelTanks.accountRuleDataRemoved.enjinV1032.decode(event))
        .when(fuelTanks.accountRuleDataRemoved.enjinV1021.is, () => fuelTanks.accountRuleDataRemoved.enjinV1021.decode(event))
        .when(fuelTanks.accountRuleDataRemoved.enjinV100.is, () => fuelTanks.accountRuleDataRemoved.enjinV100.decode(event))
        .when(fuelTanks.accountRuleDataRemoved.v1032.is, () => fuelTanks.accountRuleDataRemoved.v1032.decode(event))
        .when(fuelTanks.accountRuleDataRemoved.v1030.is, () => fuelTanks.accountRuleDataRemoved.v1030.decode(event))
        .when(fuelTanks.accountRuleDataRemoved.v1021.is, () => fuelTanks.accountRuleDataRemoved.v1021.decode(event))
        .when(fuelTanks.accountRuleDataRemoved.v102.is, () => fuelTanks.accountRuleDataRemoved.v102.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
