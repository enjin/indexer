import { CallItem } from '../../contexts'
import { match } from 'ts-pattern'
import { CreateFuelTank, Dispatch, dispatch, DispatchAndTouch, dispatchAndTouch, ForceCreateFuelTank } from './calls'
import { UnsupportedCallError } from '../../utils/errors'
import { calls } from '../../types'
import * as mappings from '../index'

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
    return match(call.name)
        .with(calls.fuelTanks.createFuelTank.name, () => mappings.fuelTanks.calls.createFuelTank(call))
        .with(calls.fuelTanks.forceCreateFuelTank.name, () => mappings.fuelTanks.calls.forceCreateFuelTank(call))
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}

export function anyDispatch(call: CallItem): Dispatch | DispatchAndTouch {
    return match(call.name)
        .with(calls.fuelTanks.dispatch.name, () => mappings.fuelTanks.calls.dispatch(call))
        .with(calls.fuelTanks.dispatchAndTouch.name, () => mappings.fuelTanks.calls.dispatchAndTouch(call))
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
