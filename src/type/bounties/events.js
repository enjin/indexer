'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.curatorAccepted =
    exports.curatorUnassigned =
    exports.curatorProposed =
    exports.bountyApproved =
    exports.bountyExtended =
    exports.bountyCanceled =
    exports.bountyClaimed =
    exports.bountyAwarded =
    exports.bountyBecameActive =
    exports.bountyRejected =
    exports.bountyProposed =
        void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.bountyProposed = {
    name: 'Bounties.BountyProposed',
    /**
     * New bounty proposal.
     */
    matrixEnjinV603: new support_1.EventType(
        'Bounties.BountyProposed',
        support_1.sts.struct({
            index: support_1.sts.number(),
        })
    ),
}
exports.bountyRejected = {
    name: 'Bounties.BountyRejected',
    /**
     * A bounty proposal was rejected; funds were slashed.
     */
    matrixEnjinV603: new support_1.EventType(
        'Bounties.BountyRejected',
        support_1.sts.struct({
            index: support_1.sts.number(),
            bond: support_1.sts.bigint(),
        })
    ),
}
exports.bountyBecameActive = {
    name: 'Bounties.BountyBecameActive',
    /**
     * A bounty proposal is funded and became active.
     */
    matrixEnjinV603: new support_1.EventType(
        'Bounties.BountyBecameActive',
        support_1.sts.struct({
            index: support_1.sts.number(),
        })
    ),
}
exports.bountyAwarded = {
    name: 'Bounties.BountyAwarded',
    /**
     * A bounty is awarded to a beneficiary.
     */
    matrixEnjinV603: new support_1.EventType(
        'Bounties.BountyAwarded',
        support_1.sts.struct({
            index: support_1.sts.number(),
            beneficiary: matrixEnjinV603.AccountId32,
        })
    ),
}
exports.bountyClaimed = {
    name: 'Bounties.BountyClaimed',
    /**
     * A bounty is claimed by beneficiary.
     */
    matrixEnjinV603: new support_1.EventType(
        'Bounties.BountyClaimed',
        support_1.sts.struct({
            index: support_1.sts.number(),
            payout: support_1.sts.bigint(),
            beneficiary: matrixEnjinV603.AccountId32,
        })
    ),
}
exports.bountyCanceled = {
    name: 'Bounties.BountyCanceled',
    /**
     * A bounty is cancelled.
     */
    matrixEnjinV603: new support_1.EventType(
        'Bounties.BountyCanceled',
        support_1.sts.struct({
            index: support_1.sts.number(),
        })
    ),
}
exports.bountyExtended = {
    name: 'Bounties.BountyExtended',
    /**
     * A bounty expiry is extended.
     */
    matrixEnjinV603: new support_1.EventType(
        'Bounties.BountyExtended',
        support_1.sts.struct({
            index: support_1.sts.number(),
        })
    ),
}
exports.bountyApproved = {
    name: 'Bounties.BountyApproved',
    /**
     * A bounty is approved.
     */
    matrixEnjinV1012: new support_1.EventType(
        'Bounties.BountyApproved',
        support_1.sts.struct({
            index: support_1.sts.number(),
        })
    ),
}
exports.curatorProposed = {
    name: 'Bounties.CuratorProposed',
    /**
     * A bounty curator is proposed.
     */
    matrixEnjinV1012: new support_1.EventType(
        'Bounties.CuratorProposed',
        support_1.sts.struct({
            bountyId: support_1.sts.number(),
            curator: matrixEnjinV1012.AccountId32,
        })
    ),
}
exports.curatorUnassigned = {
    name: 'Bounties.CuratorUnassigned',
    /**
     * A bounty curator is unassigned.
     */
    matrixEnjinV1012: new support_1.EventType(
        'Bounties.CuratorUnassigned',
        support_1.sts.struct({
            bountyId: support_1.sts.number(),
        })
    ),
}
exports.curatorAccepted = {
    name: 'Bounties.CuratorAccepted',
    /**
     * A bounty curator is accepted.
     */
    matrixEnjinV1012: new support_1.EventType(
        'Bounties.CuratorAccepted',
        support_1.sts.struct({
            bountyId: support_1.sts.number(),
            curator: matrixEnjinV1012.AccountId32,
        })
    ),
}
