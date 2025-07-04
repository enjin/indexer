import { CallItem } from '~/contexts'
import { UnsupportedCallError } from '~/util/errors'
import { calls } from '~/type'
import { match } from 'ts-pattern'
import { Mint } from '~/pallet/multi-tokens/calls/types'
import { withDispatchCheck } from '~/pallet/fuel-tanks/utils'

export const mint = withDispatchCheck((call: CallItem): Mint => {
    return match(call)
        .returnType<Mint>()
        .when(
            () => calls.multiTokens.mint.matrixEnjinV1022.is(call),
            () => calls.multiTokens.mint.matrixEnjinV1022.decode(call)
        )
        .when(
            () => calls.multiTokens.mint.matrixEnjinV1012.is(call),
            () => calls.multiTokens.mint.matrixEnjinV1012.decode(call)
        )
        .when(
            () => calls.multiTokens.mint.matrixEnjinV603.is(call),
            () => calls.multiTokens.mint.matrixEnjinV603.decode(call)
        )
        .when(
            () => calls.multiTokens.mint.matrixV1020.is(call),
            () => calls.multiTokens.mint.matrixV1020.decode(call)
        )
        .when(
            () => calls.multiTokens.mint.matrixV1010.is(call),
            () => calls.multiTokens.mint.matrixV1010.decode(call)
        )
        .when(
            () => calls.multiTokens.mint.matrixV600.is(call),
            () => calls.multiTokens.mint.matrixV600.decode(call)
        )
        .when(
            () => calls.multiTokens.mint.matrixV500.is(call),
            () => calls.multiTokens.mint.matrixV500.decode(call)
        )
        .when(
            () => calls.multiTokens.mint.enjinV1032.is(call),
            () => calls.multiTokens.mint.enjinV1032.decode(call)
        )
        .when(
            () => calls.multiTokens.mint.enjinV100.is(call),
            () => calls.multiTokens.mint.enjinV100.decode(call)
        )
        .when(
            () => calls.multiTokens.mint.v1050.is(call),
            () => calls.multiTokens.mint.v1050.decode(call)
        )
        .when(
            () => calls.multiTokens.mint.v1030.is(call),
            () => calls.multiTokens.mint.v1030.decode(call)
        )
        .when(
            () => calls.multiTokens.mint.v102.is(call),
            () => calls.multiTokens.mint.v102.decode(call)
        )
        .when(
            () => calls.multiTokens.mint.v100.is(call),
            () => calls.multiTokens.mint.v100.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
})
