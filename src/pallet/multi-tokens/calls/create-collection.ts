import { CallItem } from '~/contexts'
import { UnsupportedCallError } from '~/util/errors'
import { calls } from '~/type'
import { match } from 'ts-pattern'
import { CreateCollection } from '~/pallet/multi-tokens/calls/types'
import { withDispatchCheck } from '~/pallet/fuel-tanks/utils'

export const createCollection = withDispatchCheck((call: CallItem): CreateCollection => {
    return match(call)
        .returnType<CreateCollection>()
        .when(
            () => calls.multiTokens.createCollection.matrixEnjinV1022.is(call),
            () => calls.multiTokens.createCollection.matrixEnjinV1022.decode(call)
        )
        .when(
            () => calls.multiTokens.createCollection.matrixEnjinV1012.is(call),
            () => calls.multiTokens.createCollection.matrixEnjinV1012.decode(call)
        )
        .when(
            () => calls.multiTokens.createCollection.matrixEnjinV603.is(call),
            () => calls.multiTokens.createCollection.matrixEnjinV603.decode(call)
        )
        .when(
            () => calls.multiTokens.createCollection.matrixV1020.is(call),
            () => calls.multiTokens.createCollection.matrixV1020.decode(call)
        )
        .when(
            () => calls.multiTokens.createCollection.matrixV1010.is(call),
            () => calls.multiTokens.createCollection.matrixV1010.decode(call)
        )
        .when(
            () => calls.multiTokens.createCollection.matrixV500.is(call),
            () => calls.multiTokens.createCollection.matrixV500.decode(call)
        )
        .when(
            () => calls.multiTokens.createCollection.enjinV1032.is(call),
            () => calls.multiTokens.createCollection.enjinV1032.decode(call)
        )
        .when(
            () => calls.multiTokens.createCollection.enjinV100.is(call),
            () => calls.multiTokens.createCollection.enjinV100.decode(call)
        )
        .when(
            () => calls.multiTokens.createCollection.v1050.is(call),
            () => calls.multiTokens.createCollection.v1050.decode(call)
        )
        .when(
            () => calls.multiTokens.createCollection.v1030.is(call),
            () => calls.multiTokens.createCollection.v1030.decode(call)
        )
        .when(
            () => calls.multiTokens.createCollection.v100.is(call),
            () => calls.multiTokens.createCollection.v100.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
})
