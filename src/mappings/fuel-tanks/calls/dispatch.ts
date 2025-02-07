import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { match } from 'ts-pattern'

type DispatchCall = {
    tankId: {
        __kind: string
        value?: string
    }
    ruleSetId: number
    call: {
        __kind: string
    }
    settings?: {
        useNoneOrigin: boolean
        paysRemainingFee: boolean
        signature?: {
            signature: string
            expiryBlock: number
        }
    }
}

export function dispatch(call: CallItem): DispatchCall {
    return match(call)
        .returnType<DispatchCall>()
        .when(calls.fuelTanks.dispatch.matrixEnjinV1012.is, calls.fuelTanks.dispatch.matrixEnjinV1012.decode)
        .when(calls.fuelTanks.dispatch.matrixEnjinV1005.is, calls.fuelTanks.dispatch.matrixEnjinV1005.decode)
        .when(calls.fuelTanks.dispatch.matrixEnjinV1004.is, calls.fuelTanks.dispatch.matrixEnjinV1004.decode)
        .when(calls.fuelTanks.dispatch.matrixEnjinV1003.is, calls.fuelTanks.dispatch.matrixEnjinV1003.decode)
        .when(calls.fuelTanks.dispatch.matrixEnjinV1000.is, calls.fuelTanks.dispatch.matrixEnjinV1000.decode)
        .when(calls.fuelTanks.dispatch.matrixEnjinV603.is, calls.fuelTanks.dispatch.matrixEnjinV603.decode)
        .when(calls.fuelTanks.dispatch.matrixV1012.is, calls.fuelTanks.dispatch.matrixV1012.decode)
        .when(calls.fuelTanks.dispatch.matrixV1011.is, calls.fuelTanks.dispatch.matrixV1011.decode)
        .when(calls.fuelTanks.dispatch.matrixV1010.is, calls.fuelTanks.dispatch.matrixV1010.decode)
        .when(calls.fuelTanks.dispatch.matrixV1005.is, calls.fuelTanks.dispatch.matrixV1005.decode)
        .when(calls.fuelTanks.dispatch.matrixV1004.is, calls.fuelTanks.dispatch.matrixV1004.decode)
        .when(calls.fuelTanks.dispatch.matrixV1003.is, calls.fuelTanks.dispatch.matrixV1003.decode)
        .when(calls.fuelTanks.dispatch.matrixV1000.is, calls.fuelTanks.dispatch.matrixV1000.decode)
        .when(calls.fuelTanks.dispatch.matrixV604.is, calls.fuelTanks.dispatch.matrixV604.decode)
        .when(calls.fuelTanks.dispatch.matrixV602.is, calls.fuelTanks.dispatch.matrixV602.decode)
        .when(calls.fuelTanks.dispatch.matrixV601.is, calls.fuelTanks.dispatch.matrixV601.decode)
        .when(calls.fuelTanks.dispatch.matrixV600.is, calls.fuelTanks.dispatch.matrixV600.decode)
        .when(calls.fuelTanks.dispatch.matrixV500.is, calls.fuelTanks.dispatch.matrixV500.decode)
        .when(calls.fuelTanks.dispatch.enjinV1032.is, calls.fuelTanks.dispatch.enjinV1032.decode)
        .when(calls.fuelTanks.dispatch.enjinV1026.is, calls.fuelTanks.dispatch.enjinV1026.decode)
        .when(calls.fuelTanks.dispatch.enjinV1023.is, calls.fuelTanks.dispatch.enjinV1023.decode)
        .when(calls.fuelTanks.dispatch.enjinV1022.is, calls.fuelTanks.dispatch.enjinV1022.decode)
        .when(calls.fuelTanks.dispatch.enjinV1021.is, calls.fuelTanks.dispatch.enjinV1021.decode)
        .when(calls.fuelTanks.dispatch.enjinV120.is, calls.fuelTanks.dispatch.enjinV120.decode)
        .when(calls.fuelTanks.dispatch.enjinV110.is, calls.fuelTanks.dispatch.enjinV110.decode)
        .when(calls.fuelTanks.dispatch.enjinV101.is, calls.fuelTanks.dispatch.enjinV101.decode)
        .when(calls.fuelTanks.dispatch.enjinV100.is, calls.fuelTanks.dispatch.enjinV100.decode)
        .when(calls.fuelTanks.dispatch.v1050.is, calls.fuelTanks.dispatch.v1050.decode)
        .when(calls.fuelTanks.dispatch.v1032.is, calls.fuelTanks.dispatch.v1032.decode)
        .when(calls.fuelTanks.dispatch.v1031.is, calls.fuelTanks.dispatch.v1031.decode)
        .when(calls.fuelTanks.dispatch.v1030.is, calls.fuelTanks.dispatch.v1030.decode)
        .when(calls.fuelTanks.dispatch.v1026.is, calls.fuelTanks.dispatch.v1026.decode)
        .when(calls.fuelTanks.dispatch.v1023.is, calls.fuelTanks.dispatch.v1023.decode)
        .when(calls.fuelTanks.dispatch.v1022.is, calls.fuelTanks.dispatch.v1022.decode)
        .when(calls.fuelTanks.dispatch.v1021.is, calls.fuelTanks.dispatch.v1021.decode)
        .when(calls.fuelTanks.dispatch.v120.is, calls.fuelTanks.dispatch.v120.decode)
        .when(calls.fuelTanks.dispatch.v110.is, calls.fuelTanks.dispatch.v110.decode)
        .when(calls.fuelTanks.dispatch.v106.is, calls.fuelTanks.dispatch.v106.decode)
        .when(calls.fuelTanks.dispatch.v105.is, calls.fuelTanks.dispatch.v105.decode)
        .when(calls.fuelTanks.dispatch.v104.is, calls.fuelTanks.dispatch.v104.decode)
        .when(calls.fuelTanks.dispatch.v103.is, calls.fuelTanks.dispatch.v103.decode)
        .when(calls.fuelTanks.dispatch.v102.is, calls.fuelTanks.dispatch.v102.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
