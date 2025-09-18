import { UnsupportedCallError } from '~/util/errors'
import { calls } from '~/type'
import { CallItem } from '~/contexts'
import { match } from 'ts-pattern'
import { Dispatch } from '~/pallet/fuel-tanks/calls/types'

export function dispatch(call: CallItem): Dispatch {
    return match(call)
        .returnType<Dispatch>()
        .when(
            () => calls.fuelTanks.dispatch.matrixEnjinV1022.is(call),
            () => calls.fuelTanks.dispatch.matrixEnjinV1022.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.matrixEnjinV1012.is(call),
            () => calls.fuelTanks.dispatch.matrixEnjinV1012.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.matrixEnjinV1005.is(call),
            () => calls.fuelTanks.dispatch.matrixEnjinV1005.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.matrixEnjinV1004.is(call),
            () => calls.fuelTanks.dispatch.matrixEnjinV1004.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.matrixEnjinV1003.is(call),
            () => calls.fuelTanks.dispatch.matrixEnjinV1003.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.matrixEnjinV1000.is(call),
            () => calls.fuelTanks.dispatch.matrixEnjinV1000.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.matrixEnjinV603.is(call),
            () => calls.fuelTanks.dispatch.matrixEnjinV603.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.matrixV1023.is(call),
            () => calls.fuelTanks.dispatch.matrixV1023.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.matrixV1022.is(call),
            () => calls.fuelTanks.dispatch.matrixV1022.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.matrixV1020.is(call),
            () => calls.fuelTanks.dispatch.matrixV1020.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.matrixV1012.is(call),
            () => calls.fuelTanks.dispatch.matrixV1012.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.matrixV1011.is(call),
            () => calls.fuelTanks.dispatch.matrixV1011.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.matrixV1010.is(call),
            () => calls.fuelTanks.dispatch.matrixV1010.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.matrixV1005.is(call),
            () => calls.fuelTanks.dispatch.matrixV1005.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.matrixV1004.is(call),
            () => calls.fuelTanks.dispatch.matrixV1004.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.matrixV1003.is(call),
            () => calls.fuelTanks.dispatch.matrixV1003.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.matrixV1000.is(call),
            () => calls.fuelTanks.dispatch.matrixV1000.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.matrixV604.is(call),
            () => calls.fuelTanks.dispatch.matrixV604.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.matrixV602.is(call),
            () => calls.fuelTanks.dispatch.matrixV602.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.matrixV601.is(call),
            () => calls.fuelTanks.dispatch.matrixV601.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.matrixV600.is(call),
            () => calls.fuelTanks.dispatch.matrixV600.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.matrixV500.is(call),
            () => calls.fuelTanks.dispatch.matrixV500.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.enjinV1032.is(call),
            () => calls.fuelTanks.dispatch.enjinV1032.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.enjinV1026.is(call),
            () => calls.fuelTanks.dispatch.enjinV1026.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.enjinV1023.is(call),
            () => calls.fuelTanks.dispatch.enjinV1023.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.enjinV1022.is(call),
            () => calls.fuelTanks.dispatch.enjinV1022.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.enjinV1021.is(call),
            () => calls.fuelTanks.dispatch.enjinV1021.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.enjinV120.is(call),
            () => calls.fuelTanks.dispatch.enjinV120.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.enjinV110.is(call),
            () => calls.fuelTanks.dispatch.enjinV110.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.enjinV101.is(call),
            () => calls.fuelTanks.dispatch.enjinV101.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.enjinV100.is(call),
            () => calls.fuelTanks.dispatch.enjinV100.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.v1050.is(call),
            () => calls.fuelTanks.dispatch.v1050.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.v1032.is(call),
            () => calls.fuelTanks.dispatch.v1032.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.v1031.is(call),
            () => calls.fuelTanks.dispatch.v1031.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.v1030.is(call),
            () => calls.fuelTanks.dispatch.v1030.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.v1026.is(call),
            () => calls.fuelTanks.dispatch.v1026.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.v1023.is(call),
            () => calls.fuelTanks.dispatch.v1023.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.v1022.is(call),
            () => calls.fuelTanks.dispatch.v1022.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.v1021.is(call),
            () => calls.fuelTanks.dispatch.v1021.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.v120.is(call),
            () => calls.fuelTanks.dispatch.v120.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.v110.is(call),
            () => calls.fuelTanks.dispatch.v110.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.v106.is(call),
            () => calls.fuelTanks.dispatch.v106.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.v105.is(call),
            () => calls.fuelTanks.dispatch.v105.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.v104.is(call),
            () => calls.fuelTanks.dispatch.v104.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.v103.is(call),
            () => calls.fuelTanks.dispatch.v103.decode(call)
        )
        .when(
            () => calls.fuelTanks.dispatch.v102.is(call),
            () => calls.fuelTanks.dispatch.v102.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
