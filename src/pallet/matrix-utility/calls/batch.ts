import { CallItem } from '~/contexts'
import { UnsupportedCallError } from '~/util/errors'
import { calls } from '~/type'
import { match } from 'ts-pattern'
import { withDispatchCheck } from '~/pallet/fuel-tanks/utils'
import { Batch } from '~/pallet/matrix-utility/calls/types'

export const batch = withDispatchCheck((call: CallItem): Batch => {
    return match(call)
        .returnType<Batch>()
        .when(
            () => calls.matrixUtility.batch.matrixEnjinV1022.is(call),
            () => calls.matrixUtility.batch.matrixEnjinV1022.decode(call)
        )
        .when(
            () => calls.matrixUtility.batch.matrixEnjinV1012.is(call),
            () => calls.matrixUtility.batch.matrixEnjinV1012.decode(call)
        )
        .when(
            () => calls.matrixUtility.batch.matrixEnjinV1005.is(call),
            () => calls.matrixUtility.batch.matrixEnjinV1005.decode(call)
        )
        .when(
            () => calls.matrixUtility.batch.matrixEnjinV1005.is(call),
            () => calls.matrixUtility.batch.matrixEnjinV1005.decode(call)
        )
        .when(
            () => calls.matrixUtility.batch.matrixEnjinV1004.is(call),
            () => calls.matrixUtility.batch.matrixEnjinV1004.decode(call)
        )
        .when(
            () => calls.matrixUtility.batch.matrixEnjinV1003.is(call),
            () => calls.matrixUtility.batch.matrixEnjinV1003.decode(call)
        )
        .when(
            () => calls.matrixUtility.batch.matrixEnjinV1000.is(call),
            () => calls.matrixUtility.batch.matrixEnjinV1000.decode(call)
        )
        .when(
            () => calls.matrixUtility.batch.matrixEnjinV603.is(call),
            () => calls.matrixUtility.batch.matrixEnjinV603.decode(call)
        )
        .when(
            () => calls.matrixUtility.batch.matrixV1022.is(call),
            () => calls.matrixUtility.batch.matrixV1022.decode(call)
        )
        .when(
            () => calls.matrixUtility.batch.matrixV1020.is(call),
            () => calls.matrixUtility.batch.matrixV1020.decode(call)
        )
        .when(
            () => calls.matrixUtility.batch.matrixV1012.is(call),
            () => calls.matrixUtility.batch.matrixV1012.decode(call)
        )
        .when(
            () => calls.matrixUtility.batch.matrixV1011.is(call),
            () => calls.matrixUtility.batch.matrixV1011.decode(call)
        )
        .when(
            () => calls.matrixUtility.batch.matrixV1010.is(call),
            () => calls.matrixUtility.batch.matrixV1010.decode(call)
        )
        .when(
            () => calls.matrixUtility.batch.matrixV1005.is(call),
            () => calls.matrixUtility.batch.matrixV1005.decode(call)
        )
        .when(
            () => calls.matrixUtility.batch.matrixV1004.is(call),
            () => calls.matrixUtility.batch.matrixV1004.decode(call)
        )
        .when(
            () => calls.matrixUtility.batch.matrixV1003.is(call),
            () => calls.matrixUtility.batch.matrixV1003.decode(call)
        )
        .when(
            () => calls.matrixUtility.batch.matrixV1000.is(call),
            () => calls.matrixUtility.batch.matrixV1000.decode(call)
        )
        .when(
            () => calls.matrixUtility.batch.matrixV604.is(call),
            () => calls.matrixUtility.batch.matrixV604.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
})
