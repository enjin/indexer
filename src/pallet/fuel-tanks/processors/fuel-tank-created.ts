import { hexToString } from '@polkadot/util'
import { randomBytes } from 'crypto'
import { CallNotDefinedError } from '../../../util/errors'
import {
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
import { Block, CommonContext, EventItem } from '../../../contexts'
import { getOrCreateAccount } from '../../../util/entities'
import * as mappings from '../../index'
import { rulesToMap } from '../utils'

export async function fuelTankCreated(
    ctx: CommonContext,
    block: Block,
    item: EventItem
): Promise<EventModel | undefined> {
    if (!item.call) throw new CallNotDefinedError()

    const event = mappings.fuelTanks.events.fuelTankCreated(item)
    const call = mappings.fuelTanks.utils.anyCreateFuelTank(item.call)

    const [tankAccount, owner] = await Promise.all([
        getOrCreateAccount(ctx, event.tankId),
        getOrCreateAccount(ctx, event.owner),
    ])

    let userAccountManagement: FuelTankUserAccountManagement | undefined
    if (call.descriptor.userAccountManagement) {
        userAccountManagement = new FuelTankUserAccountManagement({
            tankReservesAccountCreationDeposit:
                call.descriptor.userAccountManagement.tankReservesAccountCreationDeposit,
            tankReservesExistentialDeposit:
                'tankReservesExistentialDeposit' in call.descriptor.userAccountManagement
                    ? call.descriptor.userAccountManagement.tankReservesExistentialDeposit
                    : call.descriptor.userAccountManagement.tankReservesAccountCreationDeposit,
        })
    }

    let providesDeposit: boolean | undefined
    if (call.descriptor.providesDeposit !== undefined) {
        //  'providesDeposit' in callData.descriptor ? callData.descriptor.providesDeposit : false,
        providesDeposit = call.descriptor.providesDeposit
    }
    //  'coveragePolicy' in callData.descriptor ? CoveragePolicy[callData.descriptor.coveragePolicy.__kind] : null,

    const fuelTank = new FuelTank({
        id: tankAccount.id,
        tankAccount,
        name: hexToString(event.name),
        owner,
        isFrozen: false,
        accountCount: 0,
        providesDeposit: providesDeposit ?? false,
        coveragePolicy: null,
        userAccountManagement,
    })

    await ctx.store.save(fuelTank)

    if (call.descriptor.accountRules.length > 0) {
        for (const rule of call.descriptor.accountRules) {
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

    if (call.descriptor.ruleSets.length > 0) {
        for (const ruleSet of call.descriptor.ruleSets) {
            const index = ruleSet[0]
            let rules = ruleSet[1]

            if (!Array.isArray(rules)) {
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
                minimumInfusion,
            } = rulesToMap(`${fuelTank.id}-${index}`, rules)

            const ruleSetModel = new FuelTankRuleSet({
                id: `${fuelTank.id}-${index}`,
                tank: fuelTank,
                index,
                isFrozen: false,
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
            name: hexToString(event.name),
        }),
    })
}
