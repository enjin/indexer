import { CallNotDefinedError, UnknownVersionError } from '../../../common/errors'
import { events, calls } from '../../../types/generated'
import { Event as EventModel, FuelTank, FuelTankRuleSet, PermittedExtrinsics } from '../../../model'
import { CommonContext, EventItem, BlockHeader, CallItem } from '../../types/contexts'
import { rulesToMap } from '../common'

function getEventData(event: EventItem) {
    if (events.fuelTanks.ruleSetInserted.enjinV100.is(event)) {
        return events.fuelTanks.ruleSetInserted.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.fuelTanks.ruleSetInserted.name)
}

function getCallData(call: CallItem) {
    if (calls.fuelTanks.insertRuleSet.enjinV1032.is(call)) {
        return calls.fuelTanks.insertRuleSet.enjinV1032.decode(call)
    }

    if (calls.fuelTanks.insertRuleSet.enjinV1026.is(call)) {
        return calls.fuelTanks.insertRuleSet.enjinV1026.decode(call)
    }

    if (calls.fuelTanks.insertRuleSet.enjinV1023.is(call)) {
        return calls.fuelTanks.insertRuleSet.enjinV1023.decode(call)
    }

    if (calls.fuelTanks.insertRuleSet.enjinV1022.is(call)) {
        return calls.fuelTanks.insertRuleSet.enjinV1022.decode(call)
    }

    if (calls.fuelTanks.insertRuleSet.enjinV1021.is(call)) {
        return calls.fuelTanks.insertRuleSet.enjinV1021.decode(call)
    }

    if (calls.fuelTanks.insertRuleSet.enjinV120.is(call)) {
        return calls.fuelTanks.insertRuleSet.enjinV120.decode(call)
    }

    if (calls.fuelTanks.insertRuleSet.enjinV110.is(call)) {
        return calls.fuelTanks.insertRuleSet.enjinV110.decode(call)
    }

    if (calls.fuelTanks.insertRuleSet.enjinV101.is(call)) {
        return calls.fuelTanks.insertRuleSet.enjinV101.decode(call)
    }

    if (calls.fuelTanks.insertRuleSet.enjinV100.is(call)) {
        return calls.fuelTanks.insertRuleSet.enjinV100.decode(call)
    }

    if (calls.fuelTanks.insertRuleSet.v1050.is(call)) {
        return calls.fuelTanks.insertRuleSet.v1050.decode(call)
    }

    if (calls.fuelTanks.insertRuleSet.v1032.is(call)) {
        return calls.fuelTanks.insertRuleSet.v1032.decode(call)
    }

    if (calls.fuelTanks.insertRuleSet.v1031.is(call)) {
        return calls.fuelTanks.insertRuleSet.v1031.decode(call)
    }

    if (calls.fuelTanks.insertRuleSet.v1030.is(call)) {
        return calls.fuelTanks.insertRuleSet.v1030.decode(call)
    }

    if (calls.fuelTanks.insertRuleSet.v1026.is(call)) {
        return calls.fuelTanks.insertRuleSet.v1026.decode(call)
    }

    if (calls.fuelTanks.insertRuleSet.v1023.is(call)) {
        return calls.fuelTanks.insertRuleSet.v1023.decode(call)
    }

    if (calls.fuelTanks.insertRuleSet.v1022.is(call)) {
        return calls.fuelTanks.insertRuleSet.v1022.decode(call)
    }

    if (calls.fuelTanks.insertRuleSet.v1021.is(call)) {
        return calls.fuelTanks.insertRuleSet.v1021.decode(call)
    }

    if (calls.fuelTanks.insertRuleSet.v120.is(call)) {
        return calls.fuelTanks.insertRuleSet.v120.decode(call)
    }

    if (calls.fuelTanks.insertRuleSet.v110.is(call)) {
        return calls.fuelTanks.insertRuleSet.v110.decode(call)
    }

    if (calls.fuelTanks.insertRuleSet.v106.is(call)) {
        return calls.fuelTanks.insertRuleSet.v106.decode(call)
    }

    if (calls.fuelTanks.insertRuleSet.v105.is(call)) {
        return calls.fuelTanks.insertRuleSet.v105.decode(call)
    }

    if (calls.fuelTanks.insertRuleSet.v104.is(call)) {
        return calls.fuelTanks.insertRuleSet.v104.decode(call)
    }

    if (calls.fuelTanks.insertRuleSet.v103.is(call)) {
        return calls.fuelTanks.insertRuleSet.v103.decode(call)
    }

    if (calls.fuelTanks.insertRuleSet.v102.is(call)) {
        return calls.fuelTanks.insertRuleSet.v102.decode(call)
    }

    throw new UnknownVersionError(calls.fuelTanks.insertRuleSet.name)
}

export async function ruleSetInserted(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.call) throw new CallNotDefinedError()

    if (item.call.name === calls.fuelTanks.createFuelTank.name) {
        return undefined
    }

    const eventData = getEventData(item)

    const callData = getCallData(item.call)
    if (!eventData || !callData) return undefined

    const { tankId } = eventData
    const ruleSetId = `${tankId}-${eventData.ruleSetId}`

    const [pE, rS] = await Promise.all([
        ctx.store.find(PermittedExtrinsics, { where: { ruleSet: { id: ruleSetId } } }),
        ctx.store.find(FuelTankRuleSet, { where: { id: ruleSetId } }),
    ])

    await Promise.all([ctx.store.remove(pE), ctx.store.remove(rS)])

    const {
        whitelistedCallers,
        whitelistedCollections,
        whitelistedPallets,
        maxFuelBurnPerTransaction,
        userFuelBudget,
        tankFuelBudget,
        requireToken,
        permittedCalls,
        permittedExtrinsics,
        requireSignature,
        minimumInfusion,
    } = rulesToMap(ruleSetId, 'ruleSet' in callData ? callData.ruleSet.rules : callData.rules)

    const ruleSet = new FuelTankRuleSet({
        id: ruleSetId,
        index: eventData.ruleSetId,
        isPermittedExtrinsicsEmpty: permittedExtrinsics === undefined || permittedExtrinsics.length === 0,
        isPermittedExtrinsicsNull: permittedExtrinsics === undefined,
        tank: new FuelTank({ id: tankId }),
        isFrozen: false,
        whitelistedCallers,
        whitelistedCollections,
        whitelistedPallets,
        maxFuelBurnPerTransaction,
        userFuelBudget,
        tankFuelBudget,
        requireToken,
        permittedCalls,
        minimumInfusion,
        requireSignature,
    })
    await ctx.store.save(ruleSet)

    if (permittedExtrinsics && permittedExtrinsics.length > 0) {
        ctx.store.save(permittedExtrinsics)
    }

    return undefined
}
