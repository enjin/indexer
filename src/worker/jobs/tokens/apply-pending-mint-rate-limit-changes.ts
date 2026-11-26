import type { IRedisClient, Job } from 'bullmq'
import type { EntityManager } from 'typeorm'
import { connectionManager } from '~/contexts'
import { MintRateLimitState } from '~/model'
import { mintRateLimitNotification } from '~/pallet/multi-tokens/mint-rate-limit-notifications'
import { toMintRateLimitStateModel } from '~/pallet/multi-tokens/processors/mint-rate-limit-state'
import config from '~/util/config'
import { finalizedIndexedHeight } from '~/util/finalized-indexed-height'
import { Sns, type SnsEvent } from '~/util/sns'
import { isRelay } from '~/util/tools'
import { logDebug } from '~/worker/utils'

const BATCH_SIZE = 1000

type QueryManager = Pick<EntityManager, 'query'>
type ChangeManager = QueryManager & {
    transaction<R>(apply: (transaction: QueryManager) => Promise<R>): Promise<R>
}
type SubjectTable = 'token' | 'collection'
type AppliedNotifications = { client: Pick<IRedisClient, 'hgetall' | 'hset' | 'hdel'>; key: string }

async function appliedNotifications(): Promise<AppliedNotifications | undefined> {
    if (!config.amazonSns.topicArn || isRelay()) return
    const { TokensQueue } = await import('~/queue')
    return { client: await TokensQueue.client, key: TokensQueue.toKey(`mint-rate-limit-applied:${config.chainName}`) }
}

async function applyBatch(
    manager: ChangeManager,
    table: SubjectTable,
    height: number,
    notifications?: AppliedNotifications
): Promise<number> {
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

        if (notifications) {
            const payloads: Record<string, string> = {}
            for (const { id, before } of rows) {
                const [collectionId, tokenId] = id.split('-')
                const pending = before.pending
                if (!pending) continue
                const event = mintRateLimitNotification(
                    'ChangeApplied',
                    { collectionId, tokenId },
                    pending.effectiveBlock,
                    pending.newLimit ?? null
                )
                payloads[event.id] = JSON.stringify(event)
            }
            // Keep the effective-block SNS payload retryable before clearing the pending policy.
            if (Object.keys(payloads).length > 0) await notifications.client.hset(notifications.key, payloads)
        }
        return rows.length
    })
}

async function publishAppliedChanges(
    manager: QueryManager,
    height: number,
    { client, key }: AppliedNotifications
): Promise<void> {
    const failures: string[] = []
    for (const [eventId, payload] of Object.entries(await client.hgetall(key))) {
        try {
            const event = JSON.parse(payload) as SnsEvent
            const { collectionId, tokenId, effectiveBlock } = event.body
            const block = BigInt(String(effectiveBlock))
            if (block > BigInt(height)) continue
            const table = tokenId == null ? 'collection' : 'token'
            const id = tokenId == null ? String(collectionId) : `${String(collectionId)}-${String(tokenId)}`
            const [current] = await manager.query<{ pending: string | null }[]>(
                `SELECT mint_rate_limit #>> '{pending,effectiveBlock}' AS pending FROM "${table}" WHERE id = $1`,
                [id]
            )
            // Another worker can see the payload before the policy transaction commits.
            if (current?.pending === effectiveBlock) continue
            if (await Sns.getInstance().sendFinalized(event, block)) await client.hdel(key, eventId)
        } catch (error) {
            failures.push(error instanceof Error ? error.message : String(error))
        }
    }
    if (failures.length > 0) throw new Error(`Failed to publish applied mint rate limit changes (${failures[0]})`)
}

export async function applyPendingMintRateLimitChanges(job: Job, manager?: ChangeManager): Promise<void> {
    const em = manager ?? (await connectionManager())
    const height = await finalizedIndexedHeight(em)
    if (height === null) return
    const notifications = await appliedNotifications()

    // The status table tracks the finalized indexed head. Hot blocks are tracked separately.
    for (const table of ['token', 'collection'] as const) {
        let applied = 0
        for (;;) {
            const count = await applyBatch(em, table, height, notifications)
            applied += count
            if (count < BATCH_SIZE) break
        }
        if (applied) logDebug(`Applied ${applied} mint rate limit changes to ${table} through block ${height}`, job)
    }
    if (notifications) await publishAppliedChanges(em, height, notifications)
}
