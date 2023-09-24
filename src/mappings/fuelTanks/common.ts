import { u8aToHex } from '@polkadot/util'
import { DispatchRuleDescriptor } from '../../types/generated/matrixEnjinV603'
import { DispatchRuleDescriptor as DispatchRuleDescriptorV602 } from '../../types/generated/v602'
import {
    WhitelistedCallers,
    WhitelistedCollections,
    MaxFuelBurnPerTransaction,
    UserFuelBudget,
    TankFuelBudget,
    RequireToken,
    PermittedCalls,
    PermittedExtrinsics,
} from '../../model'

function toJSON(data: any) {
    JSON.parse(
        JSON.stringify(data, (key, value) => {
            if (typeof value === 'bigint') {
                return value.toString()
            }
            if (value instanceof Uint8Array) {
                return u8aToHex(value)
            }
            return value
        })
    )
}

export function rulesToMap(rules: DispatchRuleDescriptor[] | DispatchRuleDescriptorV602[]) {
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
                (r) => new PermittedExtrinsics({ extrinsicName: r.__kind, palletName: r.value.__kind, raw: toJSON(r.value) })
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
