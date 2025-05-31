import { UnsupportedCallError } from '../../../utils/errors'
import { calls } from '../../../types'
import { CallItem } from '../../../contexts'
import { match } from 'ts-pattern'
import { SetSubs } from './types'
import { withDispatchCheck } from '../../fuel-tanks/utils'

export const setSubs = withDispatchCheck((call: CallItem): SetSubs => {
    return match(call)
        .returnType<SetSubs>()
        .when(
            () => calls.identity.setSubs.matrixEnjinV1000.is(call),
            () => calls.identity.setSubs.matrixEnjinV1000.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
})
