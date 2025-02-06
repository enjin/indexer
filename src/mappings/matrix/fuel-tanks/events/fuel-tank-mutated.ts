import { randomBytes } from 'crypto'
import { UnsupportedEventError } from '../../common/errors'
import { fuelTanks } from '../../types/generated/events'
import {
    CoveragePolicy,
    Event as EventModel,
    FuelTank,
    FuelTankAccountRules,
    FuelTankUserAccountManagement,
    RequireToken,
    WhitelistedCallers,
} from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'

function getEventData(event: EventItem) {
    if (fuelTanks.fuelTankMutated.matrixEnjinV1012.is(event)) {
        return fuelTanks.fuelTankMutated.matrixEnjinV1012.decode(event)
    }
    if (fuelTanks.fuelTankMutated.v1010.is(event)) {
        return fuelTanks.fuelTankMutated.v1010.decode(event)
    }

    if (fuelTanks.fuelTankMutated.matrixEnjinV603.is(event)) {
        return fuelTanks.fuelTankMutated.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(fuelTanks.fuelTankMutated.name)
}
