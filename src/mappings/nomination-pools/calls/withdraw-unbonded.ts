import { UnsupportedCallError } from '../../../common/errors'
import { CallItem } from '../../../common/types/contexts'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'
import { WithdrawUnbonded } from './types'

export function withdrawUnbonded(call: CallItem): WithdrawUnbonded {
    return match(call)
        .returnType<WithdrawUnbonded>()
        .when(calls.nominationPools.withdrawUnbonded.enjinV100.is, calls.nominationPools.withdrawUnbonded.enjinV100.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
