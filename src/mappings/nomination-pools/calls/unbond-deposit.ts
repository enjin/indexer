import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { calls } from '../../../types/generated'

export function unbondDeposit(call: CallItem) {
    if (calls.nominationPools.unbondDeposit.enjinV100.is(call)) {
        return calls.nominationPools.unbondDeposit.enjinV100.decode(call)
    }

    throw new UnsupportedCallError(call)
}
