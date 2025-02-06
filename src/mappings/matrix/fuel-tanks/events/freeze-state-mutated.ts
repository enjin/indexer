import { UnsupportedEventError } from '../../common/errors'
import { fuelTanks } from '../../types/generated/events'
import { Event as EventModel, FuelTank, FuelTankRuleSet } from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'

function getEventData(event: EventItem) {
    if (fuelTanks.freezeStateMutated.matrixEnjinV603.is(event)) {
        return fuelTanks.freezeStateMutated.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(fuelTanks.freezeStateMutated.name)
}
