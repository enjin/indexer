import { CallNotDefinedError } from '../../../util/errors'
import { calls } from '../../../type'
import { Event as EventModel, FuelTank, FuelTankRuleSet, PermittedExtrinsics } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import * as mappings from '../../index'
import { rulesToMap } from '../utils'

export async function ruleSetInserted(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
    if (!item.call) throw new CallNotDefinedError()

    if (item.call.name === calls.fuelTanks.createFuelTank.name) {
        return undefined
    }

    const event = mappings.fuelTanks.events.ruleSetInserted(item)
    const call = mappings.fuelTanks.calls.insertRuleSet(item.call)

    const ruleSetId = `${event.tankId}-${event.ruleSetId}`

    const [pE, rS] = await Promise.all([
        ctx.store.find(PermittedExtrinsics, { where: { ruleSet: { id: ruleSetId } } }),
        ctx.store.find(FuelTankRuleSet, { where: { id: ruleSetId } }),
    ])

    await Promise.all([ctx.store.remove(pE), ctx.store.remove(rS)])

    const rules = call.ruleSet !== undefined ? call.ruleSet.rules : call.rules

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
    } = rulesToMap(ruleSetId, rules)

    const ruleSet = new FuelTankRuleSet({
        id: ruleSetId,
        index: event.ruleSetId,
        isPermittedExtrinsicsEmpty: permittedExtrinsics === undefined || permittedExtrinsics.length === 0,
        isPermittedExtrinsicsNull: permittedExtrinsics === undefined,
        tank: new FuelTank({ id: event.tankId }),
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
        await ctx.store.save(permittedExtrinsics)
    }

    return undefined
}
