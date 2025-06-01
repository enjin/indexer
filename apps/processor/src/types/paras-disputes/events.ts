import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'

export const disputeInitiated =  {
    name: 'ParasDisputes.DisputeInitiated',
    /**
     * A dispute has been initiated. \[candidate hash, dispute location\]
     */
    enjinV100: new EventType(
        'ParasDisputes.DisputeInitiated',
        sts.tuple([enjinV100.CandidateHash, enjinV100.DisputeLocation])
    ),
}

export const disputeConcluded =  {
    name: 'ParasDisputes.DisputeConcluded',
    /**
     * A dispute has concluded for or against a candidate.
     * `\[para id, candidate hash, dispute result\]`
     */
    enjinV100: new EventType(
        'ParasDisputes.DisputeConcluded',
        sts.tuple([enjinV100.CandidateHash, enjinV100.DisputeResult])
    ),
}

export const revert =  {
    name: 'ParasDisputes.Revert',
    /**
     * A dispute has concluded with supermajority against a candidate.
     * Block authors should no longer build on top of this head and should
     * instead revert the block at the given height. This should be the
     * number of the child of the last known valid block in the chain.
     */
    enjinV100: new EventType(
        'ParasDisputes.Revert',
        sts.number()
    ),
}

export const disputeTimedOut =  {
    name: 'ParasDisputes.DisputeTimedOut',
    /**
     * A dispute has timed out due to insufficient participation.
     * `\[para id, candidate hash\]`
     */
    v100: new EventType(
        'ParasDisputes.DisputeTimedOut',
        v100.CandidateHash
    ),
}
