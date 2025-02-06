import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { match } from 'ts-pattern'

//import { DispatchRuleDescriptor } from '../../types/generated/matrixEnjinV603'
// import { DispatchRuleDescriptor as DispatchRuleDescriptorV602 } from '../../types/generated/v602'
// import { DispatchRuleDescriptor as DispatchRuleDescriptorV601 } from '../../types/generated/v601'
// import { DispatchRuleDescriptor as DispatchRuleDescriptorV600 } from '../../types/generated/v600'
// import { DispatchRuleDescriptor as DispatchRuleDescriptorv1000 } from '../../types/generated/v1000'
// import { DispatchRuleDescriptor as DispatchRuleDescriptorv1003 } from '../../types/generated/v1003'
// import { DispatchRuleDescriptor as DispatchRuleDescriptorv1004 } from '../../types/generated/v1004'
// import { DispatchRuleDescriptor as DispatchRuleDescriptorv1005 } from '../../types/generated/v1005'
// import { DispatchRuleDescriptor as DispatchRuleDescriptorv1010 } from '../../types/generated/v1010'
// import { DispatchRuleDescriptor as DispatchRuleDescriptorv1011 } from '../../types/generated/v1011'
// import { DispatchRuleDescriptor as DispatchRuleDescriptorv1012 } from '../../types/generated/v1012'
// import { DispatchRuleDescriptor as DispatchRuleDescriptorvMatrix1012 } from '../../types/generated/matrixEnjinV1012'
//
// import {
//     FuelTankRuleSet,
//     MaxFuelBurnPerTransaction,
//     PermittedExtrinsics,
//     RequireToken,
//     TankFuelBudget,
//     UserFuelBudget,
// } from '../../model'
//
// export function rulesToMap(
//     ruleId: string,
//     rules:
//         | DispatchRuleDescriptor[]
//         | DispatchRuleDescriptorV602[]
//         | DispatchRuleDescriptorV601[]
//         | DispatchRuleDescriptorV600[]
//         | DispatchRuleDescriptorv1000[]
//         | DispatchRuleDescriptorv1003[]
//         | DispatchRuleDescriptorv1004[]
//         | DispatchRuleDescriptorv1005[]
//         | DispatchRuleDescriptorv1010[]
//         | DispatchRuleDescriptorv1011[]
//         | DispatchRuleDescriptorv1012[]
//         | DispatchRuleDescriptorvMatrix1012[]
// ) {
//     let whitelistedCallers: string[] | undefined
//     let whitelistedCollections: string[] | undefined
//     let maxFuelBurnPerTransaction: MaxFuelBurnPerTransaction | undefined
//     let userFuelBudget: UserFuelBudget | undefined
//     let tankFuelBudget: TankFuelBudget | undefined
//     let requireToken: RequireToken | undefined
//     let permittedCalls: string[] | undefined
//     let permittedExtrinsics: PermittedExtrinsics[] | undefined
//     let whitelistedPallets: string[] | undefined
//     let requireSignature: string | undefined
//     let minimumInfusion: bigint | undefined
//
//     rules.forEach((rule, index) => {
//         if (rule.__kind === 'WhitelistedCallers') {
//             whitelistedCallers = rule.value.map((account) => account)
//         } else if (rule.__kind === 'WhitelistedCollections') {
//             whitelistedCollections = rule.value.map((c) => c.toString())
//         } else if (rule.__kind === 'WhitelistedPallets') {
//             whitelistedPallets = rule.value.map((p) => `${p.__kind}:${p.value.__kind}`)
//         } else if (rule.__kind === 'MaxFuelBurnPerTransaction') {
//             maxFuelBurnPerTransaction = new MaxFuelBurnPerTransaction({ value: rule.value })
//         } else if (rule.__kind === 'UserFuelBudget') {
//             userFuelBudget = new UserFuelBudget({ amount: rule.value.amount, resetPeriod: BigInt(rule.value.resetPeriod) })
//         } else if (rule.__kind === 'TankFuelBudget') {
//             tankFuelBudget = new TankFuelBudget({ amount: rule.value.amount, resetPeriod: BigInt(rule.value.resetPeriod) })
//         } else if (rule.__kind === 'RequireToken') {
//             requireToken = new RequireToken({
//                 tokenId: rule.value.tokenId,
//                 collectionId: rule.value.collectionId,
//             })
//         } else if (rule.__kind === 'RequireSignature') {
//             requireSignature = rule.value
//         } else if (rule.__kind === 'PermittedCalls') {
//             permittedCalls = rule.value.map((call) => call)
//         } else if (rule.__kind === 'PermittedExtrinsics') {
//             permittedExtrinsics = rule.value.map(
//                 (r, i) =>
//                     new PermittedExtrinsics({
//                         id: `${ruleId}-${index}-${i}`,
//                         ruleSet: new FuelTankRuleSet({ id: ruleId }),
//                         palletName: r.__kind,
//                         extrinsicName: r.value.__kind,
//                     })
//             )
//         } else if (rule.__kind === 'MinimumInfusion') {
//             minimumInfusion = rule.value
//         }
//     })
//
//     return {
//         whitelistedCallers,
//         whitelistedCollections,
//         whitelistedPallets,
//         maxFuelBurnPerTransaction,
//         userFuelBudget,
//         tankFuelBudget,
//         requireToken,
//         permittedCalls,
//         permittedExtrinsics,
//         requireSignature,
//         minimumInfusion,
//     }
// }

