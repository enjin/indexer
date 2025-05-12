'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.reportDisputeLostUnsigned = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.reportDisputeLostUnsigned = {
    name: 'ParasSlashing.report_dispute_lost_unsigned',
    enjinV100: new support_1.CallType(
        'ParasSlashing.report_dispute_lost_unsigned',
        support_1.sts.struct({
            disputeProof: enjinV100.DisputeProof,
            keyOwnerProof: enjinV100.MembershipProof,
        })
    ),
}
