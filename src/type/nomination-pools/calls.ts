import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as v101 from '../v101'
import * as enjinV101 from '../enjinV101'
import * as v102 from '../v102'
import * as v103 from '../v103'
import * as v104 from '../v104'
import * as v105 from '../v105'
import * as enjinV110 from '../enjinV110'
import * as v110 from '../v110'
import * as enjinV120 from '../enjinV120'
import * as v120 from '../v120'
import * as enjinV1023 from '../enjinV1023'
import * as v1023 from '../v1023'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'
import * as v1060 from '../v1060'

export const join = {
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
    enjinV100: new CallType(
        'NominationPools.join',
        sts.struct({
            poolId: sts.number(),
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
    v100: new CallType(
        'NominationPools.join',
        sts.struct({
            amount: sts.bigint(),
            poolId: sts.number(),
            reduceAmountToFill: sts.boolean(),
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
    v103: new CallType(
        'NominationPools.join',
        sts.struct({
            poolId: sts.number(),
            amount: v103.BondValue,
        })
    ),
}

export const bondExtra = {
    name: 'NominationPools.bond_extra',
    /**
     * Bond `extra` more funds from `origin` into the pool to which they already belong.
     *
     * Additional funds can come from either the free balance of the account, of from the
     * accumulated rewards.
     *
     * Bonding extra funds implies an automatic payout of all pending rewards as well.
     */
    enjinV100: new CallType(
        'NominationPools.bond_extra',
        sts.struct({
            poolId: sts.number(),
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
    v100: new CallType(
        'NominationPools.bond_extra',
        sts.struct({
            poolId: sts.number(),
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
    v103: new CallType(
        'NominationPools.bond_extra',
        sts.struct({
            poolId: sts.number(),
            amount: v103.BondValue,
        })
    ),
}

export const unbond = {
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
    enjinV100: new CallType(
        'NominationPools.unbond',
        sts.struct({
            poolId: sts.number(),
            memberAccount: enjinV100.MultiAddress,
            unbondingPoints: sts.bigint(),
        })
    ),
}

export const poolWithdrawUnbonded = {
    name: 'NominationPools.pool_withdraw_unbonded',
    /**
     * Call `withdraw_unbonded` for the pools account. This call can be made by any account.
     *
     * This is useful if their are too many unlocking chunks to call `unbond`, and some
     * can be cleared by withdrawing. In the case there are too many unlocking chunks, the user
     * would probably see an error like `NoMoreChunks` emitted from the staking system when
     * they attempt to unbond.
     */
    enjinV100: new CallType(
        'NominationPools.pool_withdraw_unbonded',
        sts.struct({
            poolId: sts.number(),
            numSlashingSpans: sts.number(),
        })
    ),
}

export const withdrawUnbonded = {
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
    enjinV100: new CallType(
        'NominationPools.withdraw_unbonded',
        sts.struct({
            poolId: sts.number(),
            memberAccount: enjinV100.MultiAddress,
            numSlashingSpans: sts.number(),
        })
    ),
}

export const create = {
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
    enjinV100: new CallType(
        'NominationPools.create',
        sts.struct({
            tokenId: sts.bigint(),
            deposit: sts.bigint(),
            capacity: sts.bigint(),
            duration: sts.number(),
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
    enjinV110: new CallType(
        'NominationPools.create',
        sts.struct({
            tokenId: sts.bigint(),
            deposit: sts.bigint(),
            capacity: sts.bigint(),
            duration: sts.number(),
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
    enjinV1023: new CallType(
        'NominationPools.create',
        sts.struct({
            tokenId: sts.bigint(),
            deposit: sts.bigint(),
            capacity: sts.bigint(),
            duration: sts.number(),
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
    v100: new CallType(
        'NominationPools.create',
        sts.struct({
            tokenId: sts.bigint(),
            amount: sts.bigint(),
            capacity: sts.bigint(),
            duration: sts.number(),
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
    v101: new CallType(
        'NominationPools.create',
        sts.struct({
            tokenId: sts.bigint(),
            deposit: sts.bigint(),
            capacity: sts.bigint(),
            duration: sts.number(),
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
    v102: new CallType(
        'NominationPools.create',
        sts.struct({
            tokenId: sts.bigint(),
            deposit: sts.bigint(),
            capacity: sts.bigint(),
            duration: sts.number(),
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
    v110: new CallType(
        'NominationPools.create',
        sts.struct({
            tokenId: sts.bigint(),
            deposit: sts.bigint(),
            capacity: sts.bigint(),
            duration: sts.number(),
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
    v1023: new CallType(
        'NominationPools.create',
        sts.struct({
            tokenId: sts.bigint(),
            deposit: sts.bigint(),
            capacity: sts.bigint(),
            duration: sts.number(),
            name: v1023.BoundedVec,
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
     * * `name` - The name of the pool
     * # Note
     *
     * In addition to `deposit`, the caller will transfer the existential deposit for the
     * pool's accounts; so the caller needs at have at least `deposit + existential_deposit
     * transferable.
     */
    v1060: new CallType(
        'NominationPools.create',
        sts.struct({
            tokenId: sts.bigint(),
            deposit: sts.bigint(),
            capacity: sts.bigint(),
            name: v1060.BoundedVec,
        })
    ),
}

export const nominate = {
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
    enjinV100: new CallType(
        'NominationPools.nominate',
        sts.struct({
            poolId: sts.number(),
            validators: sts.array(() => enjinV100.AccountId32),
        })
    ),
}

export const setConfigs = {
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
    enjinV100: new CallType(
        'NominationPools.set_configs',
        sts.struct({
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
    enjinV120: new CallType(
        'NominationPools.set_configs',
        sts.struct({
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
    v100: new CallType(
        'NominationPools.set_configs',
        sts.struct({
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
    v120: new CallType(
        'NominationPools.set_configs',
        sts.struct({
            minJoinBond: v120.Type_408,
            minCreateBond: v120.Type_408,
            globalMaxCommission: v120.Type_409,
            requiredPayoutCount: v120.Type_409,
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
    v1060: new CallType(
        'NominationPools.set_configs',
        sts.struct({
            minJoinBond: v1060.Type_337,
            minCreateBond: v1060.Type_337,
            globalMaxCommission: v1060.Type_338,
        })
    ),
}

export const chill = {
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
    enjinV100: new CallType(
        'NominationPools.chill',
        sts.struct({
            poolId: sts.number(),
        })
    ),
}

export const destroy = {
    name: 'NominationPools.destroy',
    /**
     * Destroy the pool.
     *
     * The dispatch origin of this call must be signed by the account holding the pool token
     * of the given pool_id.
     */
    enjinV100: new CallType(
        'NominationPools.destroy',
        sts.struct({
            poolId: sts.number(),
        })
    ),
}

export const payoutRewards = {
    name: 'NominationPools.payout_rewards',
    enjinV100: new CallType(
        'NominationPools.payout_rewards',
        sts.struct({
            validatorStash: enjinV100.AccountId32,
            era: sts.number(),
        })
    ),
}

export const mutate = {
    name: 'NominationPools.mutate',
    /**
     * Mutate the nomination pool data.
     *
     * The dispatch origin of this call must be signed by the account holding the pool token
     * of the given pool_id.
     */
    enjinV100: new CallType(
        'NominationPools.mutate',
        sts.struct({
            poolId: sts.number(),
            mutation: enjinV100.PoolMutation,
        })
    ),
    /**
     * Mutate the nomination pool data.
     *
     * The dispatch origin of this call must be signed by the account holding the pool token
     * of the given pool_id.
     */
    enjinV110: new CallType(
        'NominationPools.mutate',
        sts.struct({
            poolId: sts.number(),
            mutation: enjinV110.PoolMutation,
        })
    ),
    /**
     * Mutate the nomination pool data.
     *
     * The dispatch origin of this call must be signed by the account holding the pool token
     * of the given pool_id.
     */
    enjinV1023: new CallType(
        'NominationPools.mutate',
        sts.struct({
            poolId: sts.number(),
            mutation: enjinV1023.PoolMutation,
        })
    ),
    /**
     * Mutate the nomination pool data.
     *
     * The dispatch origin of this call must be signed by the account holding the pool token
     * of the given pool_id.
     */
    v102: new CallType(
        'NominationPools.mutate',
        sts.struct({
            poolId: sts.number(),
            mutation: v102.PoolMutation,
        })
    ),
    /**
     * Mutate the nomination pool data.
     *
     * The dispatch origin of this call must be signed by the account holding the pool token
     * of the given pool_id.
     */
    v104: new CallType(
        'NominationPools.mutate',
        sts.struct({
            poolId: sts.number(),
            mutation: v104.PoolMutation,
        })
    ),
    /**
     * Mutate the nomination pool data.
     *
     * The dispatch origin of this call must be signed by the account holding the pool token
     * of the given pool_id.
     */
    v110: new CallType(
        'NominationPools.mutate',
        sts.struct({
            poolId: sts.number(),
            mutation: v110.PoolMutation,
        })
    ),
    /**
     * Mutate the nomination pool data.
     *
     * The dispatch origin of this call must be signed by the account holding the pool token
     * of the given pool_id.
     */
    v1023: new CallType(
        'NominationPools.mutate',
        sts.struct({
            poolId: sts.number(),
            mutation: v1023.PoolMutation,
        })
    ),
    /**
     * Mutate the nomination pool data.
     *
     * The dispatch origin of this call must be signed by the account holding the pool token
     * of the given pool_id.
     */
    v1060: new CallType(
        'NominationPools.mutate',
        sts.struct({
            poolId: sts.number(),
            mutation: v1060.PoolMutation,
        })
    ),
}

export const unbondDeposit = {
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
    enjinV100: new CallType(
        'NominationPools.unbond_deposit',
        sts.struct({
            poolId: sts.number(),
        })
    ),
}

export const withdrawDeposit = {
    name: 'NominationPools.withdraw_deposit',
    /**
     * Withdraws the deposit
     *
     * This call is permissionless and should be called after the deposit has been unbonded
     *
     * This should be called after the deposit has been unbonded
     */
    enjinV100: new CallType(
        'NominationPools.withdraw_deposit',
        sts.struct({
            poolId: sts.number(),
        })
    ),
}

export const bond = {
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
    enjinV101: new CallType(
        'NominationPools.bond',
        sts.struct({
            poolId: sts.number(),
            amount: enjinV101.BondValue,
        })
    ),
}

export const setStakingInfo = {
    name: 'NominationPools.set_staking_info',
    /**
     * Set the annual inflation rate and collator payout cut
     *
     * Callable only by [`Config::ForceOrigin`]
     */
    enjinV101: new CallType(
        'NominationPools.set_staking_info',
        sts.struct({
            info: enjinV101.StakingInfo,
        })
    ),
    /**
     * Set the annual inflation rate and collator payout cut
     *
     * Callable only by [`Config::ForceOrigin`]
     */
    enjinV1032: new CallType(
        'NominationPools.set_staking_info',
        sts.struct({
            info: enjinV1032.StakingInfo,
        })
    ),
    /**
     * Set the annual inflation rate and collator payout cut
     *
     * Callable only by [`Config::ForceOrigin`]
     */
    v105: new CallType(
        'NominationPools.set_staking_info',
        sts.struct({
            info: v105.StakingInfo,
        })
    ),
    /**
     * Set the annual inflation rate and collator payout cut
     *
     * Callable only by [`Config::ForceOrigin`]
     */
    v1030: new CallType(
        'NominationPools.set_staking_info',
        sts.struct({
            info: v1030.StakingInfo,
        })
    ),
}

export const queueEarlyBirdBonus = {
    name: 'NominationPools.queue_early_bird_bonus',
    /**
     * Calculate and prepare early bird bonus if it is ready to be queued.
     *
     * Callable by any signed origin
     */
    enjinV101: new CallType('NominationPools.queue_early_bird_bonus', sts.unit()),
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
    enjinV110: new CallType(
        'NominationPools.queue_early_bird_bonus',
        sts.struct({
            poolCount: sts.number(),
        })
    ),
    /**
     * Calculate and prepare early bird bonus if it is ready to be queued.
     *
     * Callable by any signed origin
     */
    v106: new CallType('NominationPools.queue_early_bird_bonus', sts.unit()),
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
    v110: new CallType(
        'NominationPools.queue_early_bird_bonus',
        sts.struct({
            poolCount: sts.number(),
        })
    ),
}

export const distributeEarlyBirdBonus = {
    name: 'NominationPools.distribute_early_bird_bonus',
    /**
     * Distribute early bird bonus to pools. The `transfer_count` parameter is the max number
     * of transfers to be made in this call. If there are less items in the queue, it will end
     * early.
     *
     * Callable by any signed origin
     */
    enjinV101: new CallType(
        'NominationPools.distribute_early_bird_bonus',
        sts.struct({
            transferCount: sts.number(),
        })
    ),
    /**
     * Distribute early bird bonus to pools. The `transfer_count` parameter is the max number
     * of transfers to be made in this call. If there are less items in the queue, it will end
     * early.
     *
     * Callable by any signed origin after the bonus has been queued.
     */
    enjinV1021: new CallType(
        'NominationPools.distribute_early_bird_bonus',
        sts.struct({
            poolId: sts.number(),
            transferCount: sts.number(),
        })
    ),
    /**
     * Distribute early bird bonus to pools. The `transfer_count` parameter is the max number
     * of transfers to be made in this call. If there are less items in the queue, it will end
     * early.
     *
     * Callable by any signed origin
     */
    v106: new CallType(
        'NominationPools.distribute_early_bird_bonus',
        sts.struct({
            transferCount: sts.number(),
        })
    ),
    /**
     * Distribute early bird bonus to pools. The `transfer_count` parameter is the max number
     * of transfers to be made in this call. If there are less items in the queue, it will end
     * early.
     *
     * Callable by any signed origin after the bonus has been queued.
     */
    v1021: new CallType(
        'NominationPools.distribute_early_bird_bonus',
        sts.struct({
            poolId: sts.number(),
            transferCount: sts.number(),
        })
    ),
}

export const processPayouts = {
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
    enjinV110: new CallType(
        'NominationPools.process_payouts',
        sts.struct({
            poolCount: sts.number(),
        })
    ),
}

export const withdrawFreeBalance = {
    name: 'NominationPools.withdraw_free_balance',
    /**
     * Transfers `amount` from the pool's free balance to `destination`. Only callable by
     * [`Config::ForceOrigin`].
     */
    enjinV120: new CallType(
        'NominationPools.withdraw_free_balance',
        sts.struct({
            poolId: sts.number(),
            destination: enjinV120.MultiAddress,
            amount: sts.bigint(),
        })
    ),
}

export const calculateEarlyBirdBonus = {
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
    enjinV1021: new CallType(
        'NominationPools.calculate_early_bird_bonus',
        sts.struct({
            poolCount: sts.number(),
        })
    ),
}

export const unlockEarlyBirdBonus = {
    name: 'NominationPools.unlock_early_bird_bonus',
    /**
     * Unlock early bird bonus to pools. This extrinsic will ensure the
     * EarlyBirdBonusDistributionBlock has passed before the bonus is unlocked.
     * Callable by any signed origin after the bonus has been queued.
     */
    enjinV1022: new CallType('NominationPools.unlock_early_bird_bonus', sts.unit()),
}

export const captureEarlyBirdBonusShares = {
    name: 'NominationPools.capture_early_bird_bonus_shares',
    /**
     * Stores the share of sENJ balance for each account staked in `pool_id`.
     */
    enjinV1022: new CallType(
        'NominationPools.capture_early_bird_bonus_shares',
        sts.struct({
            poolId: sts.number(),
            accountCount: sts.number(),
        })
    ),
}

export const payEarlyBirdBonus = {
    name: 'NominationPools.pay_early_bird_bonus',
    /**
     * Pay early bird bonus to pools. The `account_count` parameter is the max number
     * of pool user accounts to be paid in this call.
     *
     * Callable by any signed origin after the bonus has been unlocked
     */
    enjinV1023: new CallType(
        'NominationPools.pay_early_bird_bonus',
        sts.struct({
            poolId: sts.number(),
            paymentId: sts.number(),
            accountCount: sts.number(),
        })
    ),
}

export const removeEarlyBirdShares = {
    name: 'NominationPools.remove_early_bird_shares',
    /**
     * Remove early bird shares storages
     */
    enjinV1050: new CallType(
        'NominationPools.remove_early_bird_shares',
        sts.struct({
            count: sts.number(),
        })
    ),
}

export const updateRoles = {
    name: 'NominationPools.update_roles',
    /**
     * Update the roles of the pool.
     *
     * This function can only be called by the account that holds the pool token
     *
     * It emits an event, notifying UIs of the role change. This event is quite relevant to
     * most pool members and they should be informed of changes to pool roles.
     */
    v100: new CallType(
        'NominationPools.update_roles',
        sts.struct({
            poolId: sts.number(),
            newRoot: v100.Type_360,
            newNominator: v100.Type_360,
        })
    ),
}

export const setCommission = {
    name: 'NominationPools.set_commission',
    /**
     * Set the commission of a pool.
     * Both a commission percentage and a commission payee must be provided in the `current`
     * tuple. Where a `current` of `None` is provided, any current commission will be removed.
     *
     * - If a `None` is supplied to `new_commission`, existing commission will be removed.
     */
    v100: new CallType(
        'NominationPools.set_commission',
        sts.struct({
            poolId: sts.number(),
            newCommission: sts.option(() => sts.tuple(() => [v100.Perbill, v100.AccountId32])),
        })
    ),
    /**
     * Set the commission of a pool.
     * Both a commission percentage and a commission payee must be provided in the `current`
     * tuple. Where a `current` of `None` is provided, any current commission will be removed.
     *
     * - If a `None` is supplied to `new_commission`, existing commission will be removed.
     */
    v101: new CallType(
        'NominationPools.set_commission',
        sts.struct({
            poolId: sts.number(),
            newCommission: sts.option(() => v101.Perbill),
        })
    ),
}

export const setCommissionMax = {
    name: 'NominationPools.set_commission_max',
    /**
     * Set the maximum commission of a pool.
     *
     * - Initial max can be set to any `Perbill`, and only smaller values thereafter.
     * - Current commission will be lowered in the event it is higher than a new max
     *   commission.
     */
    v100: new CallType(
        'NominationPools.set_commission_max',
        sts.struct({
            poolId: sts.number(),
            maxCommission: v100.Perbill,
        })
    ),
}

export const setCommissionChangeRate = {
    name: 'NominationPools.set_commission_change_rate',
    /**
     * Set the commission change rate for a pool.
     *
     * Initial change rate is not bounded, whereas subsequent updates can only be more
     * restrictive than the current.
     */
    v100: new CallType(
        'NominationPools.set_commission_change_rate',
        sts.struct({
            poolId: sts.number(),
            changeRate: v100.CommissionChangeRate,
        })
    ),
}

export const mutatePool = {
    name: 'NominationPools.mutate_pool',
    /**
     * Mutate the nomination pool data.
     *
     * The dispatch origin of this call must be signed by the account holding the pool token
     * of the given pool_id.
     */
    v101: new CallType(
        'NominationPools.mutate_pool',
        sts.struct({
            poolId: sts.number(),
            mutation: v101.PoolMutation,
        })
    ),
}

export const removeEmptyUnbondingMembers = {
    name: 'NominationPools.remove_empty_unbonding_members',
    /**
     * Removes `limit` items from `UnbondingMembers` that are empty
     */
    v1060: new CallType(
        'NominationPools.remove_empty_unbonding_members',
        sts.struct({
            limit: sts.number(),
        })
    ),
}
