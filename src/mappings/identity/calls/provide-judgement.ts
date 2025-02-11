import { UnsupportedCallError } from '../../../common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '../../../common/types/contexts'
import { match } from 'ts-pattern'
import { ProvideJudgement } from '../../../mappings/identity/calls/types'

export function provideJudgement(call: CallItem): ProvideJudgement {
    return match(call)
        .returnType<ProvideJudgement>()
        .when(calls.identity.provideJudgement.matrixEnjinV1000.is, calls.identity.provideJudgement.matrixEnjinV1000.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
