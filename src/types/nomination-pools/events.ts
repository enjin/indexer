import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as v101 from '../v101'
import * as enjinV101 from '../enjinV101'
import * as v102 from '../v102'
import * as v103 from '../v103'
import * as v104 from '../v104'
import * as enjinV110 from '../enjinV110'
import * as v110 from '../v110'
import * as enjinV1023 from '../enjinV1023'
import * as v1023 from '../v1023'

export const created = {
    name: 'NominationPools.Created',
    /**
     * A pool has been created.
     */
    enjinV100: new EventType(
        'NominationPools.Created',
        sts.struct({
            creator: enjinV100.AccountId32,
            poolId: sts.number(),
            capacity: sts.bigint(),
        })
    ),
    /**
     * A pool has been created.
     */
    v100: new EventType(
        'NominationPools.Created',
        sts.struct({
            depositor: v100.AccountId32,
            poolId: sts.number(),
            capacity: sts.bigint(),
        })
    ),
    /**
     * A pool has been created.
     */
    v101: new EventType(
        'NominationPools.Created',
        sts.struct({
            creator: v101.AccountId32,
            poolId: sts.number(),
            capacity: sts.bigint(),
        })
    ),
}

export const bonded = {
    name: 'NominationPools.Bonded',
    /**
     * A member has became bonded in a pool.
     */
    enjinV100: new EventType(
        'NominationPools.Bonded',
        sts.struct({
            member: enjinV100.AccountId32,
            poolId: sts.number(),
            bonded: sts.bigint(),
            joined: sts.boolean(),
        })
    ),
    /**
     * A member has became bonded in a pool.
     */
    enjinV101: new EventType(
        'NominationPools.Bonded',
        sts.struct({
            member: enjinV101.AccountId32,
            poolId: sts.number(),
            bonded: sts.bigint(),
        })
    ),
    /**
     * A member has became bonded in a pool.
     */
    v100: new EventType(
        'NominationPools.Bonded',
        sts.struct({
            member: v100.AccountId32,
            poolId: sts.number(),
            bonded: sts.bigint(),
            joined: sts.boolean(),
        })
    ),
    /**
     * A member has became bonded in a pool.
     */
    v104: new EventType(
        'NominationPools.Bonded',
        sts.struct({
            member: v104.AccountId32,
            poolId: sts.number(),
            bonded: sts.bigint(),
        })
    ),
}

export const paidOut = {
    name: 'NominationPools.PaidOut',
    /**
     * A payout has been made to a member.
     */
    enjinV100: new EventType(
        'NominationPools.PaidOut',
        sts.struct({
            member: enjinV100.AccountId32,
            poolId: sts.number(),
            payout: sts.bigint(),
        })
    ),
}

export const unbonded = {
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
    enjinV100: new EventType(
        'NominationPools.Unbonded',
        sts.struct({
            member: enjinV100.AccountId32,
            poolId: sts.number(),
            balance: sts.bigint(),
            points: sts.bigint(),
            era: sts.number(),
        })
    ),
}

export const withdrawn = {
    name: 'NominationPools.Withdrawn',
    /**
     * A member has withdrawn from their pool.
     *
     * The given number of `points` have been dissolved in return of `balance`.
     *
     * Similar to `Unbonded` event, in the absence of slashing, the ratio of point to balance
     * will be 1.
     */
    enjinV100: new EventType(
        'NominationPools.Withdrawn',
        sts.struct({
            member: enjinV100.AccountId32,
            poolId: sts.number(),
            balance: sts.bigint(),
            points: sts.bigint(),
        })
    ),
}

export const destroyed = {
    name: 'NominationPools.Destroyed',
    /**
     * A pool has been destroyed.
     */
    enjinV100: new EventType(
        'NominationPools.Destroyed',
        sts.struct({
            poolId: sts.number(),
        })
    ),
}

export const stateChanged = {
    name: 'NominationPools.StateChanged',
    /**
     * The state of a pool has changed
     */
    enjinV100: new EventType(
        'NominationPools.StateChanged',
        sts.struct({
            poolId: sts.number(),
            newState: enjinV100.PoolState,
        })
    ),
    /**
     * The state of a pool has changed
     */
    v100: new EventType(
        'NominationPools.StateChanged',
        sts.struct({
            poolId: sts.number(),
            newState: v100.PoolState,
        })
    ),
    /**
     * The state of a pool has changed
     */
    v103: new EventType(
        'NominationPools.StateChanged',
        sts.struct({
            poolId: sts.number(),
            newState: v103.PoolState,
        })
    ),
}

