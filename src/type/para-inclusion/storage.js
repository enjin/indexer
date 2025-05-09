'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.v1 =
    exports.pendingAvailabilityCommitments =
    exports.pendingAvailability =
    exports.availabilityBitfields =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var enjinV1050 = require('../enjinV1050')
exports.availabilityBitfields = {
    /**
     *  The latest bitfield for each validator, referred to by their index in the validator set.
     */
    enjinV100: new support_1.StorageType(
        'ParaInclusion.AvailabilityBitfields',
        'Optional',
        [enjinV100.V4ValidatorIndex],
        enjinV100.AvailabilityBitfieldRecord
    ),
}
exports.pendingAvailability = {
    /**
     *  Candidates pending availability by `ParaId`.
     */
    enjinV100: new support_1.StorageType(
        'ParaInclusion.PendingAvailability',
        'Optional',
        [enjinV100.Id],
        enjinV100.CandidatePendingAvailability
    ),
}
exports.pendingAvailabilityCommitments = {
    /**
     *  The commitments of candidates pending availability, by `ParaId`.
     */
    enjinV100: new support_1.StorageType(
        'ParaInclusion.PendingAvailabilityCommitments',
        'Optional',
        [enjinV100.Id],
        enjinV100.V4CandidateCommitments
    ),
}
exports.v1 = {
    /**
     *  Candidates pending availability by `ParaId`. They form a chain starting from the latest
     *  included head of the para.
     *  Use a different prefix post-migration to v1, since the v0 `PendingAvailability` storage
     *  would otherwise have the exact same prefix which could cause undefined behaviour when doing
     *  the migration.
     */
    enjinV1050: new support_1.StorageType(
        'ParaInclusion.V1',
        'Optional',
        [enjinV1050.Id],
        support_1.sts.array(function () {
            return enjinV1050.CandidatePendingAvailability
        })
    ),
}
