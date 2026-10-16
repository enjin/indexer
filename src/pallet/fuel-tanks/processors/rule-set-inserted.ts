import { Event as EventModel, FuelTank, FuelTankRuleSet, PermittedExtrinsics } from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { rulesToMap } from '~/pallet/fuel-tanks/utils'
import {
    FuelTankCallSource,
    FuelTankInsertRuleSetSource,
    fuelTankCallSources,
    multiAddressMatches,
} from '~/pallet/fuel-tanks/call-sources'

export async function ruleSetInserted(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
    const event = mappings.fuelTanks.events.ruleSetInserted(item)
    const ruleSetId = `${event.tankId}-${event.ruleSetId}`

    const sources: FuelTankCallSource[] = item.call ? fuelTankCallSources(item.call) : []
    // The last matching insert wins: if one call inserts the same rule set twice, both events persist the final rules.
    const source = sources
        .filter(
            (s): s is FuelTankInsertRuleSetSource =>
                s.kind === 'insertRuleSet' &&
                s.ruleSetId === event.ruleSetId &&
                multiAddressMatches(s.tankId, event.tankId)
        )
        .at(-1)

    if (source === undefined) {
        // create_fuel_tank emits RuleSetInserted for each descriptor rule set; FuelTankCreated already persisted them.
        if (sources.some((s) => s.kind === 'create')) return undefined

        ctx.log.warn(
            `RuleSetInserted ${ruleSetId} at block ${block.height}: no decodable insert_rule_set call found in ` +
                `${item.call?.name ?? 'missing call'}; rule set left unchanged`
        )
        return undefined
    }

    const [pE, existing] = await Promise.all([
        ctx.store.find(PermittedExtrinsics, { where: { ruleSet: { id: ruleSetId } } }),
        ctx.store.findOneBy(FuelTankRuleSet, { id: ruleSetId }),
    ])

    // Replace the row wholesale so rules absent from the new rule set are cleared.
    await ctx.store.remove(pE)
    if (existing) await ctx.store.remove(existing)

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
    } = rulesToMap(ruleSetId, source.rules)

    const ruleSet = new FuelTankRuleSet({
        id: ruleSetId,
        index: event.ruleSetId,
        isPermittedExtrinsicsEmpty: permittedExtrinsics === undefined || permittedExtrinsics.length === 0,
        isPermittedExtrinsicsNull: permittedExtrinsics === undefined,
        tank: new FuelTank({ id: event.tankId }),
        // Re-inserting an existing rule set keeps its freeze state on chain (do_insert_or_remove_rule_set).
        isFrozen: existing?.isFrozen ?? false,
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
        requireAccount: source.requireAccount,
    })
    await ctx.store.save(ruleSet)

    if (permittedExtrinsics && permittedExtrinsics.length > 0) {
        await ctx.store.save(permittedExtrinsics)
    }

    return undefined
}
