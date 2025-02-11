import { UnsupportedCallError } from '../../../common/errors'
import { calls } from '../../../types/generated'
import { CallItem } from '../../../common/types/contexts'
import { match } from 'ts-pattern'
import { SetIdentity } from '../../../mappings/identity/calls/types'

export function setIdentity(call: CallItem): SetIdentity {
    return match(call)
        .returnType<SetIdentity>()
        .when(
            () => calls.identity.setIdentity.matrixEnjinV1000.is(call),
            () => calls.identity.setIdentity.matrixEnjinV1000.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
