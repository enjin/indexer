import { hexToString } from '@polkadot/util'
import { randomBytes } from 'crypto'
import { CallNotDefinedError } from '../../common/errors'
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
} from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { getOrCreateAccount } from '../../common/util/entities'
import { safeJsonString } from '../../common/tools'
import * as mappings from './../../mappings'

export async function fuelTankCreated(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.call) throw new CallNotDefinedError()

    const eventData = mappings.fuelTanks.events.fuelTankCreated(item)

    const callData = mappings.fuelTanks.calls.createFuelTank(item.call)

    if (!eventData || !callData) return undefined

    const [tankAccount, owner] = await Promise.all([
        getOrCreateAccount(ctx, eventData.tankId),
        getOrCreateAccount(ctx, eventData.owner),
    ])

    let userAccountManagement: FuelTankUserAccountManagement | undefined
    if (callData.descriptor.userAccountManagement) {
        userAccountManagement = new FuelTankUserAccountManagement({
            tankReservesAccountCreationDeposit: callData.descriptor.userAccountManagement.tankReservesAccountCreationDeposit,
            tankReservesExistentialDeposit:
                'tankReservesExistentialDeposit' in callData.descriptor.userAccountManagement
                    ? callData.descriptor.userAccountManagement.tankReservesExistentialDeposit
                    : callData.descriptor.userAccountManagement.tankReservesAccountCreationDeposit,
        })
    }

    const fuelTank = new FuelTank({
        id: tankAccount.id,
        tankAccount,
        name: hexToString(eventData.name),
        owner,
        isFrozen: false,
        accountCount: 0,
        providesDeposit: 'providesDeposit' in callData.descriptor ? callData.descriptor.providesDeposit : false,
        coveragePolicy:
            'coveragePolicy' in callData.descriptor ? CoveragePolicy[callData.descriptor.coveragePolicy.__kind] : null,
        userAccountManagement,
    })

    await ctx.store.save(fuelTank)

    if (callData.descriptor.accountRules.length > 0) {
        callData.descriptor.accountRules.forEach(async (rule) => {
            let accountRule: WhitelistedCallers | RequireToken
            if (rule.__kind === 'WhitelistedCallers') {
                accountRule = new WhitelistedCallers({
                    value: rule.value.map((account) => account),
                })
            } else if (rule.__kind === 'RequireToken') {
                accountRule = new RequireToken({
                    tokenId: rule.value.tokenId,
                    collectionId: rule.value.collectionId,
                })
            } else {
                throw new Error(`Unknown rule type :${safeJsonString(rule)}`)
            }

            const accountRuleModel = new FuelTankAccountRules({
                tank: fuelTank,
                rule: accountRule,
                id: `${fuelTank.id}-${accountRule.constructor.name}-${randomBytes(5).toString('hex')}`,
            })

            ctx.store.save(accountRuleModel)
        })
    }

    if (callData.descriptor.ruleSets.length > 0) {
        callData.descriptor.ruleSets.forEach(async (ruleSet) => {
            const index = ruleSet[0]
            let rules = ruleSet[1] as any

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
                ctx.store.save(permittedExtrinsics)
            }
        })
    }

    return new EventModel({
        id: item.id,
        name: FuelTankCreated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new FuelTankCreated({
            tank: fuelTank.id,
            owner: owner.id,
            name: hexToString(eventData.name),
        }),
    })
}
