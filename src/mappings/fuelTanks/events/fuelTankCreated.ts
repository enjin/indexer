import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex, u8aToString } from '@polkadot/util'
import { randomBytes } from 'crypto'
import { UnknownVersionError } from '../../../common/errors'
import { FuelTanksFuelTankCreatedEvent } from '../../../types/generated/events'
import {
    Event as EventModel,
    FuelTank,
    FuelTankAccountRules,
    FuelTankRuleSet,
    FuelTankUserAccountManagement,
    MaxFuelBurnPerTransaction,
    PermittedCalls,
    PermittedExtrinsics,
    RequireToken,
    TankFuelBudget,
    UserFuelBudget,
    WhitelistedCallers,
    WhitelistedCollections,
} from '../../../model'
import { Call, Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { FuelTanksCreateFuelTankCall } from '../../../types/generated/calls'
import { getOrCreateAccount } from '../../util/entities'
import { DispatchRuleDescriptor } from '../../../types/generated/matrixEnjinV603'
import { DispatchRuleDescriptor as DispatchRuleDescriptorV602 } from '../../../types/generated/v602'
import { safeJson } from '../../../common/tools'

function rulesToMap(rules: DispatchRuleDescriptor[] | DispatchRuleDescriptorV602[]) {
    let whitelistedCallers: WhitelistedCallers | undefined
    let whitelistedCollections: WhitelistedCollections | undefined
    let maxFuelBurnPerTransaction: MaxFuelBurnPerTransaction | undefined
    let userFuelBudget: UserFuelBudget | undefined
    let tankFuelBudget: TankFuelBudget | undefined
    let requireToken: RequireToken | undefined
    let permittedCalls: PermittedCalls | undefined
    let permittedExtrinsics: PermittedExtrinsics[] | undefined

    rules.forEach((rule) => {
        if (rule.__kind === 'WhitelistedCallers') {
            whitelistedCallers = new WhitelistedCallers({ value: rule.value.map((account) => u8aToHex(account)) })
        } else if (rule.__kind === 'WhitelistedCollections') {
            whitelistedCollections = new WhitelistedCollections({ value: rule.value })
        } else if (rule.__kind === 'MaxFuelBurnPerTransaction') {
            maxFuelBurnPerTransaction = new MaxFuelBurnPerTransaction({ value: rule.value })
        } else if (rule.__kind === 'UserFuelBudget') {
            userFuelBudget = new UserFuelBudget({ amount: rule.value.amount, resetPeriod: rule.value.resetPeriod })
        } else if (rule.__kind === 'TankFuelBudget') {
            tankFuelBudget = new TankFuelBudget({ amount: rule.value.amount, resetPeriod: rule.value.resetPeriod })
        } else if (rule.__kind === 'RequireToken') {
            requireToken = new RequireToken({
                tokenId: rule.value.tokenId,
                collectionId: rule.value.collectionId,
            })
        } else if (rule.__kind === 'PermittedCalls') {
            permittedCalls = new PermittedCalls({ value: rule.value.map((call) => u8aToHex(call)) })
        } else if (rule.__kind === 'PermittedExtrinsics') {
            permittedExtrinsics = rule.value.map(
                (r) => new PermittedExtrinsics({ extrinsicName: r.__kind, palletName: r.value.__kind, raw: safeJson(r.value) })
            )
        }
    })

    return {
        whitelistedCallers,
        whitelistedCollections,
        maxFuelBurnPerTransaction,
        userFuelBudget,
        tankFuelBudget,
        requireToken,
        permittedCalls,
        permittedExtrinsics,
    }
}

function getEventData(ctx: CommonContext, event: Event) {
    const data = new FuelTanksFuelTankCreatedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getCallData(ctx: CommonContext, call: Call) {
    const data = new FuelTanksCreateFuelTankCall(ctx, call)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    if (data.isV604) {
        return data.asV604
    }

    if (data.isV602) {
        return data.asV602
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function fuelTankCreated(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'FuelTanks.FuelTankCreated', { event: { args: true; call: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    if (!item.event.call) throw new Error('Call is not defined')

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
        providesDeposit: callData.descriptor.providesDeposit,
        userAccountManagement,
    })

    await ctx.store.save(fuelTank)

    if (callData.descriptor.accountRules.length > 0) {
        callData.descriptor.accountRules.forEach(async (rule) => {
            let accountRule: WhitelistedCallers | RequireToken
            if (rule.__kind === WhitelistedCallers.prototype.isTypeOf) {
                accountRule = new WhitelistedCallers({
                    value: rule.value.map((account) => u8aToHex(account)),
                })
            } else if (rule.__kind === RequireToken.prototype.isTypeOf) {
                accountRule = new RequireToken({
                    tokenId: rule.value.tokenId,
                    collectionId: rule.value.collectionId,
                })
            } else {
                throw new Error('Unknown rule type')
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
            } = rulesToMap(rules)

            const ruleSetModel = new FuelTankRuleSet({
                id: `${fuelTank.id}-rule-${index}`,
                tank: fuelTank,
                index,
                isFrozen: false,
                whitelistedCallers,
                whitelistedCollections,
                maxFuelBurnPerTransaction,
                userFuelBudget,
                tankFuelBudget,
                requireToken,
                permittedCalls,
                permittedExtrinsics,
            })

            ctx.store.save(ruleSetModel)
        })
    }

    return undefined
}