export const poolSlashed = {
    name: 'NominationPools.PoolSlashed',
    /**
     * The active balance of pool `pool_id` has been slashed to `balance`.
     */
    enjinV100: new EventType(
        'NominationPools.PoolSlashed',
        sts.struct({
            poolId: sts.number(),
            balance: sts.bigint(),
        })
    ),
}

export const unbondingPoolSlashed = {
    name: 'NominationPools.UnbondingPoolSlashed',
    /**
     * The unbond pool at `era` of pool `pool_id` has been slashed to `balance`.
     */
    enjinV100: new EventType(
        'NominationPools.UnbondingPoolSlashed',
        sts.struct({
            poolId: sts.number(),
            era: sts.number(),
            balance: sts.bigint(),
        })
    ),
}

export const commissionUpdated = {
    name: 'NominationPools.CommissionUpdated',
    /**
     * A pool's commission rate has been changed.
     */
    enjinV100: new EventType(
        'NominationPools.CommissionUpdated',
        sts.struct({
            poolId: sts.number(),
            current: sts.option(() => enjinV100.Perbill),
        })
    ),
}

export const eraRewardsProcessed = {
    name: 'NominationPools.EraRewardsProcessed',
    /**
     * This event happens once per era on the previous era that rewards are paid out for. It
     * pays commission, distributes bonus, and reinvests rewards.
     */
    enjinV100: new EventType(
        'NominationPools.EraRewardsProcessed',
        sts.struct({
            /**
             * The id of the pool
             */
            poolId: sts.number(),
            /**
             * The era that was processed.
             */
            era: sts.number(),
            /**
             * The commission that was paid
             */
            commission: sts.option(() => enjinV100.CommissionPayment),
            /**
             * The amount of bonus that was unlocked
             */
            bonus: sts.bigint(),
            /**
             * The amount that was bonded
             */
            reinvested: sts.bigint(),
        })
    ),
    /**
     * This event happens once per era on the previous era that rewards are paid out for. It
     * pays commission, distributes bonus, and reinvests rewards.
     */
    enjinV101: new EventType(
        'NominationPools.EraRewardsProcessed',
        sts.struct({
            /**
             * The id of the pool
             */
            poolId: sts.number(),
            /**
             * The era that was processed.
             */
            era: sts.number(),
            /**
             * The commission that was paid
             */
            commission: sts.option(() => enjinV101.CommissionPayment),
            /**
             * The amount of bonus that was unlocked
             */
            bonus: sts.bigint(),
            /**
             * The amount that was bonded
             */
            reinvested: sts.bigint(),
            /**
             * The current bonus cycle ended
             */
            bonusCycleEnded: sts.boolean(),
        })
    ),
    /**
     * This event happens once per era on the previous era that rewards are paid out for. It
     * pays commission, distributes bonus, and reinvests rewards.
     */
    v102: new EventType(
        'NominationPools.EraRewardsProcessed',
        sts.struct({
            /**
             * The id of the pool
             */
            poolId: sts.number(),
            /**
             * The era that was processed.
             */
            era: sts.number(),
            /**
             * The commission that was paid
             */
            commission: sts.option(() => v102.CommissionPayment),
            /**
             * The amount of bonus that was unlocked
             */
            bonus: sts.bigint(),
            /**
             * The amount that was bonded
             */
            reinvested: sts.bigint(),
        })
    ),
    /**
     * This event happens once per era on the previous era that rewards are paid out for. It
     * pays commission, distributes bonus, and reinvests rewards.
     */
    v104: new EventType(
        'NominationPools.EraRewardsProcessed',
        sts.struct({
            /**
             * The id of the pool
             */
            poolId: sts.number(),
            /**
             * The era that was processed.
             */
            era: sts.number(),
            /**
             * The commission that was paid
             */
            commission: sts.option(() => v104.CommissionPayment),
            /**
             * The amount of bonus that was unlocked
             */
            bonus: sts.bigint(),
            /**
             * The amount that was bonded
             */
            reinvested: sts.bigint(),
            /**
             * The current bonus cycle ended
             */
            bonusCycleEnded: sts.boolean(),
        })
    ),
}

export const rewardPaid = {
    name: 'NominationPools.RewardPaid',
    /**
     * Rewards were paid to a pool
     */
    enjinV100: new EventType(
        'NominationPools.RewardPaid',
        sts.struct({
            /**
             * The id of the pool
             */
            poolId: sts.number(),
            /**
             * The era that was processed.
             */
            era: sts.number(),
            /**
             * The validator that the payment was received from
             */
            validatorStash: enjinV100.AccountId32,
            /**
             * The amount added to the pool's reward account
             */
            reward: sts.bigint(),
            /**
             * The amount that was added to the pool's bonus account
             */
            bonus: sts.bigint(),
        })
    ),
}

