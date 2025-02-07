import {  UnsupportedCallError } from '@enjin/indexer/common/errors'
import { CallItem } from '@enjin/indexer/common/types/contexts'
import { calls } from '../../../types/generated'

export function create(call: CallItem) {
    if (calls.nominationPools.create.enjinV1023.is(call)) {
        return calls.nominationPools.create.enjinV1023.decode(call)
    }

    if (calls.nominationPools.create.enjinV110.is(call)) {
        return calls.nominationPools.create.enjinV110.decode(call)
    }

    if (calls.nominationPools.create.enjinV100.is(call)) {
        return calls.nominationPools.create.enjinV100.decode(call)
    }

    if (calls.nominationPools.create.v1023.is(call)) {
        return calls.nominationPools.create.v1023.decode(call)
    }

    if (calls.nominationPools.create.v110.is(call)) {
        return calls.nominationPools.create.v110.decode(call)
    }

    if (calls.nominationPools.create.v102.is(call)) {
        return calls.nominationPools.create.v102.decode(call)
    }

    if (calls.nominationPools.create.v101.is(call)) {
        return calls.nominationPools.create.v101.decode(call)
    }

    throw new UnsupportedCallError(call)
}