type DispatchCall = {
    tankId: any
    ruleSetId: number
    call: any
    settings?: any
}

export function dispatch(call: CallItem): DispatchCall {
    return match(call)
        .returnType<DispatchCall>()
        .when(calls.fuelTanks.dispatch.matrixEnjinV1012.is, () => calls.fuelTanks.dispatch.matrixEnjinV1012.decode(call))
        .when(calls.fuelTanks.dispatch.matrixEnjinV1005.is, () => calls.fuelTanks.dispatch.matrixEnjinV1005.decode(call))
        .when(calls.fuelTanks.dispatch.matrixEnjinV1004.is, () => calls.fuelTanks.dispatch.matrixEnjinV1004.decode(call))
        .when(calls.fuelTanks.dispatch.matrixEnjinV1003.is, () => calls.fuelTanks.dispatch.matrixEnjinV1003.decode(call))
        .when(calls.fuelTanks.dispatch.matrixEnjinV1000.is, () => calls.fuelTanks.dispatch.matrixEnjinV1000.decode(call))
        .when(calls.fuelTanks.dispatch.matrixEnjinV603.is, () => calls.fuelTanks.dispatch.matrixEnjinV603.decode(call))
        .when(calls.fuelTanks.dispatch.matrixV1012.is, () => calls.fuelTanks.dispatch.matrixV1012.decode(call))
        .when(calls.fuelTanks.dispatch.matrixV1011.is, () => calls.fuelTanks.dispatch.matrixV1011.decode(call))
        .when(calls.fuelTanks.dispatch.matrixV1010.is, () => calls.fuelTanks.dispatch.matrixV1010.decode(call))
        .when(calls.fuelTanks.dispatch.matrixV1005.is, () => calls.fuelTanks.dispatch.matrixV1005.decode(call))
        .when(calls.fuelTanks.dispatch.matrixV1004.is, () => calls.fuelTanks.dispatch.matrixV1004.decode(call))
        .when(calls.fuelTanks.dispatch.matrixV1003.is, () => calls.fuelTanks.dispatch.matrixV1003.decode(call))
        .when(calls.fuelTanks.dispatch.matrixV1000.is, () => calls.fuelTanks.dispatch.matrixV1000.decode(call))
        .when(calls.fuelTanks.dispatch.matrixV604.is, () => calls.fuelTanks.dispatch.matrixV604.decode(call))
        .when(calls.fuelTanks.dispatch.matrixV602.is, () => calls.fuelTanks.dispatch.matrixV602.decode(call))
        .when(calls.fuelTanks.dispatch.matrixV601.is, () => calls.fuelTanks.dispatch.matrixV601.decode(call))
        .when(calls.fuelTanks.dispatch.matrixV600.is, () => calls.fuelTanks.dispatch.matrixV600.decode(call))
        .when(calls.fuelTanks.dispatch.matrixV500.is, () => calls.fuelTanks.dispatch.matrixV500.decode(call))
        .when(calls.fuelTanks.dispatch.enjinV1032.is, () => calls.fuelTanks.dispatch.enjinV1032.decode(call))
        .when(calls.fuelTanks.dispatch.enjinV1026.is, () => calls.fuelTanks.dispatch.enjinV1026.decode(call))
        .when(calls.fuelTanks.dispatch.enjinV1023.is, () => calls.fuelTanks.dispatch.enjinV1023.decode(call))
        .when(calls.fuelTanks.dispatch.enjinV1022.is, () => calls.fuelTanks.dispatch.enjinV1022.decode(call))
        .when(calls.fuelTanks.dispatch.enjinV1021.is, () => calls.fuelTanks.dispatch.enjinV1021.decode(call))
        .when(calls.fuelTanks.dispatch.enjinV120.is, () => calls.fuelTanks.dispatch.enjinV120.decode(call))
        .when(calls.fuelTanks.dispatch.enjinV110.is, () => calls.fuelTanks.dispatch.enjinV110.decode(call))
        .when(calls.fuelTanks.dispatch.enjinV101.is, () => calls.fuelTanks.dispatch.enjinV101.decode(call))
        .when(calls.fuelTanks.dispatch.enjinV100.is, () => calls.fuelTanks.dispatch.enjinV100.decode(call))
        .when(calls.fuelTanks.dispatch.v1050.is, () => calls.fuelTanks.dispatch.v1050.decode(call))
        .when(calls.fuelTanks.dispatch.v1032.is, () => calls.fuelTanks.dispatch.v1032.decode(call))
        .when(calls.fuelTanks.dispatch.v1031.is, () => calls.fuelTanks.dispatch.v1031.decode(call))
        .when(calls.fuelTanks.dispatch.v1030.is, () => calls.fuelTanks.dispatch.v1030.decode(call))
        .when(calls.fuelTanks.dispatch.v1026.is, () => calls.fuelTanks.dispatch.v1026.decode(call))
        .when(calls.fuelTanks.dispatch.v1023.is, () => calls.fuelTanks.dispatch.v1023.decode(call))
        .when(calls.fuelTanks.dispatch.v1022.is, () => calls.fuelTanks.dispatch.v1022.decode(call))
        .when(calls.fuelTanks.dispatch.v1021.is, () => calls.fuelTanks.dispatch.v1021.decode(call))
        .when(calls.fuelTanks.dispatch.v120.is, () => calls.fuelTanks.dispatch.v120.decode(call))
        .when(calls.fuelTanks.dispatch.v110.is, () => calls.fuelTanks.dispatch.v110.decode(call))
        .when(calls.fuelTanks.dispatch.v106.is, () => calls.fuelTanks.dispatch.v106.decode(call))
        .when(calls.fuelTanks.dispatch.v105.is, () => calls.fuelTanks.dispatch.v105.decode(call))
        .when(calls.fuelTanks.dispatch.v104.is, () => calls.fuelTanks.dispatch.v104.decode(call))
        .when(calls.fuelTanks.dispatch.v103.is, () => calls.fuelTanks.dispatch.v103.decode(call))
        .when(calls.fuelTanks.dispatch.v102.is, () => calls.fuelTanks.dispatch.v102.decode(call))
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
