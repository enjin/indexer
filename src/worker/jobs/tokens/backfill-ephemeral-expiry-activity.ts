import type { Job } from 'bullmq'
import type { EntityManager } from 'typeorm'
import { connectionManager } from '~/contexts'
import { MultiTokensBurned, MultiTokensEphemeralTokenDestroyed } from '~/model'
import { SnsCause } from '~/util/sns-cause'

export type BackfillEphemeralExpiryActivityData = {
    fromBlock: number
    toBlock: number
    batchSize?: number
    dryRun?: boolean
}

const DEFAULT_BATCH_SIZE = 500
const MAX_BATCH_SIZE = 2000
const EVENT_ID_PATTERN = '^[0-9]{10}-[0-9a-fA-F]{5}-[0-9]{6,10}$'

// Older rows may lack Event.blockNumber. Subsquid event IDs preserve the block height and short hash.
const CANDIDATES_SQL = `
    WITH candidates AS (
        SELECT id, collection_id, token_id, extrinsic_id, block_number,
            left(id, 17) AS block_prefix,
            CASE WHEN id ~ '${EVENT_ID_PATTERN}' THEN left(id, 10)::int END AS height,
            CASE WHEN id ~ '${EVENT_ID_PATTERN}' THEN substring(id FROM 18)::bigint END AS event_index,
            lower(substring(id FROM 12 FOR 5)) AS hash_prefix,
            data ->> 'expirationBlock' AS expiry
        FROM event
        WHERE name = $5 AND id >= $1 AND id < $2 AND id > $3
          AND data ->> 'isTypeOf' = $5
          AND data ->> 'collectionId' = collection_id
          AND token_id = collection_id || '-' || (data ->> 'tokenId')
          AND data ->> 'expirationBlock' ~ '^[0-9]{1,10}$'
        ORDER BY id LIMIT $4
    ), finalized AS (
        SELECT d.*
        FROM candidates d
        WHERE (d.block_number IS NULL OR d.block_number = d.height) AND d.expiry::bigint <= d.height
          AND (
              SELECT COUNT(*) = 1 AND bool_and(c.finalized IS TRUE)
              FROM chain_info c
              WHERE c.block_number = d.height AND lower(substring(c.block_hash FROM 3 FOR 5)) = d.hash_prefix
          )
          AND NOT EXISTS (
              SELECT 1 FROM event other
              WHERE other.name = $5 AND other.id <> d.id AND other.token_id = d.token_id
                AND other.id BETWEEN d.block_prefix || '000000' AND d.block_prefix || '9999999999'
                AND left(other.id, 17) = d.block_prefix
                AND other.extrinsic_id IS NOT DISTINCT FROM d.extrinsic_id
          )
    ), paired AS (
        SELECT b.id, b.data, d.expiry, a.id AS from_id, c.id AS collection_id,
            (b.data ->> 'cause' IS NULL OR b.data ->> 'expirationBlock' IS NULL) AS update_burn,
            history.id IS NULL AND a.id IS NOT NULL AS restore_activity
        FROM finalized d
        JOIN LATERAL (
            SELECT min(e.id) AS id
            FROM event e
            WHERE e.name = $6 AND e.token_id = d.token_id
              AND e.id BETWEEN d.block_prefix || '000000' AND d.block_prefix || '9999999999'
              AND left(e.id, 17) = d.block_prefix
              AND e.extrinsic_id IS NOT DISTINCT FROM d.extrinsic_id
            HAVING COUNT(*) = 1
        ) burn ON TRUE
        JOIN event b ON b.id = burn.id
        LEFT JOIN account a ON a.id = b.data ->> 'account'
        LEFT JOIN collection c ON c.id = d.collection_id
        LEFT JOIN account_token_event history ON history.id = b.id
        WHERE CASE WHEN b.id ~ '${EVENT_ID_PATTERN}' THEN substring(b.id FROM 18)::bigint END < d.event_index
          AND b.collection_id = d.collection_id
          AND (b.block_number IS NULL OR b.block_number = d.height)
          AND b.data ->> 'isTypeOf' = $6
          AND b.data ->> 'collectionId' = d.collection_id
          AND d.token_id = d.collection_id || '-' || (b.data ->> 'tokenId')
          AND b.data ->> 'amount' ~ '^[1-9][0-9]*$'
          AND (b.data ->> 'cause' IS NULL OR b.data ->> 'cause' = $7)
          AND (b.data ->> 'expirationBlock' IS NULL OR b.data ->> 'expirationBlock' = d.expiry)
    )
`

