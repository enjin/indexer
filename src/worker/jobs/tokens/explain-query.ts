import { Job } from 'bullmq'
import { connectionManager } from '~/contexts'
import { Logger } from '~/util/logger'

const DEFAULT_TIMEOUT_MS = 120_000
const MAX_TIMEOUT_MS = 600_000

// Only named, hard-coded queries can be explained — the job payload must never
// carry arbitrary SQL (Bull Board payloads are operator input, not trusted code).
const EXPLAIN_QUERIES: Record<string, { sql: string; defaultParams: unknown[] }> = {
    // The totalCount part of nft-io's CollectionActivityQuery, the top
    // statement-timeout offender in production graphql-server logs.
    collection_activity_count: {
        sql: `SELECT count(*) FROM "account_token_event" AS "account_token_event"
            LEFT OUTER JOIN "event" "event" ON "event"."id" = "account_token_event"."event_id"
            LEFT OUTER JOIN "bid" "bid" ON "bid"."id" = "event"."data"->>'winningBid'
            LEFT OUTER JOIN "token" "token" ON "token"."id" = "account_token_event"."token_id"
            LEFT OUTER JOIN "collection" "collection" ON "collection"."id" = "token"."collection_id"
            WHERE (("event"."name" IN ('MarketplaceListingCreated', 'MarketplaceListingCancelled', 'MarketplaceOfferCreated',
                'MarketplaceOfferCancelled', 'MarketplaceBidPlaced', 'MarketplaceListingFilled', 'MarketplaceOfferSettled',
                'MultiTokensMinted', 'MultiTokensTransferred', 'MultiTokensBurned', 'MultiTokensInfused'))
                OR ("bid"."id" IS NOT NULL AND "event"."name" = 'MarketplaceAuctionFinalized' AND "event"."collection_id" != '1'))
                AND "collection"."id" = $1`,
        defaultParams: ['2967'],
    },
    // Filter shape of the Tokens query (nativeMetadata.decimalCount_gt) — used
    // to verify the token_native_metadata_decimal_count_idx expression index.
    tokens_by_decimal_count: {
        sql: `SELECT "token"."id" FROM "token"
            WHERE ("token"."native_metadata"->'decimalCount')::integer > $1
            ORDER BY "token"."id" ASC LIMIT 101`,
        defaultParams: [0],
    },
}

type ExplainQueryJobData = {
    query: string
    params?: unknown[]
    analyze?: boolean
    timeoutMs?: number
}

export async function explainQuery(job: Job): Promise<void> {
    const { query, params, analyze = true, timeoutMs = DEFAULT_TIMEOUT_MS } = (job.data ?? {}) as ExplainQueryJobData

    const named = EXPLAIN_QUERIES[query]
    if (!named) {
        throw new Error(`Unknown explain query "${query}". Available: ${Object.keys(EXPLAIN_QUERIES).join(', ')}`)
    }

    const timeout = Math.min(Math.max(Math.trunc(Number(timeoutMs) || DEFAULT_TIMEOUT_MS), 1_000), MAX_TIMEOUT_MS)
    const explainSql = `EXPLAIN (${analyze ? 'ANALYZE, BUFFERS, ' : ''}VERBOSE) ${named.sql}`

    const em = await connectionManager()
    const rows: { 'QUERY PLAN': string }[] = await em.transaction(async (tem) => {
        // SET LOCAL is scoped to this transaction; the worker role's default
        // statement_timeout would otherwise cancel the ANALYZE run itself.
        await tem.query(`SET LOCAL statement_timeout = ${timeout}`)
        return tem.query(explainSql, params ?? named.defaultParams)
    })

    const plan = rows.map((r) => r['QUERY PLAN']).join('\n')
    await job.log(plan)
    Logger.info(`EXPLAIN ${query} (analyze=${analyze})\n${plan}`, 'sqd:worker')
}
