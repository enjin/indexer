import { CallNotDefinedError, UnknownVersionError } from '../../../common/errors'
import { events, calls } from '../../../types/generated'
import { Event as EventModel, FuelTank, FuelTankRuleSet, PermittedExtrinsics } from '../../../model'
import { CommonContext, EventItem, BlockHeader, CallItem } from '../../types/contexts'
import { rulesToMap } from '../common'

function getEventData(event: EventItem) {
    if (events.fuelTanks.ruleSetInserted.enjinV100.is(event)) {
        return events.fuelTanks.ruleSetInserted.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.fuelTanks.ruleSetInserted.name)
}
