import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { calls } from '../../../types/generated'

export function withdrawDeposit(call: CallItem) {
    if (call.name === 'NominationPools.withdraw_deposit') {
        if (calls.nominationPools.withdrawDeposit.enjinV100.is(call)) {
            return calls.nominationPools.withdrawDeposit.enjinV100.decode(call)
        }
    }

    if (calls.nominationPools.withdrawUnbonded.enjinV100.is(call)) {
        return calls.nominationPools.withdrawUnbonded.enjinV100.decode(call)
    }

    throw new UnsupportedCallError(call)
}
