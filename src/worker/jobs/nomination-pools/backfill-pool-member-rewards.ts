import { Job } from 'bullmq'
import { EntityManager } from 'typeorm'
import { connectionManager } from '~/contexts'

const POST_BONUS_SPEC_VERSION = 1060
const RATE_PRECISION = '1000000000000000000'
const DEFAULT_BATCH_SIZE = 100
const MAX_BATCH_SIZE = 2000

export type BackfillPoolMemberRewardsData = {
    /** Override the automatically detected first post-v1060 block. */
    fromBlock?: number
    /** Override the first affected era. Takes precedence over fromBlock. */
    fromEra?: number
    batchSize?: number
}

type CountRow = { count: string }
type BlockRow = { from_block: number | string | null }
type EraRow = { from_era: number | string | null }
type IdRow = { id: string }
type MemberIdRow = { member_id: string }

/**
 * Repairs nomination-pool rewards created by the post-v1060 RewardPaid processor.
 *
 * The job uses stored rate changes and points, so it supports both historical RewardPaid ID
 * conventions (`event.era` and `event.era + 1`) without archival RPC calls. Each batch commits
 * independently to stay below the database statement timeout; every calculation is idempotent,
 * so retrying the job safely repeats already completed batches.
 */
export async function backfillPoolMemberRewards(job: Job<BackfillPoolMemberRewardsData>): Promise<void> {
    const em = await connectionManager()
    const batchSize = resolveBatchSize(job.data?.batchSize)
    const fromEra = await resolveFromEra(job, em)

    await job.log(`Backfilling pool member rewards from era ${fromEra} in batches of ${batchSize}`)
    await job.updateProgress(5)

    const totalEraRewards = await countAffectedEraRewards(em, fromEra)
    if (totalEraRewards === 0) {
        await job.log('No affected era rewards found; nothing to update')
        await job.updateProgress(100)
        return
    }

    let repairedEraRewards = 0
    let repairedMemberRewards = 0
    let lastEraRewardId: string | undefined

    while (true) {
        const eraRewardIds = await findEraRewardBatch(em, fromEra, lastEraRewardId, batchSize)
        if (eraRewardIds.length === 0) break

        const result = await em.transaction(async (txEm) => repairEraBatch(txEm, eraRewardIds))
        repairedEraRewards += result.eraRewards
        repairedMemberRewards += result.memberRewards
        lastEraRewardId = eraRewardIds[eraRewardIds.length - 1]

        await job.log(
            `Era batch: repaired ${result.eraRewards} era rewards and ${result.memberRewards} member rewards ` +
                `(era rewards ${repairedEraRewards}/${totalEraRewards})`
        )
        await job.updateProgress(5 + Math.min(40, Math.floor((repairedEraRewards / totalEraRewards) * 40)))
    }

    let rebuiltMembers = 0
    let rebuiltSnapshots = 0
    let lastMemberId: string | undefined

    while (true) {
        const memberIds = await findMemberBatch(em, fromEra, lastMemberId, batchSize)
        if (memberIds.length === 0) break

        const result = await em.transaction(async (txEm) => rebuildMemberBatch(txEm, memberIds))
        rebuiltMembers += result.members
        rebuiltSnapshots += result.snapshots
        lastMemberId = memberIds[memberIds.length - 1]

        await job.log(
            `Member batch: rebuilt ${result.snapshots} cumulative snapshots for ${result.members} members ` +
                `(members processed: ${rebuiltMembers})`
        )
        await job.updateProgress(Math.min(95, 50 + Math.floor(rebuiltMembers / batchSize)))
    }

    await job.log(
        `Pool member reward backfill completed: ${repairedEraRewards} era rewards, ` +
            `${repairedMemberRewards} member rewards, ${rebuiltSnapshots} cumulative snapshots, ` +
            `${rebuiltMembers} member totals`
    )
    await job.updateProgress(100)
}

