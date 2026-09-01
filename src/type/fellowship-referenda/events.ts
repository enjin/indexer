import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as matrixV1040 from '../matrixV1040'

export const submitted = {
    name: 'FellowshipReferenda.Submitted',
    /**
     * A referendum has been submitted.
     */
    matrixV1040: new EventType(
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
            proposal: matrixV1040.Bounded,
        })
    ),
}

export const decisionDepositPlaced = {
    name: 'FellowshipReferenda.DecisionDepositPlaced',
    /**
     * The decision deposit has been placed.
     */
    matrixV1040: new EventType(
        'FellowshipReferenda.DecisionDepositPlaced',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The account who placed the deposit.
             */
            who: matrixV1040.AccountId32,
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
    matrixV1040: new EventType(
        'FellowshipReferenda.DecisionDepositRefunded',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The account who placed the deposit.
             */
            who: matrixV1040.AccountId32,
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
    matrixV1040: new EventType(
        'FellowshipReferenda.DepositSlashed',
        sts.struct({
            /**
             * The account who placed the deposit.
             */
            who: matrixV1040.AccountId32,
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
    matrixV1040: new EventType(
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
            proposal: matrixV1040.Bounded,
            /**
             * The current tally of votes in this referendum.
             */
            tally: matrixV1040.Type_613,
        })
    ),
}

export const confirmStarted = {
    name: 'FellowshipReferenda.ConfirmStarted',
    matrixV1040: new EventType(
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
    matrixV1040: new EventType(
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
    matrixV1040: new EventType(
        'FellowshipReferenda.Confirmed',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: matrixV1040.Type_613,
        })
    ),
}

export const approved = {
    name: 'FellowshipReferenda.Approved',
    /**
     * A referendum has been approved and its proposal has been scheduled.
     */
    matrixV1040: new EventType(
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
    matrixV1040: new EventType(
        'FellowshipReferenda.Rejected',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: matrixV1040.Type_613,
        })
    ),
}

export const timedOut = {
    name: 'FellowshipReferenda.TimedOut',
    /**
     * A referendum has been timed out without being decided.
     */
    matrixV1040: new EventType(
        'FellowshipReferenda.TimedOut',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: matrixV1040.Type_613,
        })
    ),
}

export const cancelled = {
    name: 'FellowshipReferenda.Cancelled',
    /**
     * A referendum has been cancelled.
     */
    matrixV1040: new EventType(
        'FellowshipReferenda.Cancelled',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: matrixV1040.Type_613,
        })
    ),
}

export const killed = {
    name: 'FellowshipReferenda.Killed',
    /**
     * A referendum has been killed.
     */
    matrixV1040: new EventType(
        'FellowshipReferenda.Killed',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: matrixV1040.Type_613,
        })
    ),
}

export const submissionDepositRefunded = {
    name: 'FellowshipReferenda.SubmissionDepositRefunded',
    /**
     * The submission deposit has been refunded.
     */
    matrixV1040: new EventType(
        'FellowshipReferenda.SubmissionDepositRefunded',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The account who placed the deposit.
             */
            who: matrixV1040.AccountId32,
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
    matrixV1040: new EventType(
        'FellowshipReferenda.MetadataSet',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * Preimage hash.
             */
            hash: matrixV1040.H256,
        })
    ),
}

export const metadataCleared = {
    name: 'FellowshipReferenda.MetadataCleared',
    /**
     * Metadata for a referendum has been cleared.
     */
    matrixV1040: new EventType(
        'FellowshipReferenda.MetadataCleared',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * Preimage hash.
             */
            hash: matrixV1040.H256,
        })
    ),
}
