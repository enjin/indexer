import { UnsupportedCallError, UnsupportedEventError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { match } from 'ts-pattern'

type CreateFuelTankCall = {
    descriptor: any
}

export function createFuelTank(call: CallItem) {
    return match(call)
        .returnType<CreateFuelTankCall>()
        .when(calls.fuelTanks.createFuelTank.matrixEnjinV1012.is, () =>
            calls.fuelTanks.createFuelTank.matrixEnjinV1012.decode(call)
        )
        .when(calls.fuelTanks.createFuelTank.matrixEnjinV1005.is, () =>
            calls.fuelTanks.createFuelTank.matrixEnjinV1005.decode(call)
        )
        .when(calls.fuelTanks.createFuelTank.matrixEnjinV1004.is, () =>
            calls.fuelTanks.createFuelTank.matrixEnjinV1004.decode(call)
        )
        .when(calls.fuelTanks.createFuelTank.matrixEnjinV1003.is, () =>
            calls.fuelTanks.createFuelTank.matrixEnjinV1003.decode(call)
        )
        .when(calls.fuelTanks.createFuelTank.matrixEnjinV1000.is, () =>
            calls.fuelTanks.createFuelTank.matrixEnjinV1000.decode(call)
        )
        .when(calls.fuelTanks.createFuelTank.matrixEnjinV603.is, () =>
            calls.fuelTanks.createFuelTank.matrixEnjinV603.decode(call)
        )
        .when(calls.fuelTanks.createFuelTank.matrixV1012.is, () => calls.fuelTanks.createFuelTank.matrixV1012.decode(call))
        .when(calls.fuelTanks.createFuelTank.matrixV1011.is, () => calls.fuelTanks.createFuelTank.matrixV1011.decode(call))
        .when(calls.fuelTanks.createFuelTank.matrixV1010.is, () => calls.fuelTanks.createFuelTank.matrixV1010.decode(call))
        .when(calls.fuelTanks.createFuelTank.matrixV1005.is, () => calls.fuelTanks.createFuelTank.matrixV1005.decode(call))
        .when(calls.fuelTanks.createFuelTank.matrixV1004.is, () => calls.fuelTanks.createFuelTank.matrixV1004.decode(call))
        .when(calls.fuelTanks.createFuelTank.matrixV1003.is, () => calls.fuelTanks.createFuelTank.matrixV1003.decode(call))
        .when(calls.fuelTanks.createFuelTank.matrixV1000.is, () => calls.fuelTanks.createFuelTank.matrixV1000.decode(call))
        .when(calls.fuelTanks.createFuelTank.enjinV1032.is, () => calls.fuelTanks.createFuelTank.enjinV1032.decode(call))
        .when(calls.fuelTanks.createFuelTank.enjinV1026.is, () => calls.fuelTanks.createFuelTank.enjinV1026.decode(call))
        .when(calls.fuelTanks.createFuelTank.enjinV1023.is, () => calls.fuelTanks.createFuelTank.enjinV1023.decode(call))
        .when(calls.fuelTanks.createFuelTank.enjinV1022.is, () => calls.fuelTanks.createFuelTank.enjinV1022.decode(call))
        .when(calls.fuelTanks.createFuelTank.enjinV1021.is, () => calls.fuelTanks.createFuelTank.enjinV1021.decode(call))
        .when(calls.fuelTanks.createFuelTank.enjinV120.is, () => calls.fuelTanks.createFuelTank.enjinV120.decode(call))
        .when(calls.fuelTanks.createFuelTank.enjinV110.is, () => calls.fuelTanks.createFuelTank.enjinV110.decode(call))
        .when(calls.fuelTanks.createFuelTank.enjinV101.is, () => calls.fuelTanks.createFuelTank.enjinV101.decode(call))
        .when(calls.fuelTanks.createFuelTank.enjinV100.is, () => calls.fuelTanks.createFuelTank.enjinV100.decode(call))
        .when(calls.fuelTanks.createFuelTank.v1050.is, () => calls.fuelTanks.createFuelTank.v1050.decode(call))
        .when(calls.fuelTanks.createFuelTank.v1032.is, () => calls.fuelTanks.createFuelTank.v1032.decode(call))
        .when(calls.fuelTanks.createFuelTank.v1031.is, () => calls.fuelTanks.createFuelTank.v1031.decode(call))
        .when(calls.fuelTanks.createFuelTank.v1030.is, () => calls.fuelTanks.createFuelTank.v1030.decode(call))
        .when(calls.fuelTanks.createFuelTank.v1026.is, () => calls.fuelTanks.createFuelTank.v1026.decode(call))
        .when(calls.fuelTanks.createFuelTank.v1023.is, () => calls.fuelTanks.createFuelTank.v1023.decode(call))
        .when(calls.fuelTanks.createFuelTank.v1022.is, () => calls.fuelTanks.createFuelTank.v1022.decode(call))
        .when(calls.fuelTanks.createFuelTank.v1021.is, () => calls.fuelTanks.createFuelTank.v1021.decode(call))
        .when(calls.fuelTanks.createFuelTank.v120.is, () => calls.fuelTanks.createFuelTank.v120.decode(call))
        .when(calls.fuelTanks.createFuelTank.v110.is, () => calls.fuelTanks.createFuelTank.v110.decode(call))
        .when(calls.fuelTanks.createFuelTank.v106.is, () => calls.fuelTanks.createFuelTank.v106.decode(call))
        .when(calls.fuelTanks.createFuelTank.v105.is, () => calls.fuelTanks.createFuelTank.v105.decode(call))
        .when(calls.fuelTanks.createFuelTank.v104.is, () => calls.fuelTanks.createFuelTank.v104.decode(call))
        .when(calls.fuelTanks.createFuelTank.v103.is, () => calls.fuelTanks.createFuelTank.v103.decode(call))
        .when(calls.fuelTanks.createFuelTank.v102.is, () => calls.fuelTanks.createFuelTank.v102.decode(call))
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
