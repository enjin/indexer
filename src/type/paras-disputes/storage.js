'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.frozen = exports.included = exports.backersOnDisputes = exports.disputes = exports.lastPrunedSession = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.lastPrunedSession = {
    /**
     *  The last pruned session, if any. All data stored by this module
     *  references sessions.
     */
    enjinV100: new support_1.StorageType('ParasDisputes.LastPrunedSession', 'Optional', [], support_1.sts.number()),
}
exports.disputes = {
    /**
     *  All ongoing or concluded disputes for the last several sessions.
     */
    enjinV100: new support_1.StorageType(
        'ParasDisputes.Disputes',
        'Optional',
        [support_1.sts.number(), enjinV100.CandidateHash],
        enjinV100.V4DisputeState
    ),
}
exports.backersOnDisputes = {
    /**
     *  Backing votes stored for each dispute.
     *  This storage is used for slashing.
     */
    enjinV100: new support_1.StorageType(
        'ParasDisputes.BackersOnDisputes',
        'Optional',
        [support_1.sts.number(), enjinV100.CandidateHash],
        support_1.sts.array(function () {
            return enjinV100.V4ValidatorIndex
        })
    ),
}
exports.included = {
    /**
     *  All included blocks on the chain, as well as the block number in this chain that
     *  should be reverted back to if the candidate is disputed and determined to be invalid.
     */
    enjinV100: new support_1.StorageType(
        'ParasDisputes.Included',
        'Optional',
        [support_1.sts.number(), enjinV100.CandidateHash],
        support_1.sts.number()
    ),
}
exports.frozen = {
    /**
     *  Whether the chain is frozen. Starts as `None`. When this is `Some`,
     *  the chain will not accept any new parachain blocks for backing or inclusion,
     *  and its value indicates the last valid block number in the chain.
     *  It can only be set back to `None` by governance intervention.
     */
    enjinV100: new support_1.StorageType(
        'ParasDisputes.Frozen',
        'Default',
        [],
        support_1.sts.option(function () {
            return support_1.sts.number()
        })
    ),
}
