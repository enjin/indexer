'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.validatorSetCounts = exports.unappliedSlashes = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.unappliedSlashes = {
    /**
     *  Validators pending dispute slashes.
     */
    enjinV100: new support_1.StorageType(
        'ParasSlashing.UnappliedSlashes',
        'Optional',
        [support_1.sts.number(), enjinV100.CandidateHash],
        enjinV100.PendingSlashes
    ),
}
exports.validatorSetCounts = {
    /**
     *  `ValidatorSetCount` per session.
     */
    enjinV100: new support_1.StorageType(
        'ParasSlashing.ValidatorSetCounts',
        'Optional',
        [support_1.sts.number()],
        support_1.sts.number()
    ),
}
