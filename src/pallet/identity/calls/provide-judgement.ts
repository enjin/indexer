import { UnsupportedCallError } from '~/util/errors'
import { calls } from '~/type'
import { CallItem } from '~/contexts'
import { match } from 'ts-pattern'
import { ProvideJudgement } from '~/pallet/identity/calls/types'
import { withDispatchCheck } from '~/pallet/fuel-tanks/utils'

export const provideJudgement = withDispatchCheck((call: CallItem): ProvideJudgement => {
    return match(call)
        .returnType<ProvideJudgement>()
        .when(
            () => calls.identity.provideJudgement.matrixEnjinV1000.is(call),
            () => calls.identity.provideJudgement.matrixEnjinV1000.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
})
