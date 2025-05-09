'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.classLocksFor = exports.votingFor = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.votingFor = {
    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    enjinV100: new support_1.StorageType(
        'ConvictionVoting.VotingFor',
        'Default',
        [enjinV100.AccountId32, support_1.sts.number()],
        enjinV100.Voting
    ),
}
exports.classLocksFor = {
    /**
     *  The voting classes which have a non-zero lock requirement and the lock amounts which they
     *  require. The actual amount locked on behalf of this pallet should always be the maximum of
     *  this list.
     */
    enjinV100: new support_1.StorageType(
        'ConvictionVoting.ClassLocksFor',
        'Default',
        [enjinV100.AccountId32],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.number(), support_1.sts.bigint()]
            })
        })
    ),
}
