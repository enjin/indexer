import { UnsupportedCallError } from '../../../common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '../../../common/types/contexts'
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
