import { CallItem } from '../../contexts'
import { match } from 'ts-pattern'
import { CreateFuelTank, Dispatch, dispatch, DispatchAndTouch, dispatchAndTouch, ForceCreateFuelTank } from './calls'
import { UnsupportedCallError } from '../../utils/errors'
import { calls } from '../../types'
import * as mappings from '../index'
import {
    FuelTankRuleSet,
    MaxFuelBurnPerTransaction,
    PermittedExtrinsics,
    RequireToken,
    TankFuelBudget,
    UserFuelBudget,
} from '../../model'
import { DispatchRuleDescriptor, RuleSetDescriptor } from '../common/types'

export function withDispatchCheck<T>(fn: (call: CallItem) => T): (call: CallItem) => T {
    return (call: CallItem) => {
        if (isDispatchCall(call)) {
            return unwrapFuelTankCall(call) as T
        }
        return fn(call)
    }
}

export function isDispatchCall(call: CallItem): boolean {
    return call.name === calls.fuelTanks.dispatch.name || call.name === calls.fuelTanks.dispatchAndTouch.name
}

export function unwrapFuelTankCall(call: CallItem): unknown {
    return match(call.name)
        .with(calls.fuelTanks.dispatch.name, () => dispatch(call).call.value)
        .with(calls.fuelTanks.dispatchAndTouch.name, () => dispatchAndTouch(call).call.value)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}

export function anyCreateFuelTank(call: CallItem): ForceCreateFuelTank | CreateFuelTank {
    const processCall = withDispatchCheck((call: CallItem): ForceCreateFuelTank | CreateFuelTank => {
        return match(call.name)
            .with(calls.fuelTanks.createFuelTank.name, () => mappings.fuelTanks.calls.createFuelTank(call))
            .with(calls.fuelTanks.forceCreateFuelTank.name, () => mappings.fuelTanks.calls.forceCreateFuelTank(call))
            .otherwise(() => {
                throw new UnsupportedCallError(call)
            })
    })

    return processCall(call)
}

export function anyDispatch(call: CallItem): Dispatch | DispatchAndTouch {
    return match(call.name)
        .with(calls.fuelTanks.dispatch.name, () => mappings.fuelTanks.calls.dispatch(call))
        .with(calls.fuelTanks.dispatchAndTouch.name, () => mappings.fuelTanks.calls.dispatchAndTouch(call))
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}

function convertTypeToModel(
    rule: DispatchRuleDescriptor,
    ruleId: string,
    index: number
): Record<
    string,
    | string
    | string[]
    | MaxFuelBurnPerTransaction
    | UserFuelBudget
    | TankFuelBudget
    | RequireToken
    | PermittedExtrinsics[]
    | bigint
    | undefined
> {
    const ruleKey = rule.__kind.charAt(0).toLowerCase() + rule.__kind.slice(1)

    const value = match(rule)
        .with({ __kind: 'WhitelistedCallers' }, (r) => r.value.map((account) => account))
        .with({ __kind: 'WhitelistedCollections' }, (r) => r.value.map((c) => c.toString()))
        .with({ __kind: 'WhitelistedPallets' }, (r) => r.value.map((p) => `${p.__kind}:${p.value.__kind}`))
        .with({ __kind: 'MaxFuelBurnPerTransaction' }, (r) => new MaxFuelBurnPerTransaction({ value: r.value }))
        .with(
            { __kind: 'UserFuelBudget' },
            (r) => new UserFuelBudget({ amount: r.value.amount, resetPeriod: BigInt(r.value.resetPeriod) })
        )
        .with(
            { __kind: 'TankFuelBudget' },
            (r) => new TankFuelBudget({ amount: r.value.amount, resetPeriod: BigInt(r.value.resetPeriod) })
        )
        .with(
            { __kind: 'RequireToken' },
            (r) => new RequireToken({ tokenId: r.value.tokenId, collectionId: r.value.collectionId })
        )
        .with({ __kind: 'RequireSignature' }, (r) => r.value)
        .with({ __kind: 'PermittedCalls' }, (r) => r.value.map((call) => call))
        .with({ __kind: 'PermittedExtrinsics' }, (r) =>
            r.value.map(
                (r, i) =>
                    new PermittedExtrinsics({
                        id: `${ruleId}-${index}-${i}`,
                        ruleSet: new FuelTankRuleSet({ id: ruleId }),
                        palletName: r.__kind,
                        extrinsicName: r.value.__kind,
                    })
            )
        )
        .with({ __kind: 'MinimumInfusion' }, (r) => r.value)
        .exhaustive()

    return { [ruleKey]: value }
}

export function rulesToMap(ruleId: string, ruleDescriptor: DispatchRuleDescriptor[] | undefined) {
    if (ruleDescriptor === undefined) {
        throw new Error('Rule descriptor is undefined')
    }

    const rules = Object.assign({}, ...ruleDescriptor.map((rule, index) => convertTypeToModel(rule, ruleId, index)))

    return {
        whitelistedCallers: rules.whitelistedCallers,
        whitelistedCollections: rules.whitelistedCollections,
        whitelistedPallets: rules.whitelistedPallets,
        maxFuelBurnPerTransaction: rules.maxFuelBurnPerTransaction,
        userFuelBudget: rules.userFuelBudget,
        tankFuelBudget: rules.tankFuelBudget,
        requireToken: rules.requireToken,
        permittedCalls: rules.permittedCalls,
        permittedExtrinsics: rules.permittedExtrinsics,
        requireSignature: rules.requireSignature,
        minimumInfusion: rules.minimumInfusion,
    }
}
