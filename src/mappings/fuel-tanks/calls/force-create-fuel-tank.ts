import { UnsupportedCallError } from '../../../utils/errors'
import { calls } from '../../../types'
import { CallItem } from '../../../contexts'
import { match } from 'ts-pattern'
import { ForceCreateFuelTank } from './types'

export function forceCreateFuelTank(call: CallItem): ForceCreateFuelTank {
    return match(call)
        .returnType<ForceCreateFuelTank>()
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1012.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1012.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1005.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1005.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1004.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1004.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1003.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1003.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1000.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1000.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.matrixEnjinV603.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.matrixEnjinV603.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.matrixV1012.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.matrixV1012.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.matrixV1011.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.matrixV1011.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.matrixV1010.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.matrixV1010.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.matrixV1005.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.matrixV1005.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.matrixV1004.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.matrixV1004.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.matrixV1003.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.matrixV1003.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.matrixV1000.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.matrixV1000.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.enjinV1032.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.enjinV1032.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.enjinV1026.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.enjinV1026.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.enjinV1023.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.enjinV1023.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.enjinV1022.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.enjinV1022.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.enjinV1021.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.enjinV1021.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.enjinV120.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.enjinV120.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.enjinV110.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.enjinV110.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.enjinV101.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.enjinV101.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.v1050.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.v1050.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.v1032.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.v1032.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.v1031.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.v1031.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.v1030.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.v1030.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.v1026.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.v1026.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.v1023.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.v1023.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.v1022.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.v1022.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.v1021.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.v1021.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.v120.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.v120.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.v110.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.v110.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.v106.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.v106.decode(call)
        )
        .when(
            () => calls.fuelTanks.forceCreateFuelTank.v105.is(call),
            () => calls.fuelTanks.forceCreateFuelTank.v105.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
