'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.metadataCleared =
    exports.metadataSet =
    exports.submissionDepositRefunded =
    exports.killed =
    exports.cancelled =
    exports.timedOut =
    exports.rejected =
    exports.approved =
    exports.confirmed =
    exports.confirmAborted =
    exports.confirmStarted =
    exports.decisionStarted =
    exports.depositSlashed =
    exports.decisionDepositRefunded =
    exports.decisionDepositPlaced =
    exports.submitted =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.submitted = {
    name: 'FellowshipReferenda.Submitted',
    /**
     * A referendum has been submitted.
     */
    enjinV100: new support_1.EventType(
        'FellowshipReferenda.Submitted',
        support_1.sts.struct({
            /**
             * Index of the referendum.
             */
            index: support_1.sts.number(),
            /**
             * The track (and by extension proposal dispatch origin) of this referendum.
             */
            track: support_1.sts.number(),
            /**
             * The proposal for the referendum.
             */
            proposal: enjinV100.Bounded,
        })
    ),
}
exports.decisionDepositPlaced = {
    name: 'FellowshipReferenda.DecisionDepositPlaced',
    /**
     * The decision deposit has been placed.
     */
    enjinV100: new support_1.EventType(
        'FellowshipReferenda.DecisionDepositPlaced',
        support_1.sts.struct({
            /**
             * Index of the referendum.
             */
            index: support_1.sts.number(),
            /**
             * The account who placed the deposit.
             */
            who: enjinV100.AccountId32,
            /**
             * The amount placed by the account.
             */
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.decisionDepositRefunded = {
    name: 'FellowshipReferenda.DecisionDepositRefunded',
    /**
     * The decision deposit has been refunded.
     */
    enjinV100: new support_1.EventType(
        'FellowshipReferenda.DecisionDepositRefunded',
        support_1.sts.struct({
            /**
             * Index of the referendum.
             */
            index: support_1.sts.number(),
            /**
             * The account who placed the deposit.
             */
            who: enjinV100.AccountId32,
            /**
             * The amount placed by the account.
             */
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.depositSlashed = {
    name: 'FellowshipReferenda.DepositSlashed',
    /**
     * A deposit has been slashaed.
     */
    enjinV100: new support_1.EventType(
        'FellowshipReferenda.DepositSlashed',
        support_1.sts.struct({
            /**
             * The account who placed the deposit.
             */
            who: enjinV100.AccountId32,
            /**
             * The amount placed by the account.
             */
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.decisionStarted = {
    name: 'FellowshipReferenda.DecisionStarted',
    /**
     * A referendum has moved into the deciding phase.
     */
    enjinV100: new support_1.EventType(
        'FellowshipReferenda.DecisionStarted',
        support_1.sts.struct({
            /**
             * Index of the referendum.
             */
            index: support_1.sts.number(),
            /**
             * The track (and by extension proposal dispatch origin) of this referendum.
             */
            track: support_1.sts.number(),
            /**
             * The proposal for the referendum.
             */
            proposal: enjinV100.Bounded,
            /**
             * The current tally of votes in this referendum.
             */
            tally: enjinV100.Type_590,
        })
    ),
}
exports.confirmStarted = {
    name: 'FellowshipReferenda.ConfirmStarted',
    enjinV100: new support_1.EventType(
        'FellowshipReferenda.ConfirmStarted',
        support_1.sts.struct({
            /**
             * Index of the referendum.
             */
            index: support_1.sts.number(),
        })
    ),
}
exports.confirmAborted = {
    name: 'FellowshipReferenda.ConfirmAborted',
    enjinV100: new support_1.EventType(
        'FellowshipReferenda.ConfirmAborted',
        support_1.sts.struct({
            /**
             * Index of the referendum.
             */
            index: support_1.sts.number(),
        })
    ),
}
exports.confirmed = {
    name: 'FellowshipReferenda.Confirmed',
    /**
     * A referendum has ended its confirmation phase and is ready for approval.
     */
    enjinV100: new support_1.EventType(
        'FellowshipReferenda.Confirmed',
        support_1.sts.struct({
            /**
             * Index of the referendum.
             */
            index: support_1.sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: enjinV100.Type_590,
        })
    ),
}
exports.approved = {
    name: 'FellowshipReferenda.Approved',
    /**
     * A referendum has been approved and its proposal has been scheduled.
     */
    enjinV100: new support_1.EventType(
        'FellowshipReferenda.Approved',
        support_1.sts.struct({
            /**
             * Index of the referendum.
             */
            index: support_1.sts.number(),
        })
    ),
}
exports.rejected = {
    name: 'FellowshipReferenda.Rejected',
    /**
     * A proposal has been rejected by referendum.
     */
    enjinV100: new support_1.EventType(
        'FellowshipReferenda.Rejected',
        support_1.sts.struct({
            /**
             * Index of the referendum.
             */
            index: support_1.sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: enjinV100.Type_590,
        })
    ),
}
exports.timedOut = {
    name: 'FellowshipReferenda.TimedOut',
    /**
     * A referendum has been timed out without being decided.
     */
    enjinV100: new support_1.EventType(
        'FellowshipReferenda.TimedOut',
        support_1.sts.struct({
            /**
             * Index of the referendum.
             */
            index: support_1.sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: enjinV100.Type_590,
        })
    ),
}
exports.cancelled = {
    name: 'FellowshipReferenda.Cancelled',
    /**
     * A referendum has been cancelled.
     */
    enjinV100: new support_1.EventType(
        'FellowshipReferenda.Cancelled',
        support_1.sts.struct({
            /**
             * Index of the referendum.
             */
            index: support_1.sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: enjinV100.Type_590,
        })
    ),
}
exports.killed = {
    name: 'FellowshipReferenda.Killed',
    /**
     * A referendum has been killed.
     */
    enjinV100: new support_1.EventType(
        'FellowshipReferenda.Killed',
        support_1.sts.struct({
            /**
             * Index of the referendum.
             */
            index: support_1.sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: enjinV100.Type_590,
        })
    ),
}
exports.submissionDepositRefunded = {
    name: 'FellowshipReferenda.SubmissionDepositRefunded',
    /**
     * The submission deposit has been refunded.
     */
    enjinV100: new support_1.EventType(
        'FellowshipReferenda.SubmissionDepositRefunded',
        support_1.sts.struct({
            /**
             * Index of the referendum.
             */
            index: support_1.sts.number(),
            /**
             * The account who placed the deposit.
             */
            who: enjinV100.AccountId32,
            /**
             * The amount placed by the account.
             */
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.metadataSet = {
    name: 'FellowshipReferenda.MetadataSet',
    /**
     * Metadata for a referendum has been set.
     */
    enjinV100: new support_1.EventType(
        'FellowshipReferenda.MetadataSet',
        support_1.sts.struct({
            /**
             * Index of the referendum.
             */
            index: support_1.sts.number(),
            /**
             * Preimage hash.
             */
            hash: enjinV100.H256,
        })
    ),
}
exports.metadataCleared = {
    name: 'FellowshipReferenda.MetadataCleared',
    /**
     * Metadata for a referendum has been cleared.
     */
    enjinV100: new support_1.EventType(
        'FellowshipReferenda.MetadataCleared',
        support_1.sts.struct({
            /**
             * Index of the referendum.
             */
            index: support_1.sts.number(),
            /**
             * Preimage hash.
             */
            hash: enjinV100.H256,
        })
    ),
}
