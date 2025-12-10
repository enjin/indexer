import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as v1060 from '../v1060'
import * as enjinV1062 from '../enjinV1062'

export const reportDisputeLostUnsigned = {
    name: 'ParasSlashing.report_dispute_lost_unsigned',
    enjinV100: new CallType(
        'ParasSlashing.report_dispute_lost_unsigned',
        sts.struct({
            disputeProof: enjinV100.DisputeProof,
            keyOwnerProof: enjinV100.MembershipProof,
        })
    ),
    enjinV1062: new CallType(
        'ParasSlashing.report_dispute_lost_unsigned',
        sts.struct({
            disputeProof: enjinV1062.DisputeProof,
            keyOwnerProof: enjinV1062.MembershipProof,
        })
    ),
    v100: new CallType(
        'ParasSlashing.report_dispute_lost_unsigned',
        sts.struct({
            disputeProof: v100.DisputeProof,
            keyOwnerProof: v100.MembershipProof,
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
