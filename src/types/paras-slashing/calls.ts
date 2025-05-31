import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'

export const reportDisputeLostUnsigned =  {
    name: 'ParasSlashing.report_dispute_lost_unsigned',
    enjinV100: new CallType(
        'ParasSlashing.report_dispute_lost_unsigned',
        sts.struct({
            disputeProof: enjinV100.DisputeProof,
            keyOwnerProof: enjinV100.MembershipProof,
        })
    ),
}
