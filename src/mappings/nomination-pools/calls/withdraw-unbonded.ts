import { UnsupportedCallError } from '../../../utils/errors'
import { CallItem } from '../../../contexts'
import { calls } from '../../../types'
import { match } from 'ts-pattern'
import { WithdrawUnbonded } from './types'
import { withDispatchCheck } from '../../fuel-tanks/utils'

export const withdrawUnbonded = withDispatchCheck((call: CallItem): WithdrawUnbonded => {
    if (call.name === 'Utility.batch_all') {
        if (calls.utility.batchAll.enjinV100.is(call)) {
            const data = calls.utility.batchAll.enjinV100.decode(call)

            const findCall = data.calls.find(
                (c) => c.__kind === 'NominationPools' && c.value.__kind === 'withdraw_unbonded'
            )

            if (findCall) {
                return findCall.value as WithdrawUnbonded
            }
        }
    }

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
