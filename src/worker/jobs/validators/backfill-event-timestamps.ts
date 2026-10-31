import type { Job } from 'bullmq'
import { connectionManager } from '~/contexts'
import { eventPositionFromId } from './backfill-event-position'

export type BackfillEventTimestampsData = {
    fromBlock: number
    toBlock: number
    batchSize?: number
}

/** Repair existing times only from recorded extrinsics or an unambiguous matching block header. */
export async function backfillEventTimestamps(job: Job<BackfillEventTimestampsData>): Promise<void> {
    const { fromBlock, toBlock, batchSize = 1000 } = job.data ?? {}
    if (
        !Number.isSafeInteger(fromBlock) ||
        !Number.isSafeInteger(toBlock) ||
        fromBlock < 0 ||
        fromBlock > toBlock ||
        toBlock > 2_147_483_647 ||
        toBlock - fromBlock >= 100_000 ||
        !Number.isSafeInteger(batchSize) ||
        batchSize < 1 ||
        batchSize > 5000
    ) {
        throw new Error(
            'Event timestamp backfill requires an inclusive range of at most 100000 blocks and batchSize 1-5000'
        )
    }

    const em = await connectionManager()
    const fromId = String(fromBlock).padStart(10, '0')
    const toId = String(toBlock + 1).padStart(10, '0')
    let cursor = ''
    let scanned = 0
    let updated = 0

    while (true) {
        // IDs retain the height even for rows written before Event.blockNumber was introduced.
        const rows = await em.query<{ id: string }[]>(
            `SELECT id FROM event
             WHERE id >= $1 AND id < $2 AND id > $3 AND created_at IS NULL
             ORDER BY id ASC LIMIT $4`,
            [fromId, toId, cursor, batchSize]
        )
        if (rows.length === 0) break

        const ids = rows.map(({ id }) => id)
        const heights = ids.map((id) => eventPositionFromId(id).blockNumber)
        const prefixes = ids.map((id) => id.split('-')[1].toLowerCase())
        const result = await em.query<{ updated: number }[]>(
            `WITH sources AS (
                SELECT e.id, COALESCE(x.created_at, b.timestamp) AS timestamp
                FROM unnest($1::text[], $2::int[], $3::text[]) AS v(id, height, hash_prefix)
                INNER JOIN event e ON e.id = v.id
                LEFT JOIN extrinsic x ON x.id = e.extrinsic_id
                LEFT JOIN LATERAL (
                    SELECT MIN(c.timestamp) AS timestamp FROM chain_info c
                    WHERE c.block_number = v.height
                        AND LOWER(SUBSTRING(c.block_hash FROM 3 FOR 5)) = v.hash_prefix
                    HAVING COUNT(*) = 1
                ) b ON TRUE
            ), updated AS (
                UPDATE event e SET created_at = s.timestamp FROM sources s
                WHERE e.id = s.id AND e.created_at IS NULL AND s.timestamp IS NOT NULL
                RETURNING e.id
            ) SELECT COUNT(*)::int AS updated FROM updated`,
            [ids, heights, prefixes]
        )
        scanned += rows.length
        updated += result[0]?.updated ?? 0
        cursor = ids[ids.length - 1]
        await job.log(`Event timestamps through ${cursor}: ${updated} updated of ${scanned} scanned`)
    }

    await job.log(
        `Event timestamp backfill complete: ${updated} updated, ${scanned - updated} missing/ambiguous sources`
    )
    await job.updateProgress(100)
}
