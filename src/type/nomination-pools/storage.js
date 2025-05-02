'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.lastPoolId =
    exports.earlyBirdShares =
    exports.poolBonusInfos =
    exports.eraPayoutInfo =
    exports.earlyBirdBonusInfo =
    exports.stakingInformation =
    exports.unbondingMembers =
    exports.globalMaxCommission =
    exports.usedPoolTokenIds =
    exports.counterForReversePoolIdLookup =
    exports.reversePoolIdLookup =
    exports.nextPoolId =
    exports.counterForSubPoolsStorage =
    exports.subPoolsStorage =
    exports.counterForBondedPools =
    exports.bondedPools =
    exports.poolMembers =
    exports.minCreateBond =
    exports.minJoinBond =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var enjinV101 = require('../enjinV101')
var v101 = require('../v101')
var v102 = require('../v102')
var v103 = require('../v103')
var v104 = require('../v104')
var v105 = require('../v105')
var v106 = require('../v106')
var enjinV110 = require('../enjinV110')
var v110 = require('../v110')
var enjinV120 = require('../enjinV120')
var v120 = require('../v120')
var enjinV1021 = require('../enjinV1021')
var v1021 = require('../v1021')
var enjinV1022 = require('../enjinV1022')
var enjinV1023 = require('../enjinV1023')
var v1023 = require('../v1023')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
exports.minJoinBond = {
    /**
     *  Minimum amount to bond to join a pool.
     */
    enjinV100: new support_1.StorageType('NominationPools.MinJoinBond', 'Default', [], support_1.sts.bigint()),
}
exports.minCreateBond = {
    /**
     *  Minimum bond required to create a pool.
     *
     *  This is the amount that the pool creator must put as their initial stake in the pool, as an
     *  indication of "skin in the game".
     *
     *  This is the value that will always exist in the staking ledger of the pool bonded account
     *  while all other accounts leave.
     */
    enjinV100: new support_1.StorageType('NominationPools.MinCreateBond', 'Default', [], support_1.sts.bigint()),
}
exports.poolMembers = {
    /**
     *  Active members.
     *
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    enjinV100: new support_1.StorageType(
        'NominationPools.PoolMembers',
        'Optional',
        [support_1.sts.number(), enjinV100.AccountId32],
        enjinV100.PoolMember
    ),
}
exports.bondedPools = {
    /**
     *  Storage for bonded pools.
     */
    enjinV100: new support_1.StorageType(
        'NominationPools.BondedPools',
        'Optional',
        [support_1.sts.number()],
        enjinV100.BondedPoolInner
    ),
    /**
     *  Storage for bonded pools.
     */
    enjinV101: new support_1.StorageType(
        'NominationPools.BondedPools',
        'Optional',
        [support_1.sts.number()],
        enjinV101.BondedPoolInner
    ),
    /**
     *  Storage for bonded pools.
     */
    enjinV110: new support_1.StorageType(
        'NominationPools.BondedPools',
        'Optional',
        [support_1.sts.number()],
        enjinV110.BondedPoolInner
    ),
    /**
     *  Storage for bonded pools.
     */
    enjinV1023: new support_1.StorageType(
        'NominationPools.BondedPools',
        'Optional',
        [support_1.sts.number()],
        enjinV1023.BondedPoolInner
    ),
    /**
     *  Storage for bonded pools.
     */
    v100: new support_1.StorageType(
        'NominationPools.BondedPools',
        'Optional',
        [support_1.sts.number()],
        v100.BondedPoolInner
    ),
    /**
     *  Storage for bonded pools.
     */
    v101: new support_1.StorageType(
        'NominationPools.BondedPools',
        'Optional',
        [support_1.sts.number()],
        v101.BondedPoolInner
    ),
    /**
     *  Storage for bonded pools.
     */
    v102: new support_1.StorageType(
        'NominationPools.BondedPools',
        'Optional',
        [support_1.sts.number()],
        v102.BondedPoolInner
    ),
    /**
     *  Storage for bonded pools.
     */
    v103: new support_1.StorageType(
        'NominationPools.BondedPools',
        'Optional',
        [support_1.sts.number()],
        v103.BondedPoolInner
    ),
    /**
     *  Storage for bonded pools.
     */
    v104: new support_1.StorageType(
        'NominationPools.BondedPools',
        'Optional',
        [support_1.sts.number()],
        v104.BondedPoolInner
    ),
    /**
     *  Storage for bonded pools.
     */
    v105: new support_1.StorageType(
        'NominationPools.BondedPools',
        'Optional',
        [support_1.sts.number()],
        v105.BondedPoolInner
    ),
    /**
     *  Storage for bonded pools.
     */
    v110: new support_1.StorageType(
        'NominationPools.BondedPools',
        'Optional',
        [support_1.sts.number()],
        v110.BondedPoolInner
    ),
    /**
     *  Storage for bonded pools.
     */
    v1023: new support_1.StorageType(
        'NominationPools.BondedPools',
        'Optional',
        [support_1.sts.number()],
        v1023.BondedPoolInner
    ),
}
exports.counterForBondedPools = {
    /**
     * Counter for the related counted storage map
     */
    enjinV100: new support_1.StorageType(
        'NominationPools.CounterForBondedPools',
        'Default',
        [],
        support_1.sts.number()
    ),
}
exports.subPoolsStorage = {
    /**
     *  Groups of unbonding pools. Each group of unbonding pools belongs to a bonded pool,
     *  hence the name sub-pools. Keyed by the bonded pools account.
     */
    enjinV100: new support_1.StorageType(
        'NominationPools.SubPoolsStorage',
        'Optional',
        [support_1.sts.number()],
        enjinV100.SubPools
    ),
}
exports.counterForSubPoolsStorage = {
    /**
     * Counter for the related counted storage map
     */
    enjinV100: new support_1.StorageType(
        'NominationPools.CounterForSubPoolsStorage',
        'Default',
        [],
        support_1.sts.number()
    ),
}
exports.nextPoolId = {
    /**
     *  The next pool id that will be used in [`create`](Pallet::create). Increments by one with
     *  each pool created.
     */
    enjinV100: new support_1.StorageType('NominationPools.NextPoolId', 'Default', [], support_1.sts.number()),
}
exports.reversePoolIdLookup = {
    /**
     *  A reverse lookup from the pool's account id to its id.
     *
     *  This is only used for slashing. In all other instances, the pool id is used, and the
     *  accounts are deterministically derived from it.
     */
    enjinV100: new support_1.StorageType(
        'NominationPools.ReversePoolIdLookup',
        'Optional',
        [enjinV100.AccountId32],
        support_1.sts.number()
    ),
}
exports.counterForReversePoolIdLookup = {
    /**
     * Counter for the related counted storage map
     */
    enjinV100: new support_1.StorageType(
        'NominationPools.CounterForReversePoolIdLookup',
        'Default',
        [],
        support_1.sts.number()
    ),
}
exports.usedPoolTokenIds = {
    /**
     *  A reverse lookup from the token_id to pool_id.
     *
     *  This is used for making sure the same token is not used to create multiple pools
     */
    enjinV100: new support_1.StorageType(
        'NominationPools.UsedPoolTokenIds',
        'Optional',
        [support_1.sts.bigint()],
        support_1.sts.number()
    ),
}
exports.globalMaxCommission = {
    /**
     *  The maximum commission that can be charged by a pool. Used on commission payouts to bound
     *  pool commissions that are > `GlobalMaxCommission`, necessary if a future
     */
    enjinV100: new support_1.StorageType('NominationPools.GlobalMaxCommission', 'Optional', [], enjinV100.Perbill),
}
exports.unbondingMembers = {
    /**
     *  Pool Members who are Unbonding.
     *
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    enjinV101: new support_1.StorageType(
        'NominationPools.UnbondingMembers',
        'Optional',
        [support_1.sts.number(), enjinV101.AccountId32],
        enjinV101.PoolMember
    ),
}
exports.stakingInformation = {
    /**
     *  The general staking parameters
     */
    enjinV101: new support_1.StorageType('NominationPools.StakingInformation', 'Optional', [], enjinV101.StakingInfo),
    /**
     *  The general staking parameters
     */
    enjinV1032: new support_1.StorageType('NominationPools.StakingInformation', 'Optional', [], enjinV1032.StakingInfo),
    /**
     *  The general staking parameters
     */
    v105: new support_1.StorageType('NominationPools.StakingInformation', 'Optional', [], v105.StakingInfo),
    /**
     *  The general staking parameters
     */
    v1030: new support_1.StorageType('NominationPools.StakingInformation', 'Optional', [], v1030.StakingInfo),
}
exports.earlyBirdBonusInfo = {
    /**
     *  The queue of bonuses that should be distributed to the pools
     */
    enjinV101: new support_1.StorageType('NominationPools.EarlyBirdBonusInfo', 'Default', [], enjinV101.EarlyBirdInfo),
    /**
     *  The queue of bonuses that should be distributed to the pools
     */
    enjinV1021: new support_1.StorageType(
        'NominationPools.EarlyBirdBonusInfo',
        'Default',
        [],
        enjinV1021.EarlyBirdInfo
    ),
    /**
     *  The queue of bonuses that should be distributed to the pools
     */
    enjinV1023: new support_1.StorageType(
        'NominationPools.EarlyBirdBonusInfo',
        'Default',
        [],
        enjinV1023.EarlyBirdInfo
    ),
    /**
     *  The queue of bonuses that should be distributed to the pools
     */
    v106: new support_1.StorageType('NominationPools.EarlyBirdBonusInfo', 'Default', [], v106.EarlyBirdInfo),
    /**
     *  The queue of bonuses that should be distributed to the pools
     */
    v1021: new support_1.StorageType('NominationPools.EarlyBirdBonusInfo', 'Default', [], v1021.EarlyBirdInfo),
    /**
     *  The queue of bonuses that should be distributed to the pools
     */
    v1023: new support_1.StorageType('NominationPools.EarlyBirdBonusInfo', 'Default', [], v1023.EarlyBirdInfo),
}
exports.eraPayoutInfo = {
    /**
     *  Tracks payout information for an era
     */
    enjinV110: new support_1.StorageType('NominationPools.EraPayoutInfo', 'Default', [], enjinV110.EraPayout),
    /**
     *  Tracks payout information for an era
     */
    enjinV120: new support_1.StorageType('NominationPools.EraPayoutInfo', 'Default', [], enjinV120.EraPayout),
    /**
     *  Tracks payout information for an era
     */
    v110: new support_1.StorageType('NominationPools.EraPayoutInfo', 'Default', [], v110.EraPayout),
    /**
     *  Tracks payout information for an era
     */
    v120: new support_1.StorageType('NominationPools.EraPayoutInfo', 'Default', [], v120.EraPayout),
}
exports.poolBonusInfos = {
    /**
     *  Storage for pool bonus info
     */
    enjinV1021: new support_1.StorageType(
        'NominationPools.PoolBonusInfos',
        'Optional',
        [support_1.sts.number()],
        enjinV1021.PoolBonusInfo
    ),
    /**
     *  Storage for pool bonus info
     */
    enjinV1023: new support_1.StorageType(
        'NominationPools.PoolBonusInfos',
        'Optional',
        [support_1.sts.number()],
        enjinV1023.PoolBonusInfo
    ),
    /**
     *  Storage for pool bonus info
     */
    v1021: new support_1.StorageType(
        'NominationPools.PoolBonusInfos',
        'Optional',
        [support_1.sts.number()],
        v1021.PoolBonusInfo
    ),
    /**
     *  Storage for pool bonus info
     */
    v1023: new support_1.StorageType(
        'NominationPools.PoolBonusInfos',
        'Optional',
        [support_1.sts.number()],
        v1023.PoolBonusInfo
    ),
}
exports.earlyBirdShares = {
    /**
     *  The percentage shares of pool users for early bird rewards
     */
    enjinV1022: new support_1.StorageType(
        'NominationPools.EarlyBirdShares',
        'Optional',
        [support_1.sts.number(), enjinV1022.AccountId32],
        enjinV1022.Perquintill
    ),
}
exports.lastPoolId = {
    /**
     *  Ever increasing number of all pools created so far.
     */
    v100: new support_1.StorageType('NominationPools.LastPoolId', 'Default', [], support_1.sts.number()),
}
