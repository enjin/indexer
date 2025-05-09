'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.metadataOf =
    exports.cancellations =
    exports.blacklist =
    exports.nextExternal =
    exports.lastTabledWasExternal =
    exports.votingOf =
    exports.referendumInfoOf =
    exports.lowestUnbaked =
    exports.referendumCount =
    exports.depositOf =
    exports.publicProps =
    exports.publicPropCount =
        void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.publicPropCount = {
    /**
     *  The number of (public) proposals that have been made so far.
     */
    matrixEnjinV603: new support_1.StorageType('Democracy.PublicPropCount', 'Default', [], support_1.sts.number()),
}
exports.publicProps = {
    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Democracy.PublicProps',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.number(), matrixEnjinV603.Bounded, matrixEnjinV603.AccountId32]
            })
        })
    ),
}
exports.depositOf = {
    /**
     *  Those who have locked a deposit.
     *
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Democracy.DepositOf',
        'Optional',
        [support_1.sts.number()],
        support_1.sts.tuple(function () {
            return [
                support_1.sts.array(function () {
                    return matrixEnjinV603.AccountId32
                }),
                support_1.sts.bigint(),
            ]
        })
    ),
}
exports.referendumCount = {
    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    matrixEnjinV603: new support_1.StorageType('Democracy.ReferendumCount', 'Default', [], support_1.sts.number()),
}
exports.lowestUnbaked = {
    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    matrixEnjinV603: new support_1.StorageType('Democracy.LowestUnbaked', 'Default', [], support_1.sts.number()),
}
exports.referendumInfoOf = {
    /**
     *  Information concerning any given referendum.
     *
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Democracy.ReferendumInfoOf',
        'Optional',
        [support_1.sts.number()],
        matrixEnjinV603.ReferendumInfo
    ),
}
exports.votingOf = {
    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     *
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Democracy.VotingOf',
        'Default',
        [matrixEnjinV603.AccountId32],
        matrixEnjinV603.Voting
    ),
}
exports.lastTabledWasExternal = {
    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Democracy.LastTabledWasExternal',
        'Default',
        [],
        support_1.sts.boolean()
    ),
}
exports.nextExternal = {
    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Democracy.NextExternal',
        'Optional',
        [],
        support_1.sts.tuple(function () {
            return [matrixEnjinV603.Bounded, matrixEnjinV603.VoteThreshold]
        })
    ),
}
exports.blacklist = {
    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Democracy.Blacklist',
        'Optional',
        [matrixEnjinV603.H256],
        support_1.sts.tuple(function () {
            return [
                support_1.sts.number(),
                support_1.sts.array(function () {
                    return matrixEnjinV603.AccountId32
                }),
            ]
        })
    ),
}
exports.cancellations = {
    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Democracy.Cancellations',
        'Default',
        [matrixEnjinV603.H256],
        support_1.sts.boolean()
    ),
}
exports.metadataOf = {
    /**
     *  General information concerning any proposal or referendum.
     *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
     *  dump or IPFS hash of a JSON file.
     *
     *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
     *  large preimages.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Democracy.MetadataOf',
        'Optional',
        [matrixEnjinV603.MetadataOwner],
        matrixEnjinV603.H256
    ),
}
