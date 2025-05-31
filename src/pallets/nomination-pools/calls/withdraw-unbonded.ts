import { UnsupportedCallError } from '../../../utils/errors'
import { CallItem } from '../../../contexts'
import { calls } from '../../../types'
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
