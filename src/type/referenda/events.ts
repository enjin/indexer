import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as matrixEnjinV1041 from '../matrixEnjinV1041'

export const submitted = {
    name: 'Referenda.Submitted',
    /**
     * A referendum has been submitted.
     */
    matrixEnjinV1041: new EventType(
        'Referenda.Submitted',
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
    name: 'Referenda.DecisionDepositPlaced',
    /**
     * The decision deposit has been placed.
     */
    matrixEnjinV1041: new EventType(
        'Referenda.DecisionDepositPlaced',
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
    name: 'Referenda.DecisionDepositRefunded',
    /**
     * The decision deposit has been refunded.
     */
    matrixEnjinV1041: new EventType(
        'Referenda.DecisionDepositRefunded',
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
    name: 'Referenda.DepositSlashed',
    /**
     * A deposit has been slashed.
     */
    matrixEnjinV1041: new EventType(
        'Referenda.DepositSlashed',
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
    name: 'Referenda.DecisionStarted',
    /**
     * A referendum has moved into the deciding phase.
     */
    matrixEnjinV1041: new EventType(
        'Referenda.DecisionStarted',
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
            tally: matrixEnjinV1041.Tally,
        })
    ),
}

export const confirmStarted = {
    name: 'Referenda.ConfirmStarted',
    matrixEnjinV1041: new EventType(
        'Referenda.ConfirmStarted',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
        })
    ),
}

export const confirmAborted = {
    name: 'Referenda.ConfirmAborted',
    matrixEnjinV1041: new EventType(
        'Referenda.ConfirmAborted',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
        })
    ),
}

export const confirmed = {
    name: 'Referenda.Confirmed',
    /**
     * A referendum has ended its confirmation phase and is ready for approval.
     */
    matrixEnjinV1041: new EventType(
        'Referenda.Confirmed',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: matrixEnjinV1041.Tally,
        })
    ),
}

export const approved = {
    name: 'Referenda.Approved',
    /**
     * A referendum has been approved and its proposal has been scheduled.
     */
    matrixEnjinV1041: new EventType(
        'Referenda.Approved',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
        })
    ),
}

export const rejected = {
    name: 'Referenda.Rejected',
    /**
     * A proposal has been rejected by referendum.
     */
    matrixEnjinV1041: new EventType(
        'Referenda.Rejected',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: matrixEnjinV1041.Tally,
        })
    ),
}

export const timedOut = {
    name: 'Referenda.TimedOut',
    /**
     * A referendum has been timed out without being decided.
     */
    matrixEnjinV1041: new EventType(
        'Referenda.TimedOut',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: matrixEnjinV1041.Tally,
        })
    ),
}

export const cancelled = {
    name: 'Referenda.Cancelled',
    /**
     * A referendum has been cancelled.
     */
    matrixEnjinV1041: new EventType(
        'Referenda.Cancelled',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: matrixEnjinV1041.Tally,
        })
    ),
}

export const killed = {
    name: 'Referenda.Killed',
    /**
     * A referendum has been killed.
     */
    matrixEnjinV1041: new EventType(
        'Referenda.Killed',
        sts.struct({
            /**
             * Index of the referendum.
             */
            index: sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: matrixEnjinV1041.Tally,
        })
    ),
}

export const submissionDepositRefunded = {
    name: 'Referenda.SubmissionDepositRefunded',
    /**
     * The submission deposit has been refunded.
     */
    matrixEnjinV1041: new EventType(
        'Referenda.SubmissionDepositRefunded',
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
    name: 'Referenda.MetadataSet',
    /**
     * Metadata for a referendum has been set.
     */
    matrixEnjinV1041: new EventType(
        'Referenda.MetadataSet',
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
    name: 'Referenda.MetadataCleared',
    /**
     * Metadata for a referendum has been cleared.
     */
    matrixEnjinV1041: new EventType(
        'Referenda.MetadataCleared',
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
