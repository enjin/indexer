import { Job } from 'bullmq'
import { connectionManager } from '~/contexts'

const DEFAULT_BATCH_SIZE = 5000

type BackfillExtrinsicBlockData = {
    batchSize?: number
    fromBlock?: number
    toBlock?: number
}

/**
 * Links `extrinsic.block_id` to `chain_info.id` for rows indexed before the FK existed.
 *
 * ChainInfo PK is the block hash (see `chainState` / `importBlock`); Extrinsic carries the
 * same value in `block_hash` plus `block_number`. Rows without a matching ChainInfo stay
 * unlinked until `IMPORT_BLOCK` or the processor has created that block header.
 */
export async function backfillExtrinsicBlockRelation(job: Job<BackfillExtrinsicBlockData>): Promise<void> {
    const batchSize =
        typeof job.data?.batchSize === 'number' && job.data.batchSize > 0
            ? Math.min(job.data.batchSize, 50_000)
            : DEFAULT_BATCH_SIZE

    const fromBlock = job.data?.fromBlock
    const toBlock = job.data?.toBlock

    const em = await connectionManager()

    let totalUpdated = 0
    let batch = 0

    await job.log(
        `Backfill extrinsic→block: batchSize=${batchSize}` +
            (fromBlock != null || toBlock != null ? `, block range [${fromBlock ?? '…'}, ${toBlock ?? '…'}]` : '')
    )

    while (true) {
        const result: unknown = await em.connection.query(
            `WITH matched AS (
                SELECT e.id AS extrinsic_id, c.id AS chain_id
                FROM extrinsic e
                INNER JOIN chain_info c
                    ON c.block_number = e.block_number
                    AND c.id = e.block_hash
                WHERE e.block_id IS NULL
                    AND ($2::integer IS NULL OR e.block_number >= $2)
                    AND ($3::integer IS NULL OR e.block_number <= $3)
                LIMIT $1
            )
            UPDATE extrinsic e
            SET block_id = m.chain_id
            FROM matched m
            WHERE e.id = m.extrinsic_id`,
            [batchSize, fromBlock ?? null, toBlock ?? null]
        )

        batch += 1
        const rowCount = extractRowCount(result)
        totalUpdated += rowCount

        const progressPct = rowCount === 0 ? 100 : Math.min(99, batch)
        await job.updateProgress(progressPct)
        await job.log(`batch ${batch}: updated ${rowCount} extrinsics (total ${totalUpdated})`)

        if (rowCount === 0) break
        if (rowCount < batchSize) break
    }

    const orphaned = await em.connection.query<{ count: string }[]>(
        `SELECT COUNT(*)::text AS count
         FROM extrinsic e
         WHERE e.block_id IS NULL
           AND NOT EXISTS (
             SELECT 1 FROM chain_info c
             WHERE c.block_number = e.block_number AND c.id = e.block_hash
           )
           AND ($1::integer IS NULL OR e.block_number >= $1)
           AND ($2::integer IS NULL OR e.block_number <= $2)`,
        [fromBlock ?? null, toBlock ?? null]
    )
    const stillUnlinked = orphaned[0]?.count ?? '?'

    await job.log(`Done. Linked ${totalUpdated} extrinsics. Still unlinked with no ChainInfo row: ${stillUnlinked}`)
    await job.updateProgress(100)
}

function extractRowCount(result: unknown): number {
    if (Array.isArray(result) && typeof result[1] === 'number') {
        return result[1]
    }
    return 0
}
