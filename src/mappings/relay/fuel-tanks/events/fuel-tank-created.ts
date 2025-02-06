import { hexToString } from '@polkadot/util'
import { randomBytes } from 'crypto'
import { CallNotDefinedError, UnknownVersionError } from '../../../common/errors'
import { calls, events } from '../../../types/generated'
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
} from '../../../model'
import { CommonContext, BlockHeader, EventItem, CallItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { rulesToMap } from '../common'
import { safeJsonString } from '../../../common/tools'

function getEventData(event: EventItem) {
    if (events.fuelTanks.fuelTankCreated.enjinV100.is(event)) {
        return events.fuelTanks.fuelTankCreated.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.fuelTanks.fuelTankCreated.name)
}
