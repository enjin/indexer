import { Job } from 'bullmq'
import { connectionManager } from '~/contexts'

const POST_BONUS_SPEC_VERSION = 1060
const RATE_PRECISION = '1000000000000000000'

export type BackfillPoolMemberRewardsData = {
    /** Override the automatically detected first post-v1060 block. */
    fromBlock?: number
}

type CountRow = { count: string }
type BlockRow = { from_block: number | string | null }
type IdRow = { id: string }

/**
 * Repairs nomination-pool rewards created by the post-v1060 RewardPaid processor.
 *
 * The job is intentionally database-only: the member points and pool rate changes needed to
 * reproduce rewards are already stored. All writes happen in one transaction, making the job
 * safe to retry after a failure and preventing partially rebuilt cumulative reward histories.
 */
export async function backfillPoolMemberRewards(job: Job<BackfillPoolMemberRewardsData>): Promise<void> {
    const em = await connectionManager()
    const fromBlock = await resolveFromBlock(job, em)

    await job.log(`Backfilling pool member rewards from block ${fromBlock}`)
    await job.updateProgress(5)

    await em.transaction(async (txEm) => {
        // RewardPaid.era is the era paid out; the indexer stores its reward under era + 1.
        await txEm.query(
            `CREATE TEMP TABLE affected_pool_rewards ON COMMIT DROP AS
             SELECT
                 event.data->>'poolId' AS pool_id,
                 ((event.data->>'era')::integer + 1) AS era_index,
                 SUM(
                     GREATEST(
                         (event.data->>'reward')::numeric
                             - COALESCE((event.data->'commission'->>'amount')::numeric, 0),
                         0
                     )
                 ) AS reinvested
             FROM event
             INNER JOIN extrinsic ON extrinsic.id = event.extrinsic_id
             WHERE event.name = 'NominationPoolsRewardPaid'
               AND extrinsic.block_number >= $1
             GROUP BY event.data->>'poolId', (event.data->>'era')::integer`,
            [fromBlock]
        )
        await txEm.query(
            `CREATE UNIQUE INDEX affected_pool_rewards_id_idx
             ON affected_pool_rewards (pool_id, era_index)`
        )

        const affectedCounts: CountRow[] = await txEm.query(`SELECT COUNT(*)::text AS count FROM affected_pool_rewards`)
        const affectedEraCount = Number(affectedCounts[0]?.count ?? 0)

        if (affectedEraCount === 0) {
            await job.log('No affected RewardPaid eras found; nothing to update')
            return
        }

        const repairedEraRewards: IdRow[] = await txEm.query(
            `UPDATE era_reward AS era_reward
             SET reinvested = affected.reinvested
             FROM affected_pool_rewards AS affected
             WHERE era_reward.id = affected.pool_id || '-' || affected.era_index::text
             RETURNING era_reward.id`
        )

        await job.log(`Repaired ${repairedEraRewards.length} of ${affectedEraCount} affected era rewards`)
        await job.updateProgress(30)

        const repairedMemberRewards: IdRow[] = await txEm.query(
            `UPDATE pool_member_rewards AS member_reward
             SET rewards = GREATEST(
                 TRUNC((member_reward.points * era_reward.change_in_rate) / $1::numeric),
                 0
             )
             FROM era_reward
             INNER JOIN affected_pool_rewards AS affected
                 ON era_reward.id = affected.pool_id || '-' || affected.era_index::text
             WHERE member_reward.reward_id = era_reward.id
             RETURNING member_reward.id`,
            [RATE_PRECISION]
        )

        await txEm.query(
            `CREATE TEMP TABLE affected_pool_members ON COMMIT DROP AS
             SELECT DISTINCT member_reward.member_id
             FROM pool_member_rewards AS member_reward
             INNER JOIN era_reward ON era_reward.id = member_reward.reward_id
             INNER JOIN affected_pool_rewards AS affected
                 ON era_reward.id = affected.pool_id || '-' || affected.era_index::text
             WHERE member_reward.member_id IS NOT NULL`
        )
        await txEm.query(
            `CREATE UNIQUE INDEX affected_pool_members_id_idx
             ON affected_pool_members (member_id)`
        )

        const memberCounts: CountRow[] = await txEm.query(`SELECT COUNT(*)::text AS count FROM affected_pool_members`)
        const affectedMemberCount = Number(memberCounts[0]?.count ?? 0)

        await job.log(`Repaired ${repairedMemberRewards.length} member-era rewards for ${affectedMemberCount} members`)
        await job.updateProgress(55)

        const unorderedCounts: CountRow[] = await txEm.query(
            `SELECT COUNT(*)::text AS count
             FROM pool_member_rewards AS member_reward
             INNER JOIN affected_pool_members AS affected_member
                 ON affected_member.member_id = member_reward.member_id
             LEFT JOIN era_reward ON era_reward.id = member_reward.reward_id
             LEFT JOIN era ON era.id = era_reward.era_id
             WHERE COALESCE(
                 member_reward.era_index,
                 era.index,
                 substring(member_reward.id FROM '-([0-9]+)$')::integer
             ) IS NULL`
        )
        const unorderedCount = Number(unorderedCounts[0]?.count ?? 0)
        if (unorderedCount > 0) {
            throw new Error(`Cannot order ${unorderedCount} member reward rows by era`)
        }

        const rebuiltSnapshots: IdRow[] = await txEm.query(
            `WITH ordered_rewards AS (
                 SELECT
                     member_reward.id,
                     SUM(member_reward.rewards) OVER (
                         PARTITION BY member_reward.member_id
                         ORDER BY COALESCE(
                             member_reward.era_index,
                             era.index,
                             substring(member_reward.id FROM '-([0-9]+)$')::integer
                         ), member_reward.id
                         ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
                     ) AS accumulated_rewards
                 FROM pool_member_rewards AS member_reward
                 INNER JOIN affected_pool_members AS affected_member
                     ON affected_member.member_id = member_reward.member_id
                 LEFT JOIN era_reward ON era_reward.id = member_reward.reward_id
                 LEFT JOIN era ON era.id = era_reward.era_id
             )
             UPDATE pool_member_rewards AS member_reward
             SET accumulated_rewards = ordered.accumulated_rewards
             FROM ordered_rewards AS ordered
             WHERE member_reward.id = ordered.id
             RETURNING member_reward.id`
        )

        const rebuiltMembers: IdRow[] = await txEm.query(
            `WITH member_totals AS (
                 SELECT member_reward.member_id, SUM(member_reward.rewards) AS accumulated_rewards
                 FROM pool_member_rewards AS member_reward
                 INNER JOIN affected_pool_members AS affected_member
                     ON affected_member.member_id = member_reward.member_id
                 GROUP BY member_reward.member_id
             )
             UPDATE pool_member AS member
             SET accumulated_rewards = totals.accumulated_rewards
             FROM member_totals AS totals
             WHERE member.id = totals.member_id
             RETURNING member.id`
        )

        await job.log(
            `Rebuilt ${rebuiltSnapshots.length} cumulative snapshots and ${rebuiltMembers.length} member totals`
        )
        await job.updateProgress(85)

        const mismatchCounts: CountRow[] = await txEm.query(
            `SELECT COUNT(*)::text AS count
             FROM pool_member AS member
             INNER JOIN affected_pool_members AS affected_member ON affected_member.member_id = member.id
             INNER JOIN (
                 SELECT member_id, SUM(rewards) AS total
                 FROM pool_member_rewards
                 GROUP BY member_id
             ) AS reward_totals ON reward_totals.member_id = member.id
             WHERE member.accumulated_rewards IS DISTINCT FROM reward_totals.total`
        )
        const mismatchCount = Number(mismatchCounts[0]?.count ?? 0)
        if (mismatchCount > 0) {
            throw new Error(`Backfill validation failed for ${mismatchCount} members`)
        }
    })

    await job.log('Pool member reward backfill completed successfully')
    await job.updateProgress(100)
}

async function resolveFromBlock(
    job: Job<BackfillPoolMemberRewardsData>,
    em: Awaited<ReturnType<typeof connectionManager>>
): Promise<number> {
    const override = job.data?.fromBlock
    if (override !== undefined) {
        if (!Number.isSafeInteger(override) || override < 0) {
            throw new Error('backfillPoolMemberRewards: fromBlock must be a non-negative integer')
        }
        return override
    }

    const rows: BlockRow[] = await em.query(
        `SELECT MIN(block_number) AS from_block
         FROM chain_info
         WHERE spec_version >= $1`,
        [POST_BONUS_SPEC_VERSION]
    )
    const rawFromBlock = rows[0]?.from_block
    if (rawFromBlock == null) {
        throw new Error(`Could not detect the first runtime block at spec version ${POST_BONUS_SPEC_VERSION} or newer`)
    }

    const detected = Number(rawFromBlock)
    if (!Number.isSafeInteger(detected) || detected < 0) {
        throw new Error(`Could not detect the first runtime block at spec version ${POST_BONUS_SPEC_VERSION} or newer`)
    }

    return detected
}
