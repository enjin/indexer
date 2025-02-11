import { UnsupportedCallError } from '../../../common/errors'
import { CallItem } from '../../../common/types/contexts'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'
import { UnbondDeposit } from './types'

export function unbondDeposit(call: CallItem): UnbondDeposit {
    return match(call)
        .returnType<UnbondDeposit>()
        .when(calls.nominationPools.unbondDeposit.enjinV100.is, calls.nominationPools.unbondDeposit.enjinV100.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
