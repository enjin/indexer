import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as enjinV101 from '../enjinV101'
import * as v1060 from '../v1060'

export const candidateBacked = {
    name: 'ParaInclusion.CandidateBacked',
    /**
     * A candidate was backed. `[candidate, head_data]`
     */
    enjinV100: new EventType(
        'ParaInclusion.CandidateBacked',
        sts.tuple([enjinV100.V4CandidateReceipt, enjinV100.HeadData, enjinV100.V4CoreIndex, enjinV100.V4GroupIndex])
    ),
    /**
     * A candidate was backed. `[candidate, head_data]`
     */
    v1060: new EventType(
        'ParaInclusion.CandidateBacked',
        sts.tuple([v1060.CandidateReceiptV2, v1060.HeadData, v1060.V8CoreIndex, v1060.V8GroupIndex])
    ),
}

export const candidateIncluded = {
    name: 'ParaInclusion.CandidateIncluded',
    /**
     * A candidate was included. `[candidate, head_data]`
     */
    enjinV100: new EventType(
        'ParaInclusion.CandidateIncluded',
        sts.tuple([enjinV100.V4CandidateReceipt, enjinV100.HeadData, enjinV100.V4CoreIndex, enjinV100.V4GroupIndex])
    ),
    /**
     * A candidate was included. `[candidate, head_data]`
     */
    v1060: new EventType(
        'ParaInclusion.CandidateIncluded',
        sts.tuple([v1060.CandidateReceiptV2, v1060.HeadData, v1060.V8CoreIndex, v1060.V8GroupIndex])
    ),
}

export const candidateTimedOut = {
    name: 'ParaInclusion.CandidateTimedOut',
    /**
     * A candidate timed out. `[candidate, head_data]`
     */
    enjinV100: new EventType(
        'ParaInclusion.CandidateTimedOut',
        sts.tuple([enjinV100.V4CandidateReceipt, enjinV100.HeadData, enjinV100.V4CoreIndex])
    ),
    /**
     * A candidate timed out. `[candidate, head_data]`
     */
    v1060: new EventType(
        'ParaInclusion.CandidateTimedOut',
        sts.tuple([v1060.CandidateReceiptV2, v1060.HeadData, v1060.V8CoreIndex])
    ),
}

export const upwardMessagesReceived = {
    name: 'ParaInclusion.UpwardMessagesReceived',
    /**
     * Some upward messages have been received and will be processed.
     */
    enjinV101: new EventType(
        'ParaInclusion.UpwardMessagesReceived',
        sts.struct({
            from: enjinV101.Id,
            count: sts.number(),
        })
    ),
}