export const poolMutated = {
    name: 'NominationPools.PoolMutated',
    /**
     * Pool has been mutated.
     */
    enjinV100: new EventType(
        'NominationPools.PoolMutated',
        sts.struct({
            poolId: sts.number(),
            mutation: enjinV100.PoolMutation,
        })
    ),
    /**
     * Pool has been mutated.
     */
    enjinV110: new EventType(
        'NominationPools.PoolMutated',
        sts.struct({
            poolId: sts.number(),
            mutation: enjinV110.PoolMutation,
        })
    ),
    /**
     * Pool has been mutated.
     */
    enjinV1023: new EventType(
        'NominationPools.PoolMutated',
        sts.struct({
            poolId: sts.number(),
            mutation: enjinV1023.PoolMutation,
        })
    ),
    /**
     * Pool has been mutated.
     */
    v101: new EventType(
        'NominationPools.PoolMutated',
        sts.struct({
            poolId: sts.number(),
            mutation: v101.PoolMutation,
        })
    ),
    /**
     * Pool has been mutated.
     */
    v102: new EventType(
        'NominationPools.PoolMutated',
        sts.struct({
            poolId: sts.number(),
            mutation: v102.PoolMutation,
        })
    ),
    /**
     * Pool has been mutated.
     */
    v104: new EventType(
        'NominationPools.PoolMutated',
        sts.struct({
            poolId: sts.number(),
            mutation: v104.PoolMutation,
        })
    ),
    /**
     * Pool has been mutated.
     */
    v110: new EventType(
        'NominationPools.PoolMutated',
        sts.struct({
            poolId: sts.number(),
            mutation: v110.PoolMutation,
        })
    ),
    /**
     * Pool has been mutated.
     */
    v1023: new EventType(
        'NominationPools.PoolMutated',
        sts.struct({
            poolId: sts.number(),
            mutation: v1023.PoolMutation,
        })
    ),
}

export const nominated = {
    name: 'NominationPools.Nominated',
    /**
     * A nomination took place
     */
    enjinV101: new EventType(
        'NominationPools.Nominated',
        sts.struct({
            /**
             * The id of the pool
             */
            poolId: sts.number(),
            /**
             * The validators that were nominated
             */
            validators: sts.array(() => enjinV101.AccountId32),
        })
    ),
}

export const earlyBirdBonusQueued = {
    name: 'NominationPools.EarlyBirdBonusQueued',
    enjinV101: new EventType(
        'NominationPools.EarlyBirdBonusQueued',
        sts.struct({
            /**
             * The total amount to be distributed
             */
            totalAmount: sts.bigint(),
        })
    ),
}

export const earlyBirdBonusDistributed = {
    name: 'NominationPools.EarlyBirdBonusDistributed',
    /**
     * The early bird bonus has been distributed
     */
    enjinV101: new EventType(
        'NominationPools.EarlyBirdBonusDistributed',
        sts.struct({
            /**
             * The id of the pool
             */
            poolId: sts.number(),
            /**
             * The amount distributed
             */
            amount: sts.bigint(),
        })
    ),
}

export const earlyBirdBonusCalculated = {
    name: 'NominationPools.EarlyBirdBonusCalculated',
    enjinV1021: new EventType(
        'NominationPools.EarlyBirdBonusCalculated',
        sts.struct({
            /**
             * The total amount to be distributed
             */
            totalAmount: sts.bigint(),
        })
    ),
}

export const earlyBirdSharesCaptured = {
    name: 'NominationPools.EarlyBirdSharesCaptured',
    /**
     * The shares of pool users have been captured for early bird rewards
     */
    enjinV1022: new EventType(
        'NominationPools.EarlyBirdSharesCaptured',
        sts.struct({
            /**
             * The id of the pool
             */
            poolId: sts.number(),
            /**
             * The total number of accounts captured
             */
            totalAccounts: sts.number(),
        })
    ),
}

export const earlyBirdBonusPaymentUnlocked = {
    name: 'NominationPools.EarlyBirdBonusPaymentUnlocked',
    /**
     * A new share of early bird bonus has been unlocked
     */
    enjinV1022: new EventType(
        'NominationPools.EarlyBirdBonusPaymentUnlocked',
        sts.struct({
            /**
             * The payment-id of the unlocked bonus
             */
            paymentId: sts.number(),
            /**
             * The next payment block
             */
            nextPaymentBlock: sts.number(),
        })
    ),
}

