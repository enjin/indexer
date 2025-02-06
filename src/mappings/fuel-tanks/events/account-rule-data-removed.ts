import { fuelTanks } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'

function getEventData(event: EventItem) {
    if (fuelTanks.accountRuleDataRemoved.matrixEnjinV1012.is(event)) {
        return fuelTanks.accountRuleDataRemoved.matrixEnjinV1012.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.matrixEnjinV1000.is(event)) {
        return fuelTanks.accountRuleDataRemoved.matrixEnjinV1000.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.matrixEnjinV603.is(event)) {
        return fuelTanks.accountRuleDataRemoved.matrixEnjinV603.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.matrixV1012.is(event)) {
        return fuelTanks.accountRuleDataRemoved.matrixV1012.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.matrixV1010.is(event)) {
        return fuelTanks.accountRuleDataRemoved.matrixV1010.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.matrixV1000.is(event)) {
        return fuelTanks.accountRuleDataRemoved.matrixV1000.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.matrixV500.is(event)) {
        return fuelTanks.accountRuleDataRemoved.matrixV500.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.enjinV1032.is(event)) {
        return fuelTanks.accountRuleDataRemoved.enjinV1032.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.enjinV1021.is(event)) {
        return fuelTanks.accountRuleDataRemoved.enjinV1021.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.enjinV100.is(event)) {
        return fuelTanks.accountRuleDataRemoved.enjinV100.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.v1032.is(event)) {
        return fuelTanks.accountRuleDataRemoved.v1032.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.v1030.is(event)) {
        return fuelTanks.accountRuleDataRemoved.v1030.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.v1021.is(event)) {
        return fuelTanks.accountRuleDataRemoved.v1021.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.v102.is(event)) {
        return fuelTanks.accountRuleDataRemoved.v102.decode(event)
    }

    throw new UnsupportedEventError(fuelTanks.accountRuleDataRemoved)
}