const REPAIR_SQL = `
    , updated AS (
        UPDATE event e
        SET data = e.data || jsonb_build_object('cause', $7::text, 'expirationBlock', p.expiry)
        FROM paired p
        WHERE p.update_burn AND e.id = p.id AND e.data = p.data
        RETURNING e.id
    ), restored AS (
        INSERT INTO account_token_event (id, event_id, collection_id, from_id)
        SELECT p.id, p.id, p.collection_id, p.from_id
        FROM paired p
        WHERE p.restore_activity
        ON CONFLICT (id) DO NOTHING
        RETURNING id
    )
`

const SUMMARY_SQL = `
    SELECT (SELECT max(id) FROM candidates) AS cursor,
        (SELECT count(*)::int FROM candidates) AS scanned,
        (SELECT count(*)::int FROM paired) AS matched,
        (SELECT count(*)::int FROM paired WHERE from_id IS NULL) AS missing_holders,
        (SELECT count(*)::int FROM paired WHERE update_burn) AS eligible_burns,
        (SELECT count(*)::int FROM paired WHERE restore_activity) AS eligible_activity
`

const DRY_RUN_SQL = CANDIDATES_SQL + SUMMARY_SQL
const BACKFILL_SQL =
    CANDIDATES_SQL +
    REPAIR_SQL +
    SUMMARY_SQL +
    `
        , (SELECT count(*)::int FROM updated) AS updated,
        (SELECT count(*)::int FROM restored) AS restored
    `

type BackfillResult = {
    cursor: string | null
    scanned: number
    matched: number
    missing_holders: number
    eligible_burns: number
    eligible_activity: number
    updated?: number
    restored?: number
}

export async function backfillEphemeralExpiryActivity(
    job: Pick<Job<BackfillEphemeralExpiryActivityData>, 'data' | 'log' | 'updateProgress'>,
    manager?: Pick<EntityManager, 'query'>
): Promise<void> {
    const { fromBlock, toBlock, batchSize = DEFAULT_BATCH_SIZE, dryRun = true } = job.data
    if (
        !Number.isSafeInteger(fromBlock) ||
        !Number.isSafeInteger(toBlock) ||
        fromBlock < 0 ||
        fromBlock > toBlock ||
        toBlock > 2_147_483_647 ||
        !Number.isSafeInteger(batchSize) ||
        batchSize < 1 ||
        batchSize > MAX_BATCH_SIZE ||
        typeof dryRun !== 'boolean'
    ) {
        throw new Error(
            `Ephemeral expiry activity backfill requires a valid block range, batchSize 1-${MAX_BATCH_SIZE}, and a boolean dryRun`
        )
    }

    const em = manager ?? (await connectionManager())
    const fromId = String(fromBlock).padStart(10, '0')
    const toId = String(toBlock + 1).padStart(10, '0')
    let cursor = ''
    let scanned = 0
    let matched = 0
    let missingHolders = 0
    let burns = 0
    let activity = 0

    for (;;) {
        const [result] = await em.query<BackfillResult[]>(dryRun ? DRY_RUN_SQL : BACKFILL_SQL, [
            fromId,
            toId,
            cursor,
            batchSize,
            MultiTokensEphemeralTokenDestroyed.name,
            MultiTokensBurned.name,
            SnsCause.ephemeralExpiry,
        ])
        if (!result.cursor) break

        cursor = result.cursor
        scanned += result.scanned
        matched += result.matched
        missingHolders += result.missing_holders
        burns += dryRun ? result.eligible_burns : (result.updated ?? 0)
        activity += dryRun ? result.eligible_activity : (result.restored ?? 0)
        await job.log(`Scanned ${scanned} expiry events through ${cursor}, matched ${matched}`)
    }

    const outcome = dryRun
        ? `dry run: ${burns} burns to update, ${activity} activity rows to restore`
        : `complete: ${burns} burns updated, ${activity} activity rows restored`
    await job.log(
        `Ephemeral expiry activity ${outcome}, ${scanned - matched} unmatched expiry events, ${missingHolders} missing holders`
    )
    await job.updateProgress(100)
}
