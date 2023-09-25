import { u8aToHex } from '@polkadot/util'
import { DispatchRuleDescriptor } from '../../types/generated/matrixEnjinV603'
import { DispatchRuleDescriptor as DispatchRuleDescriptorV602 } from '../../types/generated/v602'
import {
    MaxFuelBurnPerTransaction,
    UserFuelBudget,
    TankFuelBudget,
    RequireToken,
    PermittedExtrinsics,
    FuelTankRuleSet,
} from '../../model'

export function rulesToMap(ruleId: string, rules: DispatchRuleDescriptor[] | DispatchRuleDescriptorV602[]) {
    let whitelistedCallers: string[] | undefined
    let whitelistedCollections: string[] | undefined
    let maxFuelBurnPerTransaction: MaxFuelBurnPerTransaction | undefined
    let userFuelBudget: UserFuelBudget | undefined
    let tankFuelBudget: TankFuelBudget | undefined
    let requireToken: RequireToken | undefined
    let permittedCalls: string[] | undefined
    let permittedExtrinsics: PermittedExtrinsics[] | undefined

    rules.forEach((rule, index) => {
        if (rule.__kind === 'WhitelistedCallers') {
            whitelistedCallers = rule.value.map((account) => u8aToHex(account))
        } else if (rule.__kind === 'WhitelistedCollections') {
            whitelistedCollections = rule.value.map((c) => c.toString())
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
            permittedCalls = rule.value.map((call) => u8aToHex(call))
        } else if (rule.__kind === 'PermittedExtrinsics') {
            permittedExtrinsics = rule.value.map(
                (r) =>
                    new PermittedExtrinsics({
                        id: `${rule}-${index}`,
                        ruleSet: new FuelTankRuleSet({ id: ruleId }),
                        extrinsicName: r.__kind,
                        palletName: r.value.__kind,
                    })
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
