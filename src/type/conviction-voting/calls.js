'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.removeOtherVote =
    exports.removeVote =
    exports.unlock =
    exports.undelegate =
    exports.delegate =
    exports.vote =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.vote = {
    name: 'ConvictionVoting.vote',
    /**
     * Vote in a poll. If `vote.is_aye()`, the vote is to enact the proposal;
     * otherwise it is a vote to keep the status quo.
     *
     * The dispatch origin of this call must be _Signed_.
     *
     * - `poll_index`: The index of the poll to vote for.
     * - `vote`: The vote configuration.
     *
     * Weight: `O(R)` where R is the number of polls the voter has voted on.
     */
    enjinV100: new support_1.CallType(
        'ConvictionVoting.vote',
        support_1.sts.struct({
            pollIndex: support_1.sts.number(),
            vote: enjinV100.AccountVote,
        })
    ),
}
exports.delegate = {
    name: 'ConvictionVoting.delegate',
    /**
     * Delegate the voting power (with some given conviction) of the sending account for a
     * particular class of polls.
     *
     * The balance delegated is locked for as long as it's delegated, and thereafter for the
     * time appropriate for the conviction's lock period.
     *
     * The dispatch origin of this call must be _Signed_, and the signing account must either:
     *   - be delegating already; or
     *   - have no voting activity (if there is, then it will need to be removed/consolidated
     *     through `reap_vote` or `unvote`).
     *
     * - `to`: The account whose voting the `target` account's voting power will follow.
     * - `class`: The class of polls to delegate. To delegate multiple classes, multiple calls
     *   to this function are required.
     * - `conviction`: The conviction that will be attached to the delegated votes. When the
     *   account is undelegated, the funds will be locked for the corresponding period.
     * - `balance`: The amount of the account's balance to be used in delegating. This must not
     *   be more than the account's current balance.
     *
     * Emits `Delegated`.
     *
     * Weight: `O(R)` where R is the number of polls the voter delegating to has
     *   voted on. Weight is initially charged as if maximum votes, but is refunded later.
     */
    enjinV100: new support_1.CallType(
        'ConvictionVoting.delegate',
        support_1.sts.struct({
            class: support_1.sts.number(),
            to: enjinV100.MultiAddress,
            conviction: enjinV100.Conviction,
            balance: support_1.sts.bigint(),
        })
    ),
}
exports.undelegate = {
    name: 'ConvictionVoting.undelegate',
    /**
     * Undelegate the voting power of the sending account for a particular class of polls.
     *
     * Tokens may be unlocked following once an amount of time consistent with the lock period
     * of the conviction with which the delegation was issued has passed.
     *
     * The dispatch origin of this call must be _Signed_ and the signing account must be
     * currently delegating.
     *
     * - `class`: The class of polls to remove the delegation from.
     *
     * Emits `Undelegated`.
     *
     * Weight: `O(R)` where R is the number of polls the voter delegating to has
     *   voted on. Weight is initially charged as if maximum votes, but is refunded later.
     */
    enjinV100: new support_1.CallType(
        'ConvictionVoting.undelegate',
        support_1.sts.struct({
            class: support_1.sts.number(),
        })
    ),
}
exports.unlock = {
    name: 'ConvictionVoting.unlock',
    /**
     * Remove the lock caused by prior voting/delegating which has expired within a particular
     * class.
     *
     * The dispatch origin of this call must be _Signed_.
     *
     * - `class`: The class of polls to unlock.
     * - `target`: The account to remove the lock on.
     *
     * Weight: `O(R)` with R number of vote of target.
     */
    enjinV100: new support_1.CallType(
        'ConvictionVoting.unlock',
        support_1.sts.struct({
            class: support_1.sts.number(),
            target: enjinV100.MultiAddress,
        })
    ),
}
exports.removeVote = {
    name: 'ConvictionVoting.remove_vote',
    /**
     * Remove a vote for a poll.
     *
     * If:
     * - the poll was cancelled, or
     * - the poll is ongoing, or
     * - the poll has ended such that
     *   - the vote of the account was in opposition to the result; or
     *   - there was no conviction to the account's vote; or
     *   - the account made a split vote
     * ...then the vote is removed cleanly and a following call to `unlock` may result in more
     * funds being available.
     *
     * If, however, the poll has ended and:
     * - it finished corresponding to the vote of the account, and
     * - the account made a standard vote with conviction, and
     * - the lock period of the conviction is not over
     * ...then the lock will be aggregated into the overall account's lock, which may involve
     * *overlocking* (where the two locks are combined into a single lock that is the maximum
     * of both the amount locked and the time is it locked for).
     *
     * The dispatch origin of this call must be _Signed_, and the signer must have a vote
     * registered for poll `index`.
     *
     * - `index`: The index of poll of the vote to be removed.
     * - `class`: Optional parameter, if given it indicates the class of the poll. For polls
     *   which have finished or are cancelled, this must be `Some`.
     *
     * Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    enjinV100: new support_1.CallType(
        'ConvictionVoting.remove_vote',
        support_1.sts.struct({
            class: support_1.sts.option(function () {
                return support_1.sts.number()
            }),
            index: support_1.sts.number(),
        })
    ),
}
exports.removeOtherVote = {
    name: 'ConvictionVoting.remove_other_vote',
    /**
     * Remove a vote for a poll.
     *
     * If the `target` is equal to the signer, then this function is exactly equivalent to
     * `remove_vote`. If not equal to the signer, then the vote must have expired,
     * either because the poll was cancelled, because the voter lost the poll or
     * because the conviction period is over.
     *
     * The dispatch origin of this call must be _Signed_.
     *
     * - `target`: The account of the vote to be removed; this account must have voted for poll
     *   `index`.
     * - `index`: The index of poll of the vote to be removed.
     * - `class`: The class of the poll.
     *
     * Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    enjinV100: new support_1.CallType(
        'ConvictionVoting.remove_other_vote',
        support_1.sts.struct({
            target: enjinV100.MultiAddress,
            class: support_1.sts.number(),
            index: support_1.sts.number(),
        })
    ),
}
