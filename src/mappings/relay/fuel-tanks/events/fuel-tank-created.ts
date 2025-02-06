import { hexToString } from '@polkadot/util'
import { randomBytes } from 'crypto'
import { CallNotDefinedError, UnknownVersionError } from '../../../common/errors'
import { calls, events } from '../../../types/generated'
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
} from '../../../model'
import { CommonContext, BlockHeader, EventItem, CallItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { rulesToMap } from '../common'
import { safeJsonString } from '../../../common/tools'

function getEventData(event: EventItem) {
    if (events.fuelTanks.fuelTankCreated.enjinV100.is(event)) {
        return events.fuelTanks.fuelTankCreated.enjinV100.decode(event)
    }

    throw new UnknownVersionError(events.fuelTanks.fuelTankCreated.name)
}

function getCallData(ctx: CommonContext, call: CallItem) {
    if (call.name === 'FuelTanks.force_create_fuel_tank') {
        if (calls.fuelTanks.forceCreateFuelTank.enjinV1032.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.enjinV1032.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.enjinV1026.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.enjinV1026.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.enjinV1023.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.enjinV1023.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.enjinV1022.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.enjinV1022.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.enjinV1021.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.enjinV1021.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.enjinV120.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.enjinV120.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.enjinV110.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.enjinV110.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.enjinV101.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.enjinV101.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.v1050.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.v1050.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.v1032.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.v1032.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.v1031.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.v1031.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.v1026.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.v1026.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.v1023.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.v1023.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.v1022.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.v1022.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.v1021.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.v1021.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.v120.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.v120.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.v110.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.v110.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.v106.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.v106.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.v105.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.v105.decode(call)
        }

        throw new UnknownVersionError(calls.fuelTanks.forceCreateFuelTank.name)
    }

    if (calls.fuelTanks.createFuelTank.enjinV1032.is(call)) {
        return calls.fuelTanks.createFuelTank.enjinV1032.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.enjinV1026.is(call)) {
        return calls.fuelTanks.createFuelTank.enjinV1026.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.enjinV1023.is(call)) {
        return calls.fuelTanks.createFuelTank.enjinV1023.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.enjinV1022.is(call)) {
        return calls.fuelTanks.createFuelTank.enjinV1022.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.enjinV1021.is(call)) {
        return calls.fuelTanks.createFuelTank.enjinV1021.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.enjinV120.is(call)) {
        return calls.fuelTanks.createFuelTank.enjinV120.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.enjinV110.is(call)) {
        return calls.fuelTanks.createFuelTank.enjinV110.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.enjinV101.is(call)) {
        return calls.fuelTanks.createFuelTank.enjinV101.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.enjinV100.is(call)) {
        return calls.fuelTanks.createFuelTank.enjinV100.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.v1050.is(call)) {
        return calls.fuelTanks.createFuelTank.v1050.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.v1032.is(call)) {
        return calls.fuelTanks.createFuelTank.v1032.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.v1031.is(call)) {
        return calls.fuelTanks.createFuelTank.v1031.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.v1030.is(call)) {
        return calls.fuelTanks.createFuelTank.v1030.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.v1026.is(call)) {
        return calls.fuelTanks.createFuelTank.v1026.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.v1023.is(call)) {
        return calls.fuelTanks.createFuelTank.v1023.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.v1022.is(call)) {
        return calls.fuelTanks.createFuelTank.v1022.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.v1021.is(call)) {
        return calls.fuelTanks.createFuelTank.v1021.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.v120.is(call)) {
        return calls.fuelTanks.createFuelTank.v120.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.v110.is(call)) {
        return calls.fuelTanks.createFuelTank.v110.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.v106.is(call)) {
        return calls.fuelTanks.createFuelTank.v106.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.v105.is(call)) {
        return calls.fuelTanks.createFuelTank.v105.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.v104.is(call)) {
        return calls.fuelTanks.createFuelTank.v104.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.v103.is(call)) {
        return calls.fuelTanks.createFuelTank.v103.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.v102.is(call)) {
        return calls.fuelTanks.createFuelTank.v102.decode(call)
    }

    throw new UnknownVersionError(calls.fuelTanks.createFuelTank.name)
}

export async function fuelTankCreated(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.call) throw new CallNotDefinedError()

    const eventData = getEventData(item)

    const callData = getCallData(ctx, item.call)

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
