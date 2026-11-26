const targets = [
    ['token', 'token_mint_blocked_until_idx'],
    ['collection', 'collection_mint_blocked_until_idx'],
]

module.exports = class MintRateLimitAvailabilityIndexes1795689965000 {
    name = 'MintRateLimitAvailabilityIndexes1795689965000'
    transaction = false

    async up(db) {
        const [{ statement_timeout: statementTimeout }] = await db.query(`SHOW statement_timeout`)
        await db.query(`SELECT set_config('statement_timeout', '0', false)`)

        try {
            for (const [table, name] of targets) {
                const indexes = await db.query(
                    `SELECT idx.indisvalid AS valid
                     FROM pg_catalog.pg_index idx
                     JOIN pg_catalog.pg_class cls ON cls.oid = idx.indexrelid
                     JOIN pg_catalog.pg_namespace ns ON ns.oid = cls.relnamespace
                     WHERE ns.nspname = current_schema() AND cls.relname = $1`,
                    [name]
                )
                if (indexes[0]?.valid) continue
                if (indexes.length) await db.query(`DROP INDEX CONCURRENTLY "${name}"`)

                await db.query(
                    `CREATE INDEX CONCURRENTLY "${name}" ON "${table}"
                     ((("mint_rate_limit" #>> '{mintBlockedUntil}')::bigint), "id")
                     WHERE ("mint_rate_limit" #>> '{mintBlockedUntil}') IS NOT NULL`
                )
            }
        } finally {
            await db.query(`SELECT set_config('statement_timeout', $1, false)`, [statementTimeout])
        }
    }

    async down(db) {
        for (const [, name] of targets) {
            await db.query(`DROP INDEX CONCURRENTLY IF EXISTS "${name}"`)
        }
    }
}
