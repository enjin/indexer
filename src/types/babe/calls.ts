import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'

export const reportEquivocation =  {
    name: 'Babe.report_equivocation',
    /**
     * Report authority equivocation/misbehavior. This method will verify
     * the equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence will
     * be reported.
     */
    enjinV100: new CallType(
        'Babe.report_equivocation',
        sts.struct({
            equivocationProof: enjinV100.EquivocationProof,
            keyOwnerProof: enjinV100.MembershipProof,
        })
    ),
}

export const reportEquivocationUnsigned =  {
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
    enjinV100: new CallType(
        'Babe.report_equivocation_unsigned',
        sts.struct({
            equivocationProof: enjinV100.EquivocationProof,
            keyOwnerProof: enjinV100.MembershipProof,
        })
    ),
}

export const planConfigChange =  {
    name: 'Babe.plan_config_change',
    /**
     * Plan an epoch config change. The epoch config change is recorded and will be enacted on
     * the next call to `enact_epoch_change`. The config will be activated one epoch after.
     * Multiple calls to this method will replace any existing planned config change that had
     * not been enacted yet.
     */
    enjinV100: new CallType(
        'Babe.plan_config_change',
        sts.struct({
            config: enjinV100.NextConfigDescriptor,
        })
    ),
}
