import { hexToString } from '@polkadot/util'
import { randomBytes } from 'crypto'
import { CallNotDefinedError, UnsupportedCallError } from '~/util/errors'
import { safeString } from '~/util/tools'
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
} from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import { getOrCreateAccount } from '~/util/entities'
import * as mappings from '~/pallet/index'
import { rulesToMap } from '~/pallet/fuel-tanks/utils'
import { FuelTankCreateSource, fuelTankCallSources, resolveCallSource } from '~/pallet/fuel-tanks/call-sources'
import { events } from '~/type'

export async function fuelTankCreated(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
    if (!item.call) throw new CallNotDefinedError()

    const event = mappings.fuelTanks.events.fuelTankCreated(item)
    // Several tanks can be created by one batch; the descriptor name identifies the one behind this event.
    const creates = fuelTankCallSources(item.call).filter((s): s is FuelTankCreateSource => s.kind === 'create')
    if (creates.length === 0) throw new UnsupportedCallError(item.call)
    const named = creates.filter((s) => s.descriptor.name === event.name)
    const candidates = named.length > 0 ? named : creates
    const call = resolveCallSource(item, candidates, (e) => isSameFuelTankCreated(e, event.name))
    if (call === undefined) {
        // Persist the tank from the event alone rather than guess its configuration from an unexecuted call.
        ctx.log.warn(
            `FuelTankCreated ${event.tankId} at block ${block.height}: ${candidates.length} differing create calls ` +
                `in ${item.call.name} cannot be matched to this event; tank stored without descriptor settings`
        )
    }
    const descriptor = call?.descriptor

    const [tankAccount, owner] = await Promise.all([
        getOrCreateAccount(ctx, event.tankId),
        getOrCreateAccount(ctx, event.owner),
    ])

    let userAccountManagement: FuelTankUserAccountManagement | undefined
    if (descriptor?.userAccountManagement) {
        userAccountManagement = new FuelTankUserAccountManagement({
            tankReservesAccountCreationDeposit: descriptor.userAccountManagement.tankReservesAccountCreationDeposit,
            tankReservesExistentialDeposit:
                'tankReservesExistentialDeposit' in descriptor.userAccountManagement
                    ? descriptor.userAccountManagement.tankReservesExistentialDeposit
                    : descriptor.userAccountManagement.tankReservesAccountCreationDeposit,
        })
    }

    let providesDeposit: boolean | undefined
    if (descriptor?.providesDeposit !== undefined) {
        //  'providesDeposit' in callData.descriptor ? callData.descriptor.providesDeposit : false,
        providesDeposit = descriptor.providesDeposit
    }

    const fuelTank = new FuelTank({
        id: tankAccount.id,
        tankAccount,
        name: safeString(hexToString(event.name)),
        owner,
        isFrozen: false,
        accountCount: 0,
        providesDeposit: providesDeposit ?? false,
        coveragePolicy: descriptor?.coveragePolicy ? CoveragePolicy[descriptor.coveragePolicy.__kind] : null,
        userAccountManagement,
        accountExpiration: descriptor?.accountExpiration ?? null,
    })

    await ctx.store.save(fuelTank)

    if (descriptor && descriptor.accountRules.length > 0) {
        for (const rule of descriptor.accountRules) {
            let accountRule: WhitelistedCallers | RequireToken
            if (rule.__kind === 'WhitelistedCallers') {
                accountRule = new WhitelistedCallers({
                    value: rule.value.map((account) => account),
                })
            } else {
                accountRule = new RequireToken({
                    tokenId: rule.value.tokenId,
                    collectionId: rule.value.collectionId,
                })
            }

            const accountRuleModel = new FuelTankAccountRules({
                tank: fuelTank,
                rule: accountRule,
                id: `${fuelTank.id}-${accountRule.constructor.name}-${randomBytes(5).toString('hex')}`,
            })

            await ctx.store.save(accountRuleModel)
        }
    }

    if (descriptor && descriptor.ruleSets.length > 0) {
        for (const ruleSet of descriptor.ruleSets) {
            const index = ruleSet[0]
            let rules = ruleSet[1]
            let requireAccount = false

            if (!Array.isArray(rules)) {
                requireAccount = rules.requireAccount
                rules = rules.rules
            }

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
            } = rulesToMap(`${fuelTank.id}-${index}`, rules)

            const ruleSetModel = new FuelTankRuleSet({
                id: `${fuelTank.id}-${index}`,
                tank: fuelTank,
                index,
                isFrozen: false,
                requireAccount,
                isPermittedExtrinsicsEmpty: permittedExtrinsics === undefined || permittedExtrinsics.length === 0,
                isPermittedExtrinsicsNull: permittedExtrinsics === undefined,
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

            await ctx.store.save(ruleSetModel)

            if (permittedExtrinsics && permittedExtrinsics.length > 0) {
                await ctx.store.save(permittedExtrinsics)
            }
        }
    }

    return new EventModel({
        id: item.id,
        name: FuelTankCreated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new FuelTankCreated({
            tank: fuelTank.id,
            owner: owner.id,
            name: safeString(hexToString(event.name)),
        }),
    })
}

function isSameFuelTankCreated(item: EventItem, name: string): boolean {
    if (item.name !== events.fuelTanks.fuelTankCreated.name) return false
    try {
        return mappings.fuelTanks.events.fuelTankCreated(item).name === name
    } catch {
        return false
    }
}
