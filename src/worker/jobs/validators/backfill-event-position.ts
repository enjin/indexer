import { Job } from 'bullmq'
import { connectionManager } from '~/contexts'

const DEFAULT_BATCH_SIZE = 1000
const MAX_BATCH_SIZE = 5000
const EVENT_ID = /^(\d{10,})-[0-9a-fA-F]{5}-(\d{6,})$/
const MAX_INT = 2_147_483_647

export function eventPositionFromId(id: string): { blockNumber: number; index: number } {
    const match = EVENT_ID.exec(id)
    if (!match) throw new Error(`Cannot derive event position from ID ${id}`)

    const blockNumber = Number(match[1])
    const index = Number(match[2])
    if (blockNumber > MAX_INT || index > MAX_INT) {
        throw new Error(`Event position exceeds GraphQL Int range for ID ${id}`)
    }

    return { blockNumber, index }
}

export type BackfillEventPositionData = {
    batchSize?: number
}

/** Fill positions from Subsquid's existing block-height, short-hash, event-index IDs. */
export async function backfillEventPosition(job: Job<BackfillEventPositionData>): Promise<void> {
    const requestedBatchSize = job.data?.batchSize ?? DEFAULT_BATCH_SIZE
    if (!Number.isSafeInteger(requestedBatchSize) || requestedBatchSize < 1) {
        throw new Error('backfillEventPosition requires a positive integer batchSize')
    }

    const batchSize = Math.min(requestedBatchSize, MAX_BATCH_SIZE)
    const em = await connectionManager()
    let cursor = ''
    let updated = 0
    let batches = 0

    while (true) {
        const rows = await em.query<{ id: string }[]>(
            `SELECT id FROM event
             WHERE id > $1 AND (block_number IS NULL OR "index" IS NULL)
             ORDER BY id ASC LIMIT $2`,
            [cursor, batchSize]
        )
        if (rows.length === 0) break

        const ids: string[] = []
        const blockNumbers: number[] = []
        const indices: number[] = []

        for (const { id } of rows) {
            const { blockNumber, index } = eventPositionFromId(id)

            ids.push(id)
            blockNumbers.push(blockNumber)
            indices.push(index)
        }

        await em.query(
            `UPDATE event AS e
             SET block_number = COALESCE(e.block_number, v.block_number),
                 "index" = COALESCE(e."index", v.event_index)
             FROM unnest($1::text[], $2::int[], $3::int[]) AS v(id, block_number, event_index)
             WHERE e.id = v.id AND (e.block_number IS NULL OR e."index" IS NULL)`,
            [ids, blockNumbers, indices]
        )

        cursor = rows[rows.length - 1].id
        updated += rows.length
        batches += 1
        if (batches % 100 === 0) {
            await job.log(`Filled event positions through ${cursor} (${updated} rows scanned)`)
        }
    }

    await job.log(`Event position backfill complete: ${updated} rows scanned`)
    await job.updateProgress(100)
}
