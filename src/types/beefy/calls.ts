import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as enjinV1050 from '../enjinV1050'

export const reportEquivocation = {
    name: 'Beefy.report_equivocation',
    /**
     * Report voter equivocation/misbehavior. This method will verify the
     * equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence
     * will be reported.
     */
    enjinV100: new CallType(
        'Beefy.report_equivocation',
        sts.struct({
            equivocationProof: enjinV100.Type_558,
            keyOwnerProof: enjinV100.MembershipProof,
        })
    ),
}

export const reportEquivocationUnsigned = {
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
    enjinV100: new CallType(
        'Beefy.report_equivocation_unsigned',
        sts.struct({
            equivocationProof: enjinV100.Type_558,
            keyOwnerProof: enjinV100.MembershipProof,
        })
    ),
}

export const setNewGenesis = {
    name: 'Beefy.set_new_genesis',
    /**
     * Reset BEEFY consensus by setting a new BEEFY genesis at `delay_in_blocks` blocks in the
     * future.
     *
     * Note: `delay_in_blocks` has to be at least 1.
     */
    enjinV1032: new CallType(
        'Beefy.set_new_genesis',
        sts.struct({
            delayInBlocks: sts.number(),
        })
    ),
}

export const reportDoubleVoting = {
    name: 'Beefy.report_double_voting',
    /**
     * Report voter equivocation/misbehavior. This method will verify the
     * equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence
     * will be reported.
     */
    enjinV1050: new CallType(
        'Beefy.report_double_voting',
        sts.struct({
            equivocationProof: enjinV1050.DoubleVotingProof,
            keyOwnerProof: enjinV1050.MembershipProof,
        })
    ),
}

export const reportDoubleVotingUnsigned = {
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
    enjinV1050: new CallType(
        'Beefy.report_double_voting_unsigned',
        sts.struct({
            equivocationProof: enjinV1050.DoubleVotingProof,
            keyOwnerProof: enjinV1050.MembershipProof,
        })
    ),
}

export const reportForkVoting = {
    name: 'Beefy.report_fork_voting',
    /**
     * Report fork voting equivocation. This method will verify the equivocation proof
     * and validate the given key ownership proof against the extracted offender.
     * If both are valid, the offence will be reported.
     */
    enjinV1050: new CallType(
        'Beefy.report_fork_voting',
        sts.struct({
            equivocationProof: enjinV1050.ForkVotingProof,
            keyOwnerProof: enjinV1050.MembershipProof,
        })
    ),
}

export const reportForkVotingUnsigned = {
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
    enjinV1050: new CallType(
        'Beefy.report_fork_voting_unsigned',
        sts.struct({
            equivocationProof: enjinV1050.ForkVotingProof,
            keyOwnerProof: enjinV1050.MembershipProof,
        })
    ),
}

export const reportFutureBlockVoting = {
    name: 'Beefy.report_future_block_voting',
    /**
     * Report future block voting equivocation. This method will verify the equivocation proof
     * and validate the given key ownership proof against the extracted offender.
     * If both are valid, the offence will be reported.
     */
    enjinV1050: new CallType(
        'Beefy.report_future_block_voting',
        sts.struct({
            equivocationProof: enjinV1050.FutureBlockVotingProof,
            keyOwnerProof: enjinV1050.MembershipProof,
        })
    ),
}

export const reportFutureBlockVotingUnsigned = {
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
    enjinV1050: new CallType(
        'Beefy.report_future_block_voting_unsigned',
        sts.struct({
            equivocationProof: enjinV1050.FutureBlockVotingProof,
            keyOwnerProof: enjinV1050.MembershipProof,
        })
    ),
}
