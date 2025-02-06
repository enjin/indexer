import { UnsupportedEventError } from '../../common/errors'
import { fuelTanks } from '../../types/generated/events'
import { Event as EventModel, FuelTankRuleSet, PermittedExtrinsics } from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'

function getEventData(event: EventItem) {
    if (fuelTanks.accountRuleDataRemoved.matrixEnjinV1012.is(event)) {
        return fuelTanks.accountRuleDataRemoved.matrixEnjinV1012.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.v1012.is(event)) {
        return fuelTanks.accountRuleDataRemoved.v1010.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.v1010.is(event)) {
        return fuelTanks.accountRuleDataRemoved.v1010.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.matrixEnjinV1000.is(event)) {
        return fuelTanks.accountRuleDataRemoved.matrixEnjinV1000.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.matrixEnjinV603.is(event)) {
        return fuelTanks.accountRuleDataRemoved.matrixEnjinV603.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.v1000.is(event)) {
        return fuelTanks.accountRuleDataRemoved.v1000.decode(event)
    }

    if (fuelTanks.accountRuleDataRemoved.v500.is(event)) {
        return fuelTanks.accountRuleDataRemoved.v500.decode(event)
    }

    throw new UnsupportedEventError(fuelTanks.accountRuleDataRemoved.name)
}
