import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as enjinV1032 from '../enjinV1032'

export const addMember = {
    name: 'FellowshipCollective.add_member',
    /**
     * Introduce a new member.
     *
     * - `origin`: Must be the `AdminOrigin`.
     * - `who`: Account of non-member which will become a member.
     * - `rank`: The rank to give the new member.
     *
     * Weight: `O(1)`
     */
    enjinV100: new CallType(
        'FellowshipCollective.add_member',
        sts.struct({
            who: enjinV100.MultiAddress,
        })
    ),
}

export const promoteMember = {
    name: 'FellowshipCollective.promote_member',
    /**
     * Increment the rank of an existing member by one.
     *
     * - `origin`: Must be the `AdminOrigin`.
     * - `who`: Account of existing member.
     *
     * Weight: `O(1)`
     */
    enjinV100: new CallType(
        'FellowshipCollective.promote_member',
        sts.struct({
            who: enjinV100.MultiAddress,
        })
    ),
}

export const demoteMember = {
    name: 'FellowshipCollective.demote_member',
    /**
     * Decrement the rank of an existing member by one. If the member is already at rank zero,
     * then they are removed entirely.
     *
     * - `origin`: Must be the `AdminOrigin`.
     * - `who`: Account of existing member of rank greater than zero.
     *
     * Weight: `O(1)`, less if the member's index is highest in its rank.
     */
    enjinV100: new CallType(
        'FellowshipCollective.demote_member',
        sts.struct({
            who: enjinV100.MultiAddress,
        })
    ),
}

export const removeMember = {
    name: 'FellowshipCollective.remove_member',
    /**
     * Remove the member entirely.
     *
     * - `origin`: Must be the `AdminOrigin`.
     * - `who`: Account of existing member of rank greater than zero.
     * - `min_rank`: The rank of the member or greater.
     *
     * Weight: `O(min_rank)`.
     */
    enjinV100: new CallType(
        'FellowshipCollective.remove_member',
        sts.struct({
            who: enjinV100.MultiAddress,
            minRank: sts.number(),
        })
    ),
}

export const vote = {
    name: 'FellowshipCollective.vote',
    /**
     * Add an aye or nay vote for the sender to the given proposal.
     *
     * - `origin`: Must be `Signed` by a member account.
     * - `poll`: Index of a poll which is ongoing.
     * - `aye`: `true` if the vote is to approve the proposal, `false` otherwise.
     *
     * Transaction fees are be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     *
     * Weight: `O(1)`, less if there was no previous vote on the poll by the member.
     */
    enjinV100: new CallType(
        'FellowshipCollective.vote',
        sts.struct({
            poll: sts.number(),
            aye: sts.boolean(),
        })
    ),
}

export const cleanupPoll = {
    name: 'FellowshipCollective.cleanup_poll',
    /**
     * Remove votes from the given poll. It must have ended.
     *
     * - `origin`: Must be `Signed` by any account.
     * - `poll_index`: Index of a poll which is completed and for which votes continue to
     *   exist.
     * - `max`: Maximum number of vote items from remove in this call.
     *
     * Transaction fees are waived if the operation is successful.
     *
     * Weight `O(max)` (less if there are fewer items to remove than `max`).
     */
    enjinV100: new CallType(
        'FellowshipCollective.cleanup_poll',
        sts.struct({
            pollIndex: sts.number(),
            max: sts.number(),
        })
    ),
}

export const exchangeMember = {
    name: 'FellowshipCollective.exchange_member',
    /**
     * Exchanges a member with a new account and the same existing rank.
     *
     * - `origin`: Must be the `ExchangeOrigin`.
     * - `who`: Account of existing member of rank greater than zero to be exchanged.
     * - `new_who`: New Account of existing member of rank greater than zero to exchanged to.
     */
    enjinV1032: new CallType(
        'FellowshipCollective.exchange_member',
        sts.struct({
            who: enjinV1032.MultiAddress,
            newWho: enjinV1032.MultiAddress,
        })
    ),
}
