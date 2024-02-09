import { u8aToHex } from '@polkadot/util'
import { DispatchRuleDescriptor } from '../../types/generated/matrixEnjinV1003'
import { DispatchRuleDescriptor as DispatchRuleDescriptormatrixEnjinV1000 } from '../../types/generated/matrixEnjinV1000'
import { DispatchRuleDescriptor as DispatchRuleDescriptormatrixEnjinV603 } from '../../types/generated/matrixEnjinV603'
import { DispatchRuleDescriptor as DispatchRuleDescriptorV1023 } from '../../types/generated/v1023'
import { DispatchRuleDescriptor as DispatchRuleDescriptorV1022 } from '../../types/generated/v1022'
import { DispatchRuleDescriptor as DispatchRuleDescriptorV1021 } from '../../types/generated/v1021'
import { DispatchRuleDescriptor as DispatchRuleDescriptorV120 } from '../../types/generated/v120'
import { DispatchRuleDescriptor as DispatchRuleDescriptorV110 } from '../../types/generated/v110'
import { DispatchRuleDescriptor as DispatchRuleDescriptorV106 } from '../../types/generated/v106'
import { DispatchRuleDescriptor as DispatchRuleDescriptorV105 } from '../../types/generated/v105'
import { DispatchRuleDescriptor as DispatchRuleDescriptorV104 } from '../../types/generated/v104'
import { DispatchRuleDescriptor as DispatchRuleDescriptorV103 } from '../../types/generated/v103'
import { DispatchRuleDescriptor as DispatchRuleDescriptorV102 } from '../../types/generated/v102'

import {
    MaxFuelBurnPerTransaction,
    UserFuelBudget,
    TankFuelBudget,
    RequireToken,
    PermittedExtrinsics,
    FuelTankRuleSet,
} from '../../model'
import { Call } from '../../types/generated/support'
import { CommonContext } from '../types/contexts'
import { FuelTanksDispatchAndTouchCall, FuelTanksDispatchCall } from '../../types/generated/calls'
import { UnknownVersionError } from '../../common/errors'

export function rulesToMap(
    ruleId: string,
    rules:
        | DispatchRuleDescriptor[]
        | DispatchRuleDescriptormatrixEnjinV1000[]
        | DispatchRuleDescriptormatrixEnjinV603[]
        | DispatchRuleDescriptorV1023[]
        | DispatchRuleDescriptorV1022[]
        | DispatchRuleDescriptorV1021[]
        | DispatchRuleDescriptorV120[]
        | DispatchRuleDescriptorV110[]
        | DispatchRuleDescriptorV106[]
        | DispatchRuleDescriptorV105[]
        | DispatchRuleDescriptorV103[]
        | DispatchRuleDescriptorV104[]
        | DispatchRuleDescriptorV102[]
) {
    let whitelistedCallers: string[] | undefined
    let whitelistedCollections: string[] | undefined
    let maxFuelBurnPerTransaction: MaxFuelBurnPerTransaction | undefined
    let userFuelBudget: UserFuelBudget | undefined
    let tankFuelBudget: TankFuelBudget | undefined
    let requireToken: RequireToken | undefined
    let permittedCalls: string[] | undefined
    let permittedExtrinsics: PermittedExtrinsics[] | undefined
    let whitelistedPallets: string[] | undefined

    rules.forEach((rule, index) => {
        if (rule.__kind === 'WhitelistedCallers') {
            whitelistedCallers = rule.value.map((account) => u8aToHex(account))
        } else if (rule.__kind === 'WhitelistedCollections') {
            whitelistedCollections = rule.value.map((c) => c.toString())
        } else if (rule.__kind === 'WhitelistedPallets') {
            whitelistedPallets = rule.value.map((p) => `${p.__kind}:${p.value.__kind}`)
        } else if (rule.__kind === 'MaxFuelBurnPerTransaction') {
            maxFuelBurnPerTransaction = new MaxFuelBurnPerTransaction({ value: rule.value })
        } else if (rule.__kind === 'UserFuelBudget') {
            userFuelBudget = new UserFuelBudget({ amount: rule.value.amount, resetPeriod: BigInt(rule.value.resetPeriod) })
        } else if (rule.__kind === 'TankFuelBudget') {
            tankFuelBudget = new TankFuelBudget({ amount: rule.value.amount, resetPeriod: BigInt(rule.value.resetPeriod) })
        } else if (rule.__kind === 'RequireToken') {
            requireToken = new RequireToken({
                tokenId: rule.value.tokenId,
                collectionId: rule.value.collectionId,
            })
        } else if (rule.__kind === 'PermittedCalls') {
            permittedCalls = rule.value.map((call) => u8aToHex(call))
        } else if (rule.__kind === 'PermittedExtrinsics') {
            permittedExtrinsics = rule.value.map(
                (r, i) =>
                    new PermittedExtrinsics({
                        id: `${ruleId}-${index}-${i}`,
                        ruleSet: new FuelTankRuleSet({ id: ruleId }),
                        palletName: r.__kind,
                        extrinsicName: r.value.__kind,
                    })
            )
        }
    })

    return {
        whitelistedCallers,
        whitelistedCollections,
        whitelistedPallets,
        maxFuelBurnPerTransaction,
        userFuelBudget,
        tankFuelBudget,
        requireToken,
        permittedCalls,
        permittedExtrinsics,
    }
}

export function getTankDataFromCall(ctx: CommonContext, call: Call) {
    let data: FuelTanksDispatchCall | FuelTanksDispatchAndTouchCall
    if (call.name === 'FuelTanks.dispatch') {
        data = new FuelTanksDispatchCall(ctx, call)
    } else {
        data = new FuelTanksDispatchAndTouchCall(ctx, call)
    }

    if (data.isMatrixEnjinV1003) {
        return data.asMatrixEnjinV1003
    }

    if (data.isMatrixEnjinV1000) {
        return data.asMatrixEnjinV1000
    }

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    if (data.isV1023) {
        return data.asV1023
    }

    if (data.isV1022) {
        return data.asV1022
    }

    if (data.isV1021) {
        return data.asV1021
    }

    if (data.isV120) {
        return data.asV120
    }

    if (data.isV110) {
        return data.asV110
    }

    if (data.isV106) {
        return data.asV106
    }

    if (data.isV105) {
        return data.asV105
    }

    if (data.isV104) {
        return data.asV104
    }

    if (data.isV103) {
        return data.asV103
    }

    if (data.isV102) {
        return data.asV102
    }

    throw new UnknownVersionError(data.constructor.name)
}
