import { UnsupportedCallError } from '../../../utils/errors'
import { calls } from '../../../types'
import { CallItem } from '../../../contexts'
import { match } from 'ts-pattern'
import { ProvideJudgement } from './types'
import { withDispatchCheck } from '../../fuel-tanks/utils'

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
