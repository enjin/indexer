import { UnsupportedEventError } from '../../common/errors'
import { fuelTanks } from '../../types/generated/events'
import { Event as EventModel, FuelTankRuleSet, PermittedExtrinsics } from '../../model'
import { CommonContext, EventItem, BlockHeader } from 'matrixchain-indexer/common/types/contexts'

function getEventData(event: EventItem) {
    if (fuelTanks.ruleSetRemoved.matrixEnjinV603.is(event)) {
        return fuelTanks.ruleSetRemoved.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(fuelTanks.ruleSetRemoved.name)
}
