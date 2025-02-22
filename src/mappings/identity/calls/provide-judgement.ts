import { UnsupportedCallError } from '../../../utils/errors'
import { calls } from '../../../types'
import { CallItem } from '../../../contexts'
import { match } from 'ts-pattern'
import { ProvideJudgement } from '../../../mappings/identity/calls/types'

export function provideJudgement(call: CallItem): ProvideJudgement {
    return match(call)
        .returnType<ProvideJudgement>()
        .when(
            () => calls.identity.provideJudgement.matrixEnjinV1000.is(call),
            () => calls.identity.provideJudgement.matrixEnjinV1000.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
