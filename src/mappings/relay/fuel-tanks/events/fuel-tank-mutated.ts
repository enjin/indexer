import { randomBytes } from 'crypto'
import { UnknownVersionError } from '../../../common/errors'
import { fuelTanks } from '../../../types/generated/events'
import {
    CoveragePolicy,
    Event as EventModel,
    FuelTank,
    FuelTankAccountRules,
    FuelTankUserAccountManagement,
    RequireToken,
    WhitelistedCallers,
} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'

function getEventData(event: EventItem) {
    if (fuelTanks.fuelTankMutated.enjinV1032.is(event)) {
        return fuelTanks.fuelTankMutated.enjinV1032.decode(event)
    }

    if (fuelTanks.fuelTankMutated.enjinV100.is(event)) {
        return fuelTanks.fuelTankMutated.enjinV100.decode(event)
    }

    if (fuelTanks.fuelTankMutated.v1030.is(event)) {
        return fuelTanks.fuelTankMutated.v1030.decode(event)
    }

    if (fuelTanks.fuelTankMutated.v102.is(event)) {
        return fuelTanks.fuelTankMutated.v102.decode(event)
    }

    throw new UnknownVersionError(fuelTanks.fuelTankMutated.name)
}
