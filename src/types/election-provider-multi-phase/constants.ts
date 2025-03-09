import {sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'

export const unsignedPhase =  {
    /**
     *  Duration of the unsigned phase.
     */
    enjinV100: new ConstantType(
        'ElectionProviderMultiPhase.UnsignedPhase',
        sts.number()
    ),
}

export const signedPhase =  {
    /**
     *  Duration of the signed phase.
     */
    enjinV100: new ConstantType(
        'ElectionProviderMultiPhase.SignedPhase',
        sts.number()
    ),
}

export const betterSignedThreshold =  {
    /**
     *  The minimum amount of improvement to the solution score that defines a solution as
     *  "better" in the Signed phase.
     */
    enjinV100: new ConstantType(
        'ElectionProviderMultiPhase.BetterSignedThreshold',
        enjinV100.Perbill
    ),
}

export const betterUnsignedThreshold =  {
    /**
     *  The minimum amount of improvement to the solution score that defines a solution as
     *  "better" in the Unsigned phase.
     */
    enjinV100: new ConstantType(
        'ElectionProviderMultiPhase.BetterUnsignedThreshold',
        enjinV100.Perbill
    ),
}

export const offchainRepeat =  {
    /**
     *  The repeat threshold of the offchain worker.
     * 
     *  For example, if it is 5, that means that at least 5 blocks will elapse between attempts
     *  to submit the worker's solution.
     */
    enjinV100: new ConstantType(
        'ElectionProviderMultiPhase.OffchainRepeat',
        sts.number()
    ),
}

export const minerTxPriority =  {
    /**
     *  The priority of the unsigned transaction submitted in the unsigned-phase
     */
    enjinV100: new ConstantType(
        'ElectionProviderMultiPhase.MinerTxPriority',
        sts.bigint()
    ),
}

export const signedMaxSubmissions =  {
    /**
     *  Maximum number of signed submissions that can be queued.
     * 
     *  It is best to avoid adjusting this during an election, as it impacts downstream data
     *  structures. In particular, `SignedSubmissionIndices<T>` is bounded on this value. If you
     *  update this value during an election, you _must_ ensure that
     *  `SignedSubmissionIndices.len()` is less than or equal to the new value. Otherwise,
     *  attempts to submit new solutions may cause a runtime panic.
     */
    enjinV100: new ConstantType(
        'ElectionProviderMultiPhase.SignedMaxSubmissions',
        sts.number()
    ),
}

export const signedMaxWeight =  {
    /**
     *  Maximum weight of a signed solution.
     * 
     *  If [`Config::MinerConfig`] is being implemented to submit signed solutions (outside of
     *  this pallet), then [`MinerConfig::solution_weight`] is used to compare against
     *  this value.
     */
    enjinV100: new ConstantType(
        'ElectionProviderMultiPhase.SignedMaxWeight',
        enjinV100.Weight
    ),
}

export const signedMaxRefunds =  {
    /**
     *  The maximum amount of unchecked solutions to refund the call fee for.
     */
    enjinV100: new ConstantType(
        'ElectionProviderMultiPhase.SignedMaxRefunds',
        sts.number()
    ),
}

export const signedRewardBase =  {
    /**
     *  Base reward for a signed solution
     */
    enjinV100: new ConstantType(
        'ElectionProviderMultiPhase.SignedRewardBase',
        sts.bigint()
    ),
}

export const signedDepositBase =  {
    /**
     *  Base deposit for a signed solution.
     */
    enjinV100: new ConstantType(
        'ElectionProviderMultiPhase.SignedDepositBase',
        sts.bigint()
    ),
}

export const signedDepositByte =  {
    /**
     *  Per-byte deposit for a signed solution.
     */
    enjinV100: new ConstantType(
        'ElectionProviderMultiPhase.SignedDepositByte',
        sts.bigint()
    ),
}

export const signedDepositWeight =  {
    /**
     *  Per-weight deposit for a signed solution.
     */
    enjinV100: new ConstantType(
        'ElectionProviderMultiPhase.SignedDepositWeight',
        sts.bigint()
    ),
}

export const maxElectingVoters =  {
    /**
     *  The maximum number of electing voters to put in the snapshot. At the moment, snapshots
     *  are only over a single block, but once multi-block elections are introduced they will
     *  take place over multiple blocks.
     */
    enjinV100: new ConstantType(
        'ElectionProviderMultiPhase.MaxElectingVoters',
        sts.number()
    ),
}

export const maxElectableTargets =  {
    /**
     *  The maximum number of electable targets to put in the snapshot.
     */
    enjinV100: new ConstantType(
        'ElectionProviderMultiPhase.MaxElectableTargets',
        sts.number()
    ),
}

export const maxWinners =  {
    /**
     *  The maximum number of winners that can be elected by this `ElectionProvider`
     *  implementation.
     * 
     *  Note: This must always be greater or equal to `T::DataProvider::desired_targets()`.
     */
    enjinV100: new ConstantType(
        'ElectionProviderMultiPhase.MaxWinners',
        sts.number()
    ),
}

export const minerMaxLength =  {
    enjinV100: new ConstantType(
        'ElectionProviderMultiPhase.MinerMaxLength',
        sts.number()
    ),
}

export const minerMaxWeight =  {
    enjinV100: new ConstantType(
        'ElectionProviderMultiPhase.MinerMaxWeight',
        enjinV100.Weight
    ),
}

export const minerMaxVotesPerVoter =  {
    enjinV100: new ConstantType(
        'ElectionProviderMultiPhase.MinerMaxVotesPerVoter',
        sts.number()
    ),
}

export const minerMaxWinners =  {
    enjinV100: new ConstantType(
        'ElectionProviderMultiPhase.MinerMaxWinners',
        sts.number()
    ),
}
