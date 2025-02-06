import { UnsupportedEventError } from '../../common/errors'
import { fuelTanks } from '../../types/generated/events'
import {
    Event as EventModel,
    Extrinsic,
    FuelTank,
    FuelTankDestroyed,
    FuelTankAccountRules,
    FuelTankRuleSet,
    PermittedExtrinsics,
} from '../../model'
import { CommonContext, BlockHeader, EventItem } from 'matrixchain-indexer/common/types/contexts'

function getEventData(event: EventItem) {
    if (fuelTanks.fuelTankDestroyed.matrixEnjinV603.is(event)) {
        return fuelTanks.fuelTankDestroyed.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(fuelTanks.fuelTankDestroyed.name)
}
