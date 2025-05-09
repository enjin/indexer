'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.reportFutureBlockVotingUnsigned =
    exports.reportFutureBlockVoting =
    exports.reportForkVotingUnsigned =
    exports.reportForkVoting =
    exports.reportDoubleVotingUnsigned =
    exports.reportDoubleVoting =
    exports.setNewGenesis =
    exports.reportEquivocationUnsigned =
    exports.reportEquivocation =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var enjinV1050 = require('../enjinV1050')
exports.reportEquivocation = {
    name: 'Beefy.report_equivocation',
    /**
     * Report voter equivocation/misbehavior. This method will verify the
     * equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence
     * will be reported.
     */
    enjinV100: new support_1.CallType(
        'Beefy.report_equivocation',
        support_1.sts.struct({
            equivocationProof: enjinV100.Type_558,
            keyOwnerProof: enjinV100.MembershipProof,
        })
    ),
}
exports.reportEquivocationUnsigned = {
    name: 'Beefy.report_equivocation_unsigned',
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
        'Beefy.report_equivocation_unsigned',
        support_1.sts.struct({
            equivocationProof: enjinV100.Type_558,
            keyOwnerProof: enjinV100.MembershipProof,
        })
    ),
}
exports.setNewGenesis = {
    name: 'Beefy.set_new_genesis',
    /**
     * Reset BEEFY consensus by setting a new BEEFY genesis at `delay_in_blocks` blocks in the
     * future.
     *
     * Note: `delay_in_blocks` has to be at least 1.
     */
    enjinV1032: new support_1.CallType(
        'Beefy.set_new_genesis',
        support_1.sts.struct({
            delayInBlocks: support_1.sts.number(),
        })
    ),
}
exports.reportDoubleVoting = {
    name: 'Beefy.report_double_voting',
    /**
     * Report voter equivocation/misbehavior. This method will verify the
     * equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence
     * will be reported.
     */
    enjinV1050: new support_1.CallType(
        'Beefy.report_double_voting',
        support_1.sts.struct({
            equivocationProof: enjinV1050.DoubleVotingProof,
            keyOwnerProof: enjinV1050.MembershipProof,
        })
    ),
}
exports.reportDoubleVotingUnsigned = {
    name: 'Beefy.report_double_voting_unsigned',
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
    enjinV1050: new support_1.CallType(
        'Beefy.report_double_voting_unsigned',
        support_1.sts.struct({
            equivocationProof: enjinV1050.DoubleVotingProof,
            keyOwnerProof: enjinV1050.MembershipProof,
        })
    ),
}
exports.reportForkVoting = {
    name: 'Beefy.report_fork_voting',
    /**
     * Report fork voting equivocation. This method will verify the equivocation proof
     * and validate the given key ownership proof against the extracted offender.
     * If both are valid, the offence will be reported.
     */
    enjinV1050: new support_1.CallType(
        'Beefy.report_fork_voting',
        support_1.sts.struct({
            equivocationProof: enjinV1050.ForkVotingProof,
            keyOwnerProof: enjinV1050.MembershipProof,
        })
    ),
}
exports.reportForkVotingUnsigned = {
    name: 'Beefy.report_fork_voting_unsigned',
    /**
     * Report fork voting equivocation. This method will verify the equivocation proof
     * and validate the given key ownership proof against the extracted offender.
     * If both are valid, the offence will be reported.
     *
     * This extrinsic must be called unsigned and it is expected that only
     * block authors will call it (validated in `ValidateUnsigned`), as such
     * if the block author is defined it will be defined as the equivocation
     * reporter.
     */
    enjinV1050: new support_1.CallType(
        'Beefy.report_fork_voting_unsigned',
        support_1.sts.struct({
            equivocationProof: enjinV1050.ForkVotingProof,
            keyOwnerProof: enjinV1050.MembershipProof,
        })
    ),
}
exports.reportFutureBlockVoting = {
    name: 'Beefy.report_future_block_voting',
    /**
     * Report future block voting equivocation. This method will verify the equivocation proof
     * and validate the given key ownership proof against the extracted offender.
     * If both are valid, the offence will be reported.
     */
    enjinV1050: new support_1.CallType(
        'Beefy.report_future_block_voting',
        support_1.sts.struct({
            equivocationProof: enjinV1050.FutureBlockVotingProof,
            keyOwnerProof: enjinV1050.MembershipProof,
        })
    ),
}
exports.reportFutureBlockVotingUnsigned = {
    name: 'Beefy.report_future_block_voting_unsigned',
    /**
     * Report future block voting equivocation. This method will verify the equivocation proof
     * and validate the given key ownership proof against the extracted offender.
     * If both are valid, the offence will be reported.
     *
     * This extrinsic must be called unsigned and it is expected that only
     * block authors will call it (validated in `ValidateUnsigned`), as such
     * if the block author is defined it will be defined as the equivocation
     * reporter.
     */
    enjinV1050: new support_1.CallType(
        'Beefy.report_future_block_voting_unsigned',
        support_1.sts.struct({
            equivocationProof: enjinV1050.FutureBlockVotingProof,
            keyOwnerProof: enjinV1050.MembershipProof,
        })
    ),
}
