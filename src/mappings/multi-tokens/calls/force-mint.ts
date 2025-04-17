import { CallItem } from '../../../contexts'
import { UnsupportedCallError } from '../../../utils/errors'
import { calls } from '../../../types'
import { match } from 'ts-pattern'
import { ForceMint } from './types'
import { withDispatchCheck } from '../../fuel-tanks/utils'

export const forceMint = withDispatchCheck((call: CallItem): ForceMint => {
    return match(call)
        .returnType<ForceMint>()
        .when(
            () => calls.multiTokens.forceMint.matrixEnjinV1022.is(call),
            () => calls.multiTokens.forceMint.matrixEnjinV1022.decode(call)
        )
        .when(
            () => calls.multiTokens.forceMint.matrixEnjinV1012.is(call),
            () => calls.multiTokens.forceMint.matrixEnjinV1012.decode(call)
        )
        .when(
            () => calls.multiTokens.forceMint.matrixEnjinV1003.is(call),
            () => calls.multiTokens.forceMint.matrixEnjinV1003.decode(call)
        )
        .when(
            () => calls.multiTokens.forceMint.matrixEnjinV603.is(call),
            () => calls.multiTokens.forceMint.matrixEnjinV603.decode(call)
        )
        .when(
            () => calls.multiTokens.forceMint.matrixV1020.is(call),
            () => calls.multiTokens.forceMint.matrixV1020.decode(call)
        )
        .when(
            () => calls.multiTokens.forceMint.matrixV1010.is(call),
            () => calls.multiTokens.forceMint.matrixV1010.decode(call)
        )
        .when(
            () => calls.multiTokens.forceMint.matrixV1003.is(call),
            () => calls.multiTokens.forceMint.matrixV1003.decode(call)
        )
        .when(
            () => calls.multiTokens.forceMint.matrixV604.is(call),
            () => calls.multiTokens.forceMint.matrixV604.decode(call)
        )
        .when(
            () => calls.multiTokens.forceMint.enjinV1032.is(call),
            () => calls.multiTokens.forceMint.enjinV1032.decode(call)
        )
        .when(
            () => calls.multiTokens.forceMint.enjinV1023.is(call),
            () => calls.multiTokens.forceMint.enjinV1023.decode(call)
        )
        .when(
            () => calls.multiTokens.forceMint.enjinV101.is(call),
            () => calls.multiTokens.forceMint.enjinV101.decode(call)
        )
        .when(
            () => calls.multiTokens.forceMint.v1050.is(call),
            () => calls.multiTokens.forceMint.v1050.decode(call)
        )
        .when(
            () => calls.multiTokens.forceMint.v1030.is(call),
            () => calls.multiTokens.forceMint.v1030.decode(call)
        )
        .when(
            () => calls.multiTokens.forceMint.v1023.is(call),
            () => calls.multiTokens.forceMint.v1023.decode(call)
        )
        .when(
            () => calls.multiTokens.forceMint.v105.is(call),
            () => calls.multiTokens.forceMint.v105.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
})
