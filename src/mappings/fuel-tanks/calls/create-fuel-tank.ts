import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { match } from 'ts-pattern'

type MaxFuelBurnPerTransaction = {
    __kind: 'MaxFuelBurnPerTransaction'
    value: bigint
}

type PermittedCallsDispatchRule = {
    __kind: 'PermittedCalls'
    value: string[]
}

type PermittedExtrinsics = {
    __kind: 'PermittedExtrinsics'
    value: any[]
}

type RequireToken = {
    __kind: 'RequireToken'
    value: {
        tokenId: bigint
        collectionId: bigint
    }
}

type TankFuelBudget = {
    __kind: 'UserFuelBudget'
    value: {
        amount: bigint
        resetPeriod: number
    }
}

type UserFuelBudget = {
    __kind: 'UserFuelBudget'
    value: {
        amount: bigint
        resetPeriod: number
    }
}

type WhitelistedCallers = {
    __kind: 'WhitelistedCallers'
    value: string[]
}

type WhitelistedCollections = {
    __kind: 'WhitelistedCollections'
    value: bigint[]
}

type WhitelistedPalletsDispatchRule = {
    __kind: 'WhitelistedPallets'
    value: any
}

type MinimumInfusionDispatchRule = {
    // This was add on v1030? and upwards
    __kind: 'MinimumInfusion'
    value: bigint
}

type RequireSignatureDispatchRule = {
    // This was add on v1030? and upwards
    __kind: 'RequireSignature'
    value: string
}

// MaxFuelBurnPerTransaction: MaxFuelBurnPerTransactionRule,
//     PermittedCalls: sts.array(() => sts.bytes()),
//     PermittedExtrinsics: sts.array(() => Call),
//     RequireToken: RequireTokenRule,
//     TankFuelBudget: TankFuelBudgetRuleDescriptor,
//     UserFuelBudget: UserFuelBudgetRuleDescriptor,
//     WhitelistedCallers: sts.array(() => AccountId32),
//     WhitelistedCollections: sts.array(() => sts.bigint()),

// type DispatchRules = MaxFuelBurnPerTransactionDispatchRule | PermittedCallsDispatchRule | PermittedExtrinsicsDispatchRule | RequireTokenDispatchRule | TankFuelBudgetDispatchRule | UserFuelBudgetDispatchRule | WhitelistedCallersDispatchRule | WhitelistedCollectionsDispatchRule
//WhitelistedPalletsDispatchRule
// MinimumInfusionDispatchRule | RequireSignatureDispatchRule

type DispatchRuleDescriptor =
    | MaxFuelBurnPerTransaction
    | PermittedExtrinsics
    | RequireToken
    | TankFuelBudget
    | UserFuelBudget
    | WhitelistedCallers
    | WhitelistedCollections

type CreateFuelTankCall = {
    descriptor: {
        name: string
        userAccountManagement?: {
            tankReservesAccountCreationDeposit: boolean
            tankReservesExistentialDeposit?: boolean // This was removed on v1010 and upwards
        }
        // sts.array(() => sts.tuple(() => [sts.number(), RuleSetDescriptor])),
        ruleSets: [number, DispatchRuleDescriptor[]][]
        coveragePolicy?: {
            // This field was add on v1010 and upwards
            __kind: 'Fees' | 'FeesAndDeposit' | 'FeesAndDepositAndTankReserves' // FeesAndDepositAndTankReserves was add on v1050 and upwards
        }
        accountRules: {
            __kind: 'WhitelistedCallers' | 'RequireToken'
            value: string[] | { collectionId: bigint; tokenId: bigint }
        }[]
    }
}

