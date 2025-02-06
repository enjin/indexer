import { UnknownVersionError } from '../../../common/errors'
import { fuelTanks } from '../../../types/generated/events'
import {
    Event as EventModel,
    Extrinsic,
    FuelTank,
    FuelTankDestroyed,
    FuelTankAccountRules,
    FuelTankRuleSet,
    PermittedExtrinsics,
} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'

function getEventData(event: EventItem) {
    if (fuelTanks.fuelTankDestroyed.enjinV100.is(event)) {
        return fuelTanks.fuelTankDestroyed.enjinV100.decode(event)
    }

    throw new UnknownVersionError(fuelTanks.fuelTankDestroyed.name)
}
