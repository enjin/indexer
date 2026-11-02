import type { Job } from 'bullmq'
import type { EntityManager } from 'typeorm'
import { connectionManager } from '~/contexts'

const DEFAULT_BATCH_SIZE = 500
const MAX_BATCH_SIZE = 2000

export type BackfillLoanExtensionActivityData = {
    afterId?: string
    throughId?: string
    batchSize?: number
    dryRun?: boolean
}

export const LOAN_EXTENSION_ACTIVITY_SQL = `
    WITH candidates AS (
        SELECT e.id, e.token_id, e.collection_id,
               lent.data ->> 'lender' AS lender_id,
               lent.data ->> 'borrower' AS borrower_id
        FROM event e
        LEFT JOIN LATERAL (
            SELECT history.data FROM event history
            WHERE history.token_id = e.token_id
              AND history.name = 'MultiTokensTokenLent'
              AND history.id < e.id
            ORDER BY history.id DESC LIMIT 1
        ) lent ON true
        WHERE e.name = 'MultiTokensLoanExtended' AND e.id > $1 AND e.id <= $2
          AND COALESCE(e.block_number, CASE WHEN split_part(e.id, '-', 1) ~ '^[0-9]+$'
              THEN split_part(e.id, '-', 1)::bigint END) <= $5
        ORDER BY e.id ASC LIMIT $3
    ), resolved AS (
        SELECT c.id, t.id AS token_id, collection.id AS collection_id,
               lender.id AS from_id, borrower.id AS to_id
        FROM candidates c
        LEFT JOIN token t ON t.id = c.token_id
        LEFT JOIN collection ON collection.id = COALESCE(t.collection_id, c.collection_id)
        LEFT JOIN account lender ON lender.id = c.lender_id
        LEFT JOIN account borrower ON borrower.id = c.borrower_id
    ), written AS (
        INSERT INTO account_token_event (id, event_id, token_id, collection_id, from_id, to_id)
        SELECT id, id, token_id, collection_id, from_id, to_id FROM resolved WHERE NOT $4::boolean
        ON CONFLICT (id) DO UPDATE SET
            event_id = EXCLUDED.event_id,
            token_id = EXCLUDED.token_id,
            collection_id = EXCLUDED.collection_id,
            from_id = COALESCE(EXCLUDED.from_id, account_token_event.from_id),
            to_id = COALESCE(EXCLUDED.to_id, account_token_event.to_id)
        WHERE account_token_event.event_id IS DISTINCT FROM EXCLUDED.event_id
           OR account_token_event.token_id IS DISTINCT FROM EXCLUDED.token_id
           OR account_token_event.collection_id IS DISTINCT FROM EXCLUDED.collection_id
           OR (EXCLUDED.from_id IS NOT NULL AND account_token_event.from_id IS DISTINCT FROM EXCLUDED.from_id)
           OR (EXCLUDED.to_id IS NOT NULL AND account_token_event.to_id IS DISTINCT FROM EXCLUDED.to_id)
        RETURNING id
    )
    SELECT (SELECT MAX(id) FROM candidates) AS cursor,
           (SELECT COUNT(*)::int FROM candidates) AS scanned,
           (SELECT COUNT(*)::int FROM written) AS written,
           (SELECT COUNT(*)::int FROM resolved WHERE from_id IS NULL OR to_id IS NULL) AS unresolved
`

export async function backfillLoanExtensionActivity(
    job: Pick<Job<BackfillLoanExtensionActivityData>, 'data' | 'log' | 'updateProgress'>,
    manager?: Pick<EntityManager, 'query'>
): Promise<void> {
    const data = job.data ?? {}
    const batchSize = data.batchSize ?? DEFAULT_BATCH_SIZE
    if (!Number.isSafeInteger(batchSize) || batchSize < 1 || batchSize > MAX_BATCH_SIZE) {
        throw new Error(`Loan extension activity batchSize must be between 1 and ${MAX_BATCH_SIZE}`)
    }
    const em = manager ?? (await connectionManager())
    const [upper] = await em.query<{ id: string | null }[]>(
        `SELECT MAX(id) AS id FROM event WHERE name = 'MultiTokensLoanExtended'`
    )
    const throughId = data.throughId ?? upper.id
    if (!throughId) {
        await job.log('No loan extension events to backfill')
        await job.updateProgress(100)
        return
    }

    const [finality] = await em.query<{ height: number | null }[]>(
        'SELECT MAX(block_number)::int AS height FROM chain_info WHERE finalized IS TRUE'
    )
    if (finality.height === null) throw new Error('Loan extension backfill requires an indexed finalized block')
    await job.log(`Backfilling finalized loan extensions through block ${finality.height}`)

    let cursor = data.afterId ?? ''
    let scanned = 0
    let written = 0
    let unresolved = 0
    while (cursor < throughId) {
        const [result] = await em.query<
            {
                cursor: string | null
                scanned: number
                written: number
                unresolved: number
            }[]
        >(LOAN_EXTENSION_ACTIVITY_SQL, [cursor, throughId, batchSize, data.dryRun ?? false, finality.height])
        if (!result.scanned || !result.cursor) break
        scanned += result.scanned
        written += result.written
        unresolved += result.unresolved
        cursor = result.cursor
        await job.log(
            `Loan extension activity through ${cursor}: ${scanned} scanned, ${written} written, ${unresolved} unresolved parties`
        )
    }
    await job.log(
        `Loan extension activity ${data.dryRun ? 'dry run' : 'backfill'} complete: ${scanned} scanned, ${written} written, ${unresolved} unresolved parties`
    )
    await job.updateProgress(100)
}
