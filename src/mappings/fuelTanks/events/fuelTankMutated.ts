import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex, u8aToString } from '@polkadot/util'
import { randomBytes } from 'crypto'
import { CallNotDefinedError, UnknownVersionError } from '../../../common/errors'
import { FuelTanksFuelTankCreatedEvent, FuelTanksFuelTankMutatedEvent } from '../../../types/generated/events'
import {
    Event as EventModel,
    FuelTank,
    FuelTankAccountRules,
    FuelTankRuleSet,
    FuelTankUserAccountManagement,
    RequireToken,
    WhitelistedCallers,
} from '../../../model'
import { Call, Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { FuelTanksCreateFuelTankCall } from '../../../types/generated/calls'
import { getOrCreateAccount } from '../../util/entities'
import { rulesToMap } from '../common'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new FuelTanksFuelTankMutatedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getCallData(ctx: CommonContext, call: Call) {
    const data = new FuelTanksCreateFuelTankCall(ctx, call)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    if (data.isV604) {
        return data.asV604
    }

    if (data.isV602) {
        return data.asV602
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function fuelTankMutated(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'FuelTanks.FuelTankMutated', { event: { args: true; call: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    if (!item.event.call) throw new CallNotDefinedError()

    const eventData = getEventData(ctx, item.event)

    const callData = getCallData(ctx, item.event.call)
    if (!eventData || !callData) return undefined

    return undefined
}
