import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import { CallNotDefinedError, UnknownVersionError } from '../../../common/errors'
import { FuelTanksRuleSetInsertedEvent } from '../../../types/generated/events'
import { Event as EventModel, FuelTank, FuelTankRuleSet, PermittedExtrinsics } from '../../../model'
import { Call, Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { FuelTanksInsertRuleSetCall } from '../../../types/generated/calls'
import { rulesToMap } from '../common'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new FuelTanksRuleSetInsertedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getCallData(ctx: CommonContext, call: Call) {
    const data = new FuelTanksInsertRuleSetCall(ctx, call)

    if (data.isMatrixEnjinV1000) {
        return data.asMatrixEnjinV1000
    }

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    if (data.isV1003) {
        return data.asV1003
    }

    if (data.isV1000) {
        return data.asV1000
    }

    if (data.isV604) {
        return data.asV604
    }

    if (data.isV602) {
        return data.asV602
    }

    if (data.isV601) {
        return data.asV601
    }

    if (data.isV600) {
        return data.asV600
    }

    if (data.isV500) {
        return data.asV500
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function ruleSetInserted(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'FuelTanks.RuleSetInserted', { event: { args: true; call: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    if (!item.event.call) throw new CallNotDefinedError()

    const eventData = getEventData(ctx, item.event)

    const callData = getCallData(ctx, item.event.call)
    if (!eventData || !callData) return undefined

    const tankId = u8aToHex(eventData.tankId)
    const ruleSetId = `${tankId}-${eventData.ruleSetId}`

    await ctx.store.delete(PermittedExtrinsics, { ruleSet: { id: ruleSetId } })
    await ctx.store.delete(FuelTankRuleSet, { id: ruleSetId })

    const {
        whitelistedCallers,
        whitelistedCollections,
        maxFuelBurnPerTransaction,
        userFuelBudget,
        tankFuelBudget,
        requireToken,
        permittedCalls,
        permittedExtrinsics,
        whitelistedPallets,
    } = rulesToMap(ruleSetId, callData.rules)

    const ruleSet = new FuelTankRuleSet({
        id: ruleSetId,
        index: eventData.ruleSetId,
        isPermittedExtrinsicsEmpty: permittedExtrinsics === undefined || permittedExtrinsics.length === 0,
        isPermittedExtrinsicsNull: permittedExtrinsics === undefined,
        tank: new FuelTank({ id: tankId }),
        isFrozen: false,
        whitelistedCallers,
        whitelistedCollections,
        maxFuelBurnPerTransaction,
        userFuelBudget,
        tankFuelBudget,
        requireToken,
        permittedCalls,
        whitelistedPallets,
    })
    await ctx.store.save(ruleSet)

    if (permittedExtrinsics && permittedExtrinsics.length > 0) {
        permittedExtrinsics.forEach((permittedExtrinsic) => {
            ctx.store.save(permittedExtrinsic)
        })
    }

    return undefined
}
