import { UnsupportedCallError } from '../../../common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '../../../common/types/contexts'
import { match } from 'ts-pattern'
import { AddSub } from '../../../mappings/identity/calls/types'

export function addSub(call: CallItem): AddSub {
    return match(call)
        .returnType<AddSub>()
        .when(calls.identity.addSub.matrixEnjinV1000.is, calls.identity.addSub.matrixEnjinV1000.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
