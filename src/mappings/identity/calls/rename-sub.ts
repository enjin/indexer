import { UnsupportedCallError } from '../../../common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '../../../common/types/contexts'
import { match } from 'ts-pattern'
import { RenameSub } from '../../../mappings/identity/calls/types'

export function renameSub(call: CallItem): RenameSub {
    return match(call)
        .returnType<RenameSub>()
        .when(
            () => calls.identity.renameSub.matrixEnjinV1000.is(call),
            () => calls.identity.renameSub.matrixEnjinV1000.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
