'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.bountyApprovals = exports.bountyDescriptions = exports.bounties = exports.bountyCount = void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
exports.bountyCount = {
    /**
     *  Number of bounty proposals that have been made.
     */
    matrixEnjinV603: new support_1.StorageType('Bounties.BountyCount', 'Default', [], support_1.sts.number()),
}
exports.bounties = {
    /**
     *  Bounties that have been made.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Bounties.Bounties',
        'Optional',
        [support_1.sts.number()],
        matrixEnjinV603.Bounty
    ),
}
exports.bountyDescriptions = {
    /**
     *  The description of each bounty.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Bounties.BountyDescriptions',
        'Optional',
        [support_1.sts.number()],
        support_1.sts.bytes()
    ),
}
exports.bountyApprovals = {
    /**
     *  Bounty indices that have been approved but not yet funded.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Bounties.BountyApprovals',
        'Default',
        [],
        support_1.sts.array(function () {
            return support_1.sts.number()
        })
    ),
}