export function createFuelTank(call: CallItem) {
    return match(call)
        .returnType<CreateFuelTankCall>()

        .when(calls.fuelTanks.createFuelTank.enjinV101.is, calls.fuelTanks.createFuelTank.enjinV101.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}

//      // .when(calls.fuelTanks.createFuelTank.matrixEnjinV1012.is, calls.fuelTanks.createFuelTank.matrixEnjinV1012.decode)
//         // .when(calls.fuelTanks.createFuelTank.matrixEnjinV1005.is, calls.fuelTanks.createFuelTank.matrixEnjinV1005.decode)
//         // .when(calls.fuelTanks.createFuelTank.matrixEnjinV1004.is, calls.fuelTanks.createFuelTank.matrixEnjinV1004.decode)
//         // .when(calls.fuelTanks.createFuelTank.matrixEnjinV1003.is, calls.fuelTanks.createFuelTank.matrixEnjinV1003.decode)
//         // .when(calls.fuelTanks.createFuelTank.matrixEnjinV1000.is, calls.fuelTanks.createFuelTank.matrixEnjinV1000.decode)
//         // .when(calls.fuelTanks.createFuelTank.matrixEnjinV603.is, calls.fuelTanks.createFuelTank.matrixEnjinV603.decode)
//         // .when(calls.fuelTanks.createFuelTank.matrixV1012.is, calls.fuelTanks.createFuelTank.matrixV1012.decode)
//         // .when(calls.fuelTanks.createFuelTank.matrixV1011.is, calls.fuelTanks.createFuelTank.matrixV1011.decode)
//         // .when(calls.fuelTanks.createFuelTank.matrixV1010.is, calls.fuelTanks.createFuelTank.matrixV1010.decode)
//         // .when(calls.fuelTanks.createFuelTank.matrixV1005.is, calls.fuelTanks.createFuelTank.matrixV1005.decode)
//         // .when(calls.fuelTanks.createFuelTank.matrixV1004.is, calls.fuelTanks.createFuelTank.matrixV1004.decode)
//         // .when(calls.fuelTanks.createFuelTank.matrixV1003.is, calls.fuelTanks.createFuelTank.matrixV1003.decode)
//         // .when(calls.fuelTanks.createFuelTank.matrixV1000.is, calls.fuelTanks.createFuelTank.matrixV1000.decode)
//         // .when(calls.fuelTanks.createFuelTank.enjinV1032.is, calls.fuelTanks.createFuelTank.enjinV1032.decode)
//         // .when(calls.fuelTanks.createFuelTank.enjinV1026.is, calls.fuelTanks.createFuelTank.enjinV1026.decode)
//         // .when(calls.fuelTanks.createFuelTank.enjinV1023.is, calls.fuelTanks.createFuelTank.enjinV1023.decode)
//         // .when(calls.fuelTanks.createFuelTank.enjinV1022.is, calls.fuelTanks.createFuelTank.enjinV1022.decode)
//         // .when(calls.fuelTanks.createFuelTank.enjinV1021.is, calls.fuelTanks.createFuelTank.enjinV1021.decode)
//         // .when(calls.fuelTanks.createFuelTank.enjinV120.is, calls.fuelTanks.createFuelTank.enjinV120.decode)
//         // .when(calls.fuelTanks.createFuelTank.enjinV110.is, calls.fuelTanks.createFuelTank.enjinV110.decode)
//         // .when(calls.fuelTanks.createFuelTank.enjinV101.is, calls.fuelTanks.createFuelTank.enjinV101.decode)
//         // .when(calls.fuelTanks.createFuelTank.enjinV100.is, calls.fuelTanks.createFuelTank.enjinV100.decode)
//         // .when(calls.fuelTanks.createFuelTank.v1050.is, calls.fuelTanks.createFuelTank.v1050.decode)
//         // .when(calls.fuelTanks.createFuelTank.v1032.is, calls.fuelTanks.createFuelTank.v1032.decode)
//         // .when(calls.fuelTanks.createFuelTank.v1031.is, calls.fuelTanks.createFuelTank.v1031.decode)
//         // .when(calls.fuelTanks.createFuelTank.v1030.is, calls.fuelTanks.createFuelTank.v1030.decode)
//         // .when(calls.fuelTanks.createFuelTank.v1026.is, calls.fuelTanks.createFuelTank.v1026.decode)
//         // .when(calls.fuelTanks.createFuelTank.v1023.is, calls.fuelTanks.createFuelTank.v1023.decode)
//         // .when(calls.fuelTanks.createFuelTank.v1022.is, calls.fuelTanks.createFuelTank.v1022.decode)
//         // .when(calls.fuelTanks.createFuelTank.v1021.is, calls.fuelTanks.createFuelTank.v1021.decode)
//         // .when(calls.fuelTanks.createFuelTank.v120.is, calls.fuelTanks.createFuelTank.v120.decode)
//         // .when(calls.fuelTanks.createFuelTank.v110.is, calls.fuelTanks.createFuelTank.v110.decode)
//         // .when(calls.fuelTanks.createFuelTank.v106.is, calls.fuelTanks.createFuelTank.v106.decode)
//         // .when(calls.fuelTanks.createFuelTank.v105.is, calls.fuelTanks.createFuelTank.v105.decode)
//         // .when(calls.fuelTanks.createFuelTank.v104.is, calls.fuelTanks.createFuelTank.v104.decode)
//         // .when(calls.fuelTanks.createFuelTank.v103.is, calls.fuelTanks.createFuelTank.v103.decode)
