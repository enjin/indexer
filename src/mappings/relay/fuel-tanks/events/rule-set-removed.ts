import { UnknownVersionError } from '../../../common/errors'
import { fuelTanks } from '../../../types/generated/events'
import { Event as EventModel, FuelTankRuleSet, PermittedExtrinsics } from '../../../model'
import { CommonContext, EventItem, BlockHeader } from '../../types/contexts'

function getEventData(event: EventItem) {
    if (fuelTanks.ruleSetRemoved.enjinV100.is(event)) {
        return fuelTanks.ruleSetRemoved.enjinV100.decode(event)
    }

    throw new UnknownVersionError(fuelTanks.ruleSetRemoved.name)
}