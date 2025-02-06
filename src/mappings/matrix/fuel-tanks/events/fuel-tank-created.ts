import { hexToString } from '@polkadot/util'
import { randomBytes } from 'crypto'
import { CallNotDefinedError, UnsupportedEventError } from '../../common/errors'
import { calls, events } from '../../types/generated'
import {
    CoveragePolicy,
    Event as EventModel,
    Extrinsic,
    FuelTank,
    FuelTankAccountRules,
    FuelTankCreated,
    FuelTankRuleSet,
    FuelTankUserAccountManagement,
    RequireToken,
    WhitelistedCallers,
} from '../../model'
import { CommonContext, BlockHeader, EventItem, CallItem } from 'matrixchain-indexer/common/types/contexts'
import { getOrCreateAccount } from 'matrixchain-indexer/common/util/entities'
import { rulesToMap } from './common'
import { safeJsonString } from '../../common/tools'

function getEventData(event: EventItem) {
    if (events.fuelTanks.fuelTankCreated.matrixEnjinV603.is(event)) {
        return events.fuelTanks.fuelTankCreated.matrixEnjinV603.decode(event)
    }

    throw new UnsupportedEventError(events.fuelTanks.fuelTankCreated.name)
}
