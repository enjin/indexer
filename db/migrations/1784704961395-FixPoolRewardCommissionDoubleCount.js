/**
 * Fixes the nomination-pools reward-accounting bug where commission was ADDED to the
 * reinvested amount instead of subtracted (reward + commission, should be reward - commission),
 * overstating every per-era reinvested and every member reward by 2*commission (~+15% at 7%).
 *
 * Introduced with the 1060 runtime update (RewardPaid path), commit e1d6607a.
 *
 * Recompute strategy — every value is derived from already-indexed, on-chain-truth columns:
 *   - EraReward.reinvested        = change_in_rate * active / rate          (what compounds)
 *   - PoolMemberRewards.rewards   = points * change_in_rate / 1e18          (member value growth)
 *   - PoolMember.accumulated_rewards = SUM(PoolMemberRewards.rewards)
 * change_in_rate/rate/active come straight from the on-chain pool rate, so this is idempotent
 * and correct regardless of which event path (RewardPaid / EraRewardsProcessed) wrote the row.
 *
 * NOTE: these BigInt-typed entity fields are Postgres `numeric` columns (arbitrary precision),
 * so intermediate products (points * changeInRate ~ 1e38) do not overflow. Results are floored
 * to whole integer units to match how the processor stores them (integer BigInt division).
 *
 * Also makes nomination_pool.bonus_cycle nullable: the bonus mechanism was removed from the
 * runtime (no bonus since era ~903) and the field is no longer populated. Existing values are
 * left untouched; the GraphQL field is kept for backward compatibility (nft.io).
 */
module.exports = class FixPoolRewardCommissionDoubleCount1784704961395 {
    name = 'FixPoolRewardCommissionDoubleCount1784704961395'

    async up(db) {
        // 1) bonus_cycle -> nullable (stop populating; keep field + existing data)
        await db.query(`ALTER TABLE "nomination_pool" ALTER COLUMN "bonus_cycle" DROP NOT NULL`)

        // 2) Recompute EraReward.reinvested = floor(change_in_rate * active / rate).
        //    Skip rows with rate 0 and non-positive change_in_rate (no compounding that era).
        await db.query(`
            UPDATE "era_reward"
            SET "reinvested" = GREATEST(
                floor(("change_in_rate"::numeric * "active"::numeric) / "rate"::numeric),
                0
            )
            WHERE "rate" IS NOT NULL AND "rate"::numeric <> 0
        `)

        // 3) Recompute PoolMemberRewards.rewards = floor(points * change_in_rate / 1e18),
        //    reading change_in_rate from the linked era_reward.
        await db.query(`
            UPDATE "pool_member_rewards" pmr
            SET "rewards" = GREATEST(
                floor((pmr."points"::numeric * er."change_in_rate"::numeric) / 1000000000000000000::numeric),
                0
            )
            FROM "era_reward" er
            WHERE pmr."reward_id" = er."id"
        `)

        // 4) Recompute PoolMember.accumulated_rewards = SUM of its member-reward rows.
        await db.query(`
            UPDATE "pool_member" pm
            SET "accumulated_rewards" = COALESCE(agg.total, 0)
            FROM (
                SELECT "member_id", SUM("rewards"::numeric) AS total
                FROM "pool_member_rewards"
                GROUP BY "member_id"
            ) agg
            WHERE pm."id" = agg."member_id"
        `)
    }

    async down(db) {
        // Data recompute is not reversible (the previous values were incorrect and are not
        // recoverable without re-deriving reward+commission). Only the schema change is undone.
        await db.query(`ALTER TABLE "nomination_pool" ALTER COLUMN "bonus_cycle" SET NOT NULL`)
    }
}
