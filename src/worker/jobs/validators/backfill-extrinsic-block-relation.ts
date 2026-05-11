import { Job } from 'bullmq'
import { connectionManager } from '~/contexts'
import { JobsEnum } from '~/queue/constants'
import ValidatorsQueue from '~/queue/validators/validators.queue'

const DEFAULT_BATCH_SIZE = 5000
const DEFAULT_BLOCK_SPAN = 50_000

export type BackfillExtrinsicBlockData = {
    batchSize?: number
    blockSpan?: number
    fromBlock?: number
    toBlock?: number
}

/**
 * Links `extrinsic.block_id` to `chain_info.id` for rows indexed before the FK existed.
 *
 * ChainInfo PK is the block hash (see `chainState` / `importBlock`); Extrinsic carries the
 * same value in `block_hash` plus `block_number`. Rows without a matching ChainInfo stay
 * unlinked until `IMPORT_BLOCK` or the processor has created that block header.
 *
 * **Without** `fromBlock` + `toBlock`: fan-out — queries min/max `block_number` among rows
 * still missing `block_id`, then enqueues one job per `blockSpan` window (parallel workers).
 * **With** both set: runs the batched UPDATE for that inclusive range only.
 */
export async function backfillExtrinsicBlockRelation(job: Job<BackfillExtrinsicBlockData>): Promise<void> {
    const { fromBlock, toBlock } = job.data ?? {}

    if (typeof fromBlock === 'number' && typeof toBlock === 'number') {
        await runRangeBackfill(job, fromBlock, toBlock)
        return
    }

    if (fromBlock != null || toBlock != null) {
        throw new Error('backfillExtrinsicBlockRelation: pass both fromBlock and toBlock, or neither (fan-out mode)')
    }

    await dispatchRangeJobs(job)
}

async function dispatchRangeJobs(job: Job<BackfillExtrinsicBlockData>): Promise<void> {
    const batchSize =
        typeof job.data?.batchSize === 'number' && job.data.batchSize > 0
            ? Math.min(job.data.batchSize, 50_000)
            : DEFAULT_BATCH_SIZE

    const blockSpan =
        typeof job.data?.blockSpan === 'number' && job.data.blockSpan > 0
            ? Math.min(job.data.blockSpan, 5_000_000)
            : DEFAULT_BLOCK_SPAN

    const em = await connectionManager()

    const bounds = await em.connection.query<{ min: number | null; max: number | null }[]>(
        `SELECT MIN(block_number) AS min, MAX(block_number) AS max
         FROM extrinsic WHERE block_id IS NULL`
    )
    const rawMin = bounds[0]?.min
    const rawMax = bounds[0]?.max
    const min = rawMin == null ? null : Number(rawMin)
    const max = rawMax == null ? null : Number(rawMax)

    if (min == null || max == null || !Number.isFinite(min) || !Number.isFinite(max) || min > max) {
        await job.log('Fan-out: no extrinsics with block_id IS NULL — nothing to do')
        await job.updateProgress(100)
        return
    }

    let dispatched = 0
    for (let start = min; start <= max; start += blockSpan) {
        const end = Math.min(max, start + blockSpan - 1)
        await ValidatorsQueue.add(
            JobsEnum.BACKFILL_EXTRINSIC_BLOCK_RELATION,
            { fromBlock: start, toBlock: end, batchSize },
            {
                jobId: `validators.backfill-extrinsic-block.${start}-${end}`,
            }
        )
        dispatched += 1
    }

    await job.log(
        `Fan-out: queued ${dispatched} jobs for extrinsics needing block (${min}…${max}), ` +
            `blockSpan=${blockSpan}, batchSize=${batchSize}`
    )
    await job.updateProgress(100)
}

async function runRangeBackfill(
    job: Job<BackfillExtrinsicBlockData>,
    fromBlock: number,
    toBlock: number
): Promise<void> {
    if (fromBlock > toBlock) {
        throw new Error(`backfillExtrinsicBlockRelation: fromBlock (${fromBlock}) must be <= toBlock (${toBlock})`)
    }

    const batchSize =
        typeof job.data?.batchSize === 'number' && job.data.batchSize > 0
            ? Math.min(job.data.batchSize, 50_000)
            : DEFAULT_BATCH_SIZE

    const em = await connectionManager()

    let totalUpdated = 0
    let batch = 0

    await job.log(`Range [${fromBlock}, ${toBlock}], batchSize=${batchSize}`)

    while (true) {
        const result: unknown = await em.connection.query(
            `WITH matched AS (
                SELECT e.id AS extrinsic_id, c.id AS chain_id
                FROM extrinsic e
                INNER JOIN chain_info c
                    ON c.block_number = e.block_number
                    AND c.id = e.block_hash
                WHERE e.block_id IS NULL
                    AND e.block_number >= $2
                    AND e.block_number <= $3
                LIMIT $1
            )
            UPDATE extrinsic e
            SET block_id = m.chain_id
            FROM matched m
            WHERE e.id = m.extrinsic_id`,
            [batchSize, fromBlock, toBlock]
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
           AND e.block_number >= $1
           AND e.block_number <= $2`,
        [fromBlock, toBlock]
    )
    const stillUnlinked = orphaned[0]?.count ?? '?'

    await job.log(
        `Done [${fromBlock}, ${toBlock}]. Linked ${totalUpdated}. Unlinked no ChainInfo (in range): ${stillUnlinked}`
    )
    await job.updateProgress(100)
}

function extractRowCount(result: unknown): number {
    if (Array.isArray(result) && typeof result[1] === 'number') {
        return result[1]
    }
    return 0
}
