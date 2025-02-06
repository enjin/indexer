import { CallNotDefinedError, UnsupportedEventError } from '../../common/errors'
import { events, calls } from '../../types/generated'
import { Event as EventModel, FuelTank, FuelTankRuleSet, PermittedExtrinsics } from '../../model'
import { CommonContext, EventItem, BlockHeader, CallItem } from 'matrixchain-indexer/common/types/contexts'
import { rulesToMap } from './common'

function getEventData(event: EventItem) {
    if (events.fuelTanks.ruleSetInserted.matrixEnjinV603.is(event)) {
        return events.fuelTanks.ruleSetInserted.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(events.fuelTanks.ruleSetInserted.name)
}