export const earlyBirdBonusPaid = {
    name: 'NominationPools.EarlyBirdBonusPaid',
    /**
     * The early bird bonus has been paid to the pool
     */
    enjinV1023: new EventType(
        'NominationPools.EarlyBirdBonusPaid',
        sts.struct({
            /**
             * The id of the pool
             */
            poolId: sts.number(),
            /**
             * The payment ID
             */
            paymentId: sts.number(),
            /**
             * The total accounts that were paid
             */
            totalAccounts: sts.number(),
        })
    ),
}

export const earlyBirdSharesRemoved = {
    name: 'NominationPools.EarlyBirdSharesRemoved',
    enjinV1050: new EventType(
        'NominationPools.EarlyBirdSharesRemoved',
        sts.struct({
            /**
             * Number of items removed
             */
            count: sts.number(),
        })
    ),
}

export const rolesUpdated = {
    name: 'NominationPools.RolesUpdated',
    /**
     * The roles of a pool have been updated to the given new roles. Note that the depositor
     * can never change.
     */
    v100: new EventType(
        'NominationPools.RolesUpdated',
        sts.struct({
            root: sts.option(() => v100.AccountId32),
            nominator: sts.option(() => v100.AccountId32),
        })
    ),
}

export const poolCommissionUpdated = {
    name: 'NominationPools.PoolCommissionUpdated',
    /**
     * A pool's commission setting has been changed.
     */
    v100: new EventType(
        'NominationPools.PoolCommissionUpdated',
        sts.struct({
            poolId: sts.number(),
            current: sts.option(() => sts.tuple(() => [v100.Perbill, v100.AccountId32])),
        })
    ),
}

export const poolMaxCommissionUpdated = {
    name: 'NominationPools.PoolMaxCommissionUpdated',
    /**
     * A pool's maximum commission setting has been changed.
     */
    v100: new EventType(
        'NominationPools.PoolMaxCommissionUpdated',
        sts.struct({
            poolId: sts.number(),
            maxCommission: v100.Perbill,
        })
    ),
}

export const poolCommissionChangeRateUpdated = {
    name: 'NominationPools.PoolCommissionChangeRateUpdated',
    /**
     * A pool's commission `change_rate` has been changed.
     */
    v100: new EventType(
        'NominationPools.PoolCommissionChangeRateUpdated',
        sts.struct({
            poolId: sts.number(),
            changeRate: v100.CommissionChangeRate,
        })
    ),
}

export const poolCommissionClaimed = {
    name: 'NominationPools.PoolCommissionClaimed',
    /**
     * Pool commission has been claimed.
     */
    v100: new EventType(
        'NominationPools.PoolCommissionClaimed',
        sts.struct({
            poolId: sts.number(),
            commission: sts.bigint(),
        })
    ),
}

export const maxCommissionUpdated = {
    name: 'NominationPools.MaxCommissionUpdated',
    /**
     * A pool's maximum commission setting has been changed.
     */
    v101: new EventType(
        'NominationPools.MaxCommissionUpdated',
        sts.struct({
            poolId: sts.number(),
            maxCommission: v101.Perbill,
        })
    ),
}

export const commissionChangeRateUpdated = {
    name: 'NominationPools.CommissionChangeRateUpdated',
    /**
     * A pool's commission `change_rate` has been changed.
     */
    v101: new EventType(
        'NominationPools.CommissionChangeRateUpdated',
        sts.struct({
            poolId: sts.number(),
            changeRate: v101.CommissionChangeRate,
        })
    ),
}

export const commissionPaid = {
    name: 'NominationPools.CommissionPaid',
    /**
     * Commission for `pool_id` was paid to `beneficiary`
     */
    v101: new EventType(
        'NominationPools.CommissionPaid',
        sts.struct({
            poolId: sts.number(),
            beneficiary: v101.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const bonusReceived = {
    name: 'NominationPools.BonusReceived',
    /**
     * A pool's bonus was transferred to its reward account
     */
    v101: new EventType(
        'NominationPools.BonusReceived',
        sts.struct({
            poolId: sts.number(),
            amount: sts.bigint(),
        })
    ),
}

export const rewardReinvested = {
    name: 'NominationPools.RewardReinvested',
    /**
     * A pool's reward balance has been bonded
     */
    v101: new EventType(
        'NominationPools.RewardReinvested',
        sts.struct({
            poolId: sts.number(),
            amount: sts.bigint(),
        })
    ),
}
