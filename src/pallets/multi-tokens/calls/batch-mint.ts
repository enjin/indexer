import { CallItem } from '../../../contexts'
import { UnsupportedCallError } from '../../../utils/errors'
import { calls } from '../../../types'
import { match } from 'ts-pattern'
import { BatchMint } from './types'
import { withDispatchCheck } from '../../fuel-tanks/utils'

export const batchMint = withDispatchCheck((call: CallItem): BatchMint => {
    return match(call)
        .returnType<BatchMint>()
        .when(
            () => calls.multiTokens.batchMint.matrixEnjinV1022.is(call),
            () => calls.multiTokens.batchMint.matrixEnjinV1022.decode(call)
        )
        .when(
            () => calls.multiTokens.batchMint.matrixEnjinV1012.is(call),
            () => calls.multiTokens.batchMint.matrixEnjinV1012.decode(call)
        )
        .when(
            () => calls.multiTokens.batchMint.matrixEnjinV603.is(call),
            () => calls.multiTokens.batchMint.matrixEnjinV603.decode(call)
        )
        .when(
            () => calls.multiTokens.batchMint.matrixV1020.is(call),
            () => calls.multiTokens.batchMint.matrixV1020.decode(call)
        )
        .when(
            () => calls.multiTokens.batchMint.matrixV1010.is(call),
            () => calls.multiTokens.batchMint.matrixV1010.decode(call)
        )
        .when(
            () => calls.multiTokens.batchMint.matrixV600.is(call),
            () => calls.multiTokens.batchMint.matrixV600.decode(call)
        )
        .when(
            () => calls.multiTokens.batchMint.matrixV500.is(call),
            () => calls.multiTokens.batchMint.matrixV500.decode(call)
        )
        .when(
            () => calls.multiTokens.batchMint.enjinV1032.is(call),
            () => calls.multiTokens.batchMint.enjinV1032.decode(call)
        )
        .when(
            () => calls.multiTokens.batchMint.enjinV100.is(call),
            () => calls.multiTokens.batchMint.enjinV100.decode(call)
        )
        .when(
            () => calls.multiTokens.batchMint.v1050.is(call),
            () => calls.multiTokens.batchMint.v1050.decode(call)
        )
        .when(
            () => calls.multiTokens.batchMint.v1030.is(call),
            () => calls.multiTokens.batchMint.v1030.decode(call)
        )
        .when(
            () => calls.multiTokens.batchMint.v102.is(call),
            () => calls.multiTokens.batchMint.v102.decode(call)
        )
        .when(
            () => calls.multiTokens.batchMint.v100.is(call),
            () => calls.multiTokens.batchMint.v100.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
})
