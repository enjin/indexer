import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex, u8aToString } from '@polkadot/util'
import { randomBytes } from 'crypto'
import { CallNotDefinedError, UnknownVersionError } from '../../../common/errors'
import { FuelTanksFuelTankCreatedEvent } from '../../../types/generated/events'
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
import { Call, Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { FuelTanksCreateFuelTankCall, FuelTanksForceCreateFuelTankCall } from '../../../types/generated/calls'
import { getOrCreateAccount } from '../../util/entities'
import { rulesToMap } from '../common'
import { safeJsonString } from '../../../common/tools'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new FuelTanksFuelTankCreatedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getCallData(ctx: CommonContext, call: Call) {
    let data: FuelTanksCreateFuelTankCall | FuelTanksForceCreateFuelTankCall
    if (call.name === 'FuelTanks.force_create_fuel_tank') {
        data = new FuelTanksForceCreateFuelTankCall(ctx, call)
    } else {
        data = new FuelTanksCreateFuelTankCall(ctx, call)

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
    }

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function fuelTankCreated(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'FuelTanks.FuelTankCreated', { event: { args: true; call: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    if (!item.event.call) throw new CallNotDefinedError()

    const eventData = getEventData(ctx, item.event)

    const callData = getCallData(ctx, item.event.call)
    if (!eventData || !callData) return undefined

    const [tankAccount, owner] = await Promise.all([
        getOrCreateAccount(ctx, eventData.tankId),
        getOrCreateAccount(ctx, eventData.owner),
    ])

    let userAccountManagement: FuelTankUserAccountManagement | undefined
    if (callData.descriptor.userAccountManagement) {
        userAccountManagement = new FuelTankUserAccountManagement({
            tankReservesAccountCreationDeposit: callData.descriptor.userAccountManagement.tankReservesAccountCreationDeposit,
            tankReservesExistentialDeposit: callData.descriptor.userAccountManagement.tankReservesExistentialDeposit,
        })
    }

    const fuelTank = new FuelTank({
        id: tankAccount.id,
        tankAccount,
        name: u8aToString(eventData.name),
        owner,
        isFrozen: false,
        accountCount: 0,
        providesDeposit: callData.descriptor.providesDeposit,
        userAccountManagement,
    })

    await ctx.store.save(fuelTank)

    if (callData.descriptor.accountRules.length > 0) {
        callData.descriptor.accountRules.forEach(async (rule) => {
            let accountRule: WhitelistedCallers | RequireToken
            if (rule.__kind === 'WhitelistedCallers') {
                accountRule = new WhitelistedCallers({
                    value: rule.value.map((account) => u8aToHex(account)),
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
            const [index, rules] = ruleSet

            const {
                whitelistedCallers,
                whitelistedCollections,
                maxFuelBurnPerTransaction,
                userFuelBudget,
                tankFuelBudget,
                requireToken,
                permittedCalls,
                permittedExtrinsics,
            } = rulesToMap(`${fuelTank.id}-${index}`, rules)

            const ruleSetModel = new FuelTankRuleSet({
                id: `${fuelTank.id}-${index}`,
                tank: fuelTank,
                index,
                isFrozen: false,
                isPermittedExtrinsicsEmpty: permittedExtrinsics === undefined || permittedExtrinsics.length === 0,
                whitelistedCallers,
                whitelistedCollections,
                maxFuelBurnPerTransaction,
                userFuelBudget,
                tankFuelBudget,
                requireToken,
                permittedCalls,
            })

            await ctx.store.save(ruleSetModel)

            if (permittedExtrinsics && permittedExtrinsics.length > 0) {
                permittedExtrinsics.forEach((permittedExtrinsic) => {
                    ctx.store.save(permittedExtrinsic)
                })
            }
        })
    }

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: new FuelTankCreated({
            tank: fuelTank.id,
            owner: owner.id,
            name: u8aToString(eventData.name),
        }),
    })
}
