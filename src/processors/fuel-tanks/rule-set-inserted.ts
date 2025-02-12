import { CallNotDefinedError } from '../../common/errors'
import { calls } from '../../types/generated'
import { Event as EventModel, FuelTankRuleSet, PermittedExtrinsics } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import * as mappings from './../../mappings'

export async function ruleSetInserted(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem
): Promise<EventModel | undefined> {
    if (!item.call) throw new CallNotDefinedError()

    if (item.call.name === calls.fuelTanks.createFuelTank.name) {
        return undefined
    }

    const event = mappings.fuelTanks.events.ruleSetInserted(item)
    // const call = mappings.fuelTanks.calls.insertRuleSet(item.call)

    const ruleSetId = `${event.tankId}-${event.ruleSetId}`

    const [pE, rS] = await Promise.all([
        ctx.store.find(PermittedExtrinsics, { where: { ruleSet: { id: ruleSetId } } }),
        ctx.store.find(FuelTankRuleSet, { where: { id: ruleSetId } }),
    ])

    await Promise.all([ctx.store.remove(pE), ctx.store.remove(rS)])

    // TODO: Fix this
    // const {
    //     whitelistedCallers,
    //     whitelistedCollections,
    //     whitelistedPallets,
    //     maxFuelBurnPerTransaction,
    //     userFuelBudget,
    //     tankFuelBudget,
    //     requireToken,
    //     permittedCalls,
    //     permittedExtrinsics,
    //     requireSignature,
    //     minimumInfusion,
    // } = rulesToMap(ruleSetId, 'ruleSet' in callData ? callData.ruleSet.rules : callData.rules)
    //
    // const ruleSet = new FuelTankRuleSet({
    //     id: ruleSetId,
    //     index: eventData.ruleSetId,
    //     isPermittedExtrinsicsEmpty: permittedExtrinsics === undefined || permittedExtrinsics.length === 0,
    //     isPermittedExtrinsicsNull: permittedExtrinsics === undefined,
    //     tank: new FuelTank({ id: eventData.tankId }),
    //     isFrozen: false,
    //     whitelistedCallers,
    //     whitelistedCollections,
    //     whitelistedPallets,
    //     maxFuelBurnPerTransaction,
    //     userFuelBudget,
    //     tankFuelBudget,
    //     requireToken,
    //     permittedCalls,
    //     minimumInfusion,
    //     requireSignature,
    // })
    // await ctx.store.save(ruleSet)
    //
    // if (permittedExtrinsics && permittedExtrinsics.length > 0) {
    //     await ctx.store.save(permittedExtrinsics)
    // }

    return undefined
}
