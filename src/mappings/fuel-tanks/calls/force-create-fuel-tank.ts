import { UnsupportedCallError, UnsupportedEventError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { match } from 'ts-pattern'

type ForceCreateFuelTankCall = {
    descriptor: any
}

export function forceCreateFuelTank(call: CallItem) {
    return match(call)
        .returnType<ForceCreateFuelTankCall>()
        .when(calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1012.is, () =>
            calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1012.decode(call)
        )
        .when(calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1005.is, () =>
            calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1005.decode(call)
        )
        .when(calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1004.is, () =>
            calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1004.decode(call)
        )
        .when(calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1003.is, () =>
            calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1003.decode(call)
        )
        .when(calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1000.is, () =>
            calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1000.decode(call)
        )
        .when(calls.fuelTanks.forceCreateFuelTank.matrixEnjinV603.is, () =>
            calls.fuelTanks.forceCreateFuelTank.matrixEnjinV603.decode(call)
        )
        .when(calls.fuelTanks.forceCreateFuelTank.matrixV1012.is, () =>
            calls.fuelTanks.forceCreateFuelTank.matrixV1012.decode(call)
        )
        .when(calls.fuelTanks.forceCreateFuelTank.matrixV1011.is, () =>
            calls.fuelTanks.forceCreateFuelTank.matrixV1011.decode(call)
        )
        .when(calls.fuelTanks.forceCreateFuelTank.matrixV1010.is, () =>
            calls.fuelTanks.forceCreateFuelTank.matrixV1010.decode(call)
        )
        .when(calls.fuelTanks.forceCreateFuelTank.matrixV1005.is, () =>
            calls.fuelTanks.forceCreateFuelTank.matrixV1005.decode(call)
        )
        .when(calls.fuelTanks.forceCreateFuelTank.matrixV1004.is, () =>
            calls.fuelTanks.forceCreateFuelTank.matrixV1004.decode(call)
        )
        .when(calls.fuelTanks.forceCreateFuelTank.matrixV1003.is, () =>
            calls.fuelTanks.forceCreateFuelTank.matrixV1003.decode(call)
        )
        .when(calls.fuelTanks.forceCreateFuelTank.matrixV1000.is, () =>
            calls.fuelTanks.forceCreateFuelTank.matrixV1000.decode(call)
        )
        .when(calls.fuelTanks.forceCreateFuelTank.enjinV1032.is, () =>
            calls.fuelTanks.forceCreateFuelTank.enjinV1032.decode(call)
        )
        .when(calls.fuelTanks.forceCreateFuelTank.enjinV1026.is, () =>
            calls.fuelTanks.forceCreateFuelTank.enjinV1026.decode(call)
        )
        .when(calls.fuelTanks.forceCreateFuelTank.enjinV1023.is, () =>
            calls.fuelTanks.forceCreateFuelTank.enjinV1023.decode(call)
        )
        .when(calls.fuelTanks.forceCreateFuelTank.enjinV1022.is, () =>
            calls.fuelTanks.forceCreateFuelTank.enjinV1022.decode(call)
        )
        .when(calls.fuelTanks.forceCreateFuelTank.enjinV1021.is, () =>
            calls.fuelTanks.forceCreateFuelTank.enjinV1021.decode(call)
        )
        .when(calls.fuelTanks.forceCreateFuelTank.enjinV120.is, () => calls.fuelTanks.forceCreateFuelTank.enjinV120.decode(call))
        .when(calls.fuelTanks.forceCreateFuelTank.enjinV110.is, () => calls.fuelTanks.forceCreateFuelTank.enjinV110.decode(call))
        .when(calls.fuelTanks.forceCreateFuelTank.enjinV101.is, () => calls.fuelTanks.forceCreateFuelTank.enjinV101.decode(call))
        .when(calls.fuelTanks.forceCreateFuelTank.v1050.is, () => calls.fuelTanks.forceCreateFuelTank.v1050.decode(call))
        .when(calls.fuelTanks.forceCreateFuelTank.v1032.is, () => calls.fuelTanks.forceCreateFuelTank.v1032.decode(call))
        .when(calls.fuelTanks.forceCreateFuelTank.v1031.is, () => calls.fuelTanks.forceCreateFuelTank.v1031.decode(call))
        .when(calls.fuelTanks.forceCreateFuelTank.v1030.is, () => calls.fuelTanks.forceCreateFuelTank.v1030.decode(call))
        .when(calls.fuelTanks.forceCreateFuelTank.v1026.is, () => calls.fuelTanks.forceCreateFuelTank.v1026.decode(call))
        .when(calls.fuelTanks.forceCreateFuelTank.v1023.is, () => calls.fuelTanks.forceCreateFuelTank.v1023.decode(call))
        .when(calls.fuelTanks.forceCreateFuelTank.v1022.is, () => calls.fuelTanks.forceCreateFuelTank.v1022.decode(call))
        .when(calls.fuelTanks.forceCreateFuelTank.v1021.is, () => calls.fuelTanks.forceCreateFuelTank.v1021.decode(call))
        .when(calls.fuelTanks.forceCreateFuelTank.v120.is, () => calls.fuelTanks.forceCreateFuelTank.v120.decode(call))
        .when(calls.fuelTanks.forceCreateFuelTank.v110.is, () => calls.fuelTanks.forceCreateFuelTank.v110.decode(call))
        .when(calls.fuelTanks.forceCreateFuelTank.v106.is, () => calls.fuelTanks.forceCreateFuelTank.v106.decode(call))
        .when(calls.fuelTanks.forceCreateFuelTank.v105.is, () => calls.fuelTanks.forceCreateFuelTank.v105.decode(call))
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
