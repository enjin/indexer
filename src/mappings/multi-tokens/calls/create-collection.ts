import { CallItem } from '../../../contexts'
import { UnsupportedCallError } from '../../../utils/errors'
import { calls } from '../../../types'
import { match } from 'ts-pattern'
import { CreateCollection } from './types'
import { withDispatchCheck } from '../../fuel-tanks/utils'

export const createCollection = withDispatchCheck((call: CallItem): CreateCollection => {
    return match(call)
        .returnType<CreateCollection>()
        .when(
            () => calls.multiTokens.createCollection.matrixEnjinV1012.is(call),
            () => calls.multiTokens.createCollection.matrixEnjinV1012.decode(call)
        )
        .when(
            () => calls.multiTokens.createCollection.matrixEnjinV603.is(call),
            () => calls.multiTokens.createCollection.matrixEnjinV603.decode(call)
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
