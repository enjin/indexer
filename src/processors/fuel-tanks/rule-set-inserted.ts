import { CallNotDefinedError } from '../../common/errors'
import { calls } from '../../types/generated'
import { Event as EventModel, FuelTank, FuelTankRuleSet, PermittedExtrinsics } from '../../model'
import { BlockHeader, CommonContext, EventItem } from 'matrixchain-indexer/common/types/contexts'
import { rulesToMap } from './common'
import * as mappings from './../../mappings'

export async function ruleSetInserted(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.call) throw new CallNotDefinedError()

    if (item.call.name === calls.fuelTanks.createFuelTank.name) {
        return undefined
    }

    const eventData = mappings.fuelTanks.events.ruleSetInserted(item)

    const callData = mappings.fuelTanks.calls.insertRuleSet(item.call)
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
