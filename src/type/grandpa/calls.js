'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.noteStalled = exports.reportEquivocationUnsigned = exports.reportEquivocation = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var v104 = require('../v104')
exports.reportEquivocation = {
    name: 'Grandpa.report_equivocation',
    /**
     * Report voter equivocation/misbehavior. This method will verify the
     * equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence
     * will be reported.
     */
    enjinV100: new support_1.CallType(
        'Grandpa.report_equivocation',
        support_1.sts.struct({
            equivocationProof: enjinV100.Type_373,
            keyOwnerProof: enjinV100.MembershipProof,
        })
    ),
    /**
     * Report voter equivocation/misbehavior. This method will verify the
     * equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence
     * will be reported.
     */
    v100: new support_1.CallType(
        'Grandpa.report_equivocation',
        support_1.sts.struct({
            equivocationProof: v100.Type_335,
            keyOwnerProof: v100.Void,
        })
    ),
    /**
     * Report voter equivocation/misbehavior. This method will verify the
     * equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence
     * will be reported.
     */
    v104: new support_1.CallType(
        'Grandpa.report_equivocation',
        support_1.sts.struct({
            equivocationProof: v104.Type_374,
            keyOwnerProof: v104.MembershipProof,
        })
    ),
}
exports.reportEquivocationUnsigned = {
    name: 'Grandpa.report_equivocation_unsigned',
    /**
     * Report voter equivocation/misbehavior. This method will verify the
     * equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence
     * will be reported.
     *
     * This extrinsic must be called unsigned and it is expected that only
     * block authors will call it (validated in `ValidateUnsigned`), as such
     * if the block author is defined it will be defined as the equivocation
     * reporter.
     */
    enjinV100: new support_1.CallType(
        'Grandpa.report_equivocation_unsigned',
        support_1.sts.struct({
            equivocationProof: enjinV100.Type_373,
            keyOwnerProof: enjinV100.MembershipProof,
        })
    ),
    /**
     * Report voter equivocation/misbehavior. This method will verify the
     * equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence
     * will be reported.
     *
     * This extrinsic must be called unsigned and it is expected that only
     * block authors will call it (validated in `ValidateUnsigned`), as such
     * if the block author is defined it will be defined as the equivocation
     * reporter.
     */
    v100: new support_1.CallType(
        'Grandpa.report_equivocation_unsigned',
        support_1.sts.struct({
            equivocationProof: v100.Type_335,
            keyOwnerProof: v100.Void,
        })
    ),
    /**
     * Report voter equivocation/misbehavior. This method will verify the
     * equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence
     * will be reported.
     *
     * This extrinsic must be called unsigned and it is expected that only
     * block authors will call it (validated in `ValidateUnsigned`), as such
     * if the block author is defined it will be defined as the equivocation
     * reporter.
     */
    v104: new support_1.CallType(
        'Grandpa.report_equivocation_unsigned',
        support_1.sts.struct({
            equivocationProof: v104.Type_374,
            keyOwnerProof: v104.MembershipProof,
        })
    ),
}
exports.noteStalled = {
    name: 'Grandpa.note_stalled',
    /**
     * Note that the current authority set of the GRANDPA finality gadget has stalled.
     *
     * This will trigger a forced authority set change at the beginning of the next session, to
     * be enacted `delay` blocks after that. The `delay` should be high enough to safely assume
     * that the block signalling the forced change will not be re-orged e.g. 1000 blocks.
     * The block production rate (which may be slowed down because of finality lagging) should
     * be taken into account when choosing the `delay`. The GRANDPA voters based on the new
     * authority will start voting on top of `best_finalized_block_number` for new finalized
     * blocks. `best_finalized_block_number` should be the highest of the latest finalized
     * block of all validators of the new authority set.
     *
     * Only callable by root.
     */
    enjinV100: new support_1.CallType(
        'Grandpa.note_stalled',
        support_1.sts.struct({
            delay: support_1.sts.number(),
            bestFinalizedBlockNumber: support_1.sts.number(),
        })
    ),
}
