import { UnsupportedCallError } from '../../../utils/errors'
import { CallItem } from '../../../contexts'
import { match } from 'ts-pattern'
import { DispatchAndTouch, Dispatch } from './types'
import { dispatch } from './dispatch'
import { dispatchAndTouch } from './dispatch-and-touch'
import { calls } from '../../../types'

export function isFuelTankCall(call: CallItem): boolean {
    return call.name === calls.fuelTanks.dispatch.name || call.name === calls.fuelTanks.dispatchAndTouch.name
}

export function dispatchOrDispatchAndTouch(call: CallItem): Dispatch | DispatchAndTouch {
    return match(call.name)
        .returnType<Dispatch | DispatchAndTouch>()
        .with(calls.fuelTanks.dispatch.name, () => dispatch(call))
        .with(calls.fuelTanks.dispatchAndTouch.name, () => dispatchAndTouch(call))
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
