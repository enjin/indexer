import { UnsupportedCallError } from '../../../util/errors'
import { calls } from '../../../type'
import { CallItem } from '../../../contexts'
import { match } from 'ts-pattern'
import { SetIdentity } from './types'
import { withDispatchCheck } from '../../fuel-tanks/utils'

export const setIdentity = withDispatchCheck((call: CallItem): SetIdentity => {
    return match(call)
        .returnType<SetIdentity>()
        .when(
            () => calls.identity.setIdentity.matrixEnjinV1000.is(call),
            () => calls.identity.setIdentity.matrixEnjinV1000.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
})
