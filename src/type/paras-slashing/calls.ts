import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v1060 from '../v1060'

export const reportDisputeLostUnsigned = {
    name: 'ParasSlashing.report_dispute_lost_unsigned',
    enjinV100: new CallType(
        'ParasSlashing.report_dispute_lost_unsigned',
        sts.struct({
            disputeProof: enjinV100.DisputeProof,
            keyOwnerProof: enjinV100.MembershipProof,
        })
    ),
    v1060: new CallType(
        'ParasSlashing.report_dispute_lost_unsigned',
        sts.struct({
            disputeProof: v1060.DisputeProof,
            keyOwnerProof: v1060.MembershipProof,
        })
    ),
}
