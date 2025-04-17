import { CallItem } from '../../../contexts'
import { UnsupportedCallError } from '../../../utils/errors'
import { calls } from '../../../types'
import { match } from 'ts-pattern'
import { ForceCreateCollection } from './types'
import { withDispatchCheck } from '../../fuel-tanks/utils'

export const forceCreateCollection = withDispatchCheck((call: CallItem): ForceCreateCollection => {
    return match(call)
        .returnType<ForceCreateCollection>()
        .when(
            () => calls.multiTokens.forceCreateCollection.matrixEnjinV1012.is(call),
            () => calls.multiTokens.forceCreateCollection.matrixEnjinV1012.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateCollection.matrixEnjinV603.is(call),
            () => calls.multiTokens.forceCreateCollection.matrixEnjinV603.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateCollection.matrixV1010.is(call),
            () => calls.multiTokens.forceCreateCollection.matrixV1010.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateCollection.matrixV500.is(call),
            () => calls.multiTokens.forceCreateCollection.matrixV500.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateCollection.enjinV1032.is(call),
            () => calls.multiTokens.forceCreateCollection.enjinV1032.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateCollection.enjinV100.is(call),
            () => calls.multiTokens.forceCreateCollection.enjinV100.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateCollection.v1050.is(call),
            () => calls.multiTokens.forceCreateCollection.v1050.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateCollection.v1030.is(call),
            () => calls.multiTokens.forceCreateCollection.v1030.decode(call)
        )
        .when(
            () => calls.multiTokens.forceCreateCollection.v100.is(call),
            () => calls.multiTokens.forceCreateCollection.v100.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
})
