import { UnsupportedCallError } from '../../../utils/errors'
import { calls } from '../../../types'
import { CallItem } from '../../../contexts'
import { match } from 'ts-pattern'
import { SetSubs } from '../../../mappings/identity/calls/types'

export function setSubs(call: CallItem): SetSubs {
    return match(call)
        .returnType<SetSubs>()
        .when(
            () => calls.identity.setSubs.matrixEnjinV1000.is(call),
            () => calls.identity.setSubs.matrixEnjinV1000.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
