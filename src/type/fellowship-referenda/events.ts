import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as matrixEnjinV1041 from '../matrixEnjinV1041'

export const submitted = {
    name: 'FellowshipReferenda.Submitted',
    /**
     * A referendum has been submitted.
     */
    matrixEnjinV1041: new EventType(
        'FellowshipReferenda.Submitted',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The track (and by extension proposal dispatch origin) of this referendum.
             */
            track: sts.number(),
            /**
             * The proposal for the referendum.
             */
            proposal: matrixEnjinV1041.Bounded,
        })
    ),
}

export const decisionDepositPlaced = {
    name: 'FellowshipReferenda.DecisionDepositPlaced',
    /**
     * The decision deposit has been placed.
     */
    matrixEnjinV1041: new EventType(
        'FellowshipReferenda.DecisionDepositPlaced',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The account who placed the deposit.
             */
            who: matrixEnjinV1041.AccountId32,
            /**
             * The amount placed by the account.
             */
            amount: sts.bigint(),
        })
    ),
}

export const decisionDepositRefunded = {
    name: 'FellowshipReferenda.DecisionDepositRefunded',
    /**
     * The decision deposit has been refunded.
     */
    matrixEnjinV1041: new EventType(
        'FellowshipReferenda.DecisionDepositRefunded',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The account who placed the deposit.
             */
            who: matrixEnjinV1041.AccountId32,
            /**
             * The amount placed by the account.
             */
            amount: sts.bigint(),
        })
    ),
}

export const depositSlashed = {
    name: 'FellowshipReferenda.DepositSlashed',
    /**
     * A deposit has been slashed.
     */
    matrixEnjinV1041: new EventType(
        'FellowshipReferenda.DepositSlashed',
        sts.struct({
            /**
             * The account who placed the deposit.
             */
            who: matrixEnjinV1041.AccountId32,
            /**
             * The amount placed by the account.
             */
            amount: sts.bigint(),
        })
    ),
}

export const decisionStarted = {
    name: 'FellowshipReferenda.DecisionStarted',
    /**
     * A referendum has moved into the deciding phase.
     */
    matrixEnjinV1041: new EventType(
        'FellowshipReferenda.DecisionStarted',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The track (and by extension proposal dispatch origin) of this referendum.
             */
            track: sts.number(),
            /**
             * The proposal for the referendum.
             */
            proposal: matrixEnjinV1041.Bounded,
            /**
             * The current tally of votes in this referendum.
             */
            tally: matrixEnjinV1041.Type_613,
        })
    ),
}

export const confirmStarted = {
    name: 'FellowshipReferenda.ConfirmStarted',
    matrixEnjinV1041: new EventType(
        'FellowshipReferenda.ConfirmStarted',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
        })
    ),
}

export const confirmAborted = {
    name: 'FellowshipReferenda.ConfirmAborted',
    matrixEnjinV1041: new EventType(
        'FellowshipReferenda.ConfirmAborted',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
        })
    ),
}

export const confirmed = {
    name: 'FellowshipReferenda.Confirmed',
    /**
     * A referendum has ended its confirmation phase and is ready for approval.
     */
    matrixEnjinV1041: new EventType(
        'FellowshipReferenda.Confirmed',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: matrixEnjinV1041.Type_613,
        })
    ),
}

export const approved = {
    name: 'FellowshipReferenda.Approved',
    /**
     * A referendum has been approved and its proposal has been scheduled.
     */
    matrixEnjinV1041: new EventType(
        'FellowshipReferenda.Approved',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
        })
    ),
}

export const rejected = {
    name: 'FellowshipReferenda.Rejected',
    /**
     * A proposal has been rejected by referendum.
     */
    matrixEnjinV1041: new EventType(
        'FellowshipReferenda.Rejected',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: matrixEnjinV1041.Type_613,
        })
    ),
}

export const timedOut = {
    name: 'FellowshipReferenda.TimedOut',
    /**
     * A referendum has been timed out without being decided.
     */
    matrixEnjinV1041: new EventType(
        'FellowshipReferenda.TimedOut',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: matrixEnjinV1041.Type_613,
        })
    ),
}

export const cancelled = {
    name: 'FellowshipReferenda.Cancelled',
    /**
     * A referendum has been cancelled.
     */
    matrixEnjinV1041: new EventType(
        'FellowshipReferenda.Cancelled',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: matrixEnjinV1041.Type_613,
        })
    ),
}

export const killed = {
    name: 'FellowshipReferenda.Killed',
    /**
     * A referendum has been killed.
     */
    matrixEnjinV1041: new EventType(
        'FellowshipReferenda.Killed',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: matrixEnjinV1041.Type_613,
        })
    ),
}

export const submissionDepositRefunded = {
    name: 'FellowshipReferenda.SubmissionDepositRefunded',
    /**
     * The submission deposit has been refunded.
     */
    matrixEnjinV1041: new EventType(
        'FellowshipReferenda.SubmissionDepositRefunded',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The account who placed the deposit.
             */
            who: matrixEnjinV1041.AccountId32,
            /**
             * The amount placed by the account.
             */
            amount: sts.bigint(),
        })
    ),
}

export const metadataSet = {
    name: 'FellowshipReferenda.MetadataSet',
    /**
     * Metadata for a referendum has been set.
     */
    matrixEnjinV1041: new EventType(
        'FellowshipReferenda.MetadataSet',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * Preimage hash.
             */
            hash: matrixEnjinV1041.H256,
        })
    ),
}

export const metadataCleared = {
    name: 'FellowshipReferenda.MetadataCleared',
    /**
     * Metadata for a referendum has been cleared.
     */
    matrixEnjinV1041: new EventType(
        'FellowshipReferenda.MetadataCleared',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * Preimage hash.
             */
            hash: matrixEnjinV1041.H256,
        })
    ),
}
