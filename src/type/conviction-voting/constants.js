'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.voteLockingPeriod = exports.maxVotes = void 0
var support_1 = require('../support')
exports.maxVotes = {
    /**
     *  The maximum number of concurrent votes an account may have.
     *
     *  Also used to compute weight, an overly large value can lead to extrinsics with large
     *  weight estimation: see `delegate` for instance.
     */
    enjinV100: new support_1.ConstantType('ConvictionVoting.MaxVotes', support_1.sts.number()),
}
exports.voteLockingPeriod = {
    /**
     *  The minimum period of vote locking.
     *
     *  It should be no shorter than enactment period to ensure that in the case of an approval,
     *  those successful voters are locked into the consequences that their votes entail.
     */
    enjinV100: new support_1.ConstantType('ConvictionVoting.VoteLockingPeriod', support_1.sts.number()),
}
