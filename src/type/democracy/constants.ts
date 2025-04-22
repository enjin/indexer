import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'

export const enactmentPeriod = {
    /**
     *  The period between a proposal being approved and enacted.
     *
     *  It should generally be a little more than the unstake period to ensure that
     *  voting stakers have an opportunity to remove themselves from the system in the case
     *  where they are on the losing side of a vote.
     */
    matrixEnjinV603: new ConstantType('Democracy.EnactmentPeriod', sts.number()),
}

export const launchPeriod = {
    /**
     *  How often (in blocks) new public referenda are launched.
     */
    matrixEnjinV603: new ConstantType('Democracy.LaunchPeriod', sts.number()),
}

export const votingPeriod = {
    /**
     *  How often (in blocks) to check for new votes.
     */
    matrixEnjinV603: new ConstantType('Democracy.VotingPeriod', sts.number()),
}

export const voteLockingPeriod = {
    /**
     *  The minimum period of vote locking.
     *
     *  It should be no shorter than enactment period to ensure that in the case of an approval,
     *  those successful voters are locked into the consequences that their votes entail.
     */
    matrixEnjinV603: new ConstantType('Democracy.VoteLockingPeriod', sts.number()),
}

export const minimumDeposit = {
    /**
     *  The minimum amount to be used as a deposit for a public referendum proposal.
     */
    matrixEnjinV603: new ConstantType('Democracy.MinimumDeposit', sts.bigint()),
}

export const instantAllowed = {
    /**
     *  Indicator for whether an emergency origin is even allowed to happen. Some chains may
     *  want to set this permanently to `false`, others may want to condition it on things such
     *  as an upgrade having happened recently.
     */
    matrixEnjinV603: new ConstantType('Democracy.InstantAllowed', sts.boolean()),
}

export const fastTrackVotingPeriod = {
    /**
     *  Minimum voting period allowed for a fast-track referendum.
     */
    matrixEnjinV603: new ConstantType('Democracy.FastTrackVotingPeriod', sts.number()),
}

export const cooloffPeriod = {
    /**
     *  Period in blocks where an external proposal may not be re-submitted after being vetoed.
     */
    matrixEnjinV603: new ConstantType('Democracy.CooloffPeriod', sts.number()),
}

export const maxVotes = {
    /**
     *  The maximum number of votes for an account.
     *
     *  Also used to compute weight, an overly big value can
     *  lead to extrinsic with very big weight: see `delegate` for instance.
     */
    matrixEnjinV603: new ConstantType('Democracy.MaxVotes', sts.number()),
}

export const maxProposals = {
    /**
     *  The maximum number of public proposals that can exist at any time.
     */
    matrixEnjinV603: new ConstantType('Democracy.MaxProposals', sts.number()),
}

export const maxDeposits = {
    /**
     *  The maximum number of deposits a public proposal may have at any time.
     */
    matrixEnjinV603: new ConstantType('Democracy.MaxDeposits', sts.number()),
}

export const maxBlacklisted = {
    /**
     *  The maximum number of items which can be blacklisted.
     */
    matrixEnjinV603: new ConstantType('Democracy.MaxBlacklisted', sts.number()),
}
