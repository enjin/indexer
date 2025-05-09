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
    name: 'Referenda.Submitted',
    /**
     * A referendum has been submitted.
     */
    enjinV100: new support_1.EventType(
        'Referenda.Submitted',
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
    name: 'Referenda.DecisionDepositPlaced',
    /**
     * The decision deposit has been placed.
     */
    enjinV100: new support_1.EventType(
        'Referenda.DecisionDepositPlaced',
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
    name: 'Referenda.DecisionDepositRefunded',
    /**
     * The decision deposit has been refunded.
     */
    enjinV100: new support_1.EventType(
        'Referenda.DecisionDepositRefunded',
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
    name: 'Referenda.DepositSlashed',
    /**
     * A deposit has been slashaed.
     */
    enjinV100: new support_1.EventType(
        'Referenda.DepositSlashed',
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
    name: 'Referenda.DecisionStarted',
    /**
     * A referendum has moved into the deciding phase.
     */
    enjinV100: new support_1.EventType(
        'Referenda.DecisionStarted',
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
            tally: enjinV100.Tally,
        })
    ),
}
exports.confirmStarted = {
    name: 'Referenda.ConfirmStarted',
    enjinV100: new support_1.EventType(
        'Referenda.ConfirmStarted',
        support_1.sts.struct({
            /**
             * Index of the referendum.
             */
            index: support_1.sts.number(),
        })
    ),
}
exports.confirmAborted = {
    name: 'Referenda.ConfirmAborted',
    enjinV100: new support_1.EventType(
        'Referenda.ConfirmAborted',
        support_1.sts.struct({
            /**
             * Index of the referendum.
             */
            index: support_1.sts.number(),
        })
    ),
}
exports.confirmed = {
    name: 'Referenda.Confirmed',
    /**
     * A referendum has ended its confirmation phase and is ready for approval.
     */
    enjinV100: new support_1.EventType(
        'Referenda.Confirmed',
        support_1.sts.struct({
            /**
             * Index of the referendum.
             */
            index: support_1.sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: enjinV100.Tally,
        })
    ),
}
exports.approved = {
    name: 'Referenda.Approved',
    /**
     * A referendum has been approved and its proposal has been scheduled.
     */
    enjinV100: new support_1.EventType(
        'Referenda.Approved',
        support_1.sts.struct({
            /**
             * Index of the referendum.
             */
            index: support_1.sts.number(),
        })
    ),
}
exports.rejected = {
    name: 'Referenda.Rejected',
    /**
     * A proposal has been rejected by referendum.
     */
    enjinV100: new support_1.EventType(
        'Referenda.Rejected',
        support_1.sts.struct({
            /**
             * Index of the referendum.
             */
            index: support_1.sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: enjinV100.Tally,
        })
    ),
}
exports.timedOut = {
    name: 'Referenda.TimedOut',
    /**
     * A referendum has been timed out without being decided.
     */
    enjinV100: new support_1.EventType(
        'Referenda.TimedOut',
        support_1.sts.struct({
            /**
             * Index of the referendum.
             */
            index: support_1.sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: enjinV100.Tally,
        })
    ),
}
exports.cancelled = {
    name: 'Referenda.Cancelled',
    /**
     * A referendum has been cancelled.
     */
    enjinV100: new support_1.EventType(
        'Referenda.Cancelled',
        support_1.sts.struct({
            /**
             * Index of the referendum.
             */
            index: support_1.sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: enjinV100.Tally,
        })
    ),
}
exports.killed = {
    name: 'Referenda.Killed',
    /**
     * A referendum has been killed.
     */
    enjinV100: new support_1.EventType(
        'Referenda.Killed',
        support_1.sts.struct({
            /**
             * Index of the referendum.
             */
            index: support_1.sts.number(),
            /**
             * The final tally of votes in this referendum.
             */
            tally: enjinV100.Tally,
        })
    ),
}
exports.submissionDepositRefunded = {
    name: 'Referenda.SubmissionDepositRefunded',
    /**
     * The submission deposit has been refunded.
     */
    enjinV100: new support_1.EventType(
        'Referenda.SubmissionDepositRefunded',
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
    name: 'Referenda.MetadataSet',
    /**
     * Metadata for a referendum has been set.
     */
    enjinV100: new support_1.EventType(
        'Referenda.MetadataSet',
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
    name: 'Referenda.MetadataCleared',
    /**
     * Metadata for a referendum has been cleared.
     */
    enjinV100: new support_1.EventType(
        'Referenda.MetadataCleared',
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
