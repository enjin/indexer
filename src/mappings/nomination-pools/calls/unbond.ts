import { UnsupportedCallError } from '../../../utils/errors'
import { CallItem } from '../../../contexts'
import { calls } from '../../../types'
import { match } from 'ts-pattern'
import { Unbond } from './types'
import { withDispatchCheck } from '../../fuel-tanks/utils'

export const unbond = withDispatchCheck((call: CallItem): Unbond => {
    if (call.name === 'Utility.batch_all') {
        if (calls.utility.batchAll.enjinV100.is(call)) {
            const data = calls.utility.batchAll.enjinV100.decode(call)

            const findCall = data.calls.find((c) => c.__kind === 'NominationPools' && c.value.__kind === 'unbond')

            if (findCall) {
                return findCall.value as Unbond
            }
        }
    }

    return match(call)
        .returnType<Unbond>()
        .when(
            () => calls.nominationPools.unbond.enjinV100.is(call),
            () => calls.nominationPools.unbond.enjinV100.decode(call)
        )
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
})
