import type { Job } from 'bullmq'
import { type EntityManager, QueryFailedError } from 'typeorm'
import { connectionManager } from '~/contexts'
import { logDebug } from '~/worker/utils'

const BATCH_SIZE = 1000

export async function completeMintRateLimitRemovals(job: Job, manager?: Pick<EntityManager, 'query'>): Promise<void> {
    const em = manager ?? (await connectionManager())
    const status = await em
        .query<{ height: number }[]>('SELECT height FROM squid_processor.status WHERE id = 0')
        .catch((error: unknown) => {
            // The processor creates its status table on first startup.
            if (error instanceof QueryFailedError && error.driverError.code === '42P01') return []
            throw error
        })
    const height = status[0]?.height
    if (height === undefined || height < 0) return

    // The status table tracks the finalized indexed head. Hot blocks are tracked separately.
    for (const table of ['token', 'collection']) {
        let cleared = 0
        for (;;) {
            const [{ count }] = await em.query<{ count: number }[]>(
                `WITH due AS (
                    SELECT id FROM "${table}"
                    WHERE (mint_rate_limit #>> '{pending,effectiveBlock}')::bigint <= $1
                      AND (mint_rate_limit #>> '{pending,effectiveBlock}') IS NOT NULL
                      AND COALESCE(mint_rate_limit #> '{pending,newLimit}', 'null'::jsonb) = 'null'::jsonb
                    ORDER BY (mint_rate_limit #>> '{pending,effectiveBlock}')::bigint
                    LIMIT $2
                    FOR UPDATE SKIP LOCKED
                ), cleared AS (
                    UPDATE "${table}" AS target
                    SET mint_rate_limit = NULL
                    FROM due
                    WHERE target.id = due.id
                    RETURNING 1
                )
                SELECT COUNT(*)::int AS count FROM cleared`,
                [height, BATCH_SIZE]
            )
            cleared += count
            if (count < BATCH_SIZE) break
        }
        if (cleared)
            logDebug(`Cleared ${cleared} completed mint rate limit removals from ${table} through block ${height}`, job)
    }
}