async function repairEraBatch(
    em: EntityManager,
    eraRewardIds: string[]
): Promise<{ eraRewards: number; memberRewards: number }> {
    const eraRows: CountRow[] = await em.query(
        `WITH updated AS (
             UPDATE era_reward
             SET reinvested = GREATEST(
                 TRUNC((change_in_rate * active) / NULLIF(rate, 0)),
                 0
             )
             WHERE id = ANY($1::text[])
               AND rate <> 0
             RETURNING 1
         )
         SELECT COUNT(*)::text AS count FROM updated`,
        [eraRewardIds]
    )

    const memberRows: CountRow[] = await em.query(
        `WITH updated AS (
             UPDATE pool_member_rewards AS member_reward
             SET rewards = GREATEST(
                 TRUNC((member_reward.points * era_reward.change_in_rate) / $1::numeric),
                 0
             )
             FROM era_reward
             WHERE member_reward.reward_id = era_reward.id
               AND era_reward.id = ANY($2::text[])
             RETURNING 1
         )
         SELECT COUNT(*)::text AS count FROM updated`,
        [RATE_PRECISION, eraRewardIds]
    )

    return {
        eraRewards: Number(eraRows[0]?.count ?? 0),
        memberRewards: Number(memberRows[0]?.count ?? 0),
    }
}

