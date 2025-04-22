import { UnsupportedCallError } from '../../../util/errors'
import { CallItem } from '../../../contexts'
import { calls } from '../../../type'
import { match } from 'ts-pattern'
import { WithdrawUnbonded } from './types'
import { withDispatchCheck } from '../../fuel-tanks/utils'

export const withdrawUnbonded = withDispatchCheck((call: CallItem): WithdrawUnbonded => {
    return match(call)
        .returnType<WithdrawUnbonded>()
        .when(
            () => calls.nominationPools.withdrawUnbonded.enjinV100.is(call),
            () => calls.nominationPools.withdrawUnbonded.enjinV100.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
})
