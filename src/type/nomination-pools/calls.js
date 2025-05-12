'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.mutatePool =
    exports.setCommissionChangeRate =
    exports.setCommissionMax =
    exports.setCommission =
    exports.updateRoles =
    exports.removeEarlyBirdShares =
    exports.payEarlyBirdBonus =
    exports.captureEarlyBirdBonusShares =
    exports.unlockEarlyBirdBonus =
    exports.calculateEarlyBirdBonus =
    exports.withdrawFreeBalance =
    exports.processPayouts =
    exports.distributeEarlyBirdBonus =
    exports.queueEarlyBirdBonus =
    exports.setStakingInfo =
    exports.bond =
    exports.withdrawDeposit =
    exports.unbondDeposit =
    exports.mutate =
    exports.payoutRewards =
    exports.destroy =
    exports.chill =
    exports.setConfigs =
    exports.nominate =
    exports.create =
    exports.withdrawUnbonded =
    exports.poolWithdrawUnbonded =
    exports.unbond =
    exports.bondExtra =
    exports.join =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var v101 = require('../v101')
var enjinV101 = require('../enjinV101')
var v102 = require('../v102')
var v103 = require('../v103')
var v104 = require('../v104')
var v105 = require('../v105')
var enjinV110 = require('../enjinV110')
var v110 = require('../v110')
var enjinV120 = require('../enjinV120')
var v120 = require('../v120')
var enjinV1023 = require('../enjinV1023')
var v1023 = require('../v1023')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
exports.join = {
    name: 'NominationPools.join',
    /**
     * Stake funds with a pool. The amount to bond is transferred from the member to the
     * pools account and immediately increases the pools bond.
     *
     * # Parameters
     * - `origin`: the caller
     * - `amount`: the amount of tokens deposited into the pool
     * - `pool_id`: the pool id to join
     * - `reduce_amount_to_fill`: if true, and `amount` will cause the pool to go over
     *   capacity, it will reduce `amount` to precisely fill the pool
     * # Note
     *
     * * An account can only be a member of a single pool.
     * * An account cannot join the same pool multiple times.
     * * This call will *not* dust the member account, so the member must have at least
     *   `existential deposit + amount` in their account.
     * * Only a pool with [`PoolState::Open`] can be joined
     */
    enjinV100: new support_1.CallType(
        'NominationPools.join',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            amount: enjinV100.BondValue,
        })
    ),
    /**
     * Stake funds with a pool. The amount to bond is transferred from the member to the
     * pools account and immediately increases the pools bond.
     *
     * # Parameters
     * - `origin`: the caller
     * - `amount`: the amount of tokens deposited into the pool
     * - `pool_id`: the pool id to join
     * - `reduce_amount_to_fill`: if true, and `amount` will cause the pool to go over
     *   capacity, it will reduce `amount` to precisely fill the pool
     * # Note
     *
     * * An account can only be a member of a single pool.
     * * An account cannot join the same pool multiple times.
     * * This call will *not* dust the member account, so the member must have at least
     *   `existential deposit + amount` in their account.
     * * Only a pool with [`PoolState::Open`] can be joined
     */
    v100: new support_1.CallType(
        'NominationPools.join',
        support_1.sts.struct({
            amount: support_1.sts.bigint(),
            poolId: support_1.sts.number(),
            reduceAmountToFill: support_1.sts.boolean(),
        })
    ),
    /**
     * Stake funds with a pool. The amount to bond is transferred from the member to the
     * pools account and immediately increases the pools bond.
     *
     * # Parameters
     * - `origin`: the caller
     * - `amount`: the amount of tokens deposited into the pool
     * - `pool_id`: the pool id to join
     * - `reduce_amount_to_fill`: if true, and `amount` will cause the pool to go over
     *   capacity, it will reduce `amount` to precisely fill the pool
     * # Note
     *
     * * An account can only be a member of a single pool.
     * * An account cannot join the same pool multiple times.
     * * This call will *not* dust the member account, so the member must have at least
     *   `existential deposit + amount` in their account.
     * * Only a pool with [`PoolState::Open`] can be joined
     */
    v103: new support_1.CallType(
        'NominationPools.join',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            amount: v103.BondValue,
        })
    ),
}
exports.bondExtra = {
    name: 'NominationPools.bond_extra',
    /**
     * Bond `extra` more funds from `origin` into the pool to which they already belong.
     *
     * Additional funds can come from either the free balance of the account, of from the
     * accumulated rewards.
     *
     * Bonding extra funds implies an automatic payout of all pending rewards as well.
     */
    enjinV100: new support_1.CallType(
        'NominationPools.bond_extra',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            amount: enjinV100.BondValue,
        })
    ),
    /**
     * Bond `extra` more funds from `origin` into the pool to which they already belong.
     *
     * Additional funds can come from either the free balance of the account, of from the
     * accumulated rewards, see [`BondExtra`].
     *
     * Bonding extra funds implies an automatic payout of all pending rewards as well.
     */
    v100: new support_1.CallType(
        'NominationPools.bond_extra',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            extra: v100.BondExtra,
        })
    ),
    /**
     * Bond `extra` more funds from `origin` into the pool to which they already belong.
     *
     * Additional funds can come from either the free balance of the account, of from the
     * accumulated rewards.
     *
     * Bonding extra funds implies an automatic payout of all pending rewards as well.
     */
    v103: new support_1.CallType(
        'NominationPools.bond_extra',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            amount: v103.BondValue,
        })
    ),
}
exports.unbond = {
    name: 'NominationPools.unbond',
    /**
     * Unbond up to `unbonding_points` of the `member_account`'s funds from the pool. It
     * implicitly collects the rewards one last time, since not doing so would mean some
     * rewards would be forfeited.
     *
     * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
     * account).
     *
     * # Conditions for a permissionless dispatch.
     *
     * * The pool is blocked and the caller is either the admin or state-toggler. This is
     *   refereed to as a kick.
     * * The pool is destroying.
     * * The pool is destroying and no other members are in the pool.
     *
     * ## Conditions for permissioned dispatch (i.e. the caller is also the
     * `member_account`):
     *
     * * The caller is not the last member.
     * * The caller is the last member and the pool is destroying.
     *
     * # Note
     *
     * If there are too many unlocking chunks to unbond with the pool account,
     * [`Call::pool_withdraw_unbonded`] can be called to try and minimize unlocking chunks.
     * The [`StakingInterface::unbond`] will implicitly call [`Call::pool_withdraw_unbonded`]
     * to try to free chunks if necessary (ie. if unbound was called and no unlocking chunks
     * are available). However, it may not be possible to release the current unlocking chunks,
     * in which case, the result of this call will likely be the `NoMoreChunks` error from the
     * staking system.
     */
    enjinV100: new support_1.CallType(
        'NominationPools.unbond',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            memberAccount: enjinV100.MultiAddress,
            unbondingPoints: support_1.sts.bigint(),
        })
    ),
}
exports.poolWithdrawUnbonded = {
    name: 'NominationPools.pool_withdraw_unbonded',
    /**
     * Call `withdraw_unbonded` for the pools account. This call can be made by any account.
     *
     * This is useful if their are too many unlocking chunks to call `unbond`, and some
     * can be cleared by withdrawing. In the case there are too many unlocking chunks, the user
     * would probably see an error like `NoMoreChunks` emitted from the staking system when
     * they attempt to unbond.
     */
    enjinV100: new support_1.CallType(
        'NominationPools.pool_withdraw_unbonded',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            numSlashingSpans: support_1.sts.number(),
        })
    ),
}
exports.withdrawUnbonded = {
    name: 'NominationPools.withdraw_unbonded',
    /**
     * Withdraw unbonded funds from `member_account`. If no bonded funds can be unbonded, an
     * error is returned.
     *
     * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
     * account).
     *
     * # Conditions for a permissionless dispatch
     *
     * * The pool is in destroy mode.
     * * The target is the only member in the sub pools.
     * * The pool is blocked and the caller is either the admin or state-toggler.
     *
     * # Conditions for permissioned dispatch
     *
     * * The caller is the target and they are not the last member.
     *
     * # Note
     *
     * If the target is the last member, the pool will be destroyed.
     */
    enjinV100: new support_1.CallType(
        'NominationPools.withdraw_unbonded',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            memberAccount: enjinV100.MultiAddress,
            numSlashingSpans: support_1.sts.number(),
        })
    ),
}
exports.create = {
    name: 'NominationPools.create',
    /**
     * Create a new delegation pool.
     *
     * # Arguments
     *
     * * `token_id` - Token that that will control the pool.
     * * `deposit` - The amount of funds to delegate to the pool. This also acts of a sort of
     *   deposit since the pools creator cannot fully unbond funds until the pool is being
     *   destroyed.
     * * `capacity` - The maximum total balance allowed in the pool
     * * `index` - A disambiguation index for creating the account. Likely only useful when
     *   creating multiple pools in the same extrinsic.
     * * `admin` - The account to set as [`PoolRoles::admin`].
     * * `nominator` - The account to set as the [`PoolRoles::nominator`].
     *
     * # Note
     *
     * In addition to `amount`, the caller will transfer the existential deposit; so the caller
     * needs at have at least `amount + existential_deposit` transferrable.
     */
    enjinV100: new support_1.CallType(
        'NominationPools.create',
        support_1.sts.struct({
            tokenId: support_1.sts.bigint(),
            deposit: support_1.sts.bigint(),
            capacity: support_1.sts.bigint(),
            duration: support_1.sts.number(),
            admin: enjinV100.MultiAddress,
            nominator: enjinV100.MultiAddress,
        })
    ),
    /**
     * Create a new nomination pool.
     *
     * # Arguments
     *
     * * `token_id` - Token that that will control the pool. This token must be from the
     *   [`Config::PoolCollectionId`] collection and it must be held by the caller.
     * * `deposit` - The amount of funds to delegate to the pool. This also acts as a deposit
     *   because the pool's creator cannot fully unbond funds until the pool is destroyed.
     * * `capacity` - The maximum total balance allowed in the pool. This is measured in sENJ.
     * * `duration` - The duration in blocks of the pool's bonus cycle
     *
     * # Note
     *
     * In addition to `deposit`, the caller will transfer the existential deposit for the
     * pool's accounts; so the caller needs at have at least `deposit + existential_deposit *
     * 2` transferable.
     */
    enjinV110: new support_1.CallType(
        'NominationPools.create',
        support_1.sts.struct({
            tokenId: support_1.sts.bigint(),
            deposit: support_1.sts.bigint(),
            capacity: support_1.sts.bigint(),
            duration: support_1.sts.number(),
        })
    ),
    /**
     * Create a new nomination pool.
     *
     * # Arguments
     *
     * * `token_id` - Token that that will control the pool. This token must be from the
     *   [`Config::PoolCollectionId`] collection and it must be held by the caller.
     * * `deposit` - The amount of funds to delegate to the pool. This also acts as a deposit
     *   because the pool's creator cannot fully unbond funds until the pool is destroyed.
     * * `capacity` - The maximum total balance allowed in the pool. This is measured in sENJ.
     *   It must be below the pool's capacity. See `Capacity` section in crate level docs.
     * * `duration` - The duration in blocks of the pool's bonus cycle
     *
     * # Note
     *
     * In addition to `deposit`, the caller will transfer the existential deposit for the
     * pool's accounts; so the caller needs at have at least `deposit + existential_deposit *
     * 2` transferable.
     */
    enjinV1023: new support_1.CallType(
        'NominationPools.create',
        support_1.sts.struct({
            tokenId: support_1.sts.bigint(),
            deposit: support_1.sts.bigint(),
            capacity: support_1.sts.bigint(),
            duration: support_1.sts.number(),
            name: enjinV1023.BoundedVec,
        })
    ),
    /**
     * Create a new delegation pool.
     *
     * # Arguments
     *
     * * `token_id` - Token that that will control the pool.
     * * `amount` - The amount of funds to delegate to the pool. This also acts of a sort of
     *   deposit since the pools creator cannot fully unbond funds until the pool is being
     *   destroyed.
     * * `capacity` - The maximum total balance allowed in the pool
     * * `index` - A disambiguation index for creating the account. Likely only useful when
     *   creating multiple pools in the same extrinsic.
     * * `root` - The account to set as [`PoolRoles::root`].
     * * `nominator` - The account to set as the [`PoolRoles::nominator`].
     * * `state_toggler` - The account to set as the [`PoolRoles::state_toggler`].
     *
     * # Note
     *
     * In addition to `amount`, the caller will transfer the existential deposit; so the caller
     * needs at have at least `amount + existential_deposit` transferrable.
     */
    v100: new support_1.CallType(
        'NominationPools.create',
        support_1.sts.struct({
            tokenId: support_1.sts.bigint(),
            amount: support_1.sts.bigint(),
            capacity: support_1.sts.bigint(),
            duration: support_1.sts.number(),
            root: v100.MultiAddress,
            nominator: v100.MultiAddress,
        })
    ),
    /**
     * Create a new delegation pool.
     *
     * # Arguments
     *
     * * `token_id` - Token that that will control the pool.
     * * `deposit` - The amount of funds to delegate to the pool. This also acts of a sort of
     *   deposit since the pools creator cannot fully unbond funds until the pool is being
     *   destroyed.
     * * `capacity` - The maximum total balance allowed in the pool
     * * `index` - A disambiguation index for creating the account. Likely only useful when
     *   creating multiple pools in the same extrinsic.
     * * `root` - The account to set as [`PoolRoles::root`].
     * * `nominator` - The account to set as the [`PoolRoles::nominator`].
     * * `state_toggler` - The account to set as the [`PoolRoles::state_toggler`].
     *
     * # Note
     *
     * In addition to `amount`, the caller will transfer the existential deposit; so the caller
     * needs at have at least `amount + existential_deposit` transferrable.
     */
    v101: new support_1.CallType(
        'NominationPools.create',
        support_1.sts.struct({
            tokenId: support_1.sts.bigint(),
            deposit: support_1.sts.bigint(),
            capacity: support_1.sts.bigint(),
            duration: support_1.sts.number(),
            root: v101.MultiAddress,
            nominator: v101.MultiAddress,
        })
    ),
    /**
     * Create a new delegation pool.
     *
     * # Arguments
     *
     * * `token_id` - Token that that will control the pool.
     * * `deposit` - The amount of funds to delegate to the pool. This also acts of a sort of
     *   deposit since the pools creator cannot fully unbond funds until the pool is being
     *   destroyed.
     * * `capacity` - The maximum total balance allowed in the pool
     * * `index` - A disambiguation index for creating the account. Likely only useful when
     *   creating multiple pools in the same extrinsic.
     * * `admin` - The account to set as [`PoolRoles::admin`].
     * * `nominator` - The account to set as the [`PoolRoles::nominator`].
     *
     * # Note
     *
     * In addition to `amount`, the caller will transfer the existential deposit; so the caller
     * needs at have at least `amount + existential_deposit` transferrable.
     */
    v102: new support_1.CallType(
        'NominationPools.create',
        support_1.sts.struct({
            tokenId: support_1.sts.bigint(),
            deposit: support_1.sts.bigint(),
            capacity: support_1.sts.bigint(),
            duration: support_1.sts.number(),
            admin: v102.MultiAddress,
            nominator: v102.MultiAddress,
        })
    ),
    /**
     * Create a new nomination pool.
     *
     * # Arguments
     *
     * * `token_id` - Token that that will control the pool. This token must be from the
     *   [`Config::PoolCollectionId`] collection and it must be held by the caller.
     * * `deposit` - The amount of funds to delegate to the pool. This also acts as a deposit
     *   because the pool's creator cannot fully unbond funds until the pool is destroyed.
     * * `capacity` - The maximum total balance allowed in the pool. This is measured in sENJ.
     * * `duration` - The duration in blocks of the pool's bonus cycle
     *
     * # Note
     *
     * In addition to `deposit`, the caller will transfer the existential deposit for the
     * pool's accounts; so the caller needs at have at least `deposit + existential_deposit *
     * 2` transferable.
     */
    v110: new support_1.CallType(
        'NominationPools.create',
        support_1.sts.struct({
            tokenId: support_1.sts.bigint(),
            deposit: support_1.sts.bigint(),
            capacity: support_1.sts.bigint(),
            duration: support_1.sts.number(),
        })
    ),
    /**
     * Create a new nomination pool.
     *
     * # Arguments
     *
     * * `token_id` - Token that that will control the pool. This token must be from the
     *   [`Config::PoolCollectionId`] collection and it must be held by the caller.
     * * `deposit` - The amount of funds to delegate to the pool. This also acts as a deposit
     *   because the pool's creator cannot fully unbond funds until the pool is destroyed.
     * * `capacity` - The maximum total balance allowed in the pool. This is measured in sENJ.
     *   It must be below the pool's capacity. See `Capacity` section in crate level docs.
     * * `duration` - The duration in blocks of the pool's bonus cycle
     *
     * # Note
     *
     * In addition to `deposit`, the caller will transfer the existential deposit for the
     * pool's accounts; so the caller needs at have at least `deposit + existential_deposit *
     * 2` transferable.
     */
    v1023: new support_1.CallType(
        'NominationPools.create',
        support_1.sts.struct({
            tokenId: support_1.sts.bigint(),
            deposit: support_1.sts.bigint(),
            capacity: support_1.sts.bigint(),
            duration: support_1.sts.number(),
            name: v1023.BoundedVec,
        })
    ),
}
exports.nominate = {
    name: 'NominationPools.nominate',
    /**
     * Nominate on behalf of the pool.
     *
     * The dispatch origin of this call must be signed by the pool nominator or the pool
     * admin role.
     *
     * This directly forward the call to the staking pallet, on behalf of the pool bonded
     * account.
     */
    enjinV100: new support_1.CallType(
        'NominationPools.nominate',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            validators: support_1.sts.array(function () {
                return enjinV100.AccountId32
            }),
        })
    ),
}
exports.setConfigs = {
    name: 'NominationPools.set_configs',
    /**
     * Update configurations for the nomination pools. The origin for this call must be
     * Root.
     *
     * # Arguments
     *
     * * `min_join_bond` - Set [`MinJoinBond`].
     * * `min_create_bond` - Set [`MinCreateBond`].
     */
    enjinV100: new support_1.CallType(
        'NominationPools.set_configs',
        support_1.sts.struct({
            minJoinBond: enjinV100.Type_395,
            minCreateBond: enjinV100.Type_395,
            globalMaxCommission: enjinV100.Type_396,
        })
    ),
    /**
     * Update configurations for the nomination pools. Callable only by
     * [`Config::ForceOrigin`].
     *
     * # Arguments
     *
     * * `min_join_bond` - Set [`MinJoinBond`].
     * * `min_create_bond` - Set [`MinCreateBond`].
     * * `global_max_commission` - Set [`GlobalMaxCommission`].
     */
    enjinV120: new support_1.CallType(
        'NominationPools.set_configs',
        support_1.sts.struct({
            minJoinBond: enjinV120.Type_408,
            minCreateBond: enjinV120.Type_408,
            globalMaxCommission: enjinV120.Type_409,
            requiredPayoutCount: enjinV120.Type_409,
        })
    ),
    /**
     * Update configurations for the nomination pools. The origin for this call must be
     * Root.
     *
     * # Arguments
     *
     * * `min_join_bond` - Set [`MinJoinBond`].
     * * `min_create_bond` - Set [`MinCreateBond`].
     * * `max_pools` - Set [`MaxPools`].
     * * `max_members` - Set [`MaxPoolMembers`].
     * * `max_members_per_pool` - Set [`MaxPoolMembersPerPool`].
     */
    v100: new support_1.CallType(
        'NominationPools.set_configs',
        support_1.sts.struct({
            minJoinBond: v100.Type_358,
            minCreateBond: v100.Type_358,
            globalMaxCommission: v100.Type_359,
        })
    ),
    /**
     * Update configurations for the nomination pools. Callable only by
     * [`Config::ForceOrigin`].
     *
     * # Arguments
     *
     * * `min_join_bond` - Set [`MinJoinBond`].
     * * `min_create_bond` - Set [`MinCreateBond`].
     * * `global_max_commission` - Set [`GlobalMaxCommission`].
     */
    v120: new support_1.CallType(
        'NominationPools.set_configs',
        support_1.sts.struct({
            minJoinBond: v120.Type_408,
            minCreateBond: v120.Type_408,
            globalMaxCommission: v120.Type_409,
            requiredPayoutCount: v120.Type_409,
        })
    ),
}
exports.chill = {
    name: 'NominationPools.chill',
    /**
     * Chill on behalf of the pool.
     *
     * The dispatch origin of this call must be signed by the pool nominator or the pool
     * admin role, same as [`Pallet::nominate`].
     *
     * This directly forward the call to the staking pallet, on behalf of the pool bonded
     * account.
     */
    enjinV100: new support_1.CallType(
        'NominationPools.chill',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
        })
    ),
}
exports.destroy = {
    name: 'NominationPools.destroy',
    /**
     * Destroy the pool.
     *
     * The dispatch origin of this call must be signed by the account holding the pool token
     * of the given pool_id.
     */
    enjinV100: new support_1.CallType(
        'NominationPools.destroy',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
        })
    ),
}
exports.payoutRewards = {
    name: 'NominationPools.payout_rewards',
    enjinV100: new support_1.CallType(
        'NominationPools.payout_rewards',
        support_1.sts.struct({
            validatorStash: enjinV100.AccountId32,
            era: support_1.sts.number(),
        })
    ),
}
exports.mutate = {
    name: 'NominationPools.mutate',
    /**
     * Mutate the nomination pool data.
     *
     * The dispatch origin of this call must be signed by the account holding the pool token
     * of the given pool_id.
     */
    enjinV100: new support_1.CallType(
        'NominationPools.mutate',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            mutation: enjinV100.PoolMutation,
        })
    ),
    /**
     * Mutate the nomination pool data.
     *
     * The dispatch origin of this call must be signed by the account holding the pool token
     * of the given pool_id.
     */
    enjinV110: new support_1.CallType(
        'NominationPools.mutate',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            mutation: enjinV110.PoolMutation,
        })
    ),
    /**
     * Mutate the nomination pool data.
     *
     * The dispatch origin of this call must be signed by the account holding the pool token
     * of the given pool_id.
     */
    enjinV1023: new support_1.CallType(
        'NominationPools.mutate',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            mutation: enjinV1023.PoolMutation,
        })
    ),
    /**
     * Mutate the nomination pool data.
     *
     * The dispatch origin of this call must be signed by the account holding the pool token
     * of the given pool_id.
     */
    v102: new support_1.CallType(
        'NominationPools.mutate',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            mutation: v102.PoolMutation,
        })
    ),
    /**
     * Mutate the nomination pool data.
     *
     * The dispatch origin of this call must be signed by the account holding the pool token
     * of the given pool_id.
     */
    v104: new support_1.CallType(
        'NominationPools.mutate',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            mutation: v104.PoolMutation,
        })
    ),
    /**
     * Mutate the nomination pool data.
     *
     * The dispatch origin of this call must be signed by the account holding the pool token
     * of the given pool_id.
     */
    v110: new support_1.CallType(
        'NominationPools.mutate',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            mutation: v110.PoolMutation,
        })
    ),
    /**
     * Mutate the nomination pool data.
     *
     * The dispatch origin of this call must be signed by the account holding the pool token
     * of the given pool_id.
     */
    v1023: new support_1.CallType(
        'NominationPools.mutate',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            mutation: v1023.PoolMutation,
        })
    ),
}
exports.unbondDeposit = {
    name: 'NominationPools.unbond_deposit',
    /**
     * Unbonds the deposit
     *
     * This call is permissionless but certain conditions must be met before the deposit can
     * be unbonded:
     *
     * - Pool must be in [`PoolState::Destroying`] mode
     * - Deposit points must be the only points in the pool
     *
     * This will unbond the deposit from the pool.
     */
    enjinV100: new support_1.CallType(
        'NominationPools.unbond_deposit',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
        })
    ),
}
exports.withdrawDeposit = {
    name: 'NominationPools.withdraw_deposit',
    /**
     * Withdraws the deposit
     *
     * This call is permissionless and should be called after the deposit has been unbonded
     *
     * This should be called after the deposit has been unbonded
     */
    enjinV100: new support_1.CallType(
        'NominationPools.withdraw_deposit',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
        })
    ),
}
exports.bond = {
    name: 'NominationPools.bond',
    /**
     * Stake funds with a pool. The amount to bond is transferred from the member to the
     * pools account and immediately increases the pools bond.
     *
     * # Parameters
     * - `origin`: the caller
     * - `amount`: the amount of tokens deposited into the pool
     * - `pool_id`: the pool id to bond
     * - `reduce_amount_to_fill`: if true, and `amount` will cause the pool to go over
     *   capacity, it will reduce `amount` to precisely fill the pool
     *
     * # Note
     *
     * * An account can only be a member of a single pool.
     * * An account cannot join the same pool multiple times.
     * * This call will *not* dust the member account, so the member must have at least
     *   `existential deposit + amount` in their account.
     * * Only a pool with [`PoolState::Open`] can be joined
     */
    enjinV101: new support_1.CallType(
        'NominationPools.bond',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            amount: enjinV101.BondValue,
        })
    ),
}
exports.setStakingInfo = {
    name: 'NominationPools.set_staking_info',
    /**
     * Set the annual inflation rate and collator payout cut
     *
     * Callable only by [`Config::ForceOrigin`]
     */
    enjinV101: new support_1.CallType(
        'NominationPools.set_staking_info',
        support_1.sts.struct({
            info: enjinV101.StakingInfo,
        })
    ),
    /**
     * Set the annual inflation rate and collator payout cut
     *
     * Callable only by [`Config::ForceOrigin`]
     */
    enjinV1032: new support_1.CallType(
        'NominationPools.set_staking_info',
        support_1.sts.struct({
            info: enjinV1032.StakingInfo,
        })
    ),
    /**
     * Set the annual inflation rate and collator payout cut
     *
     * Callable only by [`Config::ForceOrigin`]
     */
    v105: new support_1.CallType(
        'NominationPools.set_staking_info',
        support_1.sts.struct({
            info: v105.StakingInfo,
        })
    ),
    /**
     * Set the annual inflation rate and collator payout cut
     *
     * Callable only by [`Config::ForceOrigin`]
     */
    v1030: new support_1.CallType(
        'NominationPools.set_staking_info',
        support_1.sts.struct({
            info: v1030.StakingInfo,
        })
    ),
}
exports.queueEarlyBirdBonus = {
    name: 'NominationPools.queue_early_bird_bonus',
    /**
     * Calculate and prepare early bird bonus if it is ready to be queued.
     *
     * Callable by any signed origin
     */
    enjinV101: new support_1.CallType('NominationPools.queue_early_bird_bonus', support_1.sts.unit()),
    /**
     * Calculate and prepare early bird bonus if it is ready to be queued.
     *
     * Callable by any signed origin after [`Config::EarlyBirdBonusDistributionBlock`].
     *
     * ## Details
     *
     * 1. Calculates the normalized weights for each pool by calling
     *    [`Pallet::early_bird_normalized_weight`]. Factors for the weight are each pool's
     *    total points and the creation date.
     * 2. Each pool's weight is multiplied by the total reward to determine each pool's reward.
     * 3. The rewards are stored in [`EarlyBirdBonusInfo`] and can be distributed by calling
     *    [`Self::distribute_early_bird_bonus`].
     */
    enjinV110: new support_1.CallType(
        'NominationPools.queue_early_bird_bonus',
        support_1.sts.struct({
            poolCount: support_1.sts.number(),
        })
    ),
    /**
     * Calculate and prepare early bird bonus if it is ready to be queued.
     *
     * Callable by any signed origin
     */
    v106: new support_1.CallType('NominationPools.queue_early_bird_bonus', support_1.sts.unit()),
    /**
     * Calculate and prepare early bird bonus if it is ready to be queued.
     *
     * Callable by any signed origin after [`Config::EarlyBirdBonusDistributionBlock`].
     *
     * ## Details
     *
     * 1. Calculates the normalized weights for each pool by calling
     *    [`Pallet::early_bird_normalized_weight`]. Factors for the weight are each pool's
     *    total points and the creation date.
     * 2. Each pool's weight is multiplied by the total reward to determine each pool's reward.
     * 3. The rewards are stored in [`EarlyBirdBonusInfo`] and can be distributed by calling
     *    [`Self::distribute_early_bird_bonus`].
     */
    v110: new support_1.CallType(
        'NominationPools.queue_early_bird_bonus',
        support_1.sts.struct({
            poolCount: support_1.sts.number(),
        })
    ),
}
exports.distributeEarlyBirdBonus = {
    name: 'NominationPools.distribute_early_bird_bonus',
    /**
     * Distribute early bird bonus to pools. The `transfer_count` parameter is the max number
     * of transfers to be made in this call. If there are less items in the queue, it will end
     * early.
     *
     * Callable by any signed origin
     */
    enjinV101: new support_1.CallType(
        'NominationPools.distribute_early_bird_bonus',
        support_1.sts.struct({
            transferCount: support_1.sts.number(),
        })
    ),
    /**
     * Distribute early bird bonus to pools. The `transfer_count` parameter is the max number
     * of transfers to be made in this call. If there are less items in the queue, it will end
     * early.
     *
     * Callable by any signed origin after the bonus has been queued.
     */
    enjinV1021: new support_1.CallType(
        'NominationPools.distribute_early_bird_bonus',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            transferCount: support_1.sts.number(),
        })
    ),
    /**
     * Distribute early bird bonus to pools. The `transfer_count` parameter is the max number
     * of transfers to be made in this call. If there are less items in the queue, it will end
     * early.
     *
     * Callable by any signed origin
     */
    v106: new support_1.CallType(
        'NominationPools.distribute_early_bird_bonus',
        support_1.sts.struct({
            transferCount: support_1.sts.number(),
        })
    ),
    /**
     * Distribute early bird bonus to pools. The `transfer_count` parameter is the max number
     * of transfers to be made in this call. If there are less items in the queue, it will end
     * early.
     *
     * Callable by any signed origin after the bonus has been queued.
     */
    v1021: new support_1.CallType(
        'NominationPools.distribute_early_bird_bonus',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            transferCount: support_1.sts.number(),
        })
    ),
}
exports.processPayouts = {
    name: 'NominationPools.process_payouts',
    /**
     * Processes the rewards for all pools that were distributed in [`Self::payout_rewards`].
     * It will only succeed if it is called on the same era that payouts were made. It uses the
     * [`EraPayoutInfo`] storage to verify this. This extrinsic is permissionless.
     *
     * The following is done for each pool:
     * 1. If the pool has reached the end of its cycle, it cycles the pool.
     * 2. Sends bonus for the current era from the bonus account to the rewards account.
     * 3. Sends reward commission to the depositor.
     * 4. It bonds the pool's reward balance.
     *
     * It is not required to call this extrinsic. If it is not called, the rewards will be
     * processed when `payout_rewards` is called in the next era.
     */
    enjinV110: new support_1.CallType(
        'NominationPools.process_payouts',
        support_1.sts.struct({
            poolCount: support_1.sts.number(),
        })
    ),
}
exports.withdrawFreeBalance = {
    name: 'NominationPools.withdraw_free_balance',
    /**
     * Transfers `amount` from the pool's free balance to `destination`. Only callable by
     * [`Config::ForceOrigin`].
     */
    enjinV120: new support_1.CallType(
        'NominationPools.withdraw_free_balance',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            destination: enjinV120.MultiAddress,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.calculateEarlyBirdBonus = {
    name: 'NominationPools.calculate_early_bird_bonus',
    /**
     * Calculate and prepare early bird bonus if it is ready to be queued.
     *
     * Callable by any signed origin after [`Config::EarlyBirdBonusDistributionBlock`].
     *
     * ## Details
     *
     * 1. Calculates the normalized weights for each pool by calling
     *    [`Pallet::early_bird_normalized_weight`]. Factors for the weight are each pool's
     *    total points and the creation date.
     * 2. Each pool's weight is multiplied by the total reward to determine each pool's reward.
     * 3. The rewards are stored in [`PoolBonusInfos`] and can be distributed by calling
     *    [`Self::distribute_early_bird_bonus`].
     */
    enjinV1021: new support_1.CallType(
        'NominationPools.calculate_early_bird_bonus',
        support_1.sts.struct({
            poolCount: support_1.sts.number(),
        })
    ),
}
exports.unlockEarlyBirdBonus = {
    name: 'NominationPools.unlock_early_bird_bonus',
    /**
     * Unlock early bird bonus to pools. This extrinsic will ensure the
     * EarlyBirdBonusDistributionBlock has passed before the bonus is unlocked.
     * Callable by any signed origin after the bonus has been queued.
     */
    enjinV1022: new support_1.CallType('NominationPools.unlock_early_bird_bonus', support_1.sts.unit()),
}
exports.captureEarlyBirdBonusShares = {
    name: 'NominationPools.capture_early_bird_bonus_shares',
    /**
     * Stores the share of sENJ balance for each account staked in `pool_id`.
     */
    enjinV1022: new support_1.CallType(
        'NominationPools.capture_early_bird_bonus_shares',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            accountCount: support_1.sts.number(),
        })
    ),
}
exports.payEarlyBirdBonus = {
    name: 'NominationPools.pay_early_bird_bonus',
    /**
     * Pay early bird bonus to pools. The `account_count` parameter is the max number
     * of pool user accounts to be paid in this call.
     *
     * Callable by any signed origin after the bonus has been unlocked
     */
    enjinV1023: new support_1.CallType(
        'NominationPools.pay_early_bird_bonus',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            paymentId: support_1.sts.number(),
            accountCount: support_1.sts.number(),
        })
    ),
}
exports.removeEarlyBirdShares = {
    name: 'NominationPools.remove_early_bird_shares',
    /**
     * Remove early bird shares storages
     */
    enjinV1050: new support_1.CallType(
        'NominationPools.remove_early_bird_shares',
        support_1.sts.struct({
            count: support_1.sts.number(),
        })
    ),
}
exports.updateRoles = {
    name: 'NominationPools.update_roles',
    /**
     * Update the roles of the pool.
     *
     * This function can only be called by the account that holds the pool token
     *
     * It emits an event, notifying UIs of the role change. This event is quite relevant to
     * most pool members and they should be informed of changes to pool roles.
     */
    v100: new support_1.CallType(
        'NominationPools.update_roles',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            newRoot: v100.Type_360,
            newNominator: v100.Type_360,
        })
    ),
}
exports.setCommission = {
    name: 'NominationPools.set_commission',
    /**
     * Set the commission of a pool.
     * Both a commission percentage and a commission payee must be provided in the `current`
     * tuple. Where a `current` of `None` is provided, any current commission will be removed.
     *
     * - If a `None` is supplied to `new_commission`, existing commission will be removed.
     */
    v100: new support_1.CallType(
        'NominationPools.set_commission',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            newCommission: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [v100.Perbill, v100.AccountId32]
                })
            }),
        })
    ),
    /**
     * Set the commission of a pool.
     * Both a commission percentage and a commission payee must be provided in the `current`
     * tuple. Where a `current` of `None` is provided, any current commission will be removed.
     *
     * - If a `None` is supplied to `new_commission`, existing commission will be removed.
     */
    v101: new support_1.CallType(
        'NominationPools.set_commission',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            newCommission: support_1.sts.option(function () {
                return v101.Perbill
            }),
        })
    ),
}
exports.setCommissionMax = {
    name: 'NominationPools.set_commission_max',
    /**
     * Set the maximum commission of a pool.
     *
     * - Initial max can be set to any `Perbill`, and only smaller values thereafter.
     * - Current commission will be lowered in the event it is higher than a new max
     *   commission.
     */
    v100: new support_1.CallType(
        'NominationPools.set_commission_max',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            maxCommission: v100.Perbill,
        })
    ),
}
exports.setCommissionChangeRate = {
    name: 'NominationPools.set_commission_change_rate',
    /**
     * Set the commission change rate for a pool.
     *
     * Initial change rate is not bounded, whereas subsequent updates can only be more
     * restrictive than the current.
     */
    v100: new support_1.CallType(
        'NominationPools.set_commission_change_rate',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            changeRate: v100.CommissionChangeRate,
        })
    ),
}
exports.mutatePool = {
    name: 'NominationPools.mutate_pool',
    /**
     * Mutate the nomination pool data.
     *
     * The dispatch origin of this call must be signed by the account holding the pool token
     * of the given pool_id.
     */
    v101: new support_1.CallType(
        'NominationPools.mutate_pool',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            mutation: v101.PoolMutation,
        })
    ),
}
