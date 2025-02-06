import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { match } from 'ts-pattern'

type DispatchAndTouchCall = {
    tankId: any
    ruleSetId: number
    call: any
    settings?: any
}

export function dispatchAndTouch(call: CallItem) {
    return match(call)
        .returnType<DispatchAndTouchCall>()
        .when(calls.fuelTanks.dispatchAndTouch.matrixEnjinV1012.is, () =>
            calls.fuelTanks.dispatchAndTouch.matrixEnjinV1012.decode(call)
        )
        .when(calls.fuelTanks.dispatchAndTouch.matrixEnjinV1005.is, () =>
            calls.fuelTanks.dispatchAndTouch.matrixEnjinV1005.decode(call)
        )
        .when(calls.fuelTanks.dispatchAndTouch.matrixEnjinV1004.is, () =>
            calls.fuelTanks.dispatchAndTouch.matrixEnjinV1004.decode(call)
        )
        .when(calls.fuelTanks.dispatchAndTouch.matrixEnjinV1003.is, () =>
            calls.fuelTanks.dispatchAndTouch.matrixEnjinV1003.decode(call)
        )
        .when(calls.fuelTanks.dispatchAndTouch.matrixEnjinV1000.is, () =>
            calls.fuelTanks.dispatchAndTouch.matrixEnjinV1000.decode(call)
        )
        .when(calls.fuelTanks.dispatchAndTouch.matrixEnjinV603.is, () =>
            calls.fuelTanks.dispatchAndTouch.matrixEnjinV603.decode(call)
        )
        .when(calls.fuelTanks.dispatchAndTouch.matrixV1012.is, () => calls.fuelTanks.dispatchAndTouch.matrixV1012.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.matrixV1011.is, () => calls.fuelTanks.dispatchAndTouch.matrixV1011.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.matrixV1010.is, () => calls.fuelTanks.dispatchAndTouch.matrixV1010.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.matrixV1005.is, () => calls.fuelTanks.dispatchAndTouch.matrixV1005.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.matrixV1004.is, () => calls.fuelTanks.dispatchAndTouch.matrixV1004.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.matrixV1003.is, () => calls.fuelTanks.dispatchAndTouch.matrixV1003.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.matrixV1000.is, () => calls.fuelTanks.dispatchAndTouch.matrixV1000.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.matrixV604.is, () => calls.fuelTanks.dispatchAndTouch.matrixV604.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.matrixV602.is, () => calls.fuelTanks.dispatchAndTouch.matrixV602.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.matrixV601.is, () => calls.fuelTanks.dispatchAndTouch.matrixV601.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.matrixV600.is, () => calls.fuelTanks.dispatchAndTouch.matrixV600.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.matrixV500.is, () => calls.fuelTanks.dispatchAndTouch.matrixV500.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.enjinV1032.is, () => calls.fuelTanks.dispatchAndTouch.enjinV1032.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.enjinV1026.is, () => calls.fuelTanks.dispatchAndTouch.enjinV1026.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.enjinV1023.is, () => calls.fuelTanks.dispatchAndTouch.enjinV1023.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.enjinV1022.is, () => calls.fuelTanks.dispatchAndTouch.enjinV1022.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.enjinV1021.is, () => calls.fuelTanks.dispatchAndTouch.enjinV1021.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.enjinV120.is, () => calls.fuelTanks.dispatchAndTouch.enjinV120.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.enjinV110.is, () => calls.fuelTanks.dispatchAndTouch.enjinV110.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.enjinV101.is, () => calls.fuelTanks.dispatchAndTouch.enjinV101.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.enjinV100.is, () => calls.fuelTanks.dispatchAndTouch.enjinV100.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.v1050.is, () => calls.fuelTanks.dispatchAndTouch.v1050.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.v1032.is, () => calls.fuelTanks.dispatchAndTouch.v1032.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.v1031.is, () => calls.fuelTanks.dispatchAndTouch.v1031.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.v1030.is, () => calls.fuelTanks.dispatchAndTouch.v1030.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.v1026.is, () => calls.fuelTanks.dispatchAndTouch.v1026.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.v1023.is, () => calls.fuelTanks.dispatchAndTouch.v1023.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.v1022.is, () => calls.fuelTanks.dispatchAndTouch.v1022.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.v1021.is, () => calls.fuelTanks.dispatchAndTouch.v1021.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.v120.is, () => calls.fuelTanks.dispatchAndTouch.v120.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.v110.is, () => calls.fuelTanks.dispatchAndTouch.v110.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.v106.is, () => calls.fuelTanks.dispatchAndTouch.v106.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.v105.is, () => calls.fuelTanks.dispatchAndTouch.v105.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.v104.is, () => calls.fuelTanks.dispatchAndTouch.v104.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.v103.is, () => calls.fuelTanks.dispatchAndTouch.v103.decode(call))
        .when(calls.fuelTanks.dispatchAndTouch.v102.is, () => calls.fuelTanks.dispatchAndTouch.v102.decode(call))
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
