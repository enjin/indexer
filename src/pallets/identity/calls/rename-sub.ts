import { UnsupportedCallError } from '../../../utils/errors'
import { calls } from '../../../types'
import { CallItem } from '../../../contexts'
import { match } from 'ts-pattern'
import { RenameSub } from './types'
import { withDispatchCheck } from '../../fuel-tanks/utils'

export const renameSub = withDispatchCheck((call: CallItem): RenameSub => {
    return match(call)
        .returnType<RenameSub>()
        .when(
            () => calls.identity.renameSub.matrixEnjinV1000.is(call),
            () => calls.identity.renameSub.matrixEnjinV1000.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
})
