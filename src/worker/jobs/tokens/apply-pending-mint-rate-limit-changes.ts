import type { Job } from 'bullmq'
import type { EntityManager } from 'typeorm'
import { connectionManager } from '~/contexts'
import { MintRateLimitState } from '~/model'
import { toMintRateLimitStateModel } from '~/pallet/multi-tokens/processors/mint-rate-limit-state'
import { queueMintRateLimitChanges } from '~/queue/mint-rate-limit-notifications'
import { finalizedIndexedHeight } from '~/util/finalized-indexed-height'
import { logDebug } from '~/worker/utils'
import { publishMintRateLimitNotifications } from './publish-mint-rate-limit-notifications'

const BATCH_SIZE = 1000

type QueryManager = Pick<EntityManager, 'query'>
type ChangeManager = QueryManager & {
    transaction<R>(apply: (transaction: QueryManager) => Promise<R>): Promise<R>
}

async function applyBatch(manager: ChangeManager, table: 'token' | 'collection', height: number): Promise<number> {
    return manager.transaction(async (transaction) => {
        const due = await transaction.query<{ id: string; state: unknown }[]>(
            `SELECT id, mint_rate_limit AS state FROM "${table}"
             WHERE (mint_rate_limit #>> '{pending,effectiveBlock}')::bigint <= $1
               AND (mint_rate_limit #>> '{pending,effectiveBlock}') IS NOT NULL
             ORDER BY (mint_rate_limit #>> '{pending,effectiveBlock}')::bigint
             LIMIT $2
             FOR UPDATE SKIP LOCKED`,
            [height, BATCH_SIZE]
        )
        if (!due.length) return 0

        const rows = due.map(({ id, state }) => {
            const before = new MintRateLimitState(undefined, state)
            return { id, before, state: toMintRateLimitStateModel(before, height) }
        })
        await transaction.query(
            `UPDATE "${table}" AS target SET mint_rate_limit = changes.state
             FROM jsonb_to_recordset($1::jsonb) AS changes (id text, state jsonb)
             WHERE target.id = changes.id`,
            [JSON.stringify(rows.map(({ id, state }) => ({ id, state })))]
        )

        // Buffer before committing so a Redis error leaves the policy eligible for retry.
        // The publisher waits until it can read the applied policy.
        for (const { id, before, state } of rows) {
            const [collectionId, tokenId] = id.split('-')
            await queueMintRateLimitChanges({ collectionId, tokenId }, before, state, BigInt(height))
        }
        return rows.length
    })
}

export async function applyPendingMintRateLimitChanges(job: Job, manager?: ChangeManager): Promise<void> {
    const em = manager ?? (await connectionManager())
    const height = await finalizedIndexedHeight(em)
    if (height === null) return

    // The status table tracks the finalized indexed head. Hot blocks are tracked separately.
    for (const table of ['token', 'collection'] as const) {
        let applied = 0
        for (;;) {
            const count = await applyBatch(em, table, height)
            applied += count
            if (count < BATCH_SIZE) break
        }
        if (applied) logDebug(`Applied ${applied} mint rate limit changes to ${table} through block ${height}`, job)
    }
    await publishMintRateLimitNotifications(height)
}
