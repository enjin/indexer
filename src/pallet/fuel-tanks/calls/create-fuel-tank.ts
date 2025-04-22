import { UnsupportedCallError } from '../../../util/errors'
import { calls } from '../../../type'
import { CallItem } from '../../../contexts'
import { match } from 'ts-pattern'
import { CreateFuelTank } from './types'
import { withDispatchCheck } from '../utils'

export const createFuelTank = withDispatchCheck((call: CallItem): CreateFuelTank => {
    return match(call)
        .returnType<CreateFuelTank>()
        .when(
            () => calls.fuelTanks.createFuelTank.matrixEnjinV1022.is(call),
            () => calls.fuelTanks.createFuelTank.matrixEnjinV1022.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.matrixEnjinV1012.is(call),
            () => calls.fuelTanks.createFuelTank.matrixEnjinV1012.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.matrixEnjinV1005.is(call),
            () => calls.fuelTanks.createFuelTank.matrixEnjinV1005.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.matrixEnjinV1004.is(call),
            () => calls.fuelTanks.createFuelTank.matrixEnjinV1004.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.matrixEnjinV1003.is(call),
            () => calls.fuelTanks.createFuelTank.matrixEnjinV1003.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.matrixEnjinV1000.is(call),
            () => calls.fuelTanks.createFuelTank.matrixEnjinV1000.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.matrixEnjinV603.is(call),
            () => calls.fuelTanks.createFuelTank.matrixEnjinV603.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.matrixV1022.is(call),
            () => calls.fuelTanks.createFuelTank.matrixV1022.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.matrixV1020.is(call),
            () => calls.fuelTanks.createFuelTank.matrixV1020.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.matrixV1012.is(call),
            () => calls.fuelTanks.createFuelTank.matrixV1012.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.matrixV1011.is(call),
            () => calls.fuelTanks.createFuelTank.matrixV1011.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.matrixV1010.is(call),
            () => calls.fuelTanks.createFuelTank.matrixV1010.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.matrixV1005.is(call),
            () => calls.fuelTanks.createFuelTank.matrixV1005.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.matrixV1004.is(call),
            () => calls.fuelTanks.createFuelTank.matrixV1004.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.matrixV1003.is(call),
            () => calls.fuelTanks.createFuelTank.matrixV1003.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.matrixV1000.is(call),
            () => calls.fuelTanks.createFuelTank.matrixV1000.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.matrixV604.is(call),
            () => calls.fuelTanks.createFuelTank.matrixV604.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.matrixV602.is(call),
            () => calls.fuelTanks.createFuelTank.matrixV602.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.matrixV601.is(call),
            () => calls.fuelTanks.createFuelTank.matrixV601.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.matrixV600.is(call),
            () => calls.fuelTanks.createFuelTank.matrixV600.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.matrixV500.is(call),
            () => calls.fuelTanks.createFuelTank.matrixV500.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.enjinV1032.is(call),
            () => calls.fuelTanks.createFuelTank.enjinV1032.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.enjinV1026.is(call),
            () => calls.fuelTanks.createFuelTank.enjinV1026.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.enjinV1023.is(call),
            () => calls.fuelTanks.createFuelTank.enjinV1023.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.enjinV1022.is(call),
            () => calls.fuelTanks.createFuelTank.enjinV1022.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.enjinV1021.is(call),
            () => calls.fuelTanks.createFuelTank.enjinV1021.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.enjinV120.is(call),
            () => calls.fuelTanks.createFuelTank.enjinV120.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.enjinV110.is(call),
            () => calls.fuelTanks.createFuelTank.enjinV110.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.enjinV101.is(call),
            () => calls.fuelTanks.createFuelTank.enjinV101.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.enjinV100.is(call),
            () => calls.fuelTanks.createFuelTank.enjinV100.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.v1050.is(call),
            () => calls.fuelTanks.createFuelTank.v1050.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.v1032.is(call),
            () => calls.fuelTanks.createFuelTank.v1032.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.v1031.is(call),
            () => calls.fuelTanks.createFuelTank.v1031.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.v1030.is(call),
            () => calls.fuelTanks.createFuelTank.v1030.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.v1026.is(call),
            () => calls.fuelTanks.createFuelTank.v1026.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.v1023.is(call),
            () => calls.fuelTanks.createFuelTank.v1023.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.v1022.is(call),
            () => calls.fuelTanks.createFuelTank.v1022.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.v1021.is(call),
            () => calls.fuelTanks.createFuelTank.v1021.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.v120.is(call),
            () => calls.fuelTanks.createFuelTank.v120.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.v110.is(call),
            () => calls.fuelTanks.createFuelTank.v110.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.v106.is(call),
            () => calls.fuelTanks.createFuelTank.v106.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.v105.is(call),
            () => calls.fuelTanks.createFuelTank.v105.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.v104.is(call),
            () => calls.fuelTanks.createFuelTank.v104.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.v103.is(call),
            () => calls.fuelTanks.createFuelTank.v103.decode(call)
        )
        .when(
            () => calls.fuelTanks.createFuelTank.v102.is(call),
            () => calls.fuelTanks.createFuelTank.v102.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
})
