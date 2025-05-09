'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.disputeTimedOut = exports.revert = exports.disputeConcluded = exports.disputeInitiated = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
exports.disputeInitiated = {
    name: 'ParasDisputes.DisputeInitiated',
    /**
     * A dispute has been initiated. \[candidate hash, dispute location\]
     */
    enjinV100: new support_1.EventType(
        'ParasDisputes.DisputeInitiated',
        support_1.sts.tuple([enjinV100.CandidateHash, enjinV100.DisputeLocation])
    ),
}
exports.disputeConcluded = {
    name: 'ParasDisputes.DisputeConcluded',
    /**
     * A dispute has concluded for or against a candidate.
     * `\[para id, candidate hash, dispute result\]`
     */
    enjinV100: new support_1.EventType(
        'ParasDisputes.DisputeConcluded',
        support_1.sts.tuple([enjinV100.CandidateHash, enjinV100.DisputeResult])
    ),
}
exports.revert = {
    name: 'ParasDisputes.Revert',
    /**
     * A dispute has concluded with supermajority against a candidate.
     * Block authors should no longer build on top of this head and should
     * instead revert the block at the given height. This should be the
     * number of the child of the last known valid block in the chain.
     */
    enjinV100: new support_1.EventType('ParasDisputes.Revert', support_1.sts.number()),
}
exports.disputeTimedOut = {
    name: 'ParasDisputes.DisputeTimedOut',
    /**
     * A dispute has timed out due to insufficient participation.
     * `\[para id, candidate hash\]`
     */
    v100: new support_1.EventType('ParasDisputes.DisputeTimedOut', v100.CandidateHash),
}
