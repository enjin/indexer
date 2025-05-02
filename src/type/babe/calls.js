'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.planConfigChange = exports.reportEquivocationUnsigned = exports.reportEquivocation = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.reportEquivocation = {
    name: 'Babe.report_equivocation',
    /**
     * Report authority equivocation/misbehavior. This method will verify
     * the equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence will
     * be reported.
     */
    enjinV100: new support_1.CallType(
        'Babe.report_equivocation',
        support_1.sts.struct({
            equivocationProof: enjinV100.EquivocationProof,
            keyOwnerProof: enjinV100.MembershipProof,
        })
    ),
}
exports.reportEquivocationUnsigned = {
    name: 'Babe.report_equivocation_unsigned',
    /**
     * Report authority equivocation/misbehavior. This method will verify
     * the equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence will
     * be reported.
     * This extrinsic must be called unsigned and it is expected that only
     * block authors will call it (validated in `ValidateUnsigned`), as such
     * if the block author is defined it will be defined as the equivocation
     * reporter.
     */
    enjinV100: new support_1.CallType(
        'Babe.report_equivocation_unsigned',
        support_1.sts.struct({
            equivocationProof: enjinV100.EquivocationProof,
            keyOwnerProof: enjinV100.MembershipProof,
        })
    ),
}
exports.planConfigChange = {
    name: 'Babe.plan_config_change',
    /**
     * Plan an epoch config change. The epoch config change is recorded and will be enacted on
     * the next call to `enact_epoch_change`. The config will be activated one epoch after.
     * Multiple calls to this method will replace any existing planned config change that had
     * not been enacted yet.
     */
    enjinV100: new support_1.CallType(
        'Babe.plan_config_change',
        support_1.sts.struct({
            config: enjinV100.NextConfigDescriptor,
        })
    ),
}
