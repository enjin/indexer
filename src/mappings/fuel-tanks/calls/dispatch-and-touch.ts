import { UnsupportedCallError } from '../../../utils/errors'
import { calls } from '../../../types'
import { CallItem } from '../../../contexts'
import { match } from 'ts-pattern'
import { DispatchAndTouch } from './types'

export function dispatchAndTouch(call: CallItem): DispatchAndTouch {
    return match(call)
        .returnType<DispatchAndTouch>()
        .when(
            () => calls.fuelTanks.dispatchAndTouch.matrixEnjinV1012.is(call),
            () => calls.fuelTanks.dispatchAndTouch.matrixEnjinV1012.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.matrixEnjinV1005.is(call),
            () => calls.fuelTanks.dispatchAndTouch.matrixEnjinV1005.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.matrixEnjinV1004.is(call),
            () => calls.fuelTanks.dispatchAndTouch.matrixEnjinV1004.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.matrixEnjinV1003.is(call),
            () => calls.fuelTanks.dispatchAndTouch.matrixEnjinV1003.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.matrixEnjinV1000.is(call),
            () => calls.fuelTanks.dispatchAndTouch.matrixEnjinV1000.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.matrixEnjinV603.is(call),
            () => calls.fuelTanks.dispatchAndTouch.matrixEnjinV603.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.matrixV1012.is(call),
            () => calls.fuelTanks.dispatchAndTouch.matrixV1012.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.matrixV1011.is(call),
            () => calls.fuelTanks.dispatchAndTouch.matrixV1011.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.matrixV1010.is(call),
            () => calls.fuelTanks.dispatchAndTouch.matrixV1010.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.matrixV1005.is(call),
            () => calls.fuelTanks.dispatchAndTouch.matrixV1005.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.matrixV1004.is(call),
            () => calls.fuelTanks.dispatchAndTouch.matrixV1004.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.matrixV1003.is(call),
            () => calls.fuelTanks.dispatchAndTouch.matrixV1003.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.matrixV1000.is(call),
            () => calls.fuelTanks.dispatchAndTouch.matrixV1000.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.matrixV604.is(call),
            () => calls.fuelTanks.dispatchAndTouch.matrixV604.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.matrixV602.is(call),
            () => calls.fuelTanks.dispatchAndTouch.matrixV602.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.matrixV601.is(call),
            () => calls.fuelTanks.dispatchAndTouch.matrixV601.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.matrixV600.is(call),
            () => calls.fuelTanks.dispatchAndTouch.matrixV600.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.matrixV500.is(call),
            () => calls.fuelTanks.dispatchAndTouch.matrixV500.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.enjinV1032.is(call),
            () => calls.fuelTanks.dispatchAndTouch.enjinV1032.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.enjinV1026.is(call),
            () => calls.fuelTanks.dispatchAndTouch.enjinV1026.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.enjinV1023.is(call),
            () => calls.fuelTanks.dispatchAndTouch.enjinV1023.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.enjinV1022.is(call),
            () => calls.fuelTanks.dispatchAndTouch.enjinV1022.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.enjinV1021.is(call),
            () => calls.fuelTanks.dispatchAndTouch.enjinV1021.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.enjinV120.is(call),
            () => calls.fuelTanks.dispatchAndTouch.enjinV120.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.enjinV110.is(call),
            () => calls.fuelTanks.dispatchAndTouch.enjinV110.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.enjinV101.is(call),
            () => calls.fuelTanks.dispatchAndTouch.enjinV101.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.enjinV100.is(call),
            () => calls.fuelTanks.dispatchAndTouch.enjinV100.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.v1050.is(call),
            () => calls.fuelTanks.dispatchAndTouch.v1050.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.v1032.is(call),
            () => calls.fuelTanks.dispatchAndTouch.v1032.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.v1031.is(call),
            () => calls.fuelTanks.dispatchAndTouch.v1031.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.v1030.is(call),
            () => calls.fuelTanks.dispatchAndTouch.v1030.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.v1026.is(call),
            () => calls.fuelTanks.dispatchAndTouch.v1026.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.v1023.is(call),
            () => calls.fuelTanks.dispatchAndTouch.v1023.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.v1022.is(call),
            () => calls.fuelTanks.dispatchAndTouch.v1022.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.v1021.is(call),
            () => calls.fuelTanks.dispatchAndTouch.v1021.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.v120.is(call),
            () => calls.fuelTanks.dispatchAndTouch.v120.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.v110.is(call),
            () => calls.fuelTanks.dispatchAndTouch.v110.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.v106.is(call),
            () => calls.fuelTanks.dispatchAndTouch.v106.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.v105.is(call),
            () => calls.fuelTanks.dispatchAndTouch.v105.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.v104.is(call),
            () => calls.fuelTanks.dispatchAndTouch.v104.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.v103.is(call),
            () => calls.fuelTanks.dispatchAndTouch.v103.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatchAndTouch.v102.is(call),
            () => calls.fuelTanks.dispatchAndTouch.v102.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
