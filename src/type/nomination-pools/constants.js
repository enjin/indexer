'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.orphanedPoolAccountId =
    exports.earlyBirdReimbursementAccountId =
    exports.maxPoolNameLength =
    exports.earlyBirdPaymentCount =
    exports.earlyBirdPaymentPeriod =
    exports.maxCapacityAttributeKey =
    exports.attributeValueMaxLength =
    exports.attributeKeyMaxLength =
    exports.defaultMaxCapacity =
    exports.globalMaxCapacity =
    exports.earlyBirdBonusAccount =
    exports.maxEarlyBirdBonusQueueItems =
    exports.earlyBirdBonusTotalAmount =
    exports.earlyBirdBonusDistributionBlock =
    exports.collatorRewardPool =
    exports.capacityMutationPeriod =
    exports.unclaimedBalanceReceiver =
    exports.baseBonusRewardPercentage =
    exports.bonusPercentage =
    exports.stakedEnjCollectionOwner =
    exports.stakedEnjCollectionId =
    exports.poolCollectionId =
    exports.maxDuration =
    exports.minDuration =
    exports.maxUnbonding =
    exports.postUnbondingPoolsWindow =
    exports.maxPointsToBalance =
    exports.palletId =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var enjinV101 = require('../enjinV101')
var v101 = require('../v101')
var enjinV1025 = require('../enjinV1025')
exports.palletId = {
    /**
     *  The nomination pool's pallet id.
     */
    enjinV100: new support_1.ConstantType('NominationPools.PalletId', enjinV100.PalletId),
}
exports.maxPointsToBalance = {
    /**
     *  The maximum pool points-to-balance ratio that an `open` pool can have.
     *
     *  This is important in the event slashing takes place and the pool's points-to-balance
     *  ratio becomes disproportional.
     *
     *  Moreover, this relates to the `RewardCounter` type as well, as the arithmetic operations
     *  are a function of number of points, and by setting this value to e.g. 10, you ensure
     *  that the total number of points in the system are at most 10 times the total_issuance of
     *  the chain, in the absolute worse case.
     *
     *  For a value of 10, the threshold would be a pool points-to-balance ratio of 10:1.
     *  Such a scenario would also be the equivalent of the pool being 90% slashed.
     */
    enjinV100: new support_1.ConstantType('NominationPools.MaxPointsToBalance', support_1.sts.number()),
}
exports.postUnbondingPoolsWindow = {
    /**
     *  The amount of eras a `SubPools::with_era` pool can exist before it gets merged into the
     *  `SubPools::no_era` pool. In other words, this is the amount of eras a member will be
     *  able to withdraw from an unbonding pool which is guaranteed to have the correct ratio of
     *  points to balance; once the `with_era` pool is merged into the `no_era` pool, the ratio
     *  can become skewed due to some slashed ratio getting merged in at some point.
     */
    enjinV100: new support_1.ConstantType('NominationPools.PostUnbondingPoolsWindow', support_1.sts.number()),
}
exports.maxUnbonding = {
    /**
     *  The maximum number of simultaneous unbonding chunks that can exist per member.
     */
    enjinV100: new support_1.ConstantType('NominationPools.MaxUnbonding', support_1.sts.number()),
}
exports.minDuration = {
    /**
     *  Min duration of a pool's bonus cycle in eras
     */
    enjinV100: new support_1.ConstantType('NominationPools.MinDuration', support_1.sts.number()),
}
exports.maxDuration = {
    /**
     *  Max duration of a pool's bonus cycle in eras
     */
    enjinV100: new support_1.ConstantType('NominationPools.MaxDuration', support_1.sts.number()),
}
exports.poolCollectionId = {
    /**
     *  The collection id that is used for pool NFTs
     */
    enjinV100: new support_1.ConstantType('NominationPools.PoolCollectionId', support_1.sts.bigint()),
}
exports.stakedEnjCollectionId = {
    /**
     *  The collection id that is used for sENJ tokens
     */
    enjinV100: new support_1.ConstantType('NominationPools.StakedEnjCollectionId', support_1.sts.bigint()),
}
exports.stakedEnjCollectionOwner = {
    /**
     *  The owner of the sENJ collection
     */
    enjinV100: new support_1.ConstantType('NominationPools.StakedEnjCollectionOwner', enjinV100.AccountId32),
}
exports.bonusPercentage = {
    /**
     *  The percentage of each pool's rewards that goes to the bonus
     */
    enjinV100: new support_1.ConstantType('NominationPools.BonusPercentage', enjinV100.Perbill),
}
exports.baseBonusRewardPercentage = {
    /**
     *  Share of bonus reward that is distributed to everyone regardless of their weight
     */
    enjinV100: new support_1.ConstantType('NominationPools.BaseBonusRewardPercentage', enjinV100.Perbill),
}
exports.unclaimedBalanceReceiver = {
    /**
     *  The account that will receive the deposit and commission if the pool's token is burned.
     *  It also receives the leftover bonus if a pool is destroyed.
     */
    enjinV100: new support_1.ConstantType('NominationPools.UnclaimedBalanceReceiver', enjinV100.AccountId32),
}
exports.capacityMutationPeriod = {
    /**
     *  The number of eras its allowed to mutate the pools capacity
     */
    enjinV100: new support_1.ConstantType('NominationPools.CapacityMutationPeriod', support_1.sts.number()),
}
exports.collatorRewardPool = {
    /**
     *  The pool ID for system account holding the collator rewards.
     */
    enjinV101: new support_1.ConstantType('NominationPools.CollatorRewardPool', enjinV101.PalletId),
}
exports.earlyBirdBonusDistributionBlock = {
    /**
     *  The block number after which the early bird bonus can be distributed
     */
    enjinV101: new support_1.ConstantType('NominationPools.EarlyBirdBonusDistributionBlock', support_1.sts.number()),
}
exports.earlyBirdBonusTotalAmount = {
    /**
     *  The total amount that will be distributed as early bird bonus
     */
    enjinV101: new support_1.ConstantType('NominationPools.EarlyBirdBonusTotalAmount', support_1.sts.bigint()),
}
exports.maxEarlyBirdBonusQueueItems = {
    /**
     *  The maximum number of items in the early bird bonus queue
     */
    enjinV101: new support_1.ConstantType('NominationPools.MaxEarlyBirdBonusQueueItems', support_1.sts.number()),
}
exports.earlyBirdBonusAccount = {
    /**
     *  The account id that holds early bird bonus
     */
    enjinV101: new support_1.ConstantType('NominationPools.EarlyBirdBonusAccount', enjinV101.AccountId32),
}
exports.globalMaxCapacity = {
    /**
     *  The global maximum pool capacity
     */
    enjinV120: new support_1.ConstantType('NominationPools.GlobalMaxCapacity', support_1.sts.bigint()),
}
exports.defaultMaxCapacity = {
    /**
     *  The default maximum pool capacity
     */
    enjinV120: new support_1.ConstantType('NominationPools.DefaultMaxCapacity', support_1.sts.bigint()),
}
exports.attributeKeyMaxLength = {
    /**
     *  The max attribute key length
     */
    enjinV120: new support_1.ConstantType('NominationPools.AttributeKeyMaxLength', support_1.sts.number()),
}
exports.attributeValueMaxLength = {
    /**
     *  The max attribute value length
     */
    enjinV120: new support_1.ConstantType('NominationPools.AttributeValueMaxLength', support_1.sts.number()),
}
exports.maxCapacityAttributeKey = {
    /**
     *  Max pool capacity attribute key
     */
    enjinV120: new support_1.ConstantType('NominationPools.MaxCapacityAttributeKey', support_1.sts.bytes()),
}
exports.earlyBirdPaymentPeriod = {
    /**
     *  The number of blocks between early bird payment unlocks
     */
    enjinV1022: new support_1.ConstantType('NominationPools.EarlyBirdPaymentPeriod', support_1.sts.number()),
}
exports.earlyBirdPaymentCount = {
    /**
     *  The max payments from early bird bonus
     */
    enjinV1022: new support_1.ConstantType('NominationPools.EarlyBirdPaymentCount', support_1.sts.number()),
}
exports.maxPoolNameLength = {
    /**
     *  The maximum length of a pool name
     */
    enjinV1023: new support_1.ConstantType('NominationPools.MaxPoolNameLength', support_1.sts.number()),
}
exports.earlyBirdReimbursementAccountId = {
    /**
     *  The account that the early bird ENJ reimbursement is sent from
     */
    enjinV1025: new support_1.ConstantType('NominationPools.EarlyBirdReimbursementAccountId', enjinV1025.AccountId32),
}
exports.orphanedPoolAccountId = {
    /**
     *  The account that will receive the deposit and commission if the pool's token is burned
     */
    v101: new support_1.ConstantType('NominationPools.OrphanedPoolAccountId', v101.AccountId32),
}
