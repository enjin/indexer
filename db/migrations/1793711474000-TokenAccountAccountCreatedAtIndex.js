module.exports = class TokenAccountAccountCreatedAtIndex1793711474000 {
    name = 'TokenAccountAccountCreatedAtIndex1793711474000'
    transaction = false

    async up(db) {
        const [{ statement_timeout: statementTimeout }] = await db.query(`SHOW statement_timeout`)
        await db.query(`SELECT set_config('statement_timeout', '0', false)`)

        try {
            // Serves an account's token accounts newest first (profile owned assets) without sorting every row.
            await this.ensureIndex(
                db,
                'token_account_account_created_at_idx',
                `CREATE INDEX CONCURRENTLY "token_account_account_created_at_idx" ON "token_account" ("account_id", "created_at", "id")`
            )
        } finally {
            await db.query(`SELECT set_config('statement_timeout', $1, false)`, [statementTimeout])
        }
    }

    async down(db) {
        const [{ statement_timeout: statementTimeout }] = await db.query(`SHOW statement_timeout`)
        await db.query(`SELECT set_config('statement_timeout', '0', false)`)

        try {
            await db.query(`DROP INDEX CONCURRENTLY IF EXISTS "token_account_account_created_at_idx"`)
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
