import { DispatchRuleDescriptor } from '../../../types/generated/matrixEnjinV603'
import { DispatchRuleDescriptor as DispatchRuleDescriptorV601 } from '../../../types/generated/matrixEnjinV1005'
import { DispatchRuleDescriptor as DispatchRuleDescriptorV600 } from '../../../types/generated/matrixEnjinV1012'
import { DispatchRuleDescriptor as DispatchRuleDescriptorv1000 } from '../../../types/generated/matrixV500'
import { DispatchRuleDescriptor as DispatchRuleDescriptorv1003 } from '../../../types/generated/matrixEnjinV1000'
import { DispatchRuleDescriptor as DispatchRuleDescriptorv1005 } from '../../../types/generated/matrixEnjinV1003'
import { DispatchRuleDescriptor as DispatchRuleDescriptorv1010 } from '../../../types/generated/matrixEnjinV1004'
import { DispatchRuleDescriptor as DispatchRuleDescriptorv1012 } from '../../../types/generated/enjinV100'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/enjinV101'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/enjinV110'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/enjinV120'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/enjinV1021'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/enjinV1022'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/enjinV1023'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/enjinV1025'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/enjinV1026'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/enjinV1032'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/enjinV1033'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/v100'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/v102'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/v1050'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/v103'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/v105'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/v101'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/v104'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/v106'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/v110'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/v120'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/v1021'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/v1022'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/v1023'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/v1026'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/v1030'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/v1031'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/v1032'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/v1033'
import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../../types/generated/v1050'

import {
    FuelTankRuleSet,
    MaxFuelBurnPerTransaction,
    PermittedExtrinsics,
    RequireToken,
    TankFuelBudget,
    UserFuelBudget,
} from '../../model'

export function rulesToMap(
    ruleId: string,
    rules:
        | DispatchRuleDescriptor[]
        | DispatchRuleDescriptorV602[]
        | DispatchRuleDescriptorV601[]
        | DispatchRuleDescriptorV600[]
        | DispatchRuleDescriptorv1000[]
        | DispatchRuleDescriptorv1003[]
        | DispatchRuleDescriptorv1004[]
        | DispatchRuleDescriptorv1005[]
        | DispatchRuleDescriptorv1010[]
        | DispatchRuleDescriptorv1011[]
        | DispatchRuleDescriptorv1012[]
        | DispatchRuleDescriptorvMatrix1012[]
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
    let requireSignature: string | undefined
    let minimumInfusion: bigint | undefined

    rules.forEach((rule, index) => {
        if (rule.__kind === 'WhitelistedCallers') {
            whitelistedCallers = rule.value.map((account) => account)
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
        } else if (rule.__kind === 'RequireSignature') {
            requireSignature = rule.value
        } else if (rule.__kind === 'PermittedCalls') {
            permittedCalls = rule.value.map((call) => call)
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
        } else if (rule.__kind === 'MinimumInfusion') {
            minimumInfusion = rule.value
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
        requireSignature,
        minimumInfusion,
    }
}
