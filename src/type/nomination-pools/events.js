'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.rewardReinvested =
    exports.bonusReceived =
    exports.commissionPaid =
    exports.commissionChangeRateUpdated =
    exports.maxCommissionUpdated =
    exports.poolCommissionClaimed =
    exports.poolCommissionChangeRateUpdated =
    exports.poolMaxCommissionUpdated =
    exports.poolCommissionUpdated =
    exports.rolesUpdated =
    exports.earlyBirdSharesRemoved =
    exports.earlyBirdBonusPaid =
    exports.earlyBirdBonusPaymentUnlocked =
    exports.earlyBirdSharesCaptured =
    exports.earlyBirdBonusCalculated =
    exports.earlyBirdBonusDistributed =
    exports.earlyBirdBonusQueued =
    exports.nominated =
    exports.poolMutated =
    exports.rewardPaid =
    exports.eraRewardsProcessed =
    exports.commissionUpdated =
    exports.unbondingPoolSlashed =
    exports.poolSlashed =
    exports.stateChanged =
    exports.destroyed =
    exports.withdrawn =
    exports.unbonded =
    exports.paidOut =
    exports.bonded =
    exports.created =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var v101 = require('../v101')
var enjinV101 = require('../enjinV101')
var v102 = require('../v102')
var v103 = require('../v103')
var v104 = require('../v104')
var enjinV110 = require('../enjinV110')
var v110 = require('../v110')
var enjinV1023 = require('../enjinV1023')
var v1023 = require('../v1023')
exports.created = {
    name: 'NominationPools.Created',
    /**
     * A pool has been created.
     */
    enjinV100: new support_1.EventType(
        'NominationPools.Created',
        support_1.sts.struct({
            creator: enjinV100.AccountId32,
            poolId: support_1.sts.number(),
            capacity: support_1.sts.bigint(),
        })
    ),
    /**
     * A pool has been created.
     */
    v100: new support_1.EventType(
        'NominationPools.Created',
        support_1.sts.struct({
            depositor: v100.AccountId32,
            poolId: support_1.sts.number(),
            capacity: support_1.sts.bigint(),
        })
    ),
    /**
     * A pool has been created.
     */
    v101: new support_1.EventType(
        'NominationPools.Created',
        support_1.sts.struct({
            creator: v101.AccountId32,
            poolId: support_1.sts.number(),
            capacity: support_1.sts.bigint(),
        })
    ),
}
exports.bonded = {
    name: 'NominationPools.Bonded',
    /**
     * A member has became bonded in a pool.
     */
    enjinV100: new support_1.EventType(
        'NominationPools.Bonded',
        support_1.sts.struct({
            member: enjinV100.AccountId32,
            poolId: support_1.sts.number(),
            bonded: support_1.sts.bigint(),
            joined: support_1.sts.boolean(),
        })
    ),
    /**
     * A member has became bonded in a pool.
     */
    enjinV101: new support_1.EventType(
        'NominationPools.Bonded',
        support_1.sts.struct({
            member: enjinV101.AccountId32,
            poolId: support_1.sts.number(),
            bonded: support_1.sts.bigint(),
        })
    ),
    /**
     * A member has became bonded in a pool.
     */
    v100: new support_1.EventType(
        'NominationPools.Bonded',
        support_1.sts.struct({
            member: v100.AccountId32,
            poolId: support_1.sts.number(),
            bonded: support_1.sts.bigint(),
            joined: support_1.sts.boolean(),
        })
    ),
    /**
     * A member has became bonded in a pool.
     */
    v104: new support_1.EventType(
        'NominationPools.Bonded',
        support_1.sts.struct({
            member: v104.AccountId32,
            poolId: support_1.sts.number(),
            bonded: support_1.sts.bigint(),
        })
    ),
}
exports.paidOut = {
    name: 'NominationPools.PaidOut',
    /**
     * A payout has been made to a member.
     */
    enjinV100: new support_1.EventType(
        'NominationPools.PaidOut',
        support_1.sts.struct({
            member: enjinV100.AccountId32,
            poolId: support_1.sts.number(),
            payout: support_1.sts.bigint(),
        })
    ),
}
exports.unbonded = {
    name: 'NominationPools.Unbonded',
    /**
     * A member has unbonded from their pool.
     *
     * - `balance` is the corresponding balance of the number of points that has been
     *   requested to be unbonded (the argument of the `unbond` transaction) from the bonded
     *   pool.
     * - `points` is the number of points that are issued as a result of `balance` being
     * dissolved into the corresponding unbonding pool.
     * - `era` is the era in which the balance will be unbonded.
     * In the absence of slashing, these values will match. In the presence of slashing, the
     * number of points that are issued in the unbonding pool will be less than the amount
     * requested to be unbonded.
     */
    enjinV100: new support_1.EventType(
        'NominationPools.Unbonded',
        support_1.sts.struct({
            member: enjinV100.AccountId32,
            poolId: support_1.sts.number(),
            balance: support_1.sts.bigint(),
            points: support_1.sts.bigint(),
            era: support_1.sts.number(),
        })
    ),
}
exports.withdrawn = {
    name: 'NominationPools.Withdrawn',
    /**
     * A member has withdrawn from their pool.
     *
     * The given number of `points` have been dissolved in return of `balance`.
     *
     * Similar to `Unbonded` event, in the absence of slashing, the ratio of point to balance
     * will be 1.
     */
    enjinV100: new support_1.EventType(
        'NominationPools.Withdrawn',
        support_1.sts.struct({
            member: enjinV100.AccountId32,
            poolId: support_1.sts.number(),
            balance: support_1.sts.bigint(),
            points: support_1.sts.bigint(),
        })
    ),
}
exports.destroyed = {
    name: 'NominationPools.Destroyed',
    /**
     * A pool has been destroyed.
     */
    enjinV100: new support_1.EventType(
        'NominationPools.Destroyed',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
        })
    ),
}
exports.stateChanged = {
    name: 'NominationPools.StateChanged',
    /**
     * The state of a pool has changed
     */
    enjinV100: new support_1.EventType(
        'NominationPools.StateChanged',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            newState: enjinV100.PoolState,
        })
    ),
    /**
     * The state of a pool has changed
     */
    v100: new support_1.EventType(
        'NominationPools.StateChanged',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            newState: v100.PoolState,
        })
    ),
    /**
     * The state of a pool has changed
     */
    v103: new support_1.EventType(
        'NominationPools.StateChanged',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            newState: v103.PoolState,
        })
    ),
}
exports.poolSlashed = {
    name: 'NominationPools.PoolSlashed',
    /**
     * The active balance of pool `pool_id` has been slashed to `balance`.
     */
    enjinV100: new support_1.EventType(
        'NominationPools.PoolSlashed',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            balance: support_1.sts.bigint(),
        })
    ),
}
exports.unbondingPoolSlashed = {
    name: 'NominationPools.UnbondingPoolSlashed',
    /**
     * The unbond pool at `era` of pool `pool_id` has been slashed to `balance`.
     */
    enjinV100: new support_1.EventType(
        'NominationPools.UnbondingPoolSlashed',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            era: support_1.sts.number(),
            balance: support_1.sts.bigint(),
        })
    ),
}
exports.commissionUpdated = {
    name: 'NominationPools.CommissionUpdated',
    /**
     * A pool's commission rate has been changed.
     */
    enjinV100: new support_1.EventType(
        'NominationPools.CommissionUpdated',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            current: support_1.sts.option(function () {
                return enjinV100.Perbill
            }),
        })
    ),
}
exports.eraRewardsProcessed = {
    name: 'NominationPools.EraRewardsProcessed',
    /**
     * This event happens once per era on the previous era that rewards are paid out for. It
     * pays commission, distributes bonus, and reinvests rewards.
     */
    enjinV100: new support_1.EventType(
        'NominationPools.EraRewardsProcessed',
        support_1.sts.struct({
            /**
             * The id of the pool
             */
            poolId: support_1.sts.number(),
            /**
             * The era that was processed.
             */
            era: support_1.sts.number(),
            /**
             * The commission that was paid
             */
            commission: support_1.sts.option(function () {
                return enjinV100.CommissionPayment
            }),
            /**
             * The amount of bonus that was unlocked
             */
            bonus: support_1.sts.bigint(),
            /**
             * The amount that was bonded
             */
            reinvested: support_1.sts.bigint(),
        })
    ),
    /**
     * This event happens once per era on the previous era that rewards are paid out for. It
     * pays commission, distributes bonus, and reinvests rewards.
     */
    enjinV101: new support_1.EventType(
        'NominationPools.EraRewardsProcessed',
        support_1.sts.struct({
            /**
             * The id of the pool
             */
            poolId: support_1.sts.number(),
            /**
             * The era that was processed.
             */
            era: support_1.sts.number(),
            /**
             * The commission that was paid
             */
            commission: support_1.sts.option(function () {
                return enjinV101.CommissionPayment
            }),
            /**
             * The amount of bonus that was unlocked
             */
            bonus: support_1.sts.bigint(),
            /**
             * The amount that was bonded
             */
            reinvested: support_1.sts.bigint(),
            /**
             * The current bonus cycle ended
             */
            bonusCycleEnded: support_1.sts.boolean(),
        })
    ),
    /**
     * This event happens once per era on the previous era that rewards are paid out for. It
     * pays commission, distributes bonus, and reinvests rewards.
     */
    v102: new support_1.EventType(
        'NominationPools.EraRewardsProcessed',
        support_1.sts.struct({
            /**
             * The id of the pool
             */
            poolId: support_1.sts.number(),
            /**
             * The era that was processed.
             */
            era: support_1.sts.number(),
            /**
             * The commission that was paid
             */
            commission: support_1.sts.option(function () {
                return v102.CommissionPayment
            }),
            /**
             * The amount of bonus that was unlocked
             */
            bonus: support_1.sts.bigint(),
            /**
             * The amount that was bonded
             */
            reinvested: support_1.sts.bigint(),
        })
    ),
    /**
     * This event happens once per era on the previous era that rewards are paid out for. It
     * pays commission, distributes bonus, and reinvests rewards.
     */
    v104: new support_1.EventType(
        'NominationPools.EraRewardsProcessed',
        support_1.sts.struct({
            /**
             * The id of the pool
             */
            poolId: support_1.sts.number(),
            /**
             * The era that was processed.
             */
            era: support_1.sts.number(),
            /**
             * The commission that was paid
             */
            commission: support_1.sts.option(function () {
                return v104.CommissionPayment
            }),
            /**
             * The amount of bonus that was unlocked
             */
            bonus: support_1.sts.bigint(),
            /**
             * The amount that was bonded
             */
            reinvested: support_1.sts.bigint(),
            /**
             * The current bonus cycle ended
             */
            bonusCycleEnded: support_1.sts.boolean(),
        })
    ),
}
exports.rewardPaid = {
    name: 'NominationPools.RewardPaid',
    /**
     * Rewards were paid to a pool
     */
    enjinV100: new support_1.EventType(
        'NominationPools.RewardPaid',
        support_1.sts.struct({
            /**
             * The id of the pool
             */
            poolId: support_1.sts.number(),
            /**
             * The era that was processed.
             */
            era: support_1.sts.number(),
            /**
             * The validator that the payment was received from
             */
            validatorStash: enjinV100.AccountId32,
            /**
             * The amount added to the pool's reward account
             */
            reward: support_1.sts.bigint(),
            /**
             * The amount that was added to the pool's bonus account
             */
            bonus: support_1.sts.bigint(),
        })
    ),
}
exports.poolMutated = {
    name: 'NominationPools.PoolMutated',
    /**
     * Pool has been mutated.
     */
    enjinV100: new support_1.EventType(
        'NominationPools.PoolMutated',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            mutation: enjinV100.PoolMutation,
        })
    ),
    /**
     * Pool has been mutated.
     */
    enjinV110: new support_1.EventType(
        'NominationPools.PoolMutated',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            mutation: enjinV110.PoolMutation,
        })
    ),
    /**
     * Pool has been mutated.
     */
    enjinV1023: new support_1.EventType(
        'NominationPools.PoolMutated',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            mutation: enjinV1023.PoolMutation,
        })
    ),
    /**
     * Pool has been mutated.
     */
    v101: new support_1.EventType(
        'NominationPools.PoolMutated',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            mutation: v101.PoolMutation,
        })
    ),
    /**
     * Pool has been mutated.
     */
    v102: new support_1.EventType(
        'NominationPools.PoolMutated',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            mutation: v102.PoolMutation,
        })
    ),
    /**
     * Pool has been mutated.
     */
    v104: new support_1.EventType(
        'NominationPools.PoolMutated',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            mutation: v104.PoolMutation,
        })
    ),
    /**
     * Pool has been mutated.
     */
    v110: new support_1.EventType(
        'NominationPools.PoolMutated',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            mutation: v110.PoolMutation,
        })
    ),
    /**
     * Pool has been mutated.
     */
    v1023: new support_1.EventType(
        'NominationPools.PoolMutated',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            mutation: v1023.PoolMutation,
        })
    ),
}
exports.nominated = {
    name: 'NominationPools.Nominated',
    /**
     * A nomination took place
     */
    enjinV101: new support_1.EventType(
        'NominationPools.Nominated',
        support_1.sts.struct({
            /**
             * The id of the pool
             */
            poolId: support_1.sts.number(),
            /**
             * The validators that were nominated
             */
            validators: support_1.sts.array(function () {
                return enjinV101.AccountId32
            }),
        })
    ),
}
exports.earlyBirdBonusQueued = {
    name: 'NominationPools.EarlyBirdBonusQueued',
    enjinV101: new support_1.EventType(
        'NominationPools.EarlyBirdBonusQueued',
        support_1.sts.struct({
            /**
             * The total amount to be distributed
             */
            totalAmount: support_1.sts.bigint(),
        })
    ),
}
exports.earlyBirdBonusDistributed = {
    name: 'NominationPools.EarlyBirdBonusDistributed',
    /**
     * The early bird bonus has been distributed
     */
    enjinV101: new support_1.EventType(
        'NominationPools.EarlyBirdBonusDistributed',
        support_1.sts.struct({
            /**
             * The id of the pool
             */
            poolId: support_1.sts.number(),
            /**
             * The amount distributed
             */
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.earlyBirdBonusCalculated = {
    name: 'NominationPools.EarlyBirdBonusCalculated',
    enjinV1021: new support_1.EventType(
        'NominationPools.EarlyBirdBonusCalculated',
        support_1.sts.struct({
            /**
             * The total amount to be distributed
             */
            totalAmount: support_1.sts.bigint(),
        })
    ),
}
exports.earlyBirdSharesCaptured = {
    name: 'NominationPools.EarlyBirdSharesCaptured',
    /**
     * The shares of pool users have been captured for early bird rewards
     */
    enjinV1022: new support_1.EventType(
        'NominationPools.EarlyBirdSharesCaptured',
        support_1.sts.struct({
            /**
             * The id of the pool
             */
            poolId: support_1.sts.number(),
            /**
             * The total number of accounts captured
             */
            totalAccounts: support_1.sts.number(),
        })
    ),
}
exports.earlyBirdBonusPaymentUnlocked = {
    name: 'NominationPools.EarlyBirdBonusPaymentUnlocked',
    /**
     * A new share of early bird bonus has been unlocked
     */
    enjinV1022: new support_1.EventType(
        'NominationPools.EarlyBirdBonusPaymentUnlocked',
        support_1.sts.struct({
            /**
             * The payment-id of the unlocked bonus
             */
            paymentId: support_1.sts.number(),
            /**
             * The next payment block
             */
            nextPaymentBlock: support_1.sts.number(),
        })
    ),
}
exports.earlyBirdBonusPaid = {
    name: 'NominationPools.EarlyBirdBonusPaid',
    /**
     * The early bird bonus has been paid to the pool
     */
    enjinV1023: new support_1.EventType(
        'NominationPools.EarlyBirdBonusPaid',
        support_1.sts.struct({
            /**
             * The id of the pool
             */
            poolId: support_1.sts.number(),
            /**
             * The payment ID
             */
            paymentId: support_1.sts.number(),
            /**
             * The total accounts that were paid
             */
            totalAccounts: support_1.sts.number(),
        })
    ),
}
exports.earlyBirdSharesRemoved = {
    name: 'NominationPools.EarlyBirdSharesRemoved',
    enjinV1050: new support_1.EventType(
        'NominationPools.EarlyBirdSharesRemoved',
        support_1.sts.struct({
            /**
             * Number of items removed
             */
            count: support_1.sts.number(),
        })
    ),
}
exports.rolesUpdated = {
    name: 'NominationPools.RolesUpdated',
    /**
     * The roles of a pool have been updated to the given new roles. Note that the depositor
     * can never change.
     */
    v100: new support_1.EventType(
        'NominationPools.RolesUpdated',
        support_1.sts.struct({
            root: support_1.sts.option(function () {
                return v100.AccountId32
            }),
            nominator: support_1.sts.option(function () {
                return v100.AccountId32
            }),
        })
    ),
}
exports.poolCommissionUpdated = {
    name: 'NominationPools.PoolCommissionUpdated',
    /**
     * A pool's commission setting has been changed.
     */
    v100: new support_1.EventType(
        'NominationPools.PoolCommissionUpdated',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            current: support_1.sts.option(function () {
                return support_1.sts.tuple(function () {
                    return [v100.Perbill, v100.AccountId32]
                })
            }),
        })
    ),
}
exports.poolMaxCommissionUpdated = {
    name: 'NominationPools.PoolMaxCommissionUpdated',
    /**
     * A pool's maximum commission setting has been changed.
     */
    v100: new support_1.EventType(
        'NominationPools.PoolMaxCommissionUpdated',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            maxCommission: v100.Perbill,
        })
    ),
}
exports.poolCommissionChangeRateUpdated = {
    name: 'NominationPools.PoolCommissionChangeRateUpdated',
    /**
     * A pool's commission `change_rate` has been changed.
     */
    v100: new support_1.EventType(
        'NominationPools.PoolCommissionChangeRateUpdated',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            changeRate: v100.CommissionChangeRate,
        })
    ),
}
exports.poolCommissionClaimed = {
    name: 'NominationPools.PoolCommissionClaimed',
    /**
     * Pool commission has been claimed.
     */
    v100: new support_1.EventType(
        'NominationPools.PoolCommissionClaimed',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            commission: support_1.sts.bigint(),
        })
    ),
}
exports.maxCommissionUpdated = {
    name: 'NominationPools.MaxCommissionUpdated',
    /**
     * A pool's maximum commission setting has been changed.
     */
    v101: new support_1.EventType(
        'NominationPools.MaxCommissionUpdated',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            maxCommission: v101.Perbill,
        })
    ),
}
exports.commissionChangeRateUpdated = {
    name: 'NominationPools.CommissionChangeRateUpdated',
    /**
     * A pool's commission `change_rate` has been changed.
     */
    v101: new support_1.EventType(
        'NominationPools.CommissionChangeRateUpdated',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            changeRate: v101.CommissionChangeRate,
        })
    ),
}
exports.commissionPaid = {
    name: 'NominationPools.CommissionPaid',
    /**
     * Commission for `pool_id` was paid to `beneficiary`
     */
    v101: new support_1.EventType(
        'NominationPools.CommissionPaid',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            beneficiary: v101.AccountId32,
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.bonusReceived = {
    name: 'NominationPools.BonusReceived',
    /**
     * A pool's bonus was transferred to its reward account
     */
    v101: new support_1.EventType(
        'NominationPools.BonusReceived',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            amount: support_1.sts.bigint(),
        })
    ),
}
exports.rewardReinvested = {
    name: 'NominationPools.RewardReinvested',
    /**
     * A pool's reward balance has been bonded
     */
    v101: new support_1.EventType(
        'NominationPools.RewardReinvested',
        support_1.sts.struct({
            poolId: support_1.sts.number(),
            amount: support_1.sts.bigint(),
        })
    ),
}
