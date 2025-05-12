'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.earlyBirdRewardRate =
    exports.minEarlyBirdDelay =
    exports.stakedEnjCollectionId =
    exports.claimDistributorAccountId =
    exports.minClaimDelay =
    exports.maxBatchAccounts =
    exports.prefix =
        void 0
var support_1 = require('../support')
var v104 = require('../v104')
var matrixEnjinV605 = require('../matrixEnjinV605')
exports.prefix = {
    /**
     *  Prefix added to messages
     */
    matrixEnjinV603: new support_1.ConstantType('Claims.Prefix', support_1.sts.bytes()),
}
exports.maxBatchAccounts = {
    matrixEnjinV603: new support_1.ConstantType('Claims.MaxBatchAccounts', support_1.sts.number()),
}
exports.minClaimDelay = {
    /**
     *  Minimum Delay for claiming ENJ
     */
    matrixEnjinV603: new support_1.ConstantType('Claims.MinClaimDelay', support_1.sts.number()),
}
exports.claimDistributorAccountId = {
    /**
     *  The [`AccountId`](frame_system::Config::AccountId) that holds ENJ2 to be
     *  distributed on Claim
     */
    matrixEnjinV605: new support_1.ConstantType('Claims.ClaimDistributorAccountId', matrixEnjinV605.AccountId32),
}
exports.stakedEnjCollectionId = {
    /**
     *  The collection id that is used for sENJ tokens
     */
    enjinV100: new support_1.ConstantType('Claims.StakedEnjCollectionId', support_1.sts.bigint()),
}
exports.minEarlyBirdDelay = {
    /**
     *  Minimum Delay for claiming Early bird bonus
     */
    enjinV100: new support_1.ConstantType('Claims.MinEarlyBirdDelay', support_1.sts.number()),
}
exports.earlyBirdRewardRate = {
    /**
     *  Reward rate for Early bird bonus
     */
    v104: new support_1.ConstantType('Claims.EarlyBirdRewardRate', v104.Perbill),
}