async function rebuildMemberBatch(
    em: EntityManager,
    memberIds: string[]
): Promise<{ members: number; snapshots: number }> {
    const unorderedRows: CountRow[] = await em.query(
        `SELECT COUNT(*)::text AS count
         FROM pool_member_rewards AS member_reward
         LEFT JOIN era_reward ON era_reward.id = member_reward.reward_id
         LEFT JOIN era ON era.id = era_reward.era_id
         WHERE member_reward.member_id = ANY($1::text[])
           AND COALESCE(
               member_reward.era_index,
               era.index,
               substring(member_reward.id FROM '-([0-9]+)$')::integer
           ) IS NULL`,
        [memberIds]
    )
    const unorderedCount = Number(unorderedRows[0]?.count ?? 0)
    if (unorderedCount > 0) {
        throw new Error(`Cannot order ${unorderedCount} member reward rows by era`)
    }

    const snapshotRows: CountRow[] = await em.query(
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
             LEFT JOIN era_reward ON era_reward.id = member_reward.reward_id
             LEFT JOIN era ON era.id = era_reward.era_id
             WHERE member_reward.member_id = ANY($1::text[])
         ), updated AS (
             UPDATE pool_member_rewards AS member_reward
             SET accumulated_rewards = ordered.accumulated_rewards
             FROM ordered_rewards AS ordered
             WHERE member_reward.id = ordered.id
             RETURNING 1
         )
         SELECT COUNT(*)::text AS count FROM updated`,
        [memberIds]
    )

    const memberRows: CountRow[] = await em.query(
        `WITH member_totals AS (
             SELECT member_id, SUM(rewards) AS accumulated_rewards
             FROM pool_member_rewards
             WHERE member_id = ANY($1::text[])
             GROUP BY member_id
         ), updated AS (
             UPDATE pool_member AS member
             SET accumulated_rewards = totals.accumulated_rewards
             FROM member_totals AS totals
             WHERE member.id = totals.member_id
             RETURNING member.id
         )
         SELECT COUNT(*)::text AS count FROM updated`,
        [memberIds]
    )

    const mismatchRows: CountRow[] = await em.query(
        `SELECT COUNT(*)::text AS count
         FROM pool_member AS member
         INNER JOIN (
             SELECT member_id, SUM(rewards) AS total
             FROM pool_member_rewards
             WHERE member_id = ANY($1::text[])
             GROUP BY member_id
         ) AS reward_totals ON reward_totals.member_id = member.id
         WHERE member.accumulated_rewards IS DISTINCT FROM reward_totals.total`,
        [memberIds]
    )
    const mismatchCount = Number(mismatchRows[0]?.count ?? 0)
    if (mismatchCount > 0) {
        throw new Error(`Backfill validation failed for ${mismatchCount} members`)
    }

    return {
        members: Number(memberRows[0]?.count ?? 0),
        snapshots: Number(snapshotRows[0]?.count ?? 0),
    }
}

async function findEraRewardBatch(
    em: EntityManager,
    fromEra: number,
    afterId: string | undefined,
    batchSize: number
): Promise<string[]> {
    const rows: IdRow[] = await em.query(
        `SELECT era_reward.id
         FROM era_reward
         INNER JOIN era ON era.id = era_reward.era_id
         WHERE era.index >= $1
           AND ($2::text IS NULL OR era_reward.id > $2)
         ORDER BY era_reward.id
         LIMIT $3`,
        [fromEra, afterId ?? null, batchSize]
    )
    return rows.map((row) => row.id)
}

async function findMemberBatch(
    em: EntityManager,
    fromEra: number,
    afterId: string | undefined,
    batchSize: number
): Promise<string[]> {
    const rows: MemberIdRow[] = await em.query(
        `SELECT member.id AS member_id
         FROM pool_member AS member
         WHERE ($2::text IS NULL OR member.id > $2)
           AND EXISTS (
               SELECT 1
               FROM pool_member_rewards AS member_reward
               INNER JOIN era_reward ON era_reward.id = member_reward.reward_id
               INNER JOIN era ON era.id = era_reward.era_id
               WHERE member_reward.member_id = member.id
                 AND era.index >= $1
           )
         ORDER BY member.id
         LIMIT $3`,
        [fromEra, afterId ?? null, batchSize]
    )
    return rows.map((row) => row.member_id)
}

async function countAffectedEraRewards(em: EntityManager, fromEra: number): Promise<number> {
    const rows: CountRow[] = await em.query(
        `SELECT COUNT(*)::text AS count
         FROM era_reward
         INNER JOIN era ON era.id = era_reward.era_id
         WHERE era.index >= $1`,
        [fromEra]
    )
    return Number(rows[0]?.count ?? 0)
}

async function resolveFromEra(
    job: Job<BackfillPoolMemberRewardsData>,
    em: Awaited<ReturnType<typeof connectionManager>>
): Promise<number> {
    const override = job.data?.fromEra
    if (override !== undefined) {
        assertNonNegativeInteger(override, 'fromEra')
        return override
    }

    const fromBlock = await resolveFromBlock(job, em)
    const rows: EraRow[] = await em.query(
        `SELECT MIN((event.data->>'era')::integer) AS from_era
         FROM event
         INNER JOIN extrinsic ON extrinsic.id = event.extrinsic_id
         WHERE event.name = 'NominationPoolsRewardPaid'
           AND extrinsic.block_number >= $1`,
        [fromBlock]
    )
    const rawFromEra = rows[0]?.from_era
    if (rawFromEra == null) {
        throw new Error(`Could not detect an affected RewardPaid era from block ${fromBlock}`)
    }

    const detected = Number(rawFromEra)
    assertNonNegativeInteger(detected, 'detected fromEra')
    return detected
}

async function resolveFromBlock(
    job: Job<BackfillPoolMemberRewardsData>,
    em: Awaited<ReturnType<typeof connectionManager>>
): Promise<number> {
    const override = job.data?.fromBlock
    if (override !== undefined) {
        assertNonNegativeInteger(override, 'fromBlock')
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
    assertNonNegativeInteger(detected, 'detected fromBlock')
    return detected
}

function resolveBatchSize(value: number | undefined): number {
    if (value === undefined) return DEFAULT_BATCH_SIZE
    if (!Number.isSafeInteger(value) || value <= 0) {
        throw new Error('backfillPoolMemberRewards: batchSize must be a positive integer')
    }
    return Math.min(value, MAX_BATCH_SIZE)
}

function assertNonNegativeInteger(value: number, field: string): void {
    if (!Number.isSafeInteger(value) || value < 0) {
        throw new Error(`backfillPoolMemberRewards: ${field} must be a non-negative integer`)
    }
}
