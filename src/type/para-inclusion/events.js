'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.upwardMessagesReceived =
    exports.candidateTimedOut =
    exports.candidateIncluded =
    exports.candidateBacked =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var enjinV101 = require('../enjinV101')
exports.candidateBacked = {
    name: 'ParaInclusion.CandidateBacked',
    /**
     * A candidate was backed. `[candidate, head_data]`
     */
    enjinV100: new support_1.EventType(
        'ParaInclusion.CandidateBacked',
        support_1.sts.tuple([
            enjinV100.V4CandidateReceipt,
            enjinV100.HeadData,
            enjinV100.V4CoreIndex,
            enjinV100.V4GroupIndex,
        ])
    ),
}
exports.candidateIncluded = {
    name: 'ParaInclusion.CandidateIncluded',
    /**
     * A candidate was included. `[candidate, head_data]`
     */
    enjinV100: new support_1.EventType(
        'ParaInclusion.CandidateIncluded',
        support_1.sts.tuple([
            enjinV100.V4CandidateReceipt,
            enjinV100.HeadData,
            enjinV100.V4CoreIndex,
            enjinV100.V4GroupIndex,
        ])
    ),
}
exports.candidateTimedOut = {
    name: 'ParaInclusion.CandidateTimedOut',
    /**
     * A candidate timed out. `[candidate, head_data]`
     */
    enjinV100: new support_1.EventType(
        'ParaInclusion.CandidateTimedOut',
        support_1.sts.tuple([enjinV100.V4CandidateReceipt, enjinV100.HeadData, enjinV100.V4CoreIndex])
    ),
}
exports.upwardMessagesReceived = {
    name: 'ParaInclusion.UpwardMessagesReceived',
    /**
     * Some upward messages have been received and will be processed.
     */
    enjinV101: new support_1.EventType(
        'ParaInclusion.UpwardMessagesReceived',
        support_1.sts.struct({
            from: enjinV101.Id,
            count: support_1.sts.number(),
        })
    ),
}
