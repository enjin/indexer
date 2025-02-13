import { UnsupportedCallError } from '../../../utils/errors'
import { calls } from '../../../types'
import { CallItem } from '../../../contexts'
import { match } from 'ts-pattern'
import { AddSub } from './types'

export function addSub(call: CallItem): AddSub {
    return match(call)
        .returnType<AddSub>()
        .when(
            () => calls.identity.addSub.matrixEnjinV1000.is(call),
            () => calls.identity.addSub.matrixEnjinV1000.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
