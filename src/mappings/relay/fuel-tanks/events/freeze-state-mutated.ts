import { UnknownVersionError } from '../../../common/errors'
import { fuelTanks } from '../../../types/generated/events'
import { Event as EventModel, FuelTank, FuelTankRuleSet } from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'

function getEventData(event: EventItem) {
    if (fuelTanks.freezeStateMutated.enjinV100.is(event)) {
        return fuelTanks.freezeStateMutated.enjinV100.decode(event)
    }

    throw new UnknownVersionError(fuelTanks.freezeStateMutated.name)
}