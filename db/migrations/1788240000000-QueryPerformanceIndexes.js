module.exports = class QueryPerformanceIndexes1788240000000 {
    name = 'QueryPerformanceIndexes1788240000000'
    transaction = false

    async up(db) {
        const [{ statement_timeout: statementTimeout }] = await db.query(`SHOW statement_timeout`)
        await db.query(`SELECT set_config('statement_timeout', '0', false)`)

        try {
            // Supports EventData attribute filters such as CollectionsUriQuery without scanning every event.
            await this.ensureIndex(
                db,
                'event_data_attribute_lookup_idx',
                `CREATE INDEX CONCURRENTLY "event_data_attribute_lookup_idx" ON "event" ((data->>'isTypeOf'), (data->>'key'), (data->'tokenId')) INCLUDE ("extrinsic_id")`
            )

            // Supports participants_containsAny, which PostgreSQL compiles to the array-overlap operator (&&).
            await this.ensureIndex(
                db,
                'extrinsic_participants_gin_idx',
                `CREATE INDEX CONCURRENTLY "extrinsic_participants_gin_idx" ON "extrinsic" USING GIN ("participants")`
            )

            // Makes event-name relation counts index-only on the Event side of AccountTokenEvent queries.
            await this.ensureIndex(
                db,
                'event_name_id_idx',
                `CREATE INDEX CONCURRENTLY "event_name_id_idx" ON "event" ("name", "id")`
            )

            // Supports both ENJ balance metrics while covering the IDs/addresses consumed by their aggregates.
            await this.ensureIndex(
                db,
                'account_free_balance_idx',
                `CREATE INDEX CONCURRENTLY "account_free_balance_idx" ON "account" ((("balance"->>'free')::numeric)) INCLUDE ("id", "address")`
            )

            // Zero-balance token accounts do not contribute to either holder metric.
            await this.ensureIndex(
                db,
                'token_account_positive_holder_idx',
                `CREATE INDEX CONCURRENTLY "token_account_positive_holder_idx" ON "token_account" ("account_id") WHERE "total_balance" > 0 AND "account_id" IS NOT NULL`
            )
        } finally {
            await db.query(`SELECT set_config('statement_timeout', $1, false)`, [statementTimeout])
        }
    }

    async down(db) {
        const [{ statement_timeout: statementTimeout }] = await db.query(`SHOW statement_timeout`)
        await db.query(`SELECT set_config('statement_timeout', '0', false)`)

        try {
            await db.query(`DROP INDEX CONCURRENTLY IF EXISTS "token_account_positive_holder_idx"`)
            await db.query(`DROP INDEX CONCURRENTLY IF EXISTS "account_free_balance_idx"`)
            await db.query(`DROP INDEX CONCURRENTLY IF EXISTS "event_name_id_idx"`)
            await db.query(`DROP INDEX CONCURRENTLY IF EXISTS "extrinsic_participants_gin_idx"`)
            await db.query(`DROP INDEX CONCURRENTLY IF EXISTS "event_data_attribute_lookup_idx"`)
        } finally {
            await db.query(`SELECT set_config('statement_timeout', $1, false)`, [statementTimeout])
        }
    }

    async ensureIndex(db, name, createSql) {
        const indexes = await db.query(
            `SELECT idx.indisvalid AS valid
             FROM pg_catalog.pg_index idx
             INNER JOIN pg_catalog.pg_class cls ON cls.oid = idx.indexrelid
             INNER JOIN pg_catalog.pg_namespace ns ON ns.oid = cls.relnamespace
             WHERE ns.nspname = current_schema() AND cls.relname = $1`,
            [name]
        )

        if (indexes[0]?.valid) {
            return
        }

        if (indexes.length > 0) {
            await db.query(`DROP INDEX CONCURRENTLY "${name}"`)
        }

        await db.query(createSql)
    }
}
