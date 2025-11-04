import { CallItem } from '~/contexts'
import { UnsupportedCallError } from '~/util/errors'
import { calls } from '~/type'
import { match } from 'ts-pattern'
import { withDispatchCheck } from '~/pallet/fuel-tanks/utils'
import { Batch } from '~/pallet/utility/calls/types'

export const batchAll = withDispatchCheck((call: CallItem): Batch => {
    return match(call)
        .returnType<Batch>()
        .when(
            () => calls.utility.batchAll.matrixEnjinV1022.is(call),
            () => calls.utility.batchAll.matrixEnjinV1022.decode(call)
        )
        .when(
            () => calls.utility.batchAll.matrixEnjinV1012.is(call),
            () => calls.utility.batchAll.matrixEnjinV1012.decode(call)
        )
        .when(
            () => calls.utility.batchAll.matrixEnjinV1005.is(call),
            () => calls.utility.batchAll.matrixEnjinV1005.decode(call)
        )
        .when(
            () => calls.utility.batchAll.matrixEnjinV1004.is(call),
            () => calls.utility.batchAll.matrixEnjinV1004.decode(call)
        )
        .when(
            () => calls.utility.batchAll.matrixEnjinV1003.is(call),
            () => calls.utility.batchAll.matrixEnjinV1003.decode(call)
        )
        .when(
            () => calls.utility.batchAll.matrixEnjinV1000.is(call),
            () => calls.utility.batchAll.matrixEnjinV1000.decode(call)
        )
        .when(
            () => calls.utility.batchAll.matrixEnjinV603.is(call),
            () => calls.utility.batchAll.matrixEnjinV603.decode(call)
        )
        .when(
            () => calls.utility.batchAll.matrixV1023.is(call),
            () => calls.utility.batchAll.matrixV1023.decode(call)
        )
        .when(
            () => calls.utility.batchAll.matrixV1030.is(call),
            () => calls.utility.batchAll.matrixV1030.decode(call)
        )
        .when(
            () => calls.utility.batchAll.matrixV1022.is(call),
            () => calls.utility.batchAll.matrixV1022.decode(call)
        )
        .when(
            () => calls.utility.batchAll.matrixV1020.is(call),
            () => calls.utility.batchAll.matrixV1020.decode(call)
        )
        .when(
            () => calls.utility.batchAll.matrixV1012.is(call),
            () => calls.utility.batchAll.matrixV1012.decode(call)
        )
        .when(
            () => calls.utility.batchAll.matrixV1011.is(call),
            () => calls.utility.batchAll.matrixV1011.decode(call)
        )
        .when(
            () => calls.utility.batchAll.matrixV1010.is(call),
            () => calls.utility.batchAll.matrixV1010.decode(call)
        )
        .when(
            () => calls.utility.batchAll.matrixV1005.is(call),
            () => calls.utility.batchAll.matrixV1005.decode(call)
        )
        .when(
            () => calls.utility.batchAll.matrixV1004.is(call),
            () => calls.utility.batchAll.matrixV1004.decode(call)
        )
        .when(
            () => calls.utility.batchAll.matrixV1003.is(call),
            () => calls.utility.batchAll.matrixV1003.decode(call)
        )
        .when(
            () => calls.utility.batchAll.matrixV1000.is(call),
            () => calls.utility.batchAll.matrixV1000.decode(call)
        )
        .when(
            () => calls.utility.batchAll.matrixV604.is(call),
            () => calls.utility.batchAll.matrixV604.decode(call)
        )
        .when(
            () => calls.utility.batchAll.matrixV602.is(call),
            () => calls.utility.batchAll.matrixV602.decode(call)
        )
        .when(
            () => calls.utility.batchAll.matrixV601.is(call),
            () => calls.utility.batchAll.matrixV601.decode(call)
        )
        .when(
            () => calls.utility.batchAll.matrixV600.is(call),
            () => calls.utility.batchAll.matrixV600.decode(call)
        )
        .when(
            () => calls.utility.batchAll.matrixV500.is(call),
            () => calls.utility.batchAll.matrixV500.decode(call)
        )
        .when(
            () => calls.utility.batchAll.enjinV1050.is(call),
            () => calls.utility.batchAll.enjinV1050.decode(call)
        )
        .when(
            () => calls.utility.batchAll.enjinV1032.is(call),
            () => calls.utility.batchAll.enjinV1032.decode(call)
        )
        .when(
            () => calls.utility.batchAll.enjinV1026.is(call),
            () => calls.utility.batchAll.enjinV1026.decode(call)
        )
        .when(
            () => calls.utility.batchAll.enjinV1023.is(call),
            () => calls.utility.batchAll.enjinV1023.decode(call)
        )
        .when(
            () => calls.utility.batchAll.enjinV1022.is(call),
            () => calls.utility.batchAll.enjinV1022.decode(call)
        )
        .when(
            () => calls.utility.batchAll.enjinV1021.is(call),
            () => calls.utility.batchAll.enjinV1021.decode(call)
        )
        .when(
            () => calls.utility.batchAll.enjinV101.is(call),
            () => calls.utility.batchAll.enjinV101.decode(call)
        )
        .when(
            () => calls.utility.batchAll.enjinV100.is(call),
            () => calls.utility.batchAll.enjinV100.decode(call)
        )
        .when(
            () => calls.utility.batchAll.v1060.is(call),
            () => calls.utility.batchAll.v1060.decode(call)
        )
        .when(
            () => calls.utility.batchAll.v1050.is(call),
            () => calls.utility.batchAll.v1050.decode(call)
        )
        .when(
            () => calls.utility.batchAll.v1032.is(call),
            () => calls.utility.batchAll.v1032.decode(call)
        )
        .when(
            () => calls.utility.batchAll.v1032.is(call),
            () => calls.utility.batchAll.v1032.decode(call)
        )
        .when(
            () => calls.utility.batchAll.v1031.is(call),
            () => calls.utility.batchAll.v1031.decode(call)
        )
        .when(
            () => calls.utility.batchAll.v1030.is(call),
            () => calls.utility.batchAll.v1030.decode(call)
        )
        .when(
            () => calls.utility.batchAll.v1026.is(call),
            () => calls.utility.batchAll.v1026.decode(call)
        )
        .when(
            () => calls.utility.batchAll.v1023.is(call),
            () => calls.utility.batchAll.v1023.decode(call)
        )
        .when(
            () => calls.utility.batchAll.v1022.is(call),
            () => calls.utility.batchAll.v1022.decode(call)
        )
        .when(
            () => calls.utility.batchAll.v1021.is(call),
            () => calls.utility.batchAll.v1021.decode(call)
        )
        .when(
            () => calls.utility.batchAll.v106.is(call),
            () => calls.utility.batchAll.v106.decode(call)
        )
        .when(
            () => calls.utility.batchAll.v105.is(call),
            () => calls.utility.batchAll.v105.decode(call)
        )
        .when(
            () => calls.utility.batchAll.v104.is(call),
            () => calls.utility.batchAll.v104.decode(call)
        )
        .when(
            () => calls.utility.batchAll.v103.is(call),
            () => calls.utility.batchAll.v103.decode(call)
        )
        .when(
            () => calls.utility.batchAll.v102.is(call),
            () => calls.utility.batchAll.v102.decode(call)
        )
        .when(
            () => calls.utility.batchAll.v101.is(call),
            () => calls.utility.batchAll.v101.decode(call)
        )
        .when(
            () => calls.utility.batchAll.v100.is(call),
            () => calls.utility.batchAll.v100.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
})
